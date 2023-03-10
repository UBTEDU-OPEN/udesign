import React, { ChangeEvent, useEffect, useRef } from 'react';
import { NativeProps } from '../../utils';

export type UploadProps = {
  accept?: string; // 接受上传的文件类型。默认值：-
  multiple?: boolean; // 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。默认值：false
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // 文件上传改变时回调。默认值：-
  webkitdirectory?: boolean; // 是否可以选择目录 选择目录时不可选择文件。默认值：false
} & NativeProps;

export const Upload = (props: UploadProps) => {
  const { accept, multiple, onChange, children, webkitdirectory } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const onInnerChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  const handleClick = () => {
    const el: HTMLInputElement | null = inputRef?.current;
    el?.click?.();
  };

  useEffect(() => {
    webkitdirectory && inputRef.current?.setAttribute('webkitdirectory', '');
  }, []);

  return (
    <div>
      <div onClick={handleClick}>{children}</div>
      <input
        type='file'
        ref={inputRef}
        onClick={(e) => {
          (e.target as HTMLInputElement).value = '';
          e.stopPropagation();
        }}
        style={{ display: 'none' }}
        accept={accept}
        multiple={multiple}
        onChange={onInnerChange}
      />
    </div>
  );
};

Upload.displayName = 'Upload';
