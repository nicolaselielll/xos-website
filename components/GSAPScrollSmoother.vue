<template>
  <div id="smooth-wrapper">
    <Nav />
    <div class="nav-spacer"></div>
    <div id="smooth-content">
      <slot />
      <Footer />
      <div class="nav-spacer"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

// Note: package is transpiled with nuxt.config.js setting
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import Nav from '../components/Nav'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

let $scrollSmoother = new Vue({
  data() {
    return {
      listenersAdded: false,
      vars: {},
      smoother: null,
    };
  },
  components: {
      Nav
  },
  computed: {
    isTouch() {
      return ScrollTrigger.isTouch;
    },
    progress() {
      return this.get().progress;
    },
    scrollTrigger() {
      return this.get().scrollTrigger;
    },
  },
  methods: {
    create(vars = this.vars) {
      this.smoother && this.smoother.kill();
      this.smoother = ScrollSmoother.create(vars);

      if (!this.listenersAdded) {
        this.listenersAdded = true;
        this.$_addScrollListeners();
      }

      if (vars.effects) {
        this.parseEffects();
      }
    },
    content(...args) {
      return this.get().content(...args);
    },
    effects(...args) {
      return this.get().effects(...args);
    },
    get() {
      if (!this.smoother) {
        this.create();
      }

      return this.smoother;
    },
    getVelocity() {
      return this.get().velocity();
    },
    kill() {
      this.get().kill();
      this.smoother = null;
      this.$_removeScrollListeners();
    },
    offset(...args) {
      return this.get().offset(...args);
    },
    paused(...args) {
      return this.get().paused(...args);
    },
    scrollTo(...args) {
      return this.get().scrollTo(...args);
    },
    scrollTop(...args) {
      return this.get().scrollTop(...args);
    },
    smooth(...args) {
      return this.get().smooth(...args);
    },
    wrapper(...args) {
      return this.get().wrapper(...args);
    },
    refresh() {
      this.get();
      ScrollTrigger.refresh();
    },
    parseEffects() {
      this.killEffects();
      this.get().effects("[data-speed], [data-lag]", {});
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    },
    killEffects(revert = true) {
      this.get()
        .effects()
        .forEach((t) => t.kill(revert));
      ScrollTrigger.refresh();
    },
    $_addScrollListeners() {
      this.$nuxt.$on("stop-scroll", this.$_onStopScroll);
      this.$nuxt.$on("start-scroll", this.$_onStartScroll);
      this.$nuxt.$on("reset-scroll", this.$_onResetScroll);
      this.$nuxt.$on("refresh-scroll", this.$_onRefreshScroll);
    },
    $_removeScrollListeners() {
      this.$nuxt.$off("stop-scroll", this.$_onStopScroll);
      this.$nuxt.$off("start-scroll", this.$_onStartScroll);
      this.$nuxt.$off("reset-scroll", this.$_onResetScroll);
      this.$nuxt.$off("refresh-scroll", this.$_onRefreshScroll);
      this.listenersAdded = false;
    },
    $_onStopScroll() {
      console.log("stopScroll");
    },
    $_onStartScroll() {
      console.log("startScroll");
    },
    $_onResetScroll() {
      console.log("resetScroll");
      this.scrollTop(0);
    },
    $_onRefreshScroll() {
      console.log("refreshScroll");
      this.refresh();
    },
  },
});

Vue.$scrollSmoother = Vue.prototype.$scrollSmoother = $scrollSmoother;

export default {
  name: "GSAPScrollSmoother",
  props: {
    vars: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    vars: {
      immediate: true,
      handler(vars) {
        if (this.$scrollSmoother) {
          this.$scrollSmoother.vars = vars;
        }
      },
    },
  },
  mounted() {
    if (!this.$scrollSmoother.smoother) {
      this.$scrollSmoother.vars = this.vars;
      this.$scrollSmoother.create();
    }
  },
};
</script>
<style scoped>
.nav-spacer {
  height: 110px;
}
</style>