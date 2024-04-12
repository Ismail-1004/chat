export default {
  state: {
    users: [
      { id: 1, name: "Ismail" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Alisa" },
    ],
    selectedChat: null,
  },
  mutations: {
    setCurrentChat(state, userId) {
      state.selectedChat = userId;
    },
  },
  getters: {
    users: (s) => s.users,
    messages: (s) => s.messages,
    selectedChat: (s) => s.selectedChat,
  },
};
