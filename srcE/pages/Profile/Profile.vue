<template>
  <div>
    <div class="profile__top">
      <v-card-title class="white--text">{{ userInfo.name }}</v-card-title>
      <v-avatar color="primary" size="56" class="avatar">
        <span class="white--text headline">{{ avatarInfo }}</span>
      </v-avatar>
    </div>
    <v-card height="80px" flat>
      <v-card-actions class="profile__functionList">
        <v-btn depressed class="white" width="30vw" to="/attention">
          <span>关注</span>
          <span>0</span>
        </v-btn>
        <v-btn depressed class="white" width="30vw" to="/fans">
          <span>粉丝</span>
          <span>0</span>
        </v-btn>
        <v-btn depressed class="white" width="30vw" to="/favorites">
          <span>收藏</span>
          <span>0</span>
        </v-btn>
      </v-card-actions>
    </v-card>
    <div class="profile__infoList" @click="$router.push('/profiledetails')">
      <v-icon class="mx-3">mdi-account-details-outline</v-icon>
      个人资料
      <v-icon class="profile__infoListIcon">mdi-chevron-right</v-icon>
    </div>
    <div class="profile__infoList items">
      <div>
        <v-icon class="mx-3">mdi-bell-outline</v-icon>
        通知
        <v-icon class="profile__infoListIcon">mdi-chevron-right</v-icon>
      </div>
      <v-divider></v-divider>
      <div>
        <v-icon class="mx-3">mdi-cog</v-icon>
        设置
        <v-icon class="profile__infoListIcon">mdi-chevron-right</v-icon>
      </div>
      <v-divider></v-divider>
      <div>
        <v-icon class="mx-3">mdi-check-outline</v-icon>
        我完成的
        <v-icon class="profile__listIcon">mdi-chevron-right</v-icon>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer";

import { request } from "@/utils/request";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      userInfo: [],
      avatarInfo: "",
    };
  },

  mounted() {
    request({
      url: "/profile",
      method: "get",
    })
      .then((res) => {
        console.log(res);
        this.userInfo = res.data;
        this.avatarInfo = this.userInfo.name.split("").splice(1).join("");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.profile__top {
  width: 100%;
  height: 100px;
  position: relative;
  background: url("../../assets/bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}
.avatar {
  position: absolute;
  right: 10px;
  z-index: 10;
}
.profile__functionList {
  position: absolute;
  bottom: 5px;
}

.profile__infoList {
  height: 40px;
  background-color: #fff;
  margin-top: 20px;
  line-height: 40px;
}

.items {
  height: 120px;
}

.profile__infoListIcon {
  position: absolute;
  right: 10px;
  line-height: 40px;
}
</style>