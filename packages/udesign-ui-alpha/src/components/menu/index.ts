import { attachPropertiesToComponent } from '../../utils';
import { Menu as InternalMenu } from './menu';
import { Footer } from './footer';
import { Header } from './header';
import { Item } from './item';
import { Submenu } from './submenu';

export type { MenuProps } from './menu';

export const Menu = attachPropertiesToComponent(InternalMenu, { Item, Header, Footer, Submenu });
