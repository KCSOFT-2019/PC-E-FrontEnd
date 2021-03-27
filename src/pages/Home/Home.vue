<template>
  <div>
    <ToolBar>
      <template v-slot:logo>
        <v-avatar>
          <img src="../../assets/Xust.jpg" alt="" />
        </v-avatar>
      </template>
      <template v-slot:title>我要发布</template>
      <template v-slot:todo>
        <span @click="submitForm">发布</span>
      </template>
    </ToolBar>

    <v-form
      class="mt-3"
      enctype="multipart/form-data"
      method="post"
      name="fileinfo"
    >
      <div class="type_input_container">
        <div style="font-weight: 600; font-size: 14px" class="mx-2">类型</div>
        <input
          type="text"
          class="type__input ml-2"
          placeholder="输入电脑故障类型"
          name="type"
          v-model="fault__type"
        />
      </div>
      <div class="mt-2" style="background-color: white">
        <v-textarea
          solo
          flat
          no-resize
          label="详细恰当的描述"
          name="description"
          v-model="description"
        ></v-textarea>
        <div class="post_image_container">
          <input
            type="file"
            multiple="multiple"
            accept="image/*"
            name="image"
            @change="img__file($event)"
          />
          <img src="" alt="" id="a1" class="post__image" />
        </div>
      </div>
    </v-form>
    <Footer></Footer>
  </div>
</template>
       
<script>
import ToolBar from "@/components/ToolBar/ToolBar";
import Footer from "@/components/Footer/Footer";

import { request } from "@/utils/request";

export default {
  data() {
    return {
      file: null,
      fault__type: null,
      description: null,
    };
  },
  components: {
    ToolBar,
    Footer,
  },
  methods: {
    img__file(event) {
      this.file = event.target.files[0];
      console.log(this.file);
      var URL = window.URL || window.webkitURL;
      let imgURL = URL.createObjectURL(this.file);
      document.getElementById("a1").src = imgURL;
    },
    submitForm() {
      if (this.fault__type === null) {
        alert("输类型，傻逼");
        return;
      } else if (this.description === null) {
        alert("输描述啊傻逼");
        return;
      } else if (this.file === null) {
        alert("上传文件啊傻逼");
        return;
      } else {
        var formData = new FormData();
        formData.append("file", this.file);
        formData.append("type", this.fault__type);
        formData.append("description", this.description);
        request({
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: "/form/addOne",
          method: "POST",
          data: formData,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        document.getElementById("a1").src = "";
        this.fault__type = "";
        this.description = "";
      }
    },
  },
};
</script>

<style scoped>
.type_input_container {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
}

input::-webkit-input-placeholder {
  font-size: 12px;
}

.type__input {
  outline-style: none;
  /* object-fit: contain; */
  width: 80vw;
}

.post__image__container {
  width: 100%;
  object-fit: contain;
}

.post__image {
  width: 100%;
}
</style>