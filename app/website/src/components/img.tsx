import React from 'react';
import { useRouter } from 'next/router';

export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const Img = ({ src, ...restProps }: ImgProps) => {
  const router = useRouter();
  return <img src={`${router.basePath}${src}`} {...restProps} />;
};
