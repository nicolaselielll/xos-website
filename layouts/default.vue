<template>
    <div>
      <GSAPScrollSmoother :vars="{ smooth: 1, effects: true, normalizeScroll: true, ignoreMobileResize: false, preventDefault: true, smoothTouch: 1}">
        <nuxt />
      </GSAPScrollSmoother>
    </div>
</template>

<script>
import GSAPScrollSmoother from "~/components/GSAPScrollSmoother";
export default {
  components: {
    GSAPScrollSmoother,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
