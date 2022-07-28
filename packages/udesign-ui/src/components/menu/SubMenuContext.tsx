import { createContext } from 'react';

export type SubMenuContextProps = {
  name?: string;
};

export default createContext<SubMenuContextProps>({
  name: '',
});
