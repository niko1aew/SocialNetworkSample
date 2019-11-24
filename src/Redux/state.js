let state = {
  profilePage: {
    posts: [
      { id: "1", text: "Post 1", likesCount: 12, image: "" },
      {
        id: "2",
        text: "Post 2",
        likesCount: 5,
        image:
          "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
      },
      {
        id: "3",
        text: "Post 3",
        likesCount: 0,
        image: "https://www.w3schools.com/w3images/avatar6.png"
      },
      { id: "4", text: "Post 4", likesCount: 9, image: "" }
    ]
  },
  dialogsPage: {
    dialogs: [
      { id: "1", name: "Valera" },
      { id: "2", name: "Andrey" },
      { id: "3", name: "Valera" },
      { id: "4", name: "Ann" },
      { id: "5", name: "Artem" }
    ],
    messages: [
      { id: "1", message: "Message 1" },
      { id: "2", message: "Message 2" },
      { id: "3", message: "Message 3" },
      { id: "4", message: "Message 4" },
      { id: "5", message: "Message 5" }
    ]
  }
};
export default state;
