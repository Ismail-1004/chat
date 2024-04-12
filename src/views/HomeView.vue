<template>
  <div class="home">
    <router-link
      v-for="user in users"
      :key="user.id"
      :to="{ name: 'chat', params: { id: user.id } }"
    >
      <userCard :user="user" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import userCard from "../components/ui/userCard.vue";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["users"]),
  },
  components: {
    userCard,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100%;
}
</style>
