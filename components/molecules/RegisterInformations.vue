<template>
  <div class="content-text-register">
    <HtmlContent :classesText="'login-title'" :html="title" />
    <HtmlContent :classesText="'login-subtitle'" :html="subtitle" />
  </div>
</template>

<script>
import HtmlContent from "@atoms/HtmlContent";

export default {
  name: "RegisterInformations",

  components: {
    HtmlContent
  },

  data() {
    return {
      title: "Registre-se",
      subtitle:
        "Preencha os campos abaixo e clique em 'Registrar'",
    };
  },
};
</script>

<style lang="scss" scoped>
.content-text-register {
  margin-bottom: 10px;
}
</style>