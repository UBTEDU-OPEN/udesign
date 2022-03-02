import React from 'react';

export function toArray(children: React.ReactNode): React.ReactElement[] {
  let ret: React.ReactElement[] = [];
  React.Children.forEach(children, (child: any) => {
    ret.push(child);
  });

  return ret;
}
