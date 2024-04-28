import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import './App.css'

import {Navbar, Exchanges, Home, CryptoDetails,Cryptocurrencies, News } from './components'
function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' component={Home} />
              <Route exact path='/exchanges' component={Exchanges} />
              <Route exact path='/cryptocurrencies' component={Cryptocurrencies} />
              <Route exact path='/crypto/:coinId' component={CryptoDetails} />
              <Route exact path='/news' component={News} />
            </Routes>
          </div>
        </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{textAlign: 'center', color:'white'}}>
          Cryptocurrent <br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
