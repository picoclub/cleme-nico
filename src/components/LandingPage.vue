<template>
  <div id="homepage">
    <Countdown :deadline='deadline'></Countdown>
  </div>
</template>

<script>
import Countdown from './Countdown.vue'
export default {
  components: { Countdown },
  data () {
    return {
      deadline: new Date(Date.UTC(2018, 7, 4, 13, 30))
    }
  }
}
</script>

<style>
#homepage{

}
</style>
