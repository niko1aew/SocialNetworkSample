import * as Axios from 'axios';

const samuraijsApi = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3e8bad1c-0e05-4078-8b97-dad8d65b31af',
  },
});

export const usersApi = {
  getUsers(pageSize = 25, currentPage = 1) {
    return samuraijsApi
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return samuraijsApi
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },
  unfollowUser(userId) {
    return samuraijsApi
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please use profileApi object')
    return profileApi.getProfile(userId);
  }
};

export const profileApi = {
  getProfile(userId) {
    return samuraijsApi
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
  getStatus(userId) {
    return samuraijsApi
      .get(`profile/status/` + userId)
      .then((response) => response.data)
  },
  updateStatus(status) {
    return samuraijsApi.put(`profile/status`, {
      status
    })
  }
};

export const authApi = {
    me() {
        return samuraijsApi
        .get('auth/me')
        .then((response) => response.data)
    }
};
