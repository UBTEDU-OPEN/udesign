/* eslint-disable react/prop-types */
import React from 'react';

type DragMProps = {
  updateTransform: (transformStr: string, tx: number, ty: number, tdom: HTMLElement) => void;
  // tdom: HTMLElement;
  children?: React.ReactNode;
};

export default class DragM extends React.Component<DragMProps> {
  static defaultProps = {
    // 默认是移动children dom,覆盖该方法，可以把tranform行为同步给外部
    updateTransform: (transformStr: string, tx: number, ty: number, tdom: HTMLElement) => {
      tdom.style.transform = transformStr;
    },
  };

  // state = {
  tdom: HTMLElement | null = null;
  // }

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
      // 只允许左键，右键问题在于不选择conextmenu就不会触发mouseup事件
      return;
    }
    document.addEventListener('mousemove', this.docMove);
    this.position.startX = event.pageX - this.position.dx;
    this.position.startY = event.pageY - this.position.dy;
  };

  docMove = (event: MouseEvent) => {
    const tx = event.pageX - this.position.startX;
    const ty = event.pageY - this.position.startY;
    const transformStr = `translate(${tx}px,${ty}px)`;
    this.props.updateTransform(transformStr, tx, ty, this.tdom as HTMLElement);
    this.position.dx = tx;
    this.position.dy = ty;
  };

  docMouseUp = (event: MouseEvent) => {
    document.removeEventListener('mousemove', this.docMove);
  };

  componentDidMount() {
    this.tdom?.addEventListener('mousedown', this.start);
    const rect = this.tdom?.parentElement?.getBoundingClientRect();
    console.log(rect);
    if (rect) {
      this.position.dx = -(rect.width / 2);
      this.position.dy = -(rect?.height / 2);
    }
    // 用document移除对mousemove事件的监听
    document.addEventListener('mouseup', this.docMouseUp);
  }

  componentWillUnmount() {
    this.tdom?.removeEventListener('mousedown', this.start);
    document.removeEventListener('mouseup', this.docMouseUp);
    document.removeEventListener('mousemove', this.docMove);
  }

  render() {
    const { children } = this.props;
    const newStyle = { cursor: 'move', userSelect: 'none' };
    return React.cloneElement(children as React.ReactElement, {
      ref: (tdom: HTMLElement) => {
        this.tdom = tdom;
      },
      style: newStyle,
    });
  }
}
