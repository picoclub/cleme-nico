<template>
  <div class="not-found">
  	<p>Il semblerai que la fête se passe ailleur.</p>
  	<figure>
  		<img v-lazy="url" alt="Page not found"/>
  	</figure>
  	<p><a href="/">Retourner à la page d'accueil</a></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif'
    }
  }
}
</script>

<style lang="scss">
	.not-found {
		margin: auto;
    max-width: 1200px;
    p {
    	padding: 0 10px;
    }
    figure {
    	margin: 15px 0;
    }
	}
</style>