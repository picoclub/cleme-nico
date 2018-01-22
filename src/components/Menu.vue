<template>
  <nav id="menu">
    <ul v-bind:class="{'menu-hidden': !isMenuVisible}">
      <li class="menu__item menu__item--toggle" v-on:click="toggleMenu($event)" v-on-clickaway="closeMenu">
        <a href=""><span>Menu</span></a>
      </li>
      <li class="menu__item menu__item--home" v-on:click="closeMenu()">
        <router-link to="/"><span>Accueil</span></router-link>
      </li>
      <li  class="menu__item menu__item--bed" v-on:click="closeMenu()">
        <router-link to="/hebergements"><span>Hébergements</span></router-link>
      </li>
      <li  class="menu__item menu__item--info" v-on:click="closeMenu()">
        <router-link to="/information"><span>Informations</span></router-link>
      </li>
      <li  class="menu__item menu__item--rspv" v-on:click="closeMenu()">
        <router-link to="/rspv"><span>Réponse</span></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  data () {
    return {
      isMenuVisible: false
    }
  },
  methods: {
    toggleMenu: function (event) {
      if (typeof event !== 'undefined') {
        event.preventDefault()
      }
      this.isMenuVisible = !this.isMenuVisible
    },
    closeMenu: function () {
      this.isMenuVisible = false
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/fonts.scss';
  @import '../assets/styles/variables.scss';
  #menu {
    z-index: 100;
    float: right;
    position: absolute;
    top: 34px;
    right: 10px;
    @media screen and (min-width: $screen-xs) {
      right: 20px;
    }
    @media screen and (min-width: $screen-sm) {
      top: 42px;
    }
    @media screen and (min-width: $screen-md) {
      top: 50px;
    }
    ul {
      margin: 0;
    }
    li {
      vertical-align: middle;
      display: block;
      margin-left: 10px;
      @media screen and (min-width: $screen-sm) {
        display: inline-block;
      }

    }
    a {
      text-decoration: none;
      flex-grow: 1;
    }
    
    .menu__item {
      display: flex;
      width: 100%;
      align-items: center;
      @media screen and (min-width: $screen-sm) {
        display: inline-block;
        width: auto;
      }

      a span {
        @media screen and (min-width: $screen-sm) {
          display: none;
        }
        @media screen and (min-width: $screen-md) {
          display: inline-block;
        }
      }
      a::before {
        font-family: "FontAwesome";
        color: $lavande;
        font-size: 30px;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
      }
      &--toggle {
        text-align: right;
        width: auto;
        a span {
          display: none;
          flex-grow: 0;
          @media screen and (min-width: $screen-xs) {
            display: inline-block;
          }
        }

        @media screen and (min-width: $screen-sm) {
          display: none;
        }
        a::before {
          content: '\f191';
          // background-color: $theme-color;
          border-radius: 50%;
          padding: 5px;
          margin-right: 0;
          flex-grow: 1;
          text-align: right;
          @media screen and (min-width: $screen-xs) {
            background-color: transparent;
          }
        }
      }

      &--home a::before {
        content: '\f237';
      }
      &--about a::before {
        content: '\f220';
      }
      &--rspv a::before {
        content: '\f15d';
      }
      &--info a::before {
        content: '\f24b';
      }
      &--bed a::before {
        content: '\f239';
      }

      $border-radius: 5px;
      &--home {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
      &:last-of-type {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &--home,
      &--info,
      &--bed,
      &--rspv,
      &--about {
        background-color: $creme;
        padding: 10px 20px;
        @media screen and (min-width: $screen-sm) {
          background-color: transparent;
          padding: 0 5px;
        }
      }
    }
    .menu-hidden li:not(.menu__item--toggle) {
      display: none;
      @media screen and (min-width: $screen-sm) {
        display: inline-block;
      }
    }
    .menu-hidden .menu__item--toggle {
      a::before {
        content: '\f29a';
      }
    }
  }
</style>