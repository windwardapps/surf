// @flow
import axios from 'axios';

export function fetchAppData() {
  // return axios.get('/api/app-data').then(res => res.json());

  const data = {
    user: { id: 1, email: 'kyle@windwardapps.com', type: 'admin' },
    links: [
      {
        url: '/admin',
        component: 'Admin'
      },
      {
        url: '/admin/instructors',
        label: 'Instructors',
        component: 'Instructors'
      },
      {
        url: '/admin/videos',
        label: 'Videos',
        component: 'VideoList'
      }
    ]
  };

  // const data = {
  //   user: { id: 1, email: 'kyle@windwardapps.com', type: 'instructor' },
  //   links: [
  //     {
  //       url: '/instructor',
  //       component: 'Instructor'
  //     },
  //     {
  //       url: '/instructor/instructor-feature-1',
  //       label: 'Instructor Feature 1',
  //       component: 'Instructor'
  //     },
  //     {
  //       url: '/instructor/instructor-feature-2',
  //       label: 'Instructor Feature 2',
  //       component: 'Instructor'
  //     }
  //   ]
  // };

  return Promise.resolve(data);
}
