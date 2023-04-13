<template>
  <div class="content-restaurants">
    <b-row v-if="restaurants && restaurants.length > 0">
      <b-col 
        v-for="(item, i) in restaurants"
        :key="i"
        xl="4"
      >
        <div class="restaurant-card" @click="$redirect(`/restaurant/?id=${item.id}`)">
          <div class="content-image">
            <img :src="item.image" />
          </div>

          <div class="content-items">
            <HtmlContent :classesText="'card-restaurant-title'" :html="item.name" />
            <HtmlContent :classesText="'card-restaurant-description'" :html="item.description" />

            <div class="icons-content">
              <div class="icon-defines">
                <Icons icon="star-fill" type="bootstrap"/>
                {{ item.stars }}
              </div>

              <div class="icon-defines">
                <Icons icon="clock-fill" type="bootstrap"/>
                {{ item.timeToDelivery }}
              </div>

              <div class="icon-defines">
                <Icons icon="bicycle" type="bootstrap"/>
                {{ item.priceToDelivery }}
              </div>
            </div>

          </div>

        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import HtmlContent from "@atoms/HtmlContent";

export default {
  name: "RestaurantsComponent",

  components: {
    HtmlContent
  },

  props: {
    restaurants: {
      type: [Array, Object],
      default: []
    }
  }

};
</script>

<style lang="scss" scoped>
.content-restaurants {
  width: 100%;
  margin: 5px 0px;
}


.restaurant-card {
  height: 130px;
  margin: 10px 0px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: row;
}

.content-image {

  width: 140px;
  height: 100%;
  flex: none;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
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

@media(max-width:400px) {
  .restaurant-card {
    display: block !important;
  }

  .content-image {
    display: none !important;
  }
}

.content-items {
  flex: 1;
}

.icon-defines {
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

</style>