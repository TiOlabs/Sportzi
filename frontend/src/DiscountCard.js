// src/DiscountCard.js

import React from 'react';
import { Card, Row, Col } from 'antd';

const DiscountCard = ({ title, description, discount, imageUrl }) => {
  
  const descriptionLines = description.split('\n');

  return (
    <Card hoverable style={{ width: '100%', marginBottom: '20px' }}>
      <Row gutter={[16, 16]}>
        {/* Image Column */}
        <Col xs={24} md={12}>
        <div style={{ width: '100%', height: '100%' }}>
          <img alt={title} src={imageUrl} style={{ width: '100%', height: 'auto' }} />
          </div>
        </Col>
        {/* Discount Details Column */}
        <Col xs={24} md={12}>
        <br></br> 
          <div style={{ paddingLeft: '40px', textAlign:'center'}}>
         
         <div style={{lineHeight:'0.3'}}>
          <div style={{ color:'#171982' }}>
         
            <h2>{discount}% Discount</h2>
            </div>
            <p>{descriptionLines[0]}</p>
            <p>{descriptionLines[1]}</p>
            </div>
     <br></br>
            <div style={{lineHeight:'0.3'}}>
            <h1>SSC Complex</h1>
            <p><b>Level One Cricket Arcade</b></p>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default DiscountCard;
