<template>
  <div class="menu-section">
    <HtmlContent :classesText="'title-menus'" :html="title" />
    <b-row v-if="menus && menus.length > 0">
      <b-col v-for="(item, i) in menus" :key="i" xl="4">
        <div class="menu-card">
          <div class="menu-card-image">
            <img :src="item.image" />
          </div>

          <div class="content-items">
            <HtmlContent
              :classesText="'card-restaurant-title'"
              :html="item.name"
            />
            <HtmlContent
              :classesText="'card-restaurant-description'"
              :html="item.description"
            />

            <div class="icons-content">

              <div class="icon-defines">
                {{ tranformToReal(item.price) }}
              </div>
            </div>

          </div>
        </div>
      </b-col>
    </b-row>

    <div v-else>
      <InfoText
        text="Nenhum registro encontrado"
      />
    </div>
  </div>

</template>

<script>
import HtmlContent from "@atoms/HtmlContent";
import InfoText from "@atoms/InfoText";

export default {
  name: "MenuRestaurantComponent",

  components: {
    HtmlContent,
    InfoText
  },

  props: {
    menus: {
      type: Array,
      default: [],
      required: false,
    },

    title: {
      type: String,
      default: "Cardápio",
      required: false,
    },
  },

  methods: {
    tranformToReal(number) {
      return number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
    }
  }

};
</script>

<style lang="scss" scoped>
.menu-section {
  margin: 30px 0px;
}

.menu-card {
  height: 250px;
  margin: 10px 0px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.menu-card-image {
  width: 100%;
  height: 140px;
  flex: none;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
}

.content-items {
  flex: 1;
}

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

.icon-defines {
  display: flex;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

</style>