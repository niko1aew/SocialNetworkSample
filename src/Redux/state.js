let state = {
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
};

let renderEntireTree;

export let addMessage = () => {
  if (
    state.dialogsPage.newMsgText &&
    state.dialogsPage.newMsgText.trim() !== ''
  ) {
    state.dialogsPage.messages.push({
      id: '30',
      message: state.dialogsPage.newMsgText,
      isAnswer: true
    });
    state.dialogsPage.newMsgText = '';
    renderEntireTree(state);
  }
};

export let addPost = () => {
  if (
    state.profilePage.newPostText &&
    state.profilePage.newPostText.trim() !== ''
  ) {
    state.profilePage.posts.push({
      id: '30',
      text: state.profilePage.newPostText,
      likesCount: 0
    });
    state.profilePage.newPostText = '';

    renderEntireTree(state);
  }
};

export let setMsgText = text => {
  state.dialogsPage.newMsgText = text;
  renderEntireTree(state);
};

export let setPostText = text => {
  state.profilePage.newPostText = text;
  renderEntireTree(state);
};

export const subscribe = observer => {
  renderEntireTree = observer;
};

export default state;
