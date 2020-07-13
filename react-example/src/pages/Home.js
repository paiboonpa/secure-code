import React from 'react'
import { Row, Col } from 'antd'
import Axios from '../config/api.service'
import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: {},
      postList: []
    }
  }

  componentDidMount() {
    this.setState({
      owner: {
        name: this.props.user.name,
        profilePic: this.props.user.profilePic
      }
    })
    Axios.get('/feed').then((response) => {
      console.log(response)
      this.setState({
        postList: response.data
      })
    })
  }

  render() {
    return (
      <Row type="flex" justify="center">
        <Col md={12} sm={16} xs={24}>
          <Row>

          </Row>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Home)
