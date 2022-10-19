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

  position = {
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    tx: 0,
    ty: 0,
  };

  start = (event: MouseEvent) => {
    if (event.button !== 0) {
      // 只允许左键，右键问题在于不选择contextmenu就不会触发mouseup事件
      return;
    }
    this.target?.addEventListener('mousemove', this.docMove);
    this.position.startX = event.pageX - this.position.dx;
    this.position.startY = event.pageY - this.position.dy;
  };

  docMove = (event: MouseEvent) => {
    const tx = event.pageX - this.position.startX;
    const ty = event.pageY - this.position.startY;
    const transformStr = `translate(${tx}px,${ty}px)`;
    this.props.updateTransform(transformStr, tx, ty, this.target as HTMLElement);
    this.position.dx = tx;
    this.position.dy = ty;
  };

  docMouseUp = (event: MouseEvent) => {
    this.target?.removeEventListener('mousemove', this.docMove);
  };

  touchStart = (event: TouchEvent) => {
    event.preventDefault();
    this.target?.addEventListener('touchmove', this.touchDocMove);
    this.position.startX = event.targetTouches[0].pageX - this.position.dx;
    this.position.startY = event.targetTouches[0].pageY - this.position.dy;
  };

  touchDocMove = (event: TouchEvent) => {
    const tx = event.targetTouches[0].pageX - this.position.startX;
    const ty = event.targetTouches[0].pageY - this.position.startY;
    const transformStr = `translate(${tx}px,${ty}px)`;
    this.props.updateTransform(transformStr, tx, ty, this.target as HTMLElement);
    this.position.dx = tx;
    this.position.dy = ty;
  };

  touchDocMouseUp = (event: TouchEvent) => {
    this.target?.removeEventListener('touchmove', this.touchDocMove);
  };

  componentDidMount() {
    this.target?.addEventListener('mousedown', this.start);
    this.target?.addEventListener('touchstart', this.touchStart);
    const rect = this.target?.parentElement?.parentElement?.getBoundingClientRect();
    if (rect) {
      this.position.dx = -(rect.width / 2);
      this.position.dy = -(rect.height / 2);
    }
    // 用this.target?移除对mousemove事件的监听
    this.target?.addEventListener('mouseup', this.docMouseUp);
    this.target?.addEventListener('touchend', this.touchDocMouseUp);
  }

  componentWillUnmount() {
    this.target?.removeEventListener('mousedown', this.start);
    this.target?.removeEventListener('touchstart', this.touchStart);
    this.target?.removeEventListener('mouseup', this.docMouseUp);
    this.target?.removeEventListener('mousemove', this.docMove);

    this.target?.removeEventListener('touchend', this.touchDocMouseUp);
    this.target?.removeEventListener('touchmove', this.touchDocMove);
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
