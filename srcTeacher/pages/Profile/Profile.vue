<template>
  <div>
    <div class="top">
      <v-card-title class="white--text">昵称</v-card-title>
      <v-avatar color="primary" size="64" class="avatar">
        <span class="white--text headline">浩燃</span>
      </v-avatar>
    </div>
    <v-card height="80px" flat>
      <v-card-actions class="list">
        <v-btn depressed width="25%" text to="/attention">
          <span>关注</span>
          <span>0</span>
        </v-btn>
        <v-btn depressed class="white" width="25%" text to="/fans">
          <span>粉丝</span>
          <span>0</span>
        </v-btn>
        <v-btn depressed class="white" width="25%" text to="/article">
          <span>帖子</span>
          <span>0</span>
        </v-btn>
        <v-btn depressed class="white" width="25%" text to="/favorites">
          <span>收藏</span>
          <span>0</span>
        </v-btn>
      </v-card-actions>
    </v-card>
    <div class="infoItem" @click="$router.push('/profiledetails')">
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
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer";
import { request } from "@/utils/request";
// import axios from "axios";
export default {
  data() {
    return {};
  },
  components: {
    Footer,
  },
  mounted() {
    request({
      url: "/profile",
      method: "get",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // this.$router.push("/404");
      });
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 100px;
  position: relative;
  background: url("../../assets/img.jpg");
  background-size: cover;
}
.avatar {
  position: absolute;
  right: 10px;
  top: 65px;
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
  height: 80px;
}
</style>