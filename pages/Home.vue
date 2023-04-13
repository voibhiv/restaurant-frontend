<template>
  <div class="main-section-page" v-if="!loading">
    <div class="page-spacing">
      <b-container fluid="sm" v-if="getUser">
        <b-row>
          <SearchBar
            placeholder="Buscar Restaurantes, Pratos..."
            icon="search"
            class="SearchBarInput"
            :default="searchText"
            @onChange="likeChange"
          />

          <RestaurantsComponent
            :restaurants="getRestaurants"
          />
        </b-row>
      </b-container>

      <div v-else>
        <InfoText text="Para utilizar os recursos, por favor faça login: " link="Fazer Login" destino="/login"/>
      </div>
    </div>
  </div>

  <div v-else>
    <LoadingSpinner />
  </div>

</template>

<script>
import SearchBar from "@atoms/SearchBar";
import LoadingSpinner from "@atoms/LoadingSpinner";
import InfoText from "@atoms/InfoText";
import { mapActions, mapGetters } from "vuex";
import RestaurantsComponent from '@organisms/RestaurantsComponent.vue';

export default {
  name: "home",

  components: {
    SearchBar,
    InfoText,
    RestaurantsComponent,
    LoadingSpinner
  },

  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("restaurants", ["getRestaurants"]),
  },

  data() {
    return {
      searchText: "",
      loading: false
    };
  },

  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.fetch();
      this.loading = false;
    }, "1000");
  },

  methods: {
    likeChange(val) {
      this.searchText = val;
      this.fetch();
    },

    fetch() {

      this.loading = true;

      this.fetchRestaurants(this.searchText).then((data) => {
        this.loading = false;
      });
    },

    ...mapActions("restaurants", ["fetchRestaurants"]),
  },
};
</script>

<style lang="scss" scoped>
.main-section-page {
  position: relative;
  display: block;
  margin-top: 90px;

  @media(max-width: 990px) {
    margin-top: 0px;
    padding: 0px 25px;
  }

}

.page-spacing {
  padding: 30px 0px;
}
</style>