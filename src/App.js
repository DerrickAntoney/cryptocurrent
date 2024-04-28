import {Switch, Route, Link} from 'react-router-dom';
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
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/exchanges' component={Exchanges} />
              <Route exact path='/cryptocurrencies' component={Cryptocurrencies} />
              <Route exact path='/crypto/:coinId' component={CryptoDetails} />
              <Route exact path='/news' component={News} />
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
