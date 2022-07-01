import React, { useState } from 'react';
import { Space, Button, Modal, Input } from '@ubt/udesign-ui';
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

  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: '搜索结果',
      icon: null,
      content: '附近没有机器人',
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
      <Demo.Page title='Modal 对话框' description='模态对话框。' todo='当前没有规划全屏Modal'>
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
        <Demo.Block title='其他尺寸' description='通过 size 使用内置的尺寸，或者直接设置 width'>
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
            <Modal visible={visible4} title='对话框标题' onCancel={() => setVisible4(false)} onOk={() => setVisible4(false)} okButtonProps={{ size: 'small', warning: true, disabled: true }} cancelButtonProps={{ size: 'small', disabled: true }}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义对话框的样式' description='通过设置 maskStyle 自定义遮罩样式，及 bodyStyle 自定义对话框内容样式。'>
          <Space>
            <Button type='primary' onClick={() => setVisible5(true)}>
              自定义对话框的样式
            </Button>
            <Modal visible={visible5} title='对话框标题' onCancel={() => setVisible5(false)} onOk={() => setVisible5(false)} bodyStyle={{ overflow: 'auto', height: 200, textAlign: 'left' }}>
              对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义对话框头部和页脚' description='如果需要实现更丰富的个性化需求，可以通过 header 自定义头部，footer 自定义页脚的按钮。把 header 设为 null时则不展示头部区域；不需要显示任何按钮时，同样可以把 footer 设为 null。'>
          <Space>
            <Button type='primary' onClick={() => setVisible6(true)}>
              自定义对话框头部和页脚
            </Button>
            <Modal
              visible={visible6}
              onCancel={() => setVisible6(false)}
              onOk={() => setVisible6(false)}
              header={null}
              footer={
                <Space className='my-10' direction='vertical' size={10}>
                  <Button block type='primary' onClick={() => setVisible6(false)}>
                    下一步
                  </Button>
                  <Button block type='text' onClick={() => setVisible6(false)}>
                    忘记密码
                  </Button>
                </Space>
              }
            >
              <h3 style={{ color: 'var(--ud-color-text-0)', fontSize: 24, margin: 40 }}>登录/注册</h3>
              <Input />
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
