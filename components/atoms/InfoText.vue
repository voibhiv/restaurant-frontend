<template>
  <div class="main-div">
    <b-container fluid="sm" class="info-text-div">
      <b-row>
        <p>
          {{ text }}
          <Link v-if="link" :link="destino" :label="link" class="link-login-restaurant"/>
        </p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Link from "@atoms/Link";

export default {
  name: "InfoText",
  // Assets
  // components: {},
  // directives: {},
  // filters: {},
  // mixins: [],
  // extends: {},
  // provide: {},
  // inject: {},
  // template: {},

  components: {
    Link,
  },

  props: {
    text: {
      type: String,
      description: "texto",
      required: true,
    },

    link: {
      type: String,
      required: false,
    },

    destino: {
      type: String,
      required: false,
    },
  },
  // propsData: {},
  // data() {
  //   return {}
  // },
  // computed: {},
  //watch: {},
  // Lifecycle Hooks
  //beforeCreate () {},
  // created () {},
  // beforeMount () {},
  // mounted () {},
  // beforeUpdate () {},
  // updated () { },
  // activated () {},
  // deactivated () {},
  // beforeDestroy () {},
  // destroyed () {},
  //   methods: {},
  // render: {},
  // renderError: {}
};
</script>

<style lang="scss" scoped>
.main-div {
  width: 100%;
  margin: 0;
}

.main-div p {
  color: $_text-light-color;
  font-size: 80%;
  margin: 0;
}

.info-text-div {
  height: 100%;
  div {
    border-radius: 4px;
    padding: 9px;
    height: 100%;
    background-color: $_background-light-grey;
  }
}

@media (max-width: 991px) {
  .main-div {
    background-color: $_background-light-grey;
  }
}
</style>
