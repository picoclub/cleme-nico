<template>
  <div id="homepage">
    <Countdown v-bind:deadline='deadline'></Countdown>
    <div v-masonry transition-duration="0.3s" item-selector=".item">
      <figure v-masonry-tile class="item" v-for="n in images.length">
        <img v-lazy="images[n - 1]" v-on:click="openGallery(n)"/>
      </figure>
    </div>
    <Gallery v-bind:images='imagesHD'/>
  </div>
</template>

<script>
import Countdown from '../components/Countdown.vue'
import Gallery from '../components/Gallery.vue'
import {images, imagesHD} from '../constants/images.js'

export default {
  components: { Countdown, Gallery },
  data () {
    return {
      deadline: new Date(Date.UTC(2018, 7, 4, 13, 30)),
      isGalleryOpen: false,
      images,
      imagesHD
    }
  },
  beforeMount: function () {
    this.$Lazyload.$on('loaded', () => {
      this.$redrawVueMasonry()
    })
  },
  methods: {
    openGallery: function (index) {
      this.$emit('open', index - 1)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  #homepage {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    figure {
      width: 100%;
      margin: 0;
      cursor: pointer;
      @media screen and (min-width: $screen-xs){
        width: 50%;
        display: inline-block;
      }
      @media screen and (min-width: $screen-md){
        width: 33.333333%;
      }

      &.large {
        @media screen and (min-width: $screen-md){
          width: 50%;
        }
      }

      img {
        padding: 10px;
      }
    }
  }
</style>
