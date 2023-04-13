<template>
  <div class="page-login-content">
    <b-container fluid class="max-content">
      <b-row class="max-row">
        <b-col lg="5" cols="12" class="max-content inputs-forms">
          <InputFormsLogin />
        </b-col>
        <b-col
          lg="7"
          cols="12"
          class="max-content image-background-login"
        ></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InputFormsLogin from "@organisms/InputFormsLogin.vue";
export default {
  name: "login",
  components: {
    InputFormsLogin,
  },
};
</script>

<style lang="scss" scoped>
.page-login-content {
  width: 100%;
  height: 100%;
}

.max-content {
  width: 100%;
  height: 100%;
}

.max-row {
  height: 100%;
}

.image-background-login {
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("https://blog.rcky.com.br/wp-content/uploads/2021/09/pizza-show.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: -1px 0px 9px 4px $_grey;

  @media (max-width: 991px) {
    display: none;
  }
}

.inputs-forms {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>