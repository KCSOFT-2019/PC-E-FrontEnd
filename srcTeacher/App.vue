<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  background-color: #eee;
}
</style>