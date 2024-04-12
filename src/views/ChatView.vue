<template>
  <div class="dashboard">
    <sidebar-vue />
    <chatVue />
  </div>
</template>

<script>
import chatVue from "../components/app/chat.vue";
import sidebarVue from "../components/app/sidebar.vue";

export default {
  name: "ChatView",
  components: {
    sidebarVue,
    chatVue,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
  display: flex;
  gap: 10px;
}
</style>
