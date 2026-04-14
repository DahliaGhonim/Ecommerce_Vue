<template>
  <div class="carousel" :class="{ 'carousel--full-width': fullWidth }">
    <div class="carousel__controls">
      <button class="carousel__controls-btn" @click="prev">
        <img class="carousel__controls-icon" :src="leftArrow" />
      </button>
      <button class="carousel__controls-btn" @click="next">
        <img class="carousel__controls-icon" :src="rightArrow" />
      </button>
    </div>

    <div
      class="carousel__track"
      :class="{ 'carousel__track--grid': rows === 2 }"
      ref="track"
    >
      <slot />
      <div v-if="fullWidth" class="carousel__end"></div>
    </div>
  </div>
</template>

<script>
import leftArrow from "@/assets/images/components/shared/icon-left.png";
import rightArrow from "@/assets/images/components/shared/icon-right.png";

export default {
  name: "AppCarousel",
  props: {
    rows: {
      type: Number,
      default: 1,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
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
}

.carousel--full-width {
  margin-right: calc(-1 * var(--home-horizontal-margin));
}

/* *************************************************** */
/* Carousel track */
/* *************************************************** */
.carousel__track {
  display: flex;
  gap: 20px; /* TODO: figma design deviation (30px) */
  overflow-x: auto;
  overflow-y: clip;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.carousel__track::-webkit-scrollbar {
  display: none;
}

/* Each slot child snaps to start */
.carousel__track > :deep(*) {
  scroll-snap-align: start;
  flex-shrink: 0;
}

.carousel__end {
  flex: 0 0 115px; /* TODO: make it dynamic, not specified by figma */
}

/* Two rows grid */
.carousel__track--grid {
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 60px 30px;
}

/* *************************************************** */
/* Carousel controls */
/* *************************************************** */
.carousel__controls {
  position: absolute;
  top: -80px; /* TODO: make it always inline with title */
  right: 0;
  display: flex;
  gap: 8px;
}

.carousel--full-width .carousel__controls {
  right: 120px; /* TODO: make it always above last card */
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
