import React, { useState } from 'react';
import { Space, Button, Modal, Close } from '@ubt/udesign-ui';
import { Size } from '@ubt/udesign-constants';
import { Demo } from '../../demo';

export default function ModalPage() {
  const [size, setSize] = useState<Size>('small');
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);
  const [visible11, setVisible11] = useState(false);
  const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible14, setVisible14] = useState(false);

  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: '搜索结果',
      icon: null,
      content: '附近没有机器人',
      maskStyle: { background: 'rgba(0,0,0,.7)' },
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const showPromiseConfirm = () => {
    confirm({
      title: '连接wifi',
      icon: null,
      content: '正在搜索WiFi…',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
    });
  };

  const showDeleteConfirm = () => {
    confirm({
      title: '删除文件',
      icon: null,
      content: '确认删除文件后不能恢复',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const showInfoModal = () => {
    Modal.info({
      title: '这是一则提示信息',
      content: '这是一则提示信息，这是一则提示信息',
    });
  };

  const showSuccessModal = () => {
    Modal.success({
      title: '操作成功',
      content: '这是一则提示信息，这是一则提示信息',
    });
  };

  const showErrorModal = () => {
    Modal.error({
      title: '操作失败',
      content: '这是一则提示信息，这是一则提示信息',
    });
  };

  const showWarningModal = () => {
    Modal.warning({
      title: '这是一则警告信息',
      content: '这是一则警告信息，这是一则警告信息',
    });
  };

  const countDown = () => {
    let secondsToGo = 5;

    const modal = Modal.info({
      title: '关闭倒计时',
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: <div className='text-3xl'>{secondsToGo}</div>,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <>
      <Demo.Page title='Modal 对话框' description='模态对话框。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
              <br />
              另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 方法。
            </>
          }
        />
        <Demo.Block title='基础用法' description='默认的文本对话框。'>
          <Space>
            <Button type='primary' onClick={() => setVisible(true)}>
              Open Modal
            </Button>
            <Modal visible={visible} title='对话框标题' onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='其他尺寸' description='通过 size 使用内置的尺寸，或者直接设置 width 或 height。'>
          <Space wrap>
            <Button
              type='primary'
              onClick={() => {
                setSize('small');
                setVisible1(true);
              }}
            >
              Small Modal
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setSize('middle');
                setVisible1(true);
              }}
            >
              Middle Modal
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setSize('large');
                setVisible1(true);
              }}
            >
              Large Modal
            </Button>
            <Modal visible={visible1} size={size} title='对话框标题' onCancel={() => setVisible1(false)} onOk={() => setVisible1(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
            <Button type='primary' onClick={() => setVisible9(true)}>
              自定义宽度
            </Button>
            <Modal width={1000} visible={visible9} title='对话框标题' onCancel={() => setVisible9(false)} onOk={() => setVisible9(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
            <Button type='primary' onClick={() => setVisible11(true)}>
              自定义高度
            </Button>
            <Modal height={300} visible={visible11} title='对话框标题' onCancel={() => setVisible11(false)} onOk={() => setVisible11(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文 对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文 对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
            <Button type='primary' onClick={() => setVisible12(true)}>
              全屏（Beta版本）
            </Button>
            <Modal fullscreen visible={visible12} title='对话框标题' onCancel={() => setVisible12(false)} onOk={() => setVisible12(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='确认式对话框' description='使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。'>
          <Space wrap>
            <Button type='primary' onClick={showConfirm}>
              Confirm
            </Button>
            <Button type='primary' onClick={showPromiseConfirm}>
              With promise
            </Button>
            <Button type='primary' danger onClick={showDeleteConfirm}>
              Delete
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='命令式调用' description='命令式调用支持四种类型的信息提示方法，自带 icon。你也可以自定义 icon , 其他 Modal 支持的 props 都可以传入。'>
          <Space wrap>
            <Button type='primary' onClick={showInfoModal}>
              Info
            </Button>
            <Button type='primary' onClick={showSuccessModal}>
              Success
            </Button>
            <Button type='primary' onClick={showErrorModal}>
              Error
            </Button>
            <Button type='primary' onClick={showWarningModal}>
              Warning
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='手动更新和关闭' description='通过 update 方法更新、close 方法来关闭函数方式创建的对话框。'>
          <Button type='primary' onClick={countDown}>
            Open modal will close in 5s
          </Button>
        </Demo.Block>
        <Demo.Block title='点击遮罩层不可关闭' description='修改 maskClosable 为 false 则不可通过点击遮罩层来关闭对话框。'>
          <Space>
            <Button type='primary' onClick={() => setVisible2(true)}>
              点击遮罩层不可关闭
            </Button>
            <Modal visible={visible2} title='对话框标题' maskCloseable={false} onCancel={() => setVisible2(false)} onOk={() => setVisible2(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义按钮文字' description='通过设置 okText 与 cancelText 属性可自定义按钮显示的文字。'>
          <Space>
            <Button type='primary' onClick={() => setVisible3(true)}>
              自定义按钮文字
            </Button>
            <Modal visible={visible3} title='对话框标题' cancelText='不保存' okText='保存' onCancel={() => setVisible3(false)} onOk={() => setVisible3(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义按钮属性' description='通过设置 okButtonProps 与 cancelButtonProps 属性可自定义按钮的属性。'>
          <Space>
            <Button type='primary' onClick={() => setVisible4(true)}>
              自定义按钮属性
            </Button>
            <Modal visible={visible4} title='对话框标题' onCancel={() => setVisible4(false)} onOk={() => setVisible4(false)} okButtonProps={{ danger: true }} cancelButtonProps={{ type: 'text' }}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义对话框的样式' description='通过设置 maskStyle 自定义遮罩样式，及 bodyStyle 自定义对话框内容样式。'>
          <Space>
            <Button type='primary' onClick={() => setVisible5(true)}>
              自定义对话框的样式
            </Button>
            <Modal visible={visible5} title='对话框标题' onCancel={() => setVisible5(false)} onOk={() => setVisible5(false)} maskStyle={{ background: 'rgba(0,0,0,.7)' }} bodyStyle={{ textAlign: 'right' }}>
              一个意在统一所有教育产品设计风格的项目，包含设计规范、开发规范和开箱即用的 React 组件库。一个意在统一所有教育产品设计风格的项目，包含设计规范、开发规范和开箱即用的 React 组件库。
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义头部' description='如果需要实现更丰富的个性化需求，可以通过 header 自定义头部；把 header 设为 null 时，则不显示头部区域（包括关闭按钮区域）。'>
          <Space>
            <Button type='primary' onClick={() => setVisible14(true)}>
              自定义头部
            </Button>
            <Modal
              visible={visible14}
              onCancel={() => setVisible14(false)}
              onOk={() => setVisible14(false)}
              header={
                <div className='p-5'>
                  <div className='font-bold'>对话框标题</div>
                  <Close className='absolute top-2.5 right-2.5' onClick={() => setVisible14(false)} />
                </div>
              }
            >
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义页脚' description='更复杂的例子，通过 footer 自定义了页脚。不需要默认确定取消按钮时，你可以把 footer 设为 null。'>
          <Space>
            <Button type='primary' onClick={() => setVisible6(true)}>
              自定义页脚
            </Button>
            <Modal
              size='large'
              visible={visible6}
              title='对话框标题'
              onCancel={() => setVisible6(false)}
              onOk={() => setVisible6(false)}
              footer={
                <>
                  <Space className='p-10' justify='center'>
                    <Button onClick={() => setVisible6(false)}>自定义</Button>
                    <Button type='primary' onClick={() => setVisible6(false)}>
                      自定义
                    </Button>
                    <Button type='primary' onClick={() => setVisible6(false)}>
                      自定义
                    </Button>
                  </Space>
                </>
              }
            >
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='完全自定义' description='如果需要实现更丰富的个性化需求，可以把 header 和 footer 都设为 null 来完全自定义对话框。'>
          <Space>
            <Button type='primary' onClick={() => setVisible13(true)}>
              完全自定义
            </Button>
            <Modal visible={visible13} onCancel={() => setVisible13(false)} onOk={() => setVisible13(false)} header={null} footer={null}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义对话框位置' description='使用 centered 或类似 style.top 的样式（需要centered=false）来设置对话框位置。'>
          <Space>
            <Button type='primary' onClick={() => setVisible7(true)}>
              默认垂直居中
            </Button>
            <Modal visible={visible7} title='对话框标题' onCancel={() => setVisible7(false)} onOk={() => setVisible7(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
            <Button type='primary' onClick={() => setVisible8(true)}>
              20px to Top
            </Button>
            <Modal centered={false} style={{ top: '20px' }} visible={visible8} title='对话框标题' onCancel={() => setVisible8(false)} onOk={() => setVisible8(false)}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='图文对话框' description='对话框内容包含图片、文字，均支持自定义。'>
          <Space>
            <Button type='primary' onClick={() => setVisible10(true)}>
              图文对话框
            </Button>
            <Modal hasCancel={false} size='middle' visible={visible10} title='对话框标题' onCancel={() => setVisible10(false)} onOk={() => setVisible10(false)}>
              <img className='mx-auto' src='/demo.svg' alt='' />
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
