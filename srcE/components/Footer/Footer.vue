<template>
  <v-bottom-navigation app grow>
    <v-btn height="100%" to="/home">
      <span>首页</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn height="100%" to="/profile">
      <span>我的</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style scoped>
.v-btn--active {
  background-color: #2397ff !important;
}
.v-btn--active .v-icon {
  color: #fff !important;
}

.v-btn--active span {
  color: #fff;
}
</style>