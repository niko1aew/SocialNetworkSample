import profileReducer from './Reducers/profileReducer';
import dialogsReducer from './Reducers/dialogsReducer';

let store = {
  _subscriber(store) {
    console.log('no subscribers (observers)');
  },
  _state: {
    profilePage: {
      newPostText: '',
      posts: [
        { id: '1', text: 'Post 1', likesCount: 12, image: '' },
        {
          id: '2',
          text: 'Post 2',
          likesCount: 5,
          image:
            'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
        },
        {
          id: '3',
          text: 'Post 3',
          likesCount: 0,
          image: 'https://www.w3schools.com/w3images/avatar6.png'
        },
        { id: '4', text: 'Post 4', likesCount: 9, image: '' }
      ]
    },
    dialogsPage: {
      newMsgText: '',
      dialogs: [
        { id: '1', name: 'Valera' },
        { id: '2', name: 'Andrey' },
        { id: '3', name: 'Valera' },
        { id: '4', name: 'Ann' },
        { id: '5', name: 'Artem' }
      ],
      messages: [
        {
          id: '1',
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          isAnswer: false
        },
        { id: '2', message: 'Message 2', isAnswer: true },
        { id: '3', message: 'Message 3', isAnswer: true },
        { id: '4', message: 'Message 4', isAnswer: false },
        { id: '5', message: 'Message 5', isAnswer: true }
      ]
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._subscriber(this._state);
  }
};

// export default store;
window.store = store;
