<template>
  <NuxtLink 
    :to="route"
    v-on:click="btnClicked"
    class="nuxt-link-a"
    :class="{'btnNormal' : !outline && !clean, 'btnOutline': outline, 'btnClean': clean, 'selected-btn': selected}"  
    :disabled="loading || disabled"
    v-if="type=='link' && route"
  >
    <div v-if="icon && iconSide=='left'" class="icon-div">
      <Icons :icon="icon" :type="iconType"></Icons>
    </div>
    <p v-if="label">
      {{loading? "Carregando...": label}}
    </p>
    <slot></slot>
    <div v-if="icon && iconSide=='right'" class="icon-div">
      <Icons :icon="icon" :type="iconType"></Icons>
    </div>
    <b-spinner label="Carregando..." v-if="loading" class="icon-icon"></b-spinner>
  </NuxtLink>

  <a
    :href="href"
    class="nuxt-link-a"
    :class="{'btnNormal' : !outline && !clean, 'btnOutline': outline, 'btnClean': clean, 'selected-btn': selected}"  
    :disabled="loading || disabled"
    v-on:click="btnClicked"
    v-else-if="type=='link' && href"
  >
    <div v-if="icon && iconSide=='left'" class="icon-div">
      <Icons :icon="icon" :type="iconType"></Icons>
    </div>
    <p v-if="label">
      {{loading? "Carregando...": label}}
    </p>
    <slot></slot>
    <div v-if="icon && iconSide=='right'" class="icon-div">
      <Icons :icon="icon" :type="iconType"></Icons>
    </div>
    <b-spinner label="Carregando..." v-if="loading" class="icon-icon"></b-spinner>
  </a>

  <button
    v-else
    :type="type" 
    :class="{'btnNormal' : !outline && !clean, 'btnOutline': outline, 'btnClean': clean, 'selected-btn': selected}"  
    v-on:click.prevent="btnClicked"
    :href="href || route"
    :disabled="loading || disabled"
  >
    <div v-if="icon && iconSide=='left'" class="icon-div">
      <Icons :icon="icon" :type="iconType"></Icons>
    </div>
    <p v-if="label">
      {{loading? "Carregando...": label}}
    </p>
    <slot></slot>
    <div v-if="icon && iconSide=='right'" class="icon-div">
      <Icons :icon="icon" :type="iconType"></Icons>
    </div>
    <b-spinner label="Carregando..." v-if="loading" class="icon-icon"></b-spinner>
  </button>
</template>

<script>
const _buttonTypes = ["submit", "button", "link"];
// import Icons from '@atoms/Icons';

export default {
 
  
  name: "Button",
  // Assets
  components: {
    // Icons
  },
  // directives: {},
  // filters: {},
  // mixins: [],
  // extends: {},
  // provide: {},
  // inject: {},
  // template: {},
  props: {
    type: {
      type: String,
      required: false,
      default: "link",
      validator: value => _buttonTypes.includes(value)
    },
    label: {
      type: [String,Number],
      required: false
    },
    outline: {
      type: Boolean,
      required: false,
      default: false
    },
    clean: {
      type: Boolean,
      required: false,
      default: false
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    iconType: {
      type: String,
      required: false,
      default: 'bootstrap'
    },
    iconSide: {
      type: String,
      required: false,
      default: "left"
    },
    href: {
      type: String,
      required: false
    },
    route: {
      type: String,
      required: false
    }

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
      this.$emit("btnClicked");
    }
  },
  // render: {},
  // renderError: {}
};
</script>

