<template>
  <div>
    <v-text-field label="学号" v-model="studentId"></v-text-field>
    <v-btn @click="Login">登录</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import { request } from "@/utils/request";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      studentId: null,
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),

    Login() {
      const _this = this;
      request({
        url: "/login",
        method: "post",
        data: { userNumber: this.studentId },
      })
        .then((res) => {
          console.log(res);
          if (res.data.message === "success") {
            _this.userToken = res.data.authorization;
            console.log(_this.userToken);
            _this.changeLogin({ Authorization: _this.userToken });
            this.$router.push("/home");
          }
          // debugger;

          // console.log(res);
          // if (res.data.status === 200) {
          //   this.$router.push("/home");
          // }
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/404");
        });
    },
  },
};
</script>

<style scoped>
</style>