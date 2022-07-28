import React from 'react';
import { Row, Col, Typography, Divider } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function GridPage() {
  return (
    <Demo.Page title='Grid 栅格' description='24 栅格系统。'>
      <Demo.Block
        title='设计理念'
        description={
          <>
            我们将整个设计建议区域按照 24 等分的原则进行划分。
            <br />
            <br />
            划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。
            <br />
            <br />
            <img src='/grid.svg' />
          </>
        }
      />
      <Demo.Block
        title='概述'
        description={
          <>
            <Typography.Text strong>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</Typography.Text>
            <br />
            <span>
              *通过 row 在水平方向建立一组 column（简写 col）。
              <br />
              *你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素。
              <br />
              {' *栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用<Col span={8}>来创建。'}
              <br />
              *如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列。
            </span>
            <br />
            <br />
            <Typography.Text strong>
              我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。
            </Typography.Text>
            <br />
            <Typography.Text strong>布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</Typography.Text>
          </>
        }
      ></Demo.Block>

      <Demo.Block
        title='基础栅格'
        description={
          <>
            从堆叠到水平排列。
            <br />
            使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
          </>
        }
      >
        <Row className='mb-4 text-center text-white'>
          <Col className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }} span={24}>
            col 123
          </Col>
        </Row>
        <Row className='mb-4 text-center text-white'>
          <Col className='py-4 px-0' span={12} style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-12
          </Col>
          <Col className='py-4 px-0' span={12} style={{ background: 'rgb(114, 132, 251)' }}>
            col-12
          </Col>
        </Row>
        <Row className='mb-4 text-center text-white'>
          <Col className='py-4 px-0' span={8} style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-8
          </Col>
          <Col className='py-4 px-0' span={8} style={{ background: 'rgb(114, 132, 251)' }}>
            col-8
          </Col>
          <Col className='py-4 px-0' span={8} style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-8
          </Col>
        </Row>
        <Row className='text-center text-white'>
          <Col className='py-4 px-0' span={6} style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-6
          </Col>
          <Col className='py-4 px-0' span={6} style={{ background: 'rgb(114, 132, 251)' }}>
            col-6
          </Col>
          <Col className='py-4 px-0' span={6} style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-6
          </Col>
          <Col className='py-4 px-0' span={6} style={{ background: 'rgb(114, 132, 251)' }}>
            col-6
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block
        title='区块间隔'
        description={
          <>
            栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性
            <br />
            如果要支持响应式，可以写成<Typography.Text code>{JSON.stringify({ xs: 8, sm: 16, md: 24, lg: 32, xl: 40, xxl: 48 })}</Typography.Text>
          </>
        }
      >
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Horizontal
        </Divider>
        <Row gutter={[16, 16]} className='text-center text-white'>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Responsive
        </Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40, xxl: 48 }} className='text-center text-white'>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Vertical
        </Divider>
        <Row gutter={[16, 16]} className='text-center text-white'>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
          <Col span={6} className='gutter-row'>
            <div style={{ background: 'rgba(114, 132, 251, 0.50)', padding: '1rem 0' }}>col-6</div>
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block
        title='左右偏移'
        description={
          <>
            列偏移。
            <br />
            使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。
          </>
        }
      >
        <Row className='mb-4 text-center text-white'>
          <Col className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }} span={8}>
            col-8
          </Col>
          <Col className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }} span={8} offset={8}>
            col-8
          </Col>
        </Row>
        <Row className='mb-4 text-center text-white'>
          <Col className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }} span={6} offset={6}>
            col-6 col-offset-6
          </Col>
          <Col className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }} span={6} offset={6}>
            col-6 col-offset-6
          </Col>
        </Row>
        <Row className='mb-4 text-center text-white'>
          <Col className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }} span={12} offset={6}>
            col-12 col-offset-6
          </Col>
        </Row>
        <Row className='mb-4 text-center text-white'>
          <Col className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }} span={6}>
            col-6
          </Col>
          <Col className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }} span={6}>
            col-6
          </Col>
          <Col className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }} span={6}>
            col-6
          </Col>
          <Col className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }} span={6}>
            col-6
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block
        title='栅格排序'
        description={
          <>
            列排序。
            <br />
            通过使用 push 和 pull 类就可以很容易的改变列（column）的顺序。
          </>
        }
      >
        <Row className='text-center text-white'>
          <Col span={18} push={6} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-18 col-push-6
          </Col>
          <Col span={6} pull={18} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-6 col-pull-18
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block
        title='排版'
        description={
          <>
            子元素根据不同的值
            <Typography.Text code>start</Typography.Text>，<Typography.Text code>center</Typography.Text>，<Typography.Text code>end</Typography.Text>，<Typography.Text code>space-between</Typography.Text>，
            <Typography.Text code>space-around</Typography.Text>，<Typography.Text code>space-evenly</Typography.Text>分别定义其在父节点里面的排版方式。
          </>
        }
      >
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          sub-element align left
        </Divider>
        <Row justify='start' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
        </Row>
        <Divider plain orientation='center' style={{ margin: '16px 0' }}>
          sub-element align center
        </Divider>
        <Row justify='center' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
        </Row>
        <Divider plain orientation='right' style={{ margin: '16px 0' }}>
          sub-element align right
        </Divider>
        <Row justify='end' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          sub-element align arrangement
        </Divider>
        <Row justify='space-between' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          sub-element align full
        </Divider>
        <Row justify='space-around' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          sub-element align evenly
        </Divider>
        <Row justify='space-evenly' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            col-4
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            col-4
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block title='对齐' description={<>子元素垂直对齐。</>}>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Align Top
        </Divider>
        <Row justify='center' align='top' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            <p style={{ height: '20px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            <p style={{ height: '100px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            <p style={{ height: '80px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            <p style={{ height: '50px' }}>col-4</p>
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Align Middle
        </Divider>
        <Row justify='space-around' align='middle' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            <p style={{ height: '20px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            <p style={{ height: '100px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            <p style={{ height: '80px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            <p style={{ height: '50px' }}>col-4</p>
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Align Bottom
        </Divider>
        <Row justify='space-between' align='bottom' style={{ padding: '8px 0', background: '#eee' }} className='text-center text-white'>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            <p style={{ height: '20px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            <p style={{ height: '100px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            <p style={{ height: '80px' }}>col-4</p>
          </Col>
          <Col span={4} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            <p style={{ height: '50px' }}>col-4</p>
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block title='排序' description={<>通过 order 来改变元素的排序。</>}>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Normal
        </Divider>
        <Row className='text-center text-white'>
          <Col span={6} order={4} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            1 col-order-4
          </Col>
          <Col span={6} order={3} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            2 col-order-3
          </Col>
          <Col span={6} order={2} className='py-4 py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            3 col-order-2
          </Col>
          <Col span={6} order={1} className='py-4 py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            4 col-order-1
          </Col>
        </Row>
        <Divider plain orientation='left' style={{ margin: '16px 0' }}>
          Responsive
        </Divider>
        <Row className='text-center text-white'>
          <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            1 col-order-responsive
          </Col>
          <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            2 col-order-responsive
          </Col>
          <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            3 col-order-responsive
          </Col>
          <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            4 col-order-responsive
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block title='Flex填充' description={<>Col 提供 flex 属性以支持填充。</>}>
        <Divider orientation='left' style={{ margin: '16px 0' }}>
          Percentage columns
        </Divider>
        <Row className='text-center text-white'>
          <Col flex={2} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            2 / 5
          </Col>
          <Col flex={3} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            3 / 5
          </Col>
        </Row>
        <Divider orientation='left' style={{ margin: '16px 0' }}>
          Fill rest
        </Divider>
        <Row className='text-center text-white'>
          <Col flex='100px' className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            100px
          </Col>
          <Col flex='auto' className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            Fill Rest
          </Col>
        </Row>
        <Divider orientation='left' style={{ margin: '16px 0' }}>
          Raw flex style
        </Divider>
        <Row className='mb-4 text-center text-white'>
          <Col flex='1 1 200px' className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            1 1 200px
          </Col>
          <Col flex='0 1 300px' className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            0 1 300px
          </Col>
        </Row>

        <Row wrap={false} className='text-center text-white'>
          <Col flex='none' className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            <div style={{ padding: '0 16px' }}>none</div>
          </Col>
          <Col flex='auto' className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            auto with no-wrap
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block title='响应式布局' description={<>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl。</>}>
        <Row className='text-center text-white'>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            Col
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            Col
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            Col
          </Col>
        </Row>
      </Demo.Block>
      <Demo.Block
        title='其他属性响应式'
        description={
          <>
            span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。其中 <Typography.Text code>xs={'{6}'}</Typography.Text> 相当于 <Typography.Text code>xs={JSON.stringify({ span: 6 })}</Typography.Text>
          </>
        }
      >
        <Row className='text-center text-white'>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            Col
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className='py-4 px-0' style={{ background: 'rgb(114, 132, 251)' }}>
            Col
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='py-4 px-0' style={{ background: 'rgba(114, 132, 251, 0.50)' }}>
            Col
          </Col>
        </Row>
      </Demo.Block>
    </Demo.Page>
  );
}