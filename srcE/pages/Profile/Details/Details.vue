<template>
  <div>
    <ToolBar>
      <template v-slot:logo>
        <v-icon @click="$router.back(-1)">mdi-chevron-left</v-icon>
      </template>
      <template v-slot:title>我的信息</template>
      <!-- <template v-slot:todo>修改</template> -->
    </ToolBar>

    <v-card flat tile class="mt-3">
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="list in lists" :key="list.icon">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ list.item }}
            </v-list-item-content>
            <v-list-item-content>
              {{ list.details }}
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar/ToolBar";
import { request } from "@/utils/request";
export default {
  data() {
    return {
      lists: [
        {
          icon: "mdi-phone",
          item: "电话",
          details: `812948121`,
        },
        {
          icon: "mdi-school-outline",
          item: "学院",
          details: "通信",
        },
        {
          icon: "mdi-card-account-details-outline",
          item: "姓名",
          details: "张三",
        },
      ],
      userinfo: [],
    };
  },
  components: {
    ToolBar,
  },

  mounted() {
    request({
      url: "/profile",
      method: "get",
    })
      .then((res) => {
        this.userinfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
</style>