<template>
  <div>
    <ToolBar>
      <template v-slot:logo>
        <v-icon @click="$router.back(-1)">mdi-chevron-left</v-icon>
      </template>
      <template v-slot:title>精选收藏</template>
    </ToolBar>
    <v-card class="my-3" flat>
      <div class="tag">未解决</div>
      <div class="card-top">
        <div>
          <v-avatar color="primary" size="48" rounded>
            <span class="white--text headline">燃</span>
          </v-avatar>
        </div>
        <div class="ml-2 userInfo">
          <span>浩然</span>
          <span style="font-size: 12px" class="grey--text lighten-4"
            >1天前 03-23 23:59</span
          >
        </div>
      </div>
      <div class="my-2">#类型：给老子修电脑#</div>
      <div>描述：我**你个**</div>
      <v-img src="../../assets/img.jpg"></v-img>
      <v-divider class="my-1"></v-divider>
      <v-card-actions class="grey lighten-4">
        <v-btn depressed block>
          <v-icon>mdi-comment-processing-outline</v-icon>
          评论
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar/ToolBar";

export default {
  components: {
    ToolBar,
  },
  methods: {},
};
</script>

<style scoped>
.card-top {
  display: flex;
}

.userInfo {
  display: flex;
  flex-direction: column;
}
.tag {
  width: 60px;
  height: 25px;
  display: flex;
  justify-content: center;
  background-color: #d90429;
  position: absolute;
  right: 3px;
  color: #d4a373;
  font-size: 14px;
  top: -3px;
}
</style>