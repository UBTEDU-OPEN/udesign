import React, { Component } from 'react';
import LocaleContext from './context';
import { ConfigContext } from '../config-provider';
import DefaultLocale from './source/zh_CN';
import { Locale } from './interface';

type ChildrenRender<T> = (componentLocal: T, localeCode: string) => React.ReactNode;

export interface LocaleConsumerProps<T> {
  componentName: string;
  children?: ChildrenRender<T>;
}

export default class LocaleConsumer<T> extends Component<LocaleConsumerProps<T>> {
  static defaultProps = {
    componentName: '',
  };

  renderChildren(localeData: Locale, children: ChildrenRender<T>) {
    const { componentName } = this.props;
    let locale = localeData;
    if (!localeData?.code) {
      locale = DefaultLocale;
    }

    return children(locale[componentName], locale.code);
  }

  render() {
    const { children } = this.props;
    return <ConfigContext.Consumer>{({ locale }) => <LocaleContext.Consumer>{(localeData) => this.renderChildren(locale || localeData, children!)}</LocaleContext.Consumer>}</ConfigContext.Consumer>;
  }
}
