<template>
  <div id="countdown">
    <p>
      {{days}}{{ $t('days') }} {{hours}}{{ $t('hours') }} {{minutes}}{{ $t('minutes') }} {{seconds}}{{ $t('seconds') }}
    </p>
  </div>
</template>

<i18n>
{
  "en": {
    "days": "d",
    "hours": "h",
    "minutes": "m",
    "seconds": "s"
  },
  "fr": {
    "days": "j",
    "hours": "h",
    "minutes": "m",
    "seconds": "s"
  }
}
</i18n>

<script>
export default {
  props: ['deadline'],
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: Math.trunc(this.deadline.getTime() / 1000)
    }
  },
  computed: {
    days: function () {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    },
    hours: function () {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },
    minutes: function () {
      return Math.trunc((this.date - this.now) / 60) % 60
    },
    seconds: function () {
      return (this.date - this.now) % 60
    }
  },
  mounted () {
    // console.log(this.deadline)
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  beforeCreqte () {
    console.log(this.deadline)
  }
}
</script>
