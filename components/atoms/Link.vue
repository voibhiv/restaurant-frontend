<template>
  <NuxtLink 
    :to="link"
    class="link-a"
    :class="{'disabled':disabled}"
    v-on:click.prevent="btnClicked"
    v-if="link"
  >
    <div v-if="iconLeft" class="icon-div left-icon-div">
      <Icons :icon="iconLeft" :type="iconLeftType" :animation="iconLeftAnimation"></Icons>
    </div>
    <span class="link-label">
      {{label}}
    </span>
    <div v-if="iconRight" class="icon-div">
      <Icons :icon="iconRight" :type="iconRightType" :animation="iconRightAnimation"></Icons>
    </div>
  </NuxtLink>
  <a 
    :href="href"
    target="_blanck"
    class="link-a"
    :class="{'disabled':disabled}"
    v-on:click="btnClicked"
    v-else-if="href"
  >
    <div v-if="iconLeft" class="icon-div left-icon-div">
      <Icons :icon="iconLeft" :type="iconLeftType" :animation="iconLeftAnimation"></Icons>
    </div>
    <span class="link-label">
      {{label}}
    </span>
    <div v-if="iconRight" class="icon-div">
      <Icons :icon="iconRight" :type="iconRightType" :animation="iconRightAnimation"></Icons>
    </div>
  </a>
  <a 
    :href="null"
    target="_blanck"
    class="link-a"
    :class="{'disabled':disabled}"
    v-on:click.prevent="btnClicked"
    v-else
  >
    <div v-if="iconLeft" class="icon-div left-icon-div">
      <Icons :icon="iconLeft" :type="iconLeftType" :animation="iconLeftAnimation"></Icons>
    </div>
    <span class="link-label">
      {{label}}
    </span>
    <div v-if="iconRight" class="icon-div">
      <Icons :icon="iconRight" :type="iconRightType" :animation="iconRightAnimation"></Icons>
    </div>
  </a>
</template>

<script>
// import Icons from '@atoms/Icons';

export default {
  
  name: "Link",
  // Assets
  components: {
    // 'Icons': Icons,
  },
  // directives: {},
  // filters: {},
  // mixins: [],
  // extends: {},
  // provide: {},
  // inject: {},
  // template: {},
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: String,
      required: false,
      default: null
    },
    iconRight: {
      type: String,
      required: false
    },
    iconLeft: {
      type: String,
      required: false
    },
    iconRightType: {
      type: String,
      required: false,
      default: "bootstrap"
    },
    iconLeftType: {
      type: String,
      required: false,
      default: "bootstrap"
    },
    iconRightAnimation: {
      type: String,
      required: false,
      default: null
    },
    iconLeftAnimation: {
      type: String,
      required: false,
      default: null
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
  methods: {
    btnClicked() {
      if(!this.disabled){
        this.$emit("btnClicked", this.id);
      }
    }
  },
  // render: {},
  // renderError: {}
};
</script>

<style lang="scss" scoped>
   

  .link-a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $_primary !important;
    text-decoration: none ;
    width: fit-content !important;
    margin: 0;
    cursor: pointer;
    .disabled {
      color: $_primary-shade !important;
    }
  }

  .link-a span {
    float: left !important;
    font-family: 'Roboto', sans-serif;
  }
  
  .link-a:hover{
    font-weight: bold;
    color: $_primary-shade !important;
  }

  .icon-div {
    width: 18px;
    height: 18px;
    margin-top: auto;
    margin-bottom: auto;
    float: left !important;
    padding-bottom: 22px !important;
  }

  ::v-deep .icon-bootstrap {
    width: 18px;
    height: 18px;
    margin-left: 15px;
  }

  .left-icon-div {
    margin-right: 15px !important;
  }
  .left-icon-div ::v-deep .icon-bootstrap{
    margin-left: 0px !important;
    
  }
  

</style>

