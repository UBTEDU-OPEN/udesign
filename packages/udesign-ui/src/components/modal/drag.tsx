import React from 'react';

export type DragProps = {
  updateTransform: (transformStr: string, tx: number, ty: number, target: HTMLElement) => void;
  children?: React.ReactNode;
};

export default class Drag extends React.Component<DragProps> {
  static defaultProps = {
    // 默认是移动children dom,覆盖该方法，可以把transform行为同步给外部
    updateTransform: (transformStr: string, tx: number, ty: number, target: HTMLElement) => {
      target.style.transform = transformStr;
    },
  };

  target: HTMLElement | null = null;

  dragX = 0;

  dragY = 0;

  position = {
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    tx: 0,
    ty: 0,
  };

  moveBoundary = (clientX: number, clientY: number) => {
    if (clientY <= 0 || clientY > this.dragY - 30 || clientX <= 30 || clientX > this.dragX - 30) return true;
    return false;
  };

  start = (event: MouseEvent) => {
    if (event.button !== 0) {
      // 只允许左键，右键问题在于不选择contextmenu就不会触发mouseup事件
      return;
    }
    document.addEventListener('mousemove', this.docMove);
    this.position.startX = event.pageX - this.position.dx;
    this.position.startY = event.pageY - this.position.dy;
  };

  docMove = (event: MouseEvent) => {
    if (this.moveBoundary(event.clientX, event.clientY)) return;
    const tx = event.pageX - this.position.startX;
    const ty = event.pageY - this.position.startY;
    const transformStr = `translate(${tx}px,${ty}px)`;
    this.props.updateTransform(transformStr, tx, ty, this.target as HTMLElement);
    this.position.dx = tx;
    this.position.dy = ty;
  };

  docMouseUp = (event: MouseEvent) => {
    document.removeEventListener('mousemove', this.docMove);
  };

  touchStart = (event: TouchEvent) => {
    event.stopPropagation();
    document.addEventListener('touchmove', this.touchDocMove, { passive: false });
    this.position.startX = event.changedTouches[0].pageX - this.position.dx;
    this.position.startY = event.changedTouches[0].pageY - this.position.dy;
  };

  touchDocMove = (event: TouchEvent) => {
    if (event.cancelable) event.preventDefault();
    if (this.moveBoundary(event.changedTouches[0].clientY, event.changedTouches[0].clientY)) return;
    const tx = event.changedTouches[0].pageX - this.position.startX;
    const ty = event.changedTouches[0].pageY - this.position.startY;
    const transformStr = `translate(${tx}px,${ty}px)`;
    this.props.updateTransform(transformStr, tx, ty, this.target as HTMLElement);
    this.position.dx = tx;
    this.position.dy = ty;
  };

  touchDocMouseUp = (event: TouchEvent) => {
    document.removeEventListener('touchmove', this.touchDocMove);
  };

  resize = () => {
    const rect = this.target?.parentElement?.getBoundingClientRect();

    this.dragX = window.innerWidth;
    this.dragY = window.innerHeight;

    if (!rect) return;

    if (rect.y < 0) {
      const y = rect.y;
      const transformStr = `translate(${this.position.dx}px,${this.position.dy - y}px)`;
      this.props.updateTransform(transformStr, this.position.dx, this.position.dy - y, this.target as HTMLElement);
      this.position.dy -= y;
      return;
    }

    if (rect.y + 30 > this.dragY) {
      const y = rect.y + 30 - this.dragY;
      const transformStr = `translate(${this.position.dx}px,${this.position.dy - y}px)`;
      this.props.updateTransform(transformStr, this.position.dx, this.position.dy - y, this.target as HTMLElement);
      this.position.dy -= y;
      return;
    }

    if (rect.x + rect.width - 30 < 0) {
      const x = rect.x + rect.width - 30;
      const transformStr = `translate(${this.position.dx - x}px,${this.position.dy}px)`;
      this.props.updateTransform(transformStr, this.position.dx - x, this.position.dy, this.target as HTMLElement);
      this.position.dx -= x;
      return;
    }

    if (rect.x + 30 > this.dragX) {
      const x = rect.x + 30 - this.dragX;
      const transformStr = `translate(${this.position.dx - x}px,${this.position.dy}px)`;
      this.props.updateTransform(transformStr, this.position.dx - x, this.position.dy, this.target as HTMLElement);
      this.position.dx -= x;
    }
  };

  componentDidMount() {
    this.target?.addEventListener('mousedown', this.start, false);
    this.target?.addEventListener('touchstart', this.touchStart);
    const rect = this.target?.parentElement?.getBoundingClientRect();
    if (rect) {
      this.position.dx = -(rect.width / 2);
      this.position.dy = -(rect?.height / 2);
    }

    // 用document移除对mousemove事件的监听
    document.addEventListener('mouseup', this.docMouseUp);
    document.addEventListener('touchend', this.touchDocMouseUp);
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    this.target?.removeEventListener('mousedown', this.start);
    this.target?.removeEventListener('touchstart', this.touchStart);

    document.removeEventListener('mouseup', this.docMouseUp);
    document.removeEventListener('mousemove', this.docMove);

    document.removeEventListener('touchend', this.touchDocMouseUp);
    document.removeEventListener('touchmove', this.touchDocMove);
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { children } = this.props;
    const newStyle = { cursor: 'move', userSelect: 'none' };
    return React.cloneElement(children as React.ReactElement, {
      ref: (target: HTMLElement) => {
        this.target = target;
      },
      style: newStyle,
    });
  }
}
