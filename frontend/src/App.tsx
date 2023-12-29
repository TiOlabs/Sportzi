import React from 'react';
import { Card } from 'antd';
import { Col, Row } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  <Row justify="center" align="middle" style={{ height: '100vh' }}>
  <Col span={4}>
  <Card
    hoverable
    style={{width: 240,justifyContent: 'center', alignItems: 'center' }}
    cover={<img alt="example" src="https://images.unsplash.com/photo-1566577740641-503e61e4646a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBydWdnZXJ8ZW58MHx8MHx8fDA%3D"  style={{ height: '30vh' }} />}
  >
    <Meta title="Mr.Sandun Malage " description="level one Rugger coach" />
  </Card>
  </Col>
  </Row>
);

export default App;