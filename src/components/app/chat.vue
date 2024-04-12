<template>
  <div class="chat">
    {{ filteredMessages }}
    <div class="chat__inputs">
      <input
        type="text"
        class="chat__inputs-input"
        placeholder="Message..."
        v-model="message"
      />
      <button class="chat__inputs-btn" @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatView",
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  computed: {
    ...mapGetters(["selectedChat"]),
    filteredMessages() {
      return this.messages.filter(
        (msg) =>
          msg.to === this.selectedChat ||
          (msg.from === this.selectedChat && msg.to === +this.$route.params.id)
      );
    },
  },
  methods: {
    sendMessage() {
      if (!this.message.trim() || !this.selectedChat) return;

      const messageData = {
        from: +this.$route.params.id,
        to: this.selectedChat,
        message: this.message,
      };

      this.messages.push(messageData);
      localStorage.setItem("receivedMessages", JSON.stringify(this.messages));

      this.message = "";
    },
    handleStorageUpdate(event) {
      if (event.key === "receivedMessages") {
        this.messages =
          JSON.parse(localStorage.getItem("receivedMessages")) || [];
      }
    },
  },
  created() {
    this.messages = JSON.parse(localStorage.getItem("receivedMessages")) || [];
    window.addEventListener("storage", this.handleStorageUpdate);
  },
};
</script>

<style lang="scss" scoped>
.chat {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;

  &__inputs {
    display: flex;
    gap: 10px;
    &-input {
      width: 100%;
      padding: 5px;
      border: 1px solid black;
      outline: none;
      border-radius: 5px;
    }

    &-btn {
      border: none;
      padding: 5px 20px;
      background: #000;
      color: white;
      font-size: 18px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
