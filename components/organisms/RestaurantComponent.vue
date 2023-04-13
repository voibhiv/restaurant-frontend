<template>
  <div class="content-restaurant">
    <b-row v-if="restaurant">
      <div class="menu-page-content">
        <NuxtLink :to="'/home'" class="link-back">
          <Icons icon="arrow-left" type="bootstrap" /><span>Voltar</span>
        </NuxtLink>
        <HtmlContent :classesText="'login-title'" :html="restaurant.name" />
        <HtmlContent
          :classesText="'login-subtitle'"
          :html="restaurant.description"
        />

        <div class="icons-content-header">
          <div class="icon-defines-header">
            <Icons icon="geo-alt-fill" type="bootstrap" />
            {{ restaurant.address }}
          </div>
        </div>

        <MenuRestaurantComponent :menus="filteredItems(0)" :title="'Pratos'"/>
        <MenuRestaurantComponent :menus="filteredItems(1)" :title="'Bebidas'"/>

      </div>
    </b-row>

    <b-row v-else>
      <InfoText text="Nenhum Restaurante encontrado!" />
    </b-row>
  </div>
</template>

<script>
import HtmlContent from "@atoms/HtmlContent";
import InfoText from "@atoms/InfoText";
import MenuRestaurantComponent from "@molecules/MenuRestaurantComponent";

export default {
  name: "RestaurantComponent",

  components: {
    HtmlContent,
    InfoText,
    MenuRestaurantComponent
  },

  props: {
    restaurant: {
      type: [Array, Object],
      default: {},
    },
  },

  methods: {
    filteredItems(type) {
      return this.restaurant.menus.filter((item) => item.type === type);
    }
  }

};
</script>

<style lang="scss" scoped>
.content-restaurant {
  width: 100%;
  margin: 5px 0px;
}

// .content-image {
//   width: 140px;
//   height: 100%;
//   flex: none;
//   margin-right: 10px;

//   img {
//     width: 100%;
//     height: 100%;
//     border-radius: 3px;
//   }
// }

.icons-content {
  bottom: 20px;
  position: absolute;
  color: $_blue-strong;
  display: flex;
  justify-content: center;
  align-items: center;
  ::v-deep .icon-main-div {
    margin-right: 4px;
    margin-bottom: 2px;
  }
}

.icons-content-header {
  margin: 10px 0px;
}

.icon-defines-header {
  display: flex;
  font-size: 15px;
  font-weight: 600;

  ::v-deep .icon-main-div {
    margin-right: 5px;
    margin-bottom: 2px;
  }
}

// @media (max-width: 400px) {}
.content-items {
  flex: 1;
}

.menu-page-content {
  width: 100%;
}

.icon-defines {
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.link-back {
  display: flex;
  text-decoration: none;

  ::v-deep .icon-main-div {
    margin-right: 5px;
  }
}

</style>