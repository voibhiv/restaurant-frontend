<template>
  <div class="main-section-page" v-if="!loading">
  
    <div class="page-spacing">
      <b-container fluid="sm" v-if="getUser">
        <RestaurantComponent :restaurant="getRestaurant" />
      </b-container>

      <div v-else>
        <InfoText
          text="Para utilizar os recursos, por favor faça login: "
          link="Fazer Login"
          destino="/login"
        />
      </div>
    </div>
  </div>

  <div v-else>
    <LoadingSpinner />
  </div>
</template>

<script>
import InfoText from "@atoms/InfoText";
import LoadingSpinner from "@atoms/LoadingSpinner";
import { mapActions, mapGetters } from "vuex";
import HtmlContent from "@atoms/HtmlContent";
import RestaurantComponent from '@organisms/RestaurantComponent.vue';

export default {
  name: "Restaurant",

  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("restaurants", ["getRestaurant"])
  },

  components: {
    InfoText,
    HtmlContent,
    RestaurantComponent,
    LoadingSpinner
  },

  data() {
    return {
      id: "",
      loading: false
    }
  },

  mounted() {
    this.id = this.$route.query.id;

    this.loading = true;
    setTimeout(() => {
      this.fetch();
      this.loading = false;
    }, "1000");
    
  },

  methods: {
    fetch() {
      this.loading = true;

      this.fetchRestaurant(this.id).then((data) => {
        this.loading = false;
      });
    },

    ...mapActions("restaurants", ["fetchRestaurant"]),

  }

};
</script>

<style lang="scss" scoped>
.main-section-page {
  position: relative;
  display: block;
  margin-top: 90px;

  @media (max-width: 990px) {
    margin-top: 0px;
    padding: 0px 25px;
  }
}

.page-spacing {
  padding: 30px 0px;
}
</style>