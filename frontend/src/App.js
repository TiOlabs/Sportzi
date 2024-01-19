// src/App.js

import React from 'react';
import { Row, Col } from 'antd';
import DiscountCard from './DiscountCard';

function App() {
  const discountCards = [
    {
      title: 'Discount Card 1',
      description: 'for what and discription about discount',
      discount: 50,
      imageUrl: 'https://static2.gensler.com/uploads/image/80686/sports-blog-hero_1024_1675805798.jpg',
    },

    {
      title: 'Discount Card 1',
      description: 'for what and discription about discount',
      discount: 50,
      imageUrl: 'https://static2.gensler.com/uploads/image/80686/sports-blog-hero_1024_1675805798.jpg',
    },
    {
      title: 'Discount Card 1',
      description: 'for what and discription about discount',
      discount: 50,
      imageUrl: 'https://static2.gensler.com/uploads/image/80686/sports-blog-hero_1024_1675805798.jpg',
    },
    {
      title: 'Discount Card 1',
      description: 'for what and discription about discount',
      discount: 50,
      imageUrl: 'https://static2.gensler.com/uploads/image/80686/sports-blog-hero_1024_1675805798.jpg',
    },
    {
      title: 'Discount Card 1',
      description: 'for what and discription about discount',
      discount: 50,
      imageUrl: 'https://static2.gensler.com/uploads/image/80686/sports-blog-hero_1024_1675805798.jpg',
    },
    {
      title: 'Discount Card 1',
      description: 'for what and discription about discount',
      discount: 50,
      imageUrl: 'https://static2.gensler.com/uploads/image/80686/sports-blog-hero_1024_1675805798.jpg',
    },
   
  ];

  return (
    <div style={{ padding: '20px',color:'#171982' }}>
       <div style={{ textAlign: 'center', }}>
      <h1>Special discounts for you</h1></div>
      <Row gutter={[16, 16]}>
        {discountCards.map((card, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={12}>
            <DiscountCard {...card} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
