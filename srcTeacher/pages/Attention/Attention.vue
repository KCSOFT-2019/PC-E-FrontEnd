<template>
  <div>
    <ToolBar>
      <template v-slot:logo>
        <v-icon @click="$router.back(-1)">mdi-chevron-left</v-icon>
      </template>
      <template v-slot:title>我的好友</template>
    </ToolBar>
    <v-list class="my-3">
      <v-list-item-group>
        <v-list-item
          v-for="list in friendLists"
          :key="list.name"
          to="/othersprofile"
        >
          <v-list-item-content>{{ list.name }}</v-list-item-content>
          <v-list-item-avatar>
            <v-img size="48" src="../../assets/avatar.jpg"> </v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar/ToolBar";

export default {
  data() {
    return {
      friendLists: [
        { name: "coderwu" },
        { name: "bugMaker" },
        { name: "JavaScript" },
        { name: "css" },
        { name: "dog-fucked-React" },
        { name: "dog-fucked-电脑E家" },
        { name: "小右永远滴神" },
      ],
    };
  },
  components: {
    ToolBar,
  },
  methods: {},
};
</script>

<style scoped>
</style>