import React from 'react';

export type DropdownContextProps = {
  onClick?: (name: string) => void;
};

const DropdownContext = React.createContext<DropdownContextProps>({});

export default DropdownContext;
