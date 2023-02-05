import React, {useState} from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import demoImage from '../images/news.jpg'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import {useGetCryptosQuery} from '../services/cryptoApi'

const { Text, Title } = Typography;
const { Option } = Select;


const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory, count: simplified ? 
    10  : 20
  })
  const { data } = useGetCryptosQuery(100);
  
  console.log(cryptoNews)
  if (!cryptoNews) return 'Loading ...'
  
  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>{
                data?.data?.coins.map(coin => <Option value={coin.name}>{coin.name}</Option>)
              }
            </Select>
          </Col>
        )}
        {cryptoNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  src={demoImage}
                  alt="demoImage"
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
              <div>
                <Text style={{ margin: "5 5 5 10", fontSize: "18px" }}>
                  {news.description}
                </Text>
              </div>
              <Text>{moment(news.date).startOf("ss").fromNow()}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default News