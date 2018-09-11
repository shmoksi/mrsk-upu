import { message } from 'antd';
import { get } from 'lodash';

const DEFAULT_ERROR_MSG = 'Something went wrong';
// const KNOWN_ERROR_CODES = [1451, 1062, 'invalidOptionsCount'];
// const KNOWN_ERROR_TYPES = ['missed'];

export const getErrorMsg = (e, defaultErrorMsg = DEFAULT_ERROR_MSG) =>
  get(e, 'response.data.status') ||
  get(e, 'message') ||
  (typeof e === 'string' ? e : defaultErrorMsg);

export const msgError = (e, defaultErrorMsg) =>
  message.error(getErrorMsg(e, defaultErrorMsg));

export const localizeError = ({ error, translate }) => {
  // TODO: localize error
  // const { type } = error;
  // if (type && KNOWN_ERROR_TYPES.indexOf(type) !== -1) {
  //   return `${translate(type, 'error')} : ${error.name}`;
  // }
  // const data = get(error, 'response.data') || {};
  // const { errorCode = error.errorCode } = data;
  // if (errorCode && KNOWN_ERROR_CODES.indexOf(errorCode) !== -1) {
  //   return translate(errorCode, 'error');
  // }
  return translate('all', 'error');
};

export const msgLocalError = args => message.error(localizeError(args));
