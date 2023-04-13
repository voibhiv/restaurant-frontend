<template>
    <NuxtLink v-on:click.native="clicked" class="icon-main-div nuxt-link-a" :to="route" v-if="route"> 
      <b-icon v-if="type=='bootstrap'" :icon="icon"  class="icon-bootstrap" :animation="animation"/>
      <HtmlContent v-if="type=='svg'" :html="path" class="icon-svg" :showLink="false"/>
    </NuxtLink>
    <a v-on:click="clicked" class="icon-main-div" :href="href" v-else-if="href"> 
      <b-icon v-if="type=='bootstrap'" :icon="icon"  class="icon-bootstrap" :animation="animation"/>
      <HtmlContent v-if="type=='svg'" :html="path" class="icon-svg" :showLink="false"/>
    </a>
    <div v-on:click="clicked" v-else class="icon-main-div">
      <b-icon v-if="type=='bootstrap'" :icon="icon"  class="icon-bootstrap" :animation="animation"/>
      <HtmlContent v-if="type=='svg'" :html="path" class="icon-svg" :showLink="false"/>
    </div>
</template>

<script>
const _Types = ['bootstrap', 'svg'];
import icons from "@/assets/icons.json";
import HtmlContent from '@atoms/HtmlContent';

export default {
  name: 'Icons',
  components: {
    'HtmlContent': HtmlContent
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'bootstrap',
      validator: value => _Types.includes(value),
    },
    icon: {
      type: String,
      required: true,
    },
    animation: {
      type: String,
      required: false,
      default: null,
    },
    href: {
      type: String,
      required: false,
      default: null,
    },
    route: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    path() {
      return icons[this.icon];
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  }
}
</script>

<style lang="scss" scoped>
   

  ::v-deep .html-content-div {
    overflow: visible !important;
  }
</style>