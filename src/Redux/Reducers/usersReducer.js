import { usersApi } from '../../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_USERS_COUNT:
      return { ...state, totalUsersCount: action.usersCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFollowing
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((x) => x !== action.userId)
      };

    default:
      return state;
  }
};

// Action creators
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (userId, isFollowing) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  userId,
  isFollowing,
});
export const followUser = (userId) => ({ type: FOLLOW, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUsersCount = (usersCount) => ({
  type: SET_USERS_COUNT,
  usersCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

// Thunks
export const getUsersThunkCreator = (currentPage, pageSize) => {
  // Возвращаем Thunk
  return (dispatch) => {
    // функция toggleIsFetching вернет action, который мы задиспатчим
    dispatch(toggleIsFetching(true));
    
    usersApi.getUsers(pageSize, currentPage).then((data) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsersCount(data.totalCount));
      });
  }
}

export default usersReducer;
