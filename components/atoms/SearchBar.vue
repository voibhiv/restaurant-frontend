<template>
  <b-input-group size="sm" class=" searchBarDiv">
    <b-input-group-prepend is-text class="searchbarIcon">
      <Icons icon="search" type="bootstrap"></Icons>
    </b-input-group-prepend>
    <b-form-input v-model="text" type="search" :placeholder="placeholder" class="searchBarInput" debounce="500"></b-form-input>
  </b-input-group></template>
</template>

<script>
import Icons from '@atoms/Icons';

  export default {
    name: "SearchBar",
    components: {
      Icons
    },
    props: {
      placeholder: {
        type: String,
        required: true,
        default: "Buscar..."
      },
      icon: {
        type: String,
        required: true,
        default: "search"
      },
      default: {
        type: String,
        required: false,
        default: ""
      },
    },
    data: function() {
      return {
          text: this.default,
      }
    },
    watch: {
      text: function (val) {
        this.$emit("onChange", val)
      }
    }
  };
</script>

<style lang="scss" scoped> 

  .input-group-text {
    background-color: $_light-white !important;
    border-right: none;
    width: 48px;
    border-color: $_border-tint;
  }


  .searchBarInput {
    height: 40px !important;
    background-color: $_light-white;
    border-left: none !important;
    border-color: $_border-tint;
  }
  
  
  .searchBarInput:active,
  .searchBarInput:focus {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
  }
  
  .searchBarInput::placeholder {
    color: $_border-tint;
  }
  
  .searchBarInput:active,
  .searchBarInput:hover,
  .searchBarInput:focus {
    background-color: $_light-white;
    border: 0.1px solid $_border-tint !important;
    border-left: none !important;
  }

  .searchBarDiv {
    height: 40px !important;
  }

  .searchbarIcon ::v-deep .icon-bootstrap{
    color: $_border-tint;
    width: 18px;
    height: 18px;
  }

</style>