import { Item } from './item';
import { List as InternalList, ListProps } from './list';

interface CompoundedComponent extends React.FC<ListProps> {
  Item: typeof Item;
}

export const List = InternalList as CompoundedComponent;
List.Item = Item;
