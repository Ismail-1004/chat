<template>
  <div class="card">
    <img class="card__img" src="@/assets/images/user.jpg" alt="user" />
    <h3 class="card__title">{{ user.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "userCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 200px;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &__img {
    width: 80%;
  }

  &__title {
    text-align: center;
    margin-top: 20px;
    color: black;
  }
}
</style>
