<template>
  <div class="about">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd-EfD-520osv5Bgwg0HpH1KQ2v6cJwvHeiTNkmAYEH7NXZaw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  .about {
  	background-color: $creme;
		iframe {
			width: 100%;
			height: calc(100vh - 180px);
			@media screen and (min-width: $screen-sm) {
				height: calc(100vh - 160px);
			}
			@media screen and (min-width: $screen-md) {
				height: calc(100vh - 168px);
			}
		}
	}
</style>
