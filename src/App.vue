<template>
  <div id="app">
    <section>
      <header class="header">
        <figure>
          <a href="/">
          <img src="../static/img/logo/logo.png"/>
          <span class="heart absolute"/>
          </a>
        </figure>
        <Menu/>
      </header>
      <main>
        <router-view/>
      </main>
    </section>
    <footer>
      <div>
        <p class="right">
          <span class="envelope"/><a href="mailto:love@cleme-nico.fr">love@cleme-nico.fr</a>
        </p>
        <p class="lavande">
          Copyright <span class="copyright"/> Nicolas Duthoit - {{creationYear}}{{currentYear}}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  components: { Menu },
  name: 'app',
  data () {
    return {
      creationYear: 2017
    }
  },
  computed: {
    currentYear: function () {
      const currentYear = new Date().getFullYear()
      if (currentYear !== this.creationYear) {
        return ` -  ${currentYear}`
      }
    }

  }
}
</script>
<style lang="scss">
  @import './assets/styles/main.scss';
  @import './assets/styles/variables.scss';
  @keyframes heartbeat {
    0% {
      transform: scale( .95 );
    }
    20% {
      transform: scale( 1.2 );
    }
    40% {
      transform: scale( .95 );
    }
    60% {
      transform: scale( 1.2 );
    }
    80% {
      transform: scale( .95 );
    }
    100% {
      transform: scale( .95 );
    }
  }

  $max-width: 1200px;
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: $background-color;
  }

  .header {
    background-color: $background-color;
    text-align: left;
    width: 100%;
    max-width: $max-width;
    padding: 20px 10px;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    @media screen and (min-width: $screen-xs){
      padding: 20px;
    }
    @media screen and (min-width: $screen-sm){
      position: relative;
    }

    h1 {
      display: inline-block;
      margin: 0;
      font-size: 1.3em;
      line-height: 1.5em;
      @media screen and (min-width: $screen-xs){
        font-size: 1.5em;
      }
    }
    figure {
      position: relative;
      width: 220px;
      margin: 0;
      @media screen and (min-width: $screen-sm){
        width: 260px;
      }
      @media screen and (min-width: $screen-md){
        width: 300px;
      }
      img {
        padding: 0;
      }
    }
    .heart {
      animation: heartbeat 1.2s infinite;
      display: inline-block;
      &::after {
        content: '\f233';
        font-family: "FontAwesome";
        color: $peche;
        font-size: 40px;
        @media screen and (min-width: $screen-sm){
          font-size: 45px;
        }
      }
      &.absolute {
        position: absolute;
        top: 3px;
        left: 109px;
        @media screen and (min-width: $screen-sm){
          top: 7px;
          left: 130px;
        }
        @media screen and (min-width: $screen-md){
          top: 14px;
          left: 155px;
        }
      }
    }
  }

  footer {
    padding: 10px 40px;
    width: 100%;
    background-color: $creme;

    div {
      margin: 0 auto;
      max-width: 980px;
    }

    p {
      text-align: center;
      font-size: 0.75em;
      @media screen and (min-width: $screen-sm){
        display: inline-block;
      }

      &.right {
        @media screen and (min-width: $screen-sm){
          float: right;
        }
      }
    }
  }

  main {
    text-align: center;
    margin-top: 88px;
    @media screen and (min-width: $screen-sm){
      margin-top: 0;
    }
  }

  section {
    flex: 1 0 auto;
  }

  img {
    width: 100%;
    height: auto;
  }

  .copyright::before {
    content: '\f1a8';
    font-family: "FontAwesome";
  }

  .envelope::before {
    content: '\f1c6';
    font-family: "FontAwesome";
    font-size: 16px;
    color: $lavande;
    margin-right: 5px;
  }
</style>
