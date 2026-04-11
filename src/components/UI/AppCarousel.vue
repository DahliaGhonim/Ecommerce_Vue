<template>
  <div class="carousel">
    <div class="carousel__controls">
      <button class="carousel__controls-btn" @click="prev">
        <img class="carousel__controls-icon" :src="leftArrow" />
      </button>
      <button class="carousel__controls-btn" @click="next">
        <img class="carousel__controls-icon" :src="rightArrow" />
      </button>
    </div>

    <div class="carousel__track" ref="track">
      <slot />
      <div class="carousel__end"></div>
    </div>
  </div>
</template>

<script>
import leftArrow from "@/assets/images/components/shared/icon-left.png";
import rightArrow from "@/assets/images/components/shared/icon-right.png";

export default {
  name: "AppCarousel",
  data() {
    return {
      // images
      leftArrow,
      rightArrow,
    };
  },
  methods: {
    prev() {
      const track = this.$refs.track;
      const itemWidth = track.firstElementChild.offsetWidth + 15; // width + gap
      track.scrollBy({ left: -itemWidth, behavior: "smooth" });
    },
    next() {
      const track = this.$refs.track;
      const itemWidth = track.firstElementChild.offsetWidth + 15; // width + gap
      track.scrollBy({ left: itemWidth, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  margin-right: calc(-1 * var(--home-horizontal-margin));
}

/* *************************************************** */
/* Carousel track */
/* *************************************************** */
.carousel__track {
  display: flex;
  gap: 15px; /* TODO: figma design deviation (30px) */
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
}

/* Hide scrollbar */
.carousel__track::-webkit-scrollbar {
  display: none;
}
.carousel__track {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Each slot child snaps to start */
.carousel__track > :deep(*) {
  scroll-snap-align: start;
  flex-shrink: 0;
}

.carousel__end {
  flex: 0 0 115px; /* TODO: make it dynamic, not specified by figma */
}

/* *************************************************** */
/* Carousel controls */
/* *************************************************** */
.carousel__controls {
  position: absolute;
  top: -80px; /* TODO: make it always inline with title */
  right: 120px; /* TODO: make it always above last card */
  display: flex;
  gap: 8px;
}

.carousel__controls-btn {
  background-color: var(--color-gray);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* TODO: not specified by figma */
.carousel__controls-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.carousel__controls-icon {
  width: 16px;
  height: 14px;
}
</style>
