<template>
  <div>
    <div class="top">
      <v-card-title> 昵称 </v-card-title>
      <v-avatar color="primary" size="56" class="avatar">
        <span class="white--text headline">浩</span>
      </v-avatar>
    </div>
    <v-card height="80px" flat>
      <v-card-actions class="list">
        <v-btn depressed class="white" width="30vw">
          <span>关注</span>
          <span>0</span>
        </v-btn>
        <v-btn depressed class="white" width="30vw">
          <span>粉丝</span>
          <span>0</span>
        </v-btn>
        <!-- <v-btn depressed class="white" width="25%">
          <span>帖子</span>
          <span>0</span>
        </v-btn> -->
        <v-btn depressed class="white" width="30vw">
          <span>收藏</span>
          <span>0</span>
        </v-btn>
      </v-card-actions>
    </v-card>
    <div class="infoItem">
      <v-icon class="mx-3">mdi-account-details-outline</v-icon>
      个人资料
      <v-icon style="position: absolute; right: 10px; line-height: 40px"
        >mdi-chevron-right</v-icon
      >
    </div>
    <div class="infoItem items">
      <div>
        <v-icon class="mx-3">mdi-bell-outline</v-icon>
        通知
        <v-icon style="position: absolute; right: 10px; line-height: 40px"
          >mdi-chevron-right</v-icon
        >
      </div>
      <v-divider></v-divider>
      <div>
        <v-icon class="mx-3">mdi-cog</v-icon>
        设置
        <v-icon style="position: absolute; right: 10px; line-height: 40px"
          >mdi-chevron-right</v-icon
        >
      </div>
      <v-divider></v-divider>
      <div>
        <v-icon class="mx-3">mdi-check-outline</v-icon>
        我完成的
        <v-icon style="position: absolute; right: 10px; line-height: 40px"
          >mdi-chevron-right</v-icon
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  width: 100%;
  height: 100px;
  position: relative;
  background-color: skyblue;
}
.avatar {
  position: absolute;
  right: 10px;
  z-index: 10;
}
.list {
  position: absolute;
  bottom: 5px;
}

.infoItem {
  height: 40px;
  background-color: #fff;
  margin-top: 20px;
  line-height: 40px;
}

.items {
  height: 120px;
}
</style>