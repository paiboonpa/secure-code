import React from 'react';
import { Switch } from 'react-router-dom'

import { Layout } from 'antd';
import NavBar from './components/navbar/NavBar'
import PrivateRoute from './components/routes/PrivateRoute';
import { connect } from 'react-redux'

const { Header, Content } = Layout;

class App extends React.Component {
  render() {
    const role = this.props.user.role
    console.log(role)
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: 'max-content', lineHeight: '0' }} >
            <NavBar />
          </Header>
          <Content style={{ height: '95vh' }}>
            <Switch>
              <PrivateRoute handleAppLogin={this.login} role={role} />
            </Switch>
          </Content>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App)
