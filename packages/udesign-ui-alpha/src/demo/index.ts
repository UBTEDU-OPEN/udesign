import React from 'react';
import { Doc } from './doc';
import { Page } from './page';
import { Block } from './block';

type DemoProps = {};

const InternalDemo = ({}: DemoProps) => {};

interface CompoundedComponent extends React.FC<DemoProps> {
  Doc: typeof Doc;
  Page: typeof Page;
  Block: typeof Block;
}

export const Demo = InternalDemo as CompoundedComponent;
Demo.Doc = Doc;
Demo.Page = Page;
Demo.Block = Block;
