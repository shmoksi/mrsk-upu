import { wrapRequest } from 'app/utils/ajax';
import UrlPattern from 'url-pattern';

import dispatchSend from '../services/dispatchSend';
import { roleCRUD } from './cruds';

export const getRoleProfile = id =>
  dispatchSend('roleProfile', roleCRUD.get(id));

export const getRoleCriteria = id =>
  dispatchSend(
    'roleProfileCriteria',
    roleCRUD.getList({ additionalUrl: `${id}/criteria` }),
    {
      adaptData: data => {
        let i = 0;
        data.data.forEach(item => (item.key = i++));
        return data;
      },
    },
  );

export const createRoleCriterion = (id, data) =>
  wrapRequest({
    method: 'POST',
    url: `/role/${id}/criteria`,
    data,
  });
