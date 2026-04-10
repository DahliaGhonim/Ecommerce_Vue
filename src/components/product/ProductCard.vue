<template>
  <div class="product-card">
    <div class="product-card__top">
      <div class="product-card__img-wrapper">
        <img class="product-card__img" :src="product.thumbnail" />
      </div>
      <div class="product-card__top-right">
        <div class="product-card__top-icon">
          <img class="product-card__heart" :src="heartIcon" />
        </div>
        <div class="product-card__top-icon">
          <img class="product-card__eye" :src="eyeIcon" />
        </div>
      </div>
      <div
        class="title-12px-regular product-card__new"
        v-if="isNew && !product.discountPercentage"
      >
        New
      </div>
      <div class="title-12px-regular product-card__discount" v-if="product.discountPercentage">
        -{{ Math.round(product.discountPercentage) }}%
      </div>
      <div class="title-16px-medium product-card__add-to-cart">
        <p>Add To Cart</p>
      </div>
    </div>
    <p class="title-16px-medium">{{ product.title }}</p>
    <div class="product-card__buttom">
      <p class="title-16px-medium product-card__price">{{ product.price }}</p>
      <img class="product-card__rating" :src="threeStars" />
      <p class="title-14px-semibold product-card__rating-count">(35)</p>
    </div>
  </div>
</template>

<script>
// images
import heartIcon from "@/assets/images/components/product/icon-heart.png";
import eyeIcon from "@/assets/images/components/product/icon-eye.png";
import threeStars from "@/assets/images/components/product/stars-3.png";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // images
      heartIcon,
      eyeIcon,
      threeStars,
    };
  },
};
</script>

<style scoped>
.product-card {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  width: 270px; /* TODO: make it reactive */
  height: 322px; /* TODO: make it reactive */
  cursor: pointer;
}

/* *************************************************** */
/* Product card top section */
/* *************************************************** */
.product-card__top {
  position: relative;
  background-color: var(--color-gray);
  width: 270px;
  height: 250px;
  border-radius: 4px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__img-wrapper {
  width: 190px;
  height: 180px;
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-card__top-right {
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.product-card__top-icon {
  background-color: #ffffff;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card__heart {
  width: 16px;
  height: 14px;
}

.product-card__eye {
  width: 19.23px;
  height: 14px;
}

.product-card__new,
.product-card__discount {
  position: absolute;
  top: 12px;
  left: 12px;

  color: var(--color-white);
  padding: 4px 12px;
  border-radius: 4px;
}

.product-card__new {
  background-color: var(--color-new);
}

.product-card__discount {
  background-color: var(--color-primary);
}

.product-card__add-to-cart {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: var(--color-black);
  color: #ffffff;
  text-align: center;
  padding: 8px 0;
  border-radius: 0 0 4px 4px;

  /* Hidden by default */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card__top:hover .product-card__add-to-cart {
  opacity: 1;
}

/* *************************************************** */
/* Product card bottom section */
/* *************************************************** */

.product-card__buttom {
  margin-top: 8px;

  display: flex;
  align-items: center;
  gap: 8px;
}

.product-card__price {
  color: var(--color-primary);
}

.product-card__rating {
  width: 100px;
  height: 20px;
}

.product-card__rating-count {
  opacity: 0.5;
}
</style>
