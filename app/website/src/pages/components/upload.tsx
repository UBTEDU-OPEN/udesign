import React, { useState } from 'react';
import { Upload, Button } from '@ubt/udesign-ui';
import { UploadFilled, LoadingOutlined, PlusOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { Img } from '../../components';
import { getLayout } from '../../demo/getLayout';

export default function UploadPage() {
  const [fileList, setFileList] = useState<any[]>([]);
  const [fileList1, setFileList1] = useState<any[]>([]);
  const [multipleFileList, setMultipleFileList] = useState<any[]>([]);
  const [imgUrl, setImgUrl] = useState<string>('');
  const [pictures, setPicture] = useState<string[]>([]);
  const [directoryList, setDirectoryList] = useState<any[]>([]);
  const getBase64 = (file: any, callback: (url: string) => void) => {
    const img = new Blob([file], { type: 'video/mp4' });
    const reader = new FileReader();
    reader.addEventListener('load', (ev: any) => {
      callback(ev.target.result as string);
    });
    reader.readAsDataURL(img);
  };

  return (
    <div>
      <Demo.Page title='Upload 上传' description='文件选择上传和拖拽上传控件。'>
        <Demo.Block title='何时使用' description={<>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</>}></Demo.Block>
        <Demo.Block title='基础用法'>
          <React.Fragment>
            <Upload
              onChange={(event: any) => {
                setFileList(event.target.files);
              }}
            >
              <Button type='primary' icon={<UploadFilled />}>
                上传
              </Button>
            </Upload>
            <div>
              {[...fileList].map((item: any) => (
                <div key={item.name} className='flex mt-2.5' style={{ color: '#7586FB' }}>
                  <div className='mr-2.5 flex justify-center items-center' style={{ fontSize: '22px', color: '#6a7078' }}>
                    <LoadingOutlined spin />
                  </div>
                  <div className='h-8 leading-8 text-sm underline'>{item.name}</div>
                </div>
              ))}
            </div>
          </React.Fragment>
        </Demo.Block>
        <Demo.Block title='同时选择多个文件'>
          <Upload
            onChange={(event: any) => {
              setMultipleFileList(event.target.files);
            }}
            multiple
          >
            <Button type='primary' icon={<UploadFilled />}>
              上传
            </Button>
          </Upload>
          <div>
            {[...multipleFileList].map((item: any) => (
              <div key={item.name} className='flex mt-2.5' style={{ color: '#7586FB' }}>
                <div className='mr-2.5 flex justify-center items-center' style={{ fontSize: '22px', color: '#6a7078' }}>
                  <LoadingOutlined spin />
                </div>
                <div className='h-8 leading-8 text-sm underline'>{item.name}</div>
              </div>
            ))}
          </div>
        </Demo.Block>
        <Demo.Block title='单张图片上传'>
          <Upload
            accept='image/*'
            onChange={(event: any) => {
              getBase64(event.target.files[0], (url: string) => {
                setImgUrl(url);
              });
            }}
          >
            <div className='w-40 h-40 rounded-xl' style={{ background: '#F4F4F6' }}>
              {imgUrl ? (
                <React.Fragment>
                  <Img src={imgUrl} alt='' className='w-40 h-40 rounded-xl' />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className='flex px-0 pt-14 pb-2.5 justify-center text-3xl'>
                    <PlusOutlined />
                  </div>
                  <div style={{ color: '#6A7078' }} className='text-base text-center'>
                    上传图片
                  </div>
                </React.Fragment>
              )}
            </div>
          </Upload>
        </Demo.Block>
        <Demo.Block title='多张图片上传'>
          <div className='flex flex-1'>
            {[...pictures].map((item: any, index: number) => (
              <div className='mb-2.5 mr-2.5' key={item.name}>
                <Img src={pictures[index]} alt='' className='w-40 h-40 rounded-xl' />
              </div>
            ))}
            <Upload
              accept='image/*'
              onChange={(event: any) => {
                getBase64(event.target.files[0], (url: string) => {
                  setPicture([...pictures, url]);
                });
              }}
            >
              <div className='w-40 h-40 rounded-xl' style={{ background: '#F4F4F6' }}>
                <div className='flex px-0 pt-14 pb-2.5 justify-center text-3xl'>
                  <PlusOutlined />
                </div>
                <div style={{ color: '#6A7078' }} className='text-base text-center'>
                  上传图片
                </div>
              </div>
            </Upload>
          </div>
        </Demo.Block>
        <Demo.Block title='指定格式内容上传'>
          <Upload
            accept='.xls,.xlsx,.csv'
            onChange={(event: any) => {
              setFileList1(event.target.files);
            }}
          >
            <Button type='primary' icon={<UploadFilled />}>
              上传
            </Button>
          </Upload>
          <div>
            {[...fileList1].map((item: any) => (
              <div key={item.name} className='flex mt-2.5' style={{ color: '#7586FB' }}>
                <div className='mr-2.5 flex justify-center items-center' style={{ fontSize: '22px', color: '#6a7078' }}>
                  <LoadingOutlined spin />
                </div>
                <div className='h-8 leading-8 text-sm underline'>{item.name}</div>
              </div>
            ))}
          </div>
        </Demo.Block>
        <Demo.Block title='上传文件夹'>
          <Upload
            onChange={(event: any) => {
              console.log(event.target.files);
              setDirectoryList(event.target.files);
            }}
            webkitdirectory
          >
            <Button type='primary' icon={<UploadFilled />}>
              上传
            </Button>
          </Upload>
          <div>
            {[...directoryList].map((item: any) => (
              <div key={item.name} className='flex mt-2.5' style={{ color: '#7586FB' }}>
                <div className='mr-2.5 flex justify-center items-center' style={{ fontSize: '22px', color: '#6a7078' }}>
                  <LoadingOutlined spin />
                </div>
                <div className='h-8 leading-8 text-sm underline'>{item.name}</div>
              </div>
            ))}
          </div>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}

UploadPage.getLayout = getLayout;
