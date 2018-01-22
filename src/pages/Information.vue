<template>
  <div class="info">
  	<div>
	    <p>Le mariage civil, officié par <b>Chantal Duthoit</b>, sera célébré le 1er août à 15h à <a href="https://www.google.co.uk/maps/place/Mairie/@50.7719534,3.0745179,17z/data=!4m5!3m4!1s0x47c32dafb910dc91:0xfc08b1e925c5c2cf!8m2!3d50.7719533!4d3.0767117" target="_blank">la Mairie Bousbecque</a> (merci de nous prévenir si vous souhaitez être présent pour que l'on prévoit assez de rafraichissements).</p>
	    <p>La célébration religieuse aura lieu le 4 août à 14h30 à <a href="https://www.google.co.uk/maps/place/Abbaye+royale+de+Saint-Riquier+Baie+de+Somme/@50.1340033,1.9485083,15z/data=!4m5!3m4!1s0x0:0xa15800110d128a9e!8m2!3d50.1340033!4d1.9485083" target="_blank">l'Abbaye de Saint-Riquier</a>.</p> 
	    <p>Le vin d'honneur est prévu à 16h à 18h30 à <a href="https://www.google.co.uk/maps/place/50%C2%B004'26.7%22N+2%C2%B005'03.3%22E/@50.0793271,2.0643625,13.71z/data=!4m14!1m7!3m6!1s0x47dd81605b08f8b1:0x40af13e81621370!2s80620+Domart-en-Ponthieu,+France!3b1!8m2!3d50.074043!4d2.122823!3m5!1s0x0:0x0!7e2!8m2!3d50.074077!4d2.0842403" target="_blank">la Haye à Domart-en-Ponthieu</a> (coordonnées GPS: 50.074083, 2.084250)</p>
	    <small>Veuillez noter que le vin d'honneur aura lieu en extérieur (risque de salir ses chaussures).</small>
    </div>
    <figure>
    	<img v-lazy="url">
    	<figcaption>
    		<small>Copyright <span class="copyright"/> David Brunet</small>
    	</figcaption>
    </figure>
    <GoogleMap v-bind:hasPins='hasPins'/>
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue'
export default {
  components: { GoogleMap },
  data () {
    return {
      hasPins: false,
      url: '../../static/img/information/domart.jpg'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/variables.scss';
.info {
	max-width: $screen-lg;
	margin: auto;
	figure {
		padding: 0 10px 10px;
		margin: 0;

		@media screen and (min-width: $screen-sm) {
			padding: 20px 10px;
			float: left;
			width: 50%;
		}

		@media screen and (min-width: $screen-lg) {
			width: 33.33333%;
		}
	}
	> div {
		text-align: left;
		padding: 20px;
		@media screen and (min-width: $screen-sm) {
			float: right;
			width: 50%;
		}
		@media screen and (min-width: $screen-lg) {
			width: 66.66667%;
		}
	}
}

</style>
