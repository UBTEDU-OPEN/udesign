import React from 'react';

export function toArray(children: React.ReactNode): React.ReactElement[] {
  const ret: React.ReactElement[] = [];
  React.Children.forEach(children, (child: any) => {
    if (!React.isValidElement(child)) return;
    ret.push(child);
  });

  return ret;
}
