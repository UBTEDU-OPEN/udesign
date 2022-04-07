import React from 'react';
import { Row, Col } from '@ubt/udesign-ui';
const girdShow = () => {  
  return (
    <div className='gridShow'>
      <Row className='gridShow-row'>
        <Col className='gridShow-col' span={24}>100%</Col>
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
export { girdShow };