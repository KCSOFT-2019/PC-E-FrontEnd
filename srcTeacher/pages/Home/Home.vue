<template>
  <div>
    <ToolBar>
      <template v-slot:logo>
        <v-avatar>
          <img src="../../assets/Xust.jpg" alt="" />
        </v-avatar>
      </template>
      <template v-slot:title>我要发布</template>
      <template v-slot:todo>发布</template>
    </ToolBar>

    <v-form class="mt-3">
      <div class="type">
        <div style="font-weight: 600; font-size: 14px" class="mx-2">类型</div>
        <input type="text" class="ipt ml-2" placeholder="输入电脑故障类型" />
      </div>
      <div class="mt-2" style="background-color: white">
        <v-textarea solo flat no-resize label="详细恰当的描述"></v-textarea>
        <div style="width: 90vw">
          <v-file-input
            prepend-icon="mdi-camera-outline"
            accept="image/*"
            label="File input"
            width="100px"
          >
          </v-file-input>
        </div>
      </div>
    </v-form>
    <Footer></Footer>
  </div>
</template>
       
<script>
import ToolBar from "@/components/ToolBar/ToolBar";
import Footer from "@/components/Footer/Footer";

export default {
  data() {
    return {};
  },
  components: {
    ToolBar,
    Footer,
  },
};
</script>

<style scoped>
.type {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
}

input::-webkit-input-placeholder {
  font-size: 12px;
}

.ipt {
  outline-style: none;
}

.addImg {
  border: 1px solid #eee;
}
</style>