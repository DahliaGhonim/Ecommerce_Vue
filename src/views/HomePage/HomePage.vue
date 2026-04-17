<template>
  <div class="home">
    <FlashSales />
    <div class="home__separator"></div>

    <BrowseCategories />
    <div class="home__separator"></div>

    <ExploreProducts />

    <!-- Section: why choose us -->
    <section class="home__choose-us">
      <ChooseUs
        v-for="chooseUs in chooseUsList"
        :key="chooseUs.id"
        :chooseUs="chooseUs"
      />
    </section>
  </div>
</template>

<script>
// Components
import FlashSales from "./FlashSales.vue";
import BrowseCategories from "./BrowseCategories.vue";
import ExploreProducts from "./ExploreProducts.vue";
import ChooseUs from "@/components/UI/ChooseUs.vue";

// Images
import fastDeliveryIcon from "@/assets/images/views/HomePage/fast-delivery.png";
import customerSerivceIcon from "@/assets/images/views/HomePage/customer-service.png";
import moneyBackIcon from "@/assets/images/views/HomePage/money-back.png";

export default {
  name: "HomePage",
  components: {
    FlashSales,
    BrowseCategories,
    ExploreProducts,
    ChooseUs,
  },
  data() {
    return {
      chooseUsList: [
        {
          id: 0,
          icon: fastDeliveryIcon,
          title: "FREE AND FAST DELIVERY",
          text: "Free delivery for all orders over $140",
        },
        {
          id: 1,
          icon: customerSerivceIcon,
          title: "24/7 CUSTOMER SERVICE",
          text: "Friendly 24/7 customer support",
        },
        {
          id: 2,
          icon: moneyBackIcon,
          title: "MONEY BACK GUARANTEE",
          text: "We reurn money within 30 days",
        },
      ],
    };
  },
};
</script>
