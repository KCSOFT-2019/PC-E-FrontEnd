<template>
  <v-toolbar flat class="topBar">
    <slot name="logo"></slot>
    <v-spacer></v-spacer>
    <div style="font-weight: bold">
      <slot name="title"></slot>
    </div>
    <v-spacer></v-spacer>
    <div style="font-size: 12px; font-weight: bold">
      <slot name="todo"></slot>
    </div>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>