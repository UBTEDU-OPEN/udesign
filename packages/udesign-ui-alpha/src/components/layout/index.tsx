import { Layout as InternalLayout, BasicProps, Content, Footer, Header, Sider } from './layout';

export type { BasicProps as LayoutProps } from './layout';

interface CompoundedComponent extends React.FC<BasicProps> {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
}

export const Layout = InternalLayout as CompoundedComponent;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;
