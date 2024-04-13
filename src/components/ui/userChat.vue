<template>
  <div
    :class="['user', { active: user.id === selectedChat }]"
    @click="switchChat(user)"
  >
    <img class="user__img" src="@/assets/images/user.jpg" alt="user" />
    <h3 class="user__name">{{ user.name }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserChatComponent",
  props: ["user"],
  computed: {
    ...mapGetters(["selectedChat"]),
  },
  methods: {
    switchChat(user) {
      this.$emit("switchHandler", user);
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid black;
  padding: 10px;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid black;
  }

  &.active {
    background: gray;
    color: white;
  }

  &__img {
    width: 60px;
    object-fit: cover;
  }
}
</style>
