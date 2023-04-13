<template>
  <div v-if="!mobileNavbar">
    <b-navbar type="light" class="navbar-top" fixed="top">
      <b-container fluid="sm">
        <b-navbar-brand class="mb-0 logo-navbar">
          <NuxtLink :to="'/home'">
            <span>Grão Food's</span>
          </NuxtLink>
        </b-navbar-brand>
        <b-nav-form>
          <Button :label="getUser ? getUser.name: 'Usuário'" :disabled="true" :outline="true" icon="person-fill" :route="''" class="ml-4 info-button-user" />
        </b-nav-form>
      </b-container>
    </b-navbar>
  </div>

  <!-- MOBILE -->
  <div v-else class="mobile-navbar">
    <b-navbar type="light" class="navbar-top">
      <b-container fluid="sm" class="navbar-mobile-div">
        <Icons icon="oab-menu" type="svg" @clicked="openSideMenu" />
        <b-navbar-brand class="mb-0 logo-navbar" v-if="!isExpanded">
          <NuxtLink :to="'/home'">
            <span>Grão Food's</span>
          </NuxtLink>
        </b-navbar-brand>
        <b-nav-form>
          <Button :outline="true" :label="getUser ? getUser.name: 'Usuário'" icon="person-fill" :disabled="true" :route="''" class="info-button-user"/>
        </b-nav-form>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>

import Button from '@atoms/Button';
import { mapGetters } from 'vuex';

export default {

  name: "NavBar",
  // Assets
  components: {
    Button
  },
  // directives: {},
  // filters: {},
  // mixins: [],
  // extends: {},
  // provide: {},
  // inject: {},
  // template: {},
  // props:  {},
  // propsData: {},
  data() {
    return {
      windowWidth: process.client ? window.innerWidth : 1000,
      isExpanded: false
    }
  },
  computed: {
    mobileNavbar: function () {
      return this.windowWidth <= 991;
    },
    ...mapGetters("auth", ["getUser"])
  },
  // Lifecycle Hooks
  //beforeCreate () {},
  // beforeMount () {},
  mounted() {
    if (process.client) {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    }
  },
  // beforeUpdate () {},
  // updated () { },
  // activated () {},
  // deactivated () {},
  // beforeDestroy () {},
  // destroyed () {},
  methods: {

    openSideMenu() {
      //  this.$refs.navBarLeftRef.
      this.$root.$emit('bv::toggle::collapse', 'sidebar-left')
    },
    goHome() {
      if (this.$router.history.current.path == "/home") {
        if (process.client) {
          window.location.reload();
        }
      }
    },

  }
  // render: {},
  // renderError: {}



};
</script>

<style lang="scss" scoped>
.logo-navbar {
  cursor: pointer;

  span {
    color: $_light-white;
  }

}

.image-title {
  width: 94px !important;
  height: 22px !important;
}

.navbar-top {
  background-color: $_blue-strong;
  height: 90px;
}

.navbar-top img {
  height: 64px;
  width: 80px;
  border-radius: 50%;
}

.navbar-bottom {
  background-color: $_primary;
  padding: 0 !important;
  margin-top: 122px !important;

  .disabled {
    background-color: $_primary-shade !important;
  }
}

::v-deep .icon-bootstrap {
  margin-left: 0;
}

.mobile-navbar ::v-deep .icon-main-div {
  cursor: pointer;
}

.icon-oab {
  margin-right: 24px;
}

.mobile-navbar .navbar-mobile-div ::v-deep .icon-svg svg .a {
  fill: $_primary !important;
}
.mobile-navbar .navbar-mobile-div ::v-deep .icon-svg:hover svg .a {
  fill: $_primary_shade !important;
}
.mobile-navbar .navbar-mobile-div ::v-deep .icon-svg:active svg .a {
  fill: $_primary_shade !important;
}

.mobile-navbar .logo-navbar {
  margin-left: 0 !important;
  margin-right: auto !important;

  img {
    height: 40px;
    margin-right: 15px;
  }
}

.title-div {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;

  img {
    margin: auto 35px auto auto;
    width: auto;
  }
}

.title-div ::v-deep .title-title {
  flex: 1;
  margin-right: auto;
  margin-left: 0;
  margin-top: auto;
  margin-bottom: auto;
  span {
    font-size: 29px;
    font-weight: 400 !important;
  }
}

::v-deep .social-links-div {
  background-color: $_background-light-grey !important;
  padding: 0 !important;
  height: 32px !important;
}

@media only screen and (max-width: 479px) {
  .btnIsExpaded {
    display: none !important;
  }
}

@media only screen and (max-width: 767px) {
}

@media only screen and (max-width: 991px) {
}

@media only screen and (min-width: 992px) {
}
</style>