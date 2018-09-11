import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import { Form, Button, Row, Col } from 'antd';
import { get } from 'lodash';

import { wrapRequest } from '../../services/ajax';
import formDecorate from '../../services/decorators/formDecorate'
import FormItemInput from '../../components/form/Input';

import './loginStyles.less';

const FormItem = Form.Item;

@withRouter
@formDecorate()
export default class Login extends Component {

  loginSubmit = async params => {
    const user = await wrapRequest({
      url: '/login.json',
      params
    });
    sessionStorage.setItem('token', user.data.authorization_token);
    return this.props.history.push('/books');
  };


  get form() {
    return (
      <Form
        onSubmit={this.props.wrapSubmit(this.loginSubmit)}
        autoComplete="off"
      >
        <FormItemInput
          name="user"
          icon="user"
          required
          placeholder="User name"
          autoComplete="new-password"
        />
        <FormItemInput
          name="password"
          autoComplete="new-password"
          icon="lock"
          type="password"
          required
          placeholder="Password"
        />
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login_max_width"
          >
            Login
          </Button>
        </FormItem>
      </Form>
    )
  }

  render() {
    return (
      <Row
        type="flex"
        justify="space-around"
        align="middle"
      >
        <Col className="login-container">
          {this.form}
        </Col>
      </Row>
    );
  }
}
