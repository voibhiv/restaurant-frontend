<template>
  <div class="content-text">
    <HtmlContent :classesText="'login-title'" :html="title" />
    <HtmlContent :classesText="'login-subtitle'" :html="subtitle" />
  </div>
</template>

<script>
import HtmlContent from "@atoms/HtmlContent";

export default {
  name: "LoginInformations",

  components: {
    HtmlContent,
  },

  data() {
    return {
      title: "Seja Bem-vindo!",
      subtitle:
        "Conecte-se para ter acesso aos dados e informações dos restaurantes",
    };
  },
};
</script>

<style lang="scss" scoped>
.content-text {
  margin-bottom: 10px;
}
</style>