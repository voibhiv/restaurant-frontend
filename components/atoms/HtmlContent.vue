<template>
  <div>
    
    <div 
      v-if="!maxHeight || showAlert"
      :class="'html-content-div ' + classesText " 
    >
        <span v-html="html"/>
    </div>

    <div 
      v-else 
      ref="htmlContentDiv"
      :class="'html-content-div hide-html-content-div ' + classesText" 
      :style="'overflow:hidden !important; max-height:'+maxHeight+'px !important;'" 
    >
        <span v-html="html"/>
    </div>

    <Link 
      v-if="showLink"
      class="link-show-hide"
      :label="textShowHide" 
      @btnClicked="toggle"
    />

  </div>
</template>

<script>
import Link from '@atoms/Link';

export default {

  name: "HtmlContent",
  // Assets
  components: {
    "Link": Link
  },
  // directives: {},
  // filters: {},
  // mixins: [],
  // extends: {},
  // provide: {},
  // inject: {},
  // template: {},
  props: {
    
    html: {
      description: "Content html",
      required: true
    },
    
    maxHeight: {
      description: "Max number of lines",
      required: false,
      default: 0
    },

    classesText: {
      description: "Custom classes of text",
      default: ""
    }

  },
  // propsData: {},
  data() {
    return {
      showAlert : false,
      showLink: false
    }
  },
  computed : {
    textShowHide () {
        return this.showAlert ? "Mostrar menos" : "Mostrar mais";
    },
  },
  //watch: {},
  // Lifecycle Hooks
  //beforeCreate () {},
  // created () {},
  // beforeMount () {},
  mounted () {
    let height = 0;
    if(this.$refs.htmlContentDiv){
      height = this.$refs.htmlContentDiv.scrollHeight;
    }
    // console.log(height)
    // console.log(this.maxHeight)
    if(this.maxHeight > 0){
      this.showLink =  this.maxHeight && height >= this.maxHeight;
    }
  },
  // beforeUpdate () {},
  // updated () { },
  // activated () {},
  // deactivated () {},
  // beforeDestroy () {},
  // destroyed () {},
  methods: {
    toggle: function(){
      this.$emit("toggle");
      this.showAlert = !this.showAlert;
    }
  }
  // render: {},
  // renderError: {}

  
  
};
</script>

<style lang="scss" scoped>

  .advogado-texto { text-align: justify; }
  
  .html-content-div {
    width: 100%;
    margin: 0;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }

  .link-show-hide .link-label{
    margin-top: 10px !important;
  }

  .login-subtitle {
    font-size: 15px;
    color: $_text-light-color;
  }

  .login-title {
    font-size: 6vh;
    font-weight: 600;
    margin-bottom: 8px;
    color: $_blue-strong;
  }

  .title-menus {
    font-size: 4vh;
    font-weight: 600;
    margin-bottom: 8px;
    color: $_blue-strong;
  }

  .card-restaurant-title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    color: $_blue-strong;
  }

  .card-restaurant-description {
    font-size: 11px !important;
    color: $_text-light-color;
  }

</style>
