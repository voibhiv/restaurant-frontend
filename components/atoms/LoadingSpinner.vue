<template functional>
  <div class="spinner-div" :class="{'page': props.page}">
    <b-spinner class="icon-icon"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    page: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
   

  .spinner-div {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    align-content: center;
    text-align: center;
    vertical-align: center;
    justify-content: center !important;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  

  .icon-icon {
    color: $_medium-tint;
    width: 38px;
    height: 38px;
    margin-left: 2px;
  }

  .page {
    height: 100vh;
    width: 100vh;
  }
</style>
