// @flow
import axios from 'axios';

export function fetchInstructorData() {
  // return axios.get('/api/instructor-data').then(res => res.json());

  const data = {
    certifications: [{ id: 1, name: 'c1' }, { id: 2, name: 'c2' }],
    videos: [{ id: 1, name: 'v1' }, { id: 2, name: 'v2' }]
  };

  return Promise.resolve(data);
}
