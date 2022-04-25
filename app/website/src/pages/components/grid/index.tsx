import React from 'react';
import { Demo } from 'demo';
import { Row, Col, Typography, Divider } from '@ubt/udesign-ui';
import styles from './index.module.scss';

const GridShow = () => {
  return (
    <div className='gridShow'>
      <Row className='gridShow-row'>
        <Col className='gridShow-col' span={24}>
          100%
        </Col>
      </Row>
      <Row className='gridShow-row'>
        <Col span={6}>25%</Col>
        <Col span={6}>25%</Col>
        <Col span={6}>25%</Col>
        <Col span={6}>25%</Col>
      </Row>
      <Row className='gridShow-row'>
        <Col span={8}>33.33%</Col>
        <Col span={8}>33.33%</Col>
        <Col span={8}>33.33%</Col>
      </Row>
      <Row className='gridShow-row'>
        <Col span={12}>50%</Col>
        <Col span={12}>50%</Col>
      </Row>
    </div>
  );
};


export default function GridPage() {
  return (
    <div className={styles['grid-root']}>
      <Demo.Page title='Gied 栅格' description='24 栅格系统。'>
        <Demo.Block
          title='设计理念'
          description={
            <>
              我们将整个设计建议区域按照 24 等分的原则进行划分。
              <br />
              <br />
              划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。
            </>
          }
        ></Demo.Block>
        <GridShow />
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
          <Row>
            <Col span={24}>col</Col>
          </Row>
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Demo.Block>
        <Demo.Block
          title='排版'
          description={
            <>
              子元素根据不同的值
              <Typography.Text code>start</Typography.Text>，<Typography.Text code>center</Typography.Text>，<Typography.Text code>end</Typography.Text>，<Typography.Text code>space-between</Typography.Text>，
              <Typography.Text code>space-around</Typography.Text>，分别定义其在父节点里面的排版方式。
            </>
          }
        >
          <Divider plain orientation='left'>
            sub-element align left
          </Divider>
          <Row justify='start'>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
          </Row>
          <Divider plain orientation='right'>
            sub-element align right
          </Divider>
          <Row justify='end'>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
          </Row>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
