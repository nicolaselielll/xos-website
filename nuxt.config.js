import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - xos',
    title: 'xos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    clubPlugins: {
      splitText: true,
      scrollSmoother: true,
    }
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      document.body.classList.add("page-entering");
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    afterEnter(el) {
      this.$nuxt.$emit("refresh-scroll");
      this.$nuxt.$emit("start-scroll");

      setTimeout(() => {
        document.body.classList.remove("page-transitioning", "page-entering");
      }, 50);
    },

    beforeLeave(el) {
      this.$nuxt.$emit("stop-scroll");
      document.body.classList.add("page-transitioning", "page-leaving");
    },
    afterLeave(el) {
      document.body.classList.remove("page-leaving");
      this.$nuxt.$emit("reset-scroll");
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShaking: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: '',
          secondary: ''
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["gsap"]
  },
}
