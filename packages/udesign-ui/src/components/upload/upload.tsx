import React, { ChangeEvent } from 'react';
import { NativeProps } from '../../utils';

export type UploadProps = {
  accept?: string; // 接受上传的文件类型
  multiple?: boolean; // 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // 文件上传改变时回调
  webkitdirectory?: boolean; // 是否可以选择目录 选择目录时不可选择文件
  forwardRef?: ((instance: any) => void) | React.MutableRefObject<any> | null;
} & NativeProps;

export const Upload = (props: UploadProps) => {
  const { accept, multiple, onChange, children, webkitdirectory } = props;

  const onInnerChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <div>
      {children}
      {webkitdirectory ? (
        <input
          type='file'
          ref={props.forwardRef}
          onClick={(e) => {
            (e.target as HTMLInputElement).value = '';
            e.stopPropagation();
          }}
          style={{ display: 'none' }}
          accept={accept}
          multiple={multiple}
          onChange={onInnerChange}
          webkitdirectory=''
        />
      ) : (
        <input
          type='file'
          ref={props.forwardRef}
          onClick={(e) => {
            (e.target as HTMLInputElement).value = '';
            e.stopPropagation();
          }}
          style={{ display: 'none' }}
          accept={accept}
          multiple={multiple}
          onChange={onInnerChange}
        />
      )}
    </div>
  );
};
export const ForwardUpload = React.forwardRef<HTMLInputElement, Omit<UploadProps, 'forwardRef'>>((props, ref) => <Upload {...props} forwardRef={ref} />);

ForwardUpload.displayName = 'Upload';
