<template>
  <div id="app">
    <section>
      <header>
        <h1>Clémentine & Nicolas</h1>
      </header>
      <main>
        <router-view/>
      </main>
    </section>
    <footer>
      <div>
        <p class="right">
          <a href="mailto:love@cleme-nico.fr">love@cleme-nico.fr</a>
        </p>
        <p>
          Copyright © Nicolas Duthoit - {{creationYear}}{{currentYear}}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
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
        return ' - ' + currentYear
      }
    }

  }
}
</script>
<style lang="scss">
  @import './assets/styles/main.scss';
  @import './assets/styles/variables.scss';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: $background-color;
  }

  footer {
    padding: 10px 40px;
    width: 100%;
    background-color: $theme-color;

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
  }

  header {
    text-align: center;
  }

  section {
    flex: 1 0 auto;
  }
</style>
