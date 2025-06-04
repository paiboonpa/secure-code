import React from 'react';
import { Row, Col, Button, Avatar, Dropdown, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/actions';
import logo from '../../images/logo.png';

const NavBar = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logout();
    navigate('/');
    window.location.reload(true);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/friends">
          ดูรายชื่อเพื่อน
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/changepassword">
          เปลี่ยนรหัสผ่าน
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link onClick={handleLogout} to='#'>
          ออกจากระบบ
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row style={{ height: '100%' }} type="flex" align="middle">
      <Col span={4} style={{ height: '100%' }} type="flex" align="end">
        <Link to="/">
          <img src={logo} alt="Logo Fakebook" style={{ height: '5vh' }} />
        </Link>
      </Col>
      <Col span={20}>
        <Row type="flex" justify="end">
          <Col span={4} type="flex" align="end">
            <Avatar
              src={props.user.profilePic}
            />
          </Col>
          <Dropdown overlay={menu}>
            <Col span={6} type="flex" align="start">
              <Link to="/my-profile">
                <Button type="link">{props.user.name}</Button>
              </Link>
            </Col>
          </Dropdown>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);