<template>
  <div class="principal-content" :class="{'login-class': isLogin}">
    <div v-if="isLogin">
      <LoginInformations />
      <LoginInputs @showRegisterForm="switchFormToRegister" />
    </div>

    <div v-else class="register-div-class">
      <RegisterInformations />
      <RegisterInputs @backToLogin="switchFormToLogin"/>
    </div>
  </div>
</template>

<script>
import LoginInputs from "@molecules/LoginInputs";
import LoginInformations from "@molecules/LoginInformations";
import RegisterInputs from "@molecules/RegisterInputs";
import RegisterInformations from "@molecules/RegisterInformations";

export default {
  name: "InputForms",

  components: {
    LoginInputs,
    LoginInformations,
    RegisterInputs,
    RegisterInformations,
  },

  data() {
    return {
      isLogin: true,
    };
  },

  methods: {
    switchFormToRegister() {
      this.isLogin = false;
    },

    switchFormToLogin() {
      this.isLogin = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.principal-content {
  padding: 0px 90px;
  width: 100%;
  height: 100%;

  div {
    width: 100%;
  }

  @media (max-width: 1024px) {
    padding: 0px 15px !important;
  }
}

.login-class {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-div-class {
  padding: 30px 0px;
}

</style>