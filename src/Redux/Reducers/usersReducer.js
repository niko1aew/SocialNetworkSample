const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     'https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png',
    //   followed: true,
    //   fullName: 'John',
    //   status: 'Regular user status',
    //   location: { city: 'New York', country: 'USA' }
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     'https://i7.pngguru.com/preview/555/703/598/computer-icons-avatar-woman-user-avatar.jpg',
    //   followed: false,
    //   fullName: 'Jane',
    //   status: 'I am Jane Doe',
    //   location: { city: 'Detroit', country: 'USA' }
    // }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      debugger;
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
