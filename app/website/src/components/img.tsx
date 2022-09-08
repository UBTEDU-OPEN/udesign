import React from 'react';

export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const Img = ({ src, ...restProps }: ImgProps) => <img src={process.env.UDESIGN_BASE_PATH ? `${process.env.UDESIGN_BASE_PATH}${src}` : src} {...restProps} />;
