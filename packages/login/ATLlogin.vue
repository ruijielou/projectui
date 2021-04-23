<template>
  <div class="login earth-login" :style="{ backgroundImage: bgImg }">
    <div
      class="login_content"
      :style="{
        width: uiConfig['loginFormWidth'],
        backgroundColor: uiConfig['loginFormBackgroundColor'],
        marginRight: uiConfig['loginFormRightMargin'],
        marginLeft: uiConfig['loginFormLeftMargin'],
        left: uiConfig['loginFormPosition'] == 'left' ? 0 : 'inherit',
      }"
      :class="{
        loginCenter: uiConfig['loginFormPosition'] == 'center',
      }"
    >
      <div style="padding-bottom: 2em">
        <img v-if="uiConfig['loginPageLogo'] !== 'off'" :src="logoImg" alt="" />
      </div>
      <div class="login_form">
        <div
          class="form_title"
          :style="{
            color: uiConfig['loginFormFontColor'] || 'rgb(152 154 158)',
          }"
        >
          <div class="flex flex_center">
            <span class="c-text1 size16" style="color: inherit">
              <div
                style="min-width: 4em; display: inline-block; line-height: 1"
              >
                ATL
                <span class="">{{ $t("userLogin") }}</span>
              </div>
            </span>
            <!-- <language v-show="uiConfig.languageSwitch !== 'off'" /> -->
            <slot
              v-show="uiConfig.languageSwitch !== 'off'"
              name="language"
            ></slot>
          </div>
          <div v-if="$slots.default">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import bgzh from "@/assets/bgzh.png";

export default {
  name: "LLogin",
  /**
   *logoImg: 登录页面的logo
   *$t: 多语言
   *uiConfig: 页面配置信息
   *bgImg: 登录页面背景图片
   */
  props: {
    logoImg: String,
    $t: Function,
    uiConfig: Object,
    bgImg: String,
  },
  data() {
    return {};
  },

  // computed: {
  //   bgImg() {
  //     return `url(${bgzh})`;
  //   },
  // },
  destroyed() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: red;
  .c-text1 {
    color: #afbcc2;
    cursor: pointer;
    line-height: 1;
    span {
      display: inline-block;
      transition: all 0.5s ease;
    }
  }
  .login_content {
    position: absolute;
    padding-top: 8%;
    right: 0;
    top: 0;
    width: 40%;
    height: 100%;
    text-align: center;
    &.loginCenter {
      right: 50% !important;
      transform: translateX(50%) !important;
      margin-right: 0 !important;
    }
    .login_form {
      width: 65%;
      margin: 0 auto;
      text-align: center;
    }
    .logo {
      height: 60px;
      margin: 0 auto;
      margin-bottom: 36px;
    }
  }
}

@media only screen and (min-width: 321px) and (max-width: 1024px) {
  .login {
    background-size: 300% 100%;
    background: rgba(255, 255, 255, 0.5);
    .login_content {
      width: 100%;
      .login_form {
        width: 80% !important;
      }
    }
  }
}
/deep/ .login_form {
  .el-input__prefix,
  .el-checkbox {
    color: inherit !important;
  }
}
/deep/ .login_form input:-internal-autofill-selected {
  color: inherit;
}
</style>
