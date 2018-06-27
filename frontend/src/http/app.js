// @flow
import axios from 'axios';

export function fetchAppData() {
  // return axios.get('/api/app-data').then(res => res.json());
  return Promise.resolve({
    user: { id: 1, email: 'kyle@windwardapps.com', type: 'admin' },
    links: [
      {
        url: '/admin',
        component: 'Admin'
      },
      {
        url: '/admin/admin-feature-1',
        label: 'Admin Feature 1',
        component: 'Admin'
      },
      {
        url: '/admin/admin-feature-2',
        label: 'Admin Feature 2',
        component: 'Admin'
      }
    ]
  });
}
