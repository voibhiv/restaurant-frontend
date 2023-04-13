<template>
  <div>
    <notifications
      group="notifications"
      position="bottom center"
      class="notification-style"
    />

    <section class="py-0 position-relative main-section">
      <!-- {{ isLoginPage }} -->
      <Header v-if="!isLoginPage" />
      <div class="page-content-div">
        <Nuxt />
      </div>

      <!-- <Footer /> -->
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@organisms/Header";

export default {
  components: {
    Header,
  },

  computed: {
    isMobile() {
      if (this.$isMobile) {
        return this.$isMobile();
      } else {
        return false;
      }
    },

    isLoginPage() {
      return this.$nuxt.$route.name.toLowerCase() === "login-page" || false;
    },
  },

  mounted() {
    if (process.client) {
      this.checkLogin();
    }
  },

  methods: {
    ...mapActions("auth", ["checkLogin"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

::v-deep html {
  position: relative;
  min-height: 100%;
}

@font-face {
  font-family: "Roboto", sans-serif;
  src: url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
}

::v-deep p,
::v-deep a,
::v-deep h1,
::v-deep h2,
::v-deep h3,
::v-deep span {
  font-family: "Roboto", sans-serif;
}
::v-deep .vue-notification {
  // styling
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: $_secondary;

  // default (secondary)
  background: $_error !important;
  border-left: 5px solid $_error-shade !important;

  // types (green, amber, red)
  &.success {
    background: $_success !important;
    border-left: 5px solid $_success-shade !important;
  }

  &.warn {
    background: $_warn !important;
    border-left: 5px solid $_warn-shade !important;
  }

  &.error {
    background: $_error !important;
    border-left: 5px solid $_error-shade !important;
  }
}

::v-deep .page-content-div {
  flex: 1 0 auto;
}

::v-deep .main-section {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  flex-shrink: 0;
}

::v-deep .nuxt-link-a,
::v-deep .nuxt-link-a:hover,
::v-deep .nuxt-link-a:focus,
::v-deep .nuxt-link-a:active {
  text-decoration: none !important;
}
</style>