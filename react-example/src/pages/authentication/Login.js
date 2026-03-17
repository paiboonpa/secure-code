import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { login } from '../../redux/actions/actions';

class Login extends React.Component {
  onFinish = async (values) => {
    const formData = new FormData();
    formData.append('login_username', values.username);
    formData.append('login_password', values.password);
    try {
      const response = await fetch('http://localhost/secure-code/cors.php', {
        method: 'POST',
        body: formData,
      })
      alert(await response.text());
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
          <Col md={8} sm={12} xs={24}>
            <img src={logo} alt="Logo Fakebook" style={{ width: '100%', paddingLeft: '24px', paddingRight: '24px', maxWidth: '400px' }}></img>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Form onFinish={this.onFinish} className="login-form" style={{ maxWidth: '400px', width: '100%' }}>
              <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your nickname!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Link to='/signup'>
                      <Button block type="link" >
                        Signup
                      </Button>
                    </Link>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Button block type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row >
      </div >
    )
  }
}

const mapDispatchToProps = {
  login: login
}

export default connect(null, mapDispatchToProps)(Login)