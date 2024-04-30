import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loader from './Loader'

const {Text, Title} = Typography
const {Option} = Select

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/crypotonews.jpg'

const News = ({simplified}) => {
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12});

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value) => console.log(value)}
          >

          </Select>
        </col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} className='news-card' key={i}>
          <Card
            className='news-card'
            hoverable
          >
            <a href={news.url} target='_blank' ref='noreferrer'>
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news?.name}</Title>
                  <img style={{maxwidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.content || demoImage} alt='news'/>
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News