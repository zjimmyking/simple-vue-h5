'use strict';
import http from '@/utils/http';

export const login = (data) => {
  return http({
    url: 'xxx/xxx',
    method: 'post',
    data: data
  }).catch((err) => {
    return Promise.reject(err);
  });
};
