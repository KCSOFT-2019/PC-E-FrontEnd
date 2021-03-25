<template>
  <div>
    <ToolBar>
      <template v-slot:logo>
        <v-icon @click="$router.back(-1)">mdi-chevron-left</v-icon>
      </template>
      <template v-slot:title> Ta的主页 </template>
      <template v-slot:todo> 私信 </template>
    </ToolBar>

    <div class="user-avatar">
      <v-avatar size="80">
        <img src="@/assets/avatar.jpg" alt="" />
      </v-avatar>
      <h3>姓名</h3>
      <v-spacer></v-spacer>
      <div class="follow">
        <v-icon color="primary">mdi-account-plus</v-icon>
        <span style="font-size: 14px">关注</span>
      </div>
    </div>

    <v-card tile flat class="mt-3">
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="list in lists" :key="list.icon">
            <v-list-item-icon>
              <v-icon v-text="list.icon"></v-icon>
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
export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      lists: [
        {
          icon: "mdi-card-account-details-outline",
          item: "身份",
          details: "19407020510",
        },
        { icon: "mdi-school-outline", item: "学院", details: "通信学院" },
        { icon: "mdi-professional-hexagon", item: "专业", details: "通信工程" },
        { icon: "mdi-flag-variant-outline", item: "年级", details: "2099" },
        { icon: "mdi-google-classroom", item: "班级", details: "通信工程2099" },
      ],
    };
  },
};
</script>

<style scoped>
.user-avatar {
  margin-top: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.follow {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
</style>