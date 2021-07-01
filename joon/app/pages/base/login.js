
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import { regExpConfig } from '@reg'
import { brandName } from '@config'
import { clearGformCache2, login } from '@actions/common'
import { /* login,  */staff, menu } from '@apis/common'
import Logo from '@components/logo/logo'
import md5 from 'md5'
import QueuiAnim from 'rc-queue-anim'

// import '@styles/base.less'
import '@styles/login.less'

const FormItem = Form.Item

@connect((state, props) => ({
  config: state.config,
  loginResponse: state.loginResponse,
}))
@Form.create({
  onFieldsChange(props, items) {},
})

export default class Login extends Component {
  // 페이지 상수 초기화 및 이벤트 메서드 바인딩
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      isCertificates: false,
      show: true,
    }
  }

  componentDidMount() {
    this.props.dispatch(clearGformCache2({}))
    this.props.form.setFieldsValue({ username: 'username', password: '123456' })
  }

  // #region 收缩业务代码功能

  handleSubmit(e, isCertificates) {
    e.preventDefault()
    if (isCertificates) {
      message.warning('证书登录功能未开通')
      return
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const query = this.props.form.getFieldsValue()
        this.setState({ loading: true })
        /* if (process.env.NODE_ENV === 'production') {
          values.password = values.password
        } else {
          values.password = md5(values.password)
        } */
        values.password = md5(values.password)
        this.props.dispatch(login(values, (res) => {
          sessionStorage.setItem('token', res.data.token)
          sessionStorage.setItem('ticket', res.data.ticket)
          menu({}, (response) => {
            const nav = response.data.list || []
            if (nav && nav[0]) {
              sessionStorage.setItem('gMenuList', JSON.stringify(nav))
              sessionStorage.setItem('topMenuReskey', nav[0].resKey)
              sessionStorage.setItem('leftNav', JSON.stringify(nav))

              staff({ usercode: query.username }, (resp) => {
                sessionStorage.setItem('userinfo', JSON.stringify(resp.data))
                hashHistory.push('/')
              }, (r) => {
                message.warning(r.msg)
                this.setState({
                  loading: false,
                })
              })
            }
          }, (r) => {
            // message.warning(r.msg)
            this.setState({
              loading: false,
            })
          })
        }, (res) => {
          message.warning(res.msg)
          this.setState({
            loading: false,
          })
        }))
      }
    })
  }

  // #endregion

  render() {
    const { getFieldDecorator } = this.props.form
    console.log(this.props.loginResponse)
    return (
      <div className="login-container">
        <div className="extraLink" />
        <div className="flexcolumn">
          <div className="login-header" key="header">
            <div className="slogan">
              <QueuiAnim className="flexcolumn" type={['right', 'left']} key="p">
                {
                  this.state.show ? [
                    <p key="0" className="title">{brandName}
                      {/* <span className="en">BIG DATA</span> */}
                    </p>,
                  ] : null
                }
              </QueuiAnim>
            </div>
            <Logo />
          </div>
          <div className="login-main">
            <QueuiAnim delay={300} type="bottom" key="row">
              {
                this.state.show ? [
                  <Row key="row0">
                    <Col span={8} />
                    <Col span={8}>
                      <Spin spinning={this.state.loading}>
                        <Form onSubmit={e => this.handleSubmit(e, this.state.isCertificates)}>
                          {!this.state.isCertificates ?
                            (<div>
                              <FormItem hasFeedback>
                                {getFieldDecorator('username', {
                                  rules: [
                                    {
                                      required: true, min: 4, max: 10, message: '아이디는 4~10 글자 사이로 입력해주세요',
                                    },
                                    { pattern: regExpConfig.policeNo, message: '4-10 자리 숫자 또는 문자로 입력해주세요' },
                                  ],
                                })(<Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" type="text" />)}
                              </FormItem>
                              <FormItem hasFeedback>
                                {getFieldDecorator('password', {
                                  rules: [
                                    {
                                      required: true, min: 6, max: 16, message: '비밀번호는 6-16 글자입니다.',
                                    },
                                    { pattern: regExpConfig.pwd, message: '비밀번호는 6-16 글자입니다.' },
                                  ],
                                })(<Input addonBefore={<Icon type="lock" />} placeholder="请输入密码" type="password" />)}
                              </FormItem>
                              <FormItem>
                                <Button type="primary" htmlType="submit" className="cert-btn">로그인</Button>
                              </FormItem>
                            </div>) :
                            <FormItem>
                              <Button type="primary" htmlType="submit">证书登录</Button>
                            </FormItem>
                          }
                        </Form>
                      </Spin>
                    </Col>
                    <Col span={8} />
                  </Row>,
                ] : null
              }
            </QueuiAnim>
          </div>
          <QueuiAnim component="div" className="login-footer" delay={600} type="bottom" key="footer">
            {
              this.state.show ? [
                <p key="0"> 浙江七巧板信息科技股份有限公司 </p>,
              ] : null
            }

          </QueuiAnim>
        </div>
      </div>
    )
  }
}