<style lang="scss" scoped> 

  .btnFeedback {
    margin: 7px;
    text-decoration: none;
  }

  .btnCancel {
    background: $_text-light-color !important;
    border-color: $_text-light-color !important;
    
    &:hover {
      background: $_danger !important;
      border-color: $_danger !important;
    }

  }

  .btnRemove {
    background: $_danger !important;
    border-color: $_danger !important;
    
    &:hover {
      background: $_secondary !important;
      border-color: $_secondary !important;
    }

  }

  .btnList {
    width: 190px !important;
  }

  .btnNormal {
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: $_primary;
    height: 40px;
    font-size: 80%;
    padding: 0 11px;
    border-radius: 4px;
    color: $_light-white;
    border: 1px solid $_primary;

    &:hover {
      background-color: $_blue-strong-shade;
    }
  }

  .btnSuccess {

    background-color: $_success;
    border-color: $_success;
    color: $_light-white;
    border-width: 2px;
    font-size: 0.875rem;
    width: 100%;

    &:hover {
      background-color: $_success-shade;
      border-color: $_success-shade;
    }
  }

  .btnSuccess:disabled {
    background-color: $_success-block !important;
    border-color: $_success-block;
    cursor: not-allowed;
  }

  .btnGrey {

    background-color: $_border-tint;
    border-color: $_border-tint;
    color: $_light-white;
    border-width: 2px;
    font-size: 0.875rem;
    width: 100%;

    &:hover {
      background-color: $_text-light-color;
      border-color: $_text-light-color;
    }
  }

  .btnCompras {
    background-color: $_light-white;
    border-color: $_primary-tint;
    color: $_primary-tint;
    border-width: 2px;
    font-size: 0.875rem;
    width: 100%;

    &:hover {
      background-color: $_primary-tint;
      color: $_light-white;
    }
  }
  
  .btn-login-inscrever {
    justify-content: space-evenly;
    height: 37px;
    width: 100%;

    .icon-div {
      height: auto;
      width: auto;
      margin: unset;
    }
    
  }

  .btn-login-acervo {
    justify-content: space-evenly;
    height: 37px;
    width: 100%;
    text-decoration: none;
    margin-top: 15px;
    .icon-div {
      height: auto;
      width: auto;
      margin: unset;
    }
    
  }

  .btn-login {
    width: 100%;
    background: $_blue-strong;
    border-color: $_blue-strong;
    transition: 0.5s;
    margin-top: 35px;

    &:hover {
      background: $_blue-strong-shade;
    }
  }

  .btn-login-register {
    width: 100%;
    background: $_light-white;
    border-color: $_blue-strong;
    color: $_blue-strong;
    transition: 0.5s;
    margin-top: 15px;

    &:hover {
      background: $_blue-strong;
      color: $_light-white;
    }
  }

  .btnOutline {
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: $_light-white;
    height: 40px;
    font-size: 80%;
    border-radius: 4px;
    color: $_primary;
    padding: 0 11px;
    border: 1px solid $_primary;
    transition: all 0.3s;
  }

  .btnOutline:hover {
    background-color: $_primary;
    color: $_light-white;
  }
  
  .btnOutline:active {
    background-color: $_blue-strong-shade;
    color: $_light-white;
  }
  
  .btnClean {
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: $_light-white;
    height: 40px;
    font-size: 80%;
    border-radius: 4px;
    color: $_medium-tint;
    padding: auto 11px;
    border: 1px solid $_background-light-grey;
    transition: all 0.3s;
  }

  .btnClean:hover {
    background-color: $_primary;
    color: $_light-white;
  }
  
  .btnClean:active {
    background-color: $_blue-strong-shade;
    color: $_light-white;
  }
  
  .btnNormal:disabled,
  .btnOutline:disabled,
  .btnClean:disabled {
    background-color: $_blue-strong-shade;
    color: $_light-white;
  }
  
  .selected-btn{
    background-color: $_blue-strong-shade !important;
    color: $_light-white !important;
  }

  .btnNormal p,
  .btnOutline p,
  .btnClean p{
    padding-left: 11px;
    padding-right: 11px;
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'Roboto', sans-serif;
  }

  .icon-div {
    width: 18px;
    height: 18px;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  .btn-login-inscrever ::v-deep svg path { fill: #fff; }

  ::v-deep .icon-bootstrap,
  .icon-icon {
    width: 18px;
    height: 18px;
    margin-left: 2px;
  }
  
  @media (max-width: 767px){ 
    .btnTurmas {
      margin: 5px 0px;
    }
  }

</style>


