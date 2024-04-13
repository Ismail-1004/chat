<template>
  <div class="chat">
    <div class="chat__content" v-if="filteredMessages.length">
      <div :class="['chat__content-message', { friend: selectedChat !== messageInfo.to }]" v-for="(messageInfo, idx) in filteredMessages" :key="idx">
        {{ messageInfo.message }}
      </div>
    </div>

    <p class="chat__informing" v-else> 
      <span v-if="selectedChat"> No Messages </span>  
      <span v-else> Select Chat </span>
    </p>

    <div class="chat__inputs">
      <input
        type="text"
        class="chat__inputs-input"
        placeholder="Message..."
        v-model="message"
        @keypress.enter="sendMessage"
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
          (msg.to === this.selectedChat && msg.from === +this.$route.params.id) ||
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

  &__content {
    width: 100%;
    padding: 10px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: scroll;

    &-message {
      background: gray;
      color: white;
      padding: 10px;
      border-radius: 5px;

      &.friend {
        background: black;
      }
    }
  }

  &__informing {
    padding: 8px;
    background: gray;
    margin-bottom: 20px;
    border-radius: 5px;
    color: white;
  }

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
