import React from 'react';
import ReactDOM from 'react-dom';

export class PortalWrapper<T extends React.FC<any> | React.Component<any, any, any>> {
  private rootDiv?: HTMLDivElement;

  private visible = false;

  private _component: T;

  private _getContainer?: () => HTMLElement;

  constructor(component: T, getContainer?: () => HTMLElement) {
    this._getContainer = getContainer;
    this._component = component;
  }

  private _create(props: any) {
    this.visible = true;
    this.rootDiv = document.createElement('div');
    const container = this._getContainer?.() || document.body;
    this._render(props);
    container.appendChild(this.rootDiv);
  }

  private _render(props: any) {
    if (this.rootDiv) {
      const element = React.createElement(this._component as React.FC, props, null);
      ReactDOM.render(ReactDOM.createPortal(element, this.rootDiv), this.rootDiv);
    }
  }

  show(props: any) {
    if (!this.rootDiv) {
      this._create(props);
    } else {
      this._render(props);
    }
  }

  close() {
    if (this.visible && this.rootDiv) {
      ReactDOM.unmountComponentAtNode(this.rootDiv);
      this.rootDiv.remove();
      this.rootDiv = undefined;
      this.visible = true;
    }
  }
}
