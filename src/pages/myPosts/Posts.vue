<template>
  <div>
    <ToolBar>
      <template v-slot:logo>
        <v-icon @click="$router.back(-1)">mdi-chevron-left</v-icon>
      </template>
      <template v-slot:title>我的帖子</template>
    </ToolBar>

    <v-card class="my-3" flat v-for="item in myPosts" :key="item.id">
      <div class="tag">{{ item.currentStatus }}</div>
      <div class="card-top">
        <div>
          <v-avatar color="primary" size="48" rounded>
            <span class="white--text headline">燃</span>
          </v-avatar>
        </div>
        <div class="ml-2 userInfo">
          <span>{{ item.userName }}</span>
          <span style="font-size: 12px" class="grey--text lighten-4">{{
            item.createTime
          }}</span>
        </div>
      </div>
      <div class="my-2">#类型： {{ item.fixType }}#</div>
      <div>描述：{{ item.description }}</div>
      <v-img src="../../assets/img.jpg"></v-img>
      <v-divider class="my-1"></v-divider>
      <v-card-actions class="grey lighten-4">
        <v-btn depressed block>
          <v-icon>mdi-comment-processing-outline</v-icon>
          评论
        </v-btn>
        <button
          @click="deletePost(item.id)"
          style="
            position: absolute;
            top: 30px;
            right: 10px;
            background-color: blue;
            color: white;
          "
        >
          删除
        </button>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { request } from "@/utils/request";
import ToolBar from "@/components/ToolBar/ToolBar";
import Footer from "@/components/Footer/Footer";
export default {
  data() {
    return {
      myPosts: [],
    };
  },
  components: {
    ToolBar,
    Footer,
  },
  methods: {
    deletePost(id) {
      // console.log(id);
      request({
        url: `/form/delete?q=${id}`,
        method: "DELETE",
      })
        .then((res) => {
          console.log(res);
          console.log("删除成功");
        })
        .catch((err) => {
          console.log(err);
        });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  },
  mounted() {
    request({
      url: "/form",
      method: "GET",
    }).then((res) => {
      console.log(res);
      this.myPosts = res.data;
    });
  },
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
}

.card-top {
  display: flex;
}

.userInfo {
  display: flex;
  flex-direction: column;
}
.tag {
  padding: 0 10px;
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