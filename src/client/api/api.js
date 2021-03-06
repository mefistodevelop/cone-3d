import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
});

export const coneApi = {
  getPoints(height, radius, segmentsNumber) {
    return instance
      .get(`/cone?height=${height}&radius=${radius}&segments=${segmentsNumber}`)
      .then((response) => response.data.data.points);
  },
};
