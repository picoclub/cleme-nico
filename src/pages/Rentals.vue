<template>
  <div class="rentals">
  	<p>Veuillez trouver ci-dessous une liste (non-exaustive) des logements aux alentours. Pour les plus courageux d'entre vous, il y a possibilité de camper gratuitement sur place.</p>
    <GoogleMap v-bind:hasPins='hasPins'/>
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue'
export default {
  components: { GoogleMap },
  data () {
    return {
      hasPins: true
    }
  }
}
</script>