<template>
  <div class="content-text-register">
    <HtmlContent :classesText="'login-title'" :html="title" />
    <HtmlContent :classesText="'login-subtitle'" :html="subtitle" />
    <Button
      label="Ver Restautantes"
      class="btn-login"
      :outline="false"
      @btnClicked="emitRedirect"
    />
  </div>
</template>

<script>
import HtmlContent from "@atoms/HtmlContent";
import Button from "@atoms/Button";

export default {
  name: "MessageLogged",

  components: {
    HtmlContent,
    Button
  },

  data() {
    return {
      title: "Você já está logado!",
      subtitle:
        "Clique no botão abaixo para ver os restaurantes disponíveis'",
    };
  },

  methods: {
    emitRedirect() {
      this.$emit("goToHome");
    }
  }
  
};
</script>

<style lang="scss" scoped>
.content-text-register {
  margin-bottom: 10px;
}
</style>