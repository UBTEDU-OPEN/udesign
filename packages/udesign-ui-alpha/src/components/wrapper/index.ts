import React from 'react';
import ReactDOM from 'react-dom';
// import { ExtractPropType } from '../../interface';
// import { ElementWrapperComponent } from './component';

// type WrapperProp<T extends React.FC<any> | React.Component<any, any, any>> = {
//   childrenProps?: ExtractPropType<T>;
// };

// type WrapperPropsType<
//   T extends React.FC<any> | React.Component<any, any, any>
// > = ExtractPropType<T>;

export class ElementWrapper<T extends React.FC<any> | React.Component<any, any, any>> {
  private rootDiv?: HTMLDivElement;

  private visible = false;

  private _component: T;

  constructor(component: T) {
    this._component = component;
  }

  private _create(props: any) {
    this.visible = true;
    this.rootDiv = document.createElement('div');
    this._render(props);
    document.body.appendChild(this.rootDiv);
  }

  private _render(props: any) {
    if (this.rootDiv) {
      // const element = React.createElement(
      //   ElementWrapperComponent,
      //   {},
      //   React.createElement(this._component as React.FC, props, null)
      // );
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
