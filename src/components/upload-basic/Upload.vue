// upload-basic.vue
<script>
export default {
  name: "UploadBasic",
  methods: {
    _changeFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      const self = this;

      reader.onloadend = function () {
        const result = this.result;
        const img = new Image();
        img.src = result;
        img.onload = function () {
          self.$el.appendChild(img);
        };
      };

      reader.readAsDataURL(file);
    },
  },
  render() {
    return (
      <input
        ref="upBIuput"
        type="file"
        accept="image/*"
        onChange={(e) => {
          this._changeFile(e);
        }}
      />
    );
  },
};
</script>