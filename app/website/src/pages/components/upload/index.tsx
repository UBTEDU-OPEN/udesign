import React, { useState, useRef } from 'react';
import { Upload } from '@ubt/udesign-ui';
import { UploadFilled, LoadingOutlined, PlusOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../../demo';
import styles from './index.module.scss';

export default function TablePage() {
  const [fileList, setFileList] = useState<any[]>([]);
  const [fileList1, setFileList1] = useState<any[]>([]);
  const [multipleFileList, setMultipleFileList] = useState<any[]>([]);
  const [multiplePictureList, setMultiplePictureList] = useState<any[]>([]);
  const [imgUrl, setImgUrl] = useState<string>('');
  const [pictures, setPicture] = useState<string[]>([]);
  const [directoryList, setDirectoryList] = useState<any[]>([]);
  // const [dropFileList, setDropFileList] = useState<any[]>([]);
  const inputRef = useRef(null);
  const inputSinglePictureRef = useRef(null);
  const inputMultiPictureRef = useRef(null);
  const inputMultRef = useRef(null);
  const inputAcceptRef = useRef(null);
  const inputDirectoryRef = useRef(null);
  // const inputDragRef = useRef(null);
  const getBase64 = (file: any, callback: (url: string) => void) => {
    const img = new Blob([file], { type: 'video/mp4' });
    const reader = new FileReader();
    reader.addEventListener('load', (ev: any) => {
      callback(ev.target.result as string);
    });
    reader.readAsDataURL(img);
  };
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };
  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   var files = e.dataTransfer.files;
  //   setDropFileList(files);
  // };

  return (
    <div className={styles['upload-root']}>
      <Demo.Page title='Upload 上传' description='文件选择上传和拖拽上传控件。'>
        <Demo.Block title='何时使用' description={<>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</>}></Demo.Block>
        <Demo.Block title='基础用法'>
          <Upload
            onChange={(event: any) => {
              setFileList(event.target.files);
            }}
            ref={inputRef}
          >
            <div
              className='upload-button-box'
              onClick={() => {
                const el: HTMLInputElement | null = inputRef?.current;
                el?.click?.();
              }}
            >
              <span className='upload-button-icon'>
                <UploadFilled />
              </span>
              <span>上传</span>
            </div>
            <div className='upload-list-wrapper'>
              {[...fileList].map((item: any) => (
                <div key={item.name} className='upload-loading-box'>
                  <div className='upload-loading'>
                    <LoadingOutlined spin />
                  </div>
                  <div className='upload-name'>{item.name}</div>
                </div>
              ))}
            </div>
          </Upload>
        </Demo.Block>
        <Demo.Block title='同时选择多个文件'>
          <Upload
            onChange={(event: any) => {
              setMultipleFileList(event.target.files);
            }}
            ref={inputMultRef}
            multiple
          >
            <div
              className='upload-button-box'
              onClick={() => {
                const el: HTMLInputElement | null = inputMultRef?.current;
                el?.click?.();
              }}
            >
              <span className='upload-button-icon'>
                <UploadFilled />
              </span>
              <span>上传</span>
            </div>
            <div className='upload-list-wrapper'>
              {[...multipleFileList].map((item: any) => (
                <div key={item.name} className='upload-loading-box'>
                  <div className='upload-loading'>
                    <LoadingOutlined spin />
                  </div>
                  <div className='upload-name'>{item.name}</div>
                </div>
              ))}
            </div>
          </Upload>
        </Demo.Block>
        <Demo.Block title='单张图片上传'>
          <Upload
            onChange={(event: any) => {
              getBase64(event.target.files[0], (url: string) => {
                setImgUrl(url);
              });
            }}
            ref={inputSinglePictureRef}
          >
            <div
              className='upload-single-picture'
              onClick={() => {
                const el: HTMLInputElement | null = inputSinglePictureRef?.current;
                el?.click?.();
              }}
            >
              {imgUrl ? (
                <React.Fragment>
                  <img src={imgUrl} alt='' style={{ width: '160px', height: '160px', borderRadius: '12px' }} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className='upload-button-icon' style={{ padding: '57px 0 10px', fontSize: '30px', display: 'flex', justifyContent: 'center' }}>
                    <PlusOutlined />
                  </div>
                  <div style={{ color: '#6A7078', fontSize: '16px', textAlign: 'center' }}>上传图片</div>
                </React.Fragment>
              )}
            </div>
          </Upload>
        </Demo.Block>
        <Demo.Block title='多张图片上传'>
          <Upload
            onChange={(event: any) => {
              setMultiplePictureList([...multipleFileList, ...event.target.files]);
              getBase64(event.target.files[0], (url: string) => {
                setPicture([...pictures, url]);
              });
            }}
            ref={inputMultiPictureRef}
          >
            <div className='upload-multiple-wrapper'>
              {[...pictures].map((item: any, index: number) => (
                <div className='upload-multiple-picture' key={item.name}>
                  <img src={pictures[index]} alt='' style={{ width: '160px', height: '160px', borderRadius: '12px' }} />
                </div>
              ))}
              <div
                className='upload-multiple-picture'
                onClick={() => {
                  const el: HTMLInputElement | null = inputMultiPictureRef?.current;
                  el?.click?.();
                }}
              >
                <div className='upload-button-icon' style={{ padding: '57px 0 10px', fontSize: '30px', display: 'flex', justifyContent: 'center' }}>
                  <PlusOutlined />
                </div>
                <div style={{ color: '#6A7078', fontSize: '16px', textAlign: 'center' }}>上传图片</div>
              </div>
            </div>
          </Upload>
        </Demo.Block>
        <Demo.Block title='指定格式内容上传'>
          <Upload
            accept='.xls,.xlsx,.csv'
            onChange={(event: any) => {
              setFileList1(event.target.files);
            }}
            ref={inputAcceptRef}
          >
            <div
              className='upload-button-box'
              onClick={() => {
                const el: HTMLInputElement | null = inputAcceptRef?.current;
                el?.click?.();
              }}
            >
              <span className='upload-button-icon'>
                <UploadFilled />
              </span>
              <span>上传</span>
            </div>
            <div className='upload-list-wrapper'>
              {[...fileList1].map((item: any) => (
                <div key={item.name} className='upload-loading-box'>
                  <div className='upload-loading'>
                    <LoadingOutlined spin />
                  </div>
                  <div className='upload-name'>{item.name}</div>
                </div>
              ))}
            </div>
          </Upload>
        </Demo.Block>
        <Demo.Block title='上传文件夹'>
          <Upload
            onChange={(event: any) => {
              console.log(event.target.files);
              setDirectoryList(event.target.files);
            }}
            ref={inputDirectoryRef}
            webkitdirectory
          >
            <div
              className='upload-button-box'
              onClick={() => {
                const el: HTMLInputElement | null = inputDirectoryRef?.current;
                el?.click?.();
              }}
            >
              <span className='upload-button-icon'>
                <UploadFilled />
              </span>
              <span>上传</span>
            </div>
            <div className='upload-list-wrapper'>
              {[...directoryList].map((item: any) => (
                <div key={item.name} className='upload-loading-box'>
                  <div className='upload-loading'>
                    <LoadingOutlined spin />
                  </div>
                  <div className='upload-name'>{item.name}</div>
                </div>
              ))}
            </div>
          </Upload>
        </Demo.Block>
        {/* <div>
          <div class="drop" droppable={true} onDrop={handleDrop} onDragOver={handleDragOver}>放置区域
          {
            [...dropFileList].map((file: any)=> {
              let url = window.URL.createObjectURL(file);
              return (
                <li class="list-group-item">
                  <div>
                    <img src={url} alt="文件" />
                  </div>
                </li>
              )
            })
          }
          </div>
        </div> */}
      </Demo.Page>
    </div>
  );
}
