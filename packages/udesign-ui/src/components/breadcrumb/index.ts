import "./breadcrumb.scss";
import { attachPropertiesToComponent } from "../../utils";
import { Breadcrumb as InnerBreadcrumb } from "./breadcrumb";
export type { BreadcrumbProps } from "./breadcrumb";

import { Item } from "./item";
export const Breadcrumb = attachPropertiesToComponent(InnerBreadcrumb, {
  Item,
});
