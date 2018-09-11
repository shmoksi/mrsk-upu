import React, { Component } from 'react';
import { Form, Input, InputNumber, Icon } from 'antd';
import PropTypes from 'prop-types';

import './styles.less';

const FormItem = Form.Item;

export default class FormInput extends Component {
  static propTypes = {
    title: PropTypes.string, // it will be translated by i18n form
    name: PropTypes.string.isRequired, // it will be key on submit object, if !title name will be translated to
    required: PropTypes.bool, // form option, if your key is mandatory
    rules: PropTypes.array, // ant form rules
    initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // ant form initialValue
    icon: PropTypes.string, // ant icon name
    type: PropTypes.string, // html input type
    placeholder: PropTypes.string,
    placeholderWithoutTranslate: PropTypes.string, // placeholder
    placeholderForm: PropTypes.string, // placeholder
    label: PropTypes.string, // label
  };

  static contextTypes = {
    form: PropTypes.object,
  };

  get input() {
    const { props } = this;
    let { placeholder } = props;
    const { autoComplete, type, icon } = props;

    let prefix;
    if (icon) {
      prefix = <Icon type={icon} style={{ fontSize: 13 }} />;
    }
    const opt = { prefix, placeholder, autoComplete };

    switch (type) {
      case 'number':
        return <InputNumber {...opt} min={props.min} />;
      case 'textarea':
        return <Input.TextArea {...opt} />;
      default:
        return <Input type={type} {...opt} />;
    }
  }

  render() {
    const { getFieldDecorator } = this.context.form;
    const props = this.props;
    let { label } = props;
    const { name, initialValue, required } = props;
    let rules = [];
    if (required)
      rules = [
        {
          required: true,
          message: "Please fill",
        },
      ];
    return (
      <FormItem colon={false} label={label || ''}>
        {getFieldDecorator(name, { rules, initialValue })(this.input)}
      </FormItem>
    );
  }
}
