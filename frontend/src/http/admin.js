// @flow
import axios from 'axios';

export function fetchAdminData() {
  // return axios.get('/api/admin-data').then(res => res.json());

  const data = {
    instructors: [{ id: 1, name: 'i1' }, { id: 2, name: 'i2' }]
  };

  return Promise.resolve(data);
}
