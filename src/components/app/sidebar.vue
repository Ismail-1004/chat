<template>
  <div class="sidebar">
    <router-link class="sidebar__logout" to="/"> Log out </router-link>
    <div class="sidebar__user">
      <userChatVue
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
        @switchHandler="switchUser"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import userChatVue from "../ui/userChat.vue";

export default {
  name: "SidebarComponent",
  computed: {
    ...mapGetters(["users"]),
    filteredUsers() {
      return this.users.filter((u) => u.id !== +this.$route.params.id);
    },
  },
  methods: {
    ...mapMutations(["setCurrentChat"]),
    switchUser(user) {
      this.setCurrentChat(user.id);
    },
  },
  components: {
    userChatVue,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background: rgba(128, 128, 128, 0.685);
  max-width: 300px;
  width: 100%;
  padding: 10px 0;

  &__logout {
    color: white;
    padding: 8px;
    background: black;
    width: 100%;
    display: inline-block;
    margin-bottom: 20px;
  }
}
</style>
