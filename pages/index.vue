<template>
  <div>
    <div class="hero">
      <div class="hero-img-container">
        <img class="hero-img" src="/images/hero/lander.png">
        <h1 class="h1">XO Of The Seas</h1>
        <div class="hero-info">

          <div class="desktop">
            <div class="info">
              <div class="info-block">
                <p class="info-title">Guests</p>
                <p>10 + 1</p>
              </div>
              <div class="border"></div> 
              <div class="info-block middle">
                <p class="info-title">Crew</p>
                <p>6</p>
              </div>
              <div class="border"></div> 
              <div class="info-block">
                <p class="info-title">Length</p>
                <p>32m</p>
              </div>
            </div>
            <div class="cta-container">
              <button class="primary-cta explore">Explore XoS now</button>
              <div class="video">
                <img src="/images/icons/play.svg">
              </div>
            </div>
          </div>

          <div class="mobile">
            <div class="video">
              <img src="/images/icons/play.svg">
            </div>
            <button class="primary-cta explore">Explore XoS now</button>
            <div class="info">
              <div class="info-block">
                <p class="info-title">Guests</p>
                <p>10 + 1</p>
              </div>
              <div class="border"></div> 
              <div class="info-block middle">
                <p class="info-title">Crew</p>
                <p>6</p>
              </div>
              <div class="border"></div> 
              <div class="info-block">
                <p class="info-title">Length</p>
                <p>32m</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="sidebar">
        <div></div>
        <span class="email">hello@kksuperyachts.com</span>
        <img class="arrow" src="/images/icons/arrow.svg">
      </div>
    </div>

    <div class="intro section">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="h2">The XoS <br>Superyacht</h2>
        </v-col>
        <v-col cols="12" md="6">
          <p class="p-medium">The Xo of the Seas is 105 feet of pure comfort. The design can be recognized as one of Ed Dubois’s most prestigious work. The exterior is presented in a fantastic and timeless manner. Inside, families and friends can safely enjoy their journey on board, thanks to outstanding build quality and low use by the one time owner. Safety being our top priority, the hull of the XoS is built from the highest steel grade available on the market.</p>
        </v-col>
      </v-row>
    </div>

    <div class="showcase">
      <div class="section">
        <div class="switch">
          <div class="switch-block" @click="close('yacht')"><span class="p-medium" :class="{switchActive: switches[0].switchActive}" >Yacht</span></div>
          <div class="border"></div>
          <div class="switch-block" @click="close('exterior')"><span class="p-medium" :class="{switchActive: switches[1].switchActive}">Exterior</span></div>
          <div class="border"></div>
          <div class="switch-block" @click="close('interior')"><span class="p-medium" :class="{switchActive: switches[2].switchActive}">Interior</span></div>
        </div>
      </div>
      <div class="imgs" v-for="(item, index) in switches" :key="index" :class="{isVisible: item.visible}">
        <div id="showcase-img" class="img1" :style="{ backgroundImage: 'url(' + item.urls[0] + ')' }"><div id="layer"></div></div>
        <div id="showcase-img" class="img2" :style="{ backgroundImage: 'url(' + item.urls[1] + ')' }"><div id="layer"></div></div>
        <div id="showcase-img" class="img3" :style="{ backgroundImage: 'url(' + item.urls[2] + ')' }"><div id="layer"></div></div>
      </div>
    </div>

    <div class="story">
      <div class="section">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="h2">The story<br>of XoS</h2>
          </v-col>
          <v-col cols="12" md="6">
            <p class="p-small">The Xo of the Seas is the story of two friends, both from humble beginnings, with a dream so crazy that only a fool would believe them. The beauty behind the inspirational journey of the XoS can be felt as soon as one comes on board. <br><br>The one-time owner has expressed what the XoS means to him: ”For me, the sole purpose of the Xo is to help everyone on board understand how beautiful life truly is.’’ Gratitude is a concept that one has to always remember and cherish. The XoS is not only a super yacht. The XoS is a tool for people to share love and create memories.</p>
          </v-col>
        </v-row>
      </div>
      <div class="story-img-container">
        <v-row>
          <v-col cols="12" md="4"></v-col>
          <v-col cols="12" md="8">
            <div class="story-img"><div id="story-img-layer"></div></div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="highlights">
      <div class="section">
        <h1 class="h1">XoS Highlights</h1>
      </div>
      <div id="panels" class="panels">
        <div v-for="(panel, index) in panels" :key="index" :class="panel.classes" :style="{ backgroundImage: 'url(' + panel.url + ')' }">
          <div class="panel-gradient" >
            <h4 class="h4">{{ panel.id }}/3</h4>
            <h3 class="h3">{{ panel.desc }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="stats section">
      <div class="heading">
        <v-row>
          <v-col cols="12" md="3">
            <p class="p-large">Yacht Statistics</p>
          </v-col>
          <v-col cols="12" md="9">
            <div class="heading-right-col">
              <h2 class="h2">XoS Yacht<br>Specifications</h2>
              <img src="/images/icons/arrow.svg" class="stats-arrow">
            </div>
          </v-col>
        </v-row>
      </div>
      <div v-for="(list, index) in stats" :key="index" class="stats-list list1">
        <v-row>
          <v-col cols="12" md="3">
            <h4 class="h4">{{ list.heading }}</h4>
          </v-col>
          <v-col cols="12" md="9">
            <div class="list">
              <div v-for="(stat, index) in list.stats" :key="index" :class="stat.classes">
                <p class="p-small stat-title">{{ stat.title }}</p>
                <p class="p-small stat-data">{{ stat.data }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="stat-cta">
        <button class="primary-cta">View All Specs</button>
      </div>
    </div>

    <div class="pricing section">
      <div class="heading">
        <h2 class="h2">Pricing</h2>
        <p class="p-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div class="prices">
        <div class="price-box">
          <h3 class="h3 content title">Low Season</h3>
          <h4 class="h4 content price">from 59,000€ / week + expenses</h4>
        </div>
        <div class="price-box">
          <h3 class="h3 content title">High Season</h3>
          <h4 class="h4 content ">from 69,000€ / week + expenses</h4>
        </div>
      </div>
      <div class="pricing-cta">
        <button class="primary-cta">Enqueries</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        {
          id: 1,
          heading: 'Dimensions & Characteristics',
          stats: [
            {
              title: 'Length / Beam / Draft',
              data: '32m / 7.60m / 7.60m',
              classes: 'list-row',
            },
            {
              title: 'Year',
              data: '2012',
              classes: 'list-row middle',
            },
            {
              title: 'Flag',
              data: 'Malta',
              classes: 'list-row',
            },
          ]
        },
        {
          id: 2,
          heading: 'Naval Architecture',
          stats: [
            {
              title: 'Builder',
              data: 'Ustaoglu Yachts',
              classes: 'list-row',
            },
            {
              title: 'Exterior Design / Interior Design',
              data: 'Ed Dubois / Marko Paananen',
              classes: 'list-row middle',
            },
            {
              title: 'Hull Material',
              data: 'Steel',
              classes: 'list-row',
            },
          ]
        },
        {
          id: 3,
          heading: 'Accommodations',
          stats: [
            {
              title: 'Guests',
              data: '10+1',
              classes: 'list-row',
            },
            {
              title: 'Master Suite / Queen / Double',
              data: '1 / 2 / 2',
              classes: 'list-row middle',
            },
            {
              title: 'Crew',
              data: '6',
              classes: 'list-row',
            },
          ]
        },
      ],
      panels: [
        {
          id: 1,
          classes: 'panel',
          desc: 'Watersports with a view',
          url: '/images/highlights/highlight1.png'
        },
        {
          id: 2,
          classes: 'panel',
          desc: 'Breakfast on deck',
          url: '/images/highlights/highlight2.png'
        },
        {
          id: 3,
          classes: 'panel last',
          desc: 'Cheers!',
          url: '/images/highlights/highlight3.png'
        },
      ],
      switches: [
        {
          name: 'yacht',
          visible: true,
          switchActive: true,
          urls: ['/images/showcase/yacht/yacht1.png', '/images/showcase/yacht/yacht2.png', '/images/showcase/yacht/yacht3.png']
        },
        {
          name: 'exterior',
          visible: false,
          switchActive: false,
          urls: ['/images/showcase/exterior/exterior1.png', '/images/showcase/exterior/exterior2.png', '/images/showcase/exterior/exterior3.png']
        },
        {
          name: 'interior',
          visible: false,
          switchActive: false,
          urls: ['/images/showcase/interior/interior1.png', '/images/showcase/interior/interior2.png', '/images/showcase/interior/interior3.png']
        },
      ] 
    }
  },
  mounted() {

    /* HERO IMG SMOOTHER */

    this.$scrollSmoother.effects('.hero-img', { speed: 'auto' });

    /* SHOWCASE */

    this.$gsap.set('#layer', {
      height: 100 + '%'
    })

     this.$gsap.to('#layer', {
      scrollTrigger: {
        trigger: '.imgs',
        start: 'top 90%',
      },
      duration: 1.5,
      height: 0 + '%',
      ease: 'Power3.easeInOut',
    })

    /* LAYER EFFECT */
    var trigger = ''
    if(window.innerWidth > 960) {
      trigger = '100px'
    } else {
      trigger = '90px'
    }
    
    this.$gsap.utils.toArray(".panel").forEach((section, i) => {
      this.$ScrollTrigger.create({
          trigger: section,
          start: `top ${trigger}`,
          endTrigger: '.last',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false
      })
    });

    /* STORY IMG */

    this.$gsap.to('#story-img-layer', {
      scrollTrigger: {
        trigger: '#story-img-layer',
        start: 'top 90%',
      },
      duration: 1,
      x: -100 + '%',
      ease: 'Power3.easeInOut',
    })

  },
  methods: {
    close(component) {
      this.switches.forEach((item) => {
        if(item.name == component) {
          item.switchActive = true
        } else {
          item.switchActive = false
        }
      })
      this.$gsap.to('#layer', {
        height: 100 + '%',
        duration: 0.6,
        ease: 'Power3.easeInOut',
        onComplete: () => {
         this.set(component)
        },
      })
    },
    set(component) {
      this.switches.forEach((item) => {
        if(item.name == component) {
          this.open()
          item.visible = true
        } else {
          item.visible = false
        }
      })
    },
    open() {
      this.$gsap.to('#layer', {
        height: 0 + '%',
        duration: 0.6,
        ease: 'Power3.easeInOut',
      })
    }
  }
}
</script>
<style scoped>

  /* HERO */

  .hero {
    position: relative;
    height: calc(100vh - 100px);
  }
  .hero-img-container {
    height: calc(100vh - 100px);
    margin-right: 100px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .hero-img {
    height: 110%;
    width: 100%;
    position: absolute;
    object-fit: cover;
  }
  .hero-img-container .h1 {
    color: #fff;
    padding: 8vh 0 0 5vw;
    position: relative;
    z-index: 100
  }
  .hero-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -2px;
  }
  .hero-info .desktop {
    display: flex;
    justify-content: space-between;
  }
  .hero-info .mobile {
    display: none;
  }

  .info {
    height: 90px;
    width: 400px;
    background: #F5F5F5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
  }
  .info-title {
    opacity: 0.4;
    margin-bottom: 10px;
  }
  .border {
    height: 40px;
    width: 1px;
    background: rgba(0,0,0,0.2);
  }

  .cta-container {
    display: flex;
  }
  .video {
    height: 90px; width: 90px;
    backdrop-filter: blur(12px);
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar {
    position: absolute;
    right: 0;
    top: 100px;
    width: 100px;
    height: calc(100% - 100px);
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .email {
    transform: rotate(90deg) translateX(-25%);
    font-size: 14px;
  }
  .arrow {
    width: 30px;
  }

  @media only screen and (max-width: 960px) {
    .sidebar {display: none}
    .hero-img-container {
      margin-right: 0;
    }
    .hero-info .desktop {display: none}

    .hero-info .mobile {
      display: block;
    }
    .explore {width: 100%;}
    .hero-info .info {
      width: 100%;
      justify-content: space-evenly;
      background: #fff;
      bottom: -2px
    }
  }

  /* INTRO */

  .intro {
    height: 70vh;
    display: flex;
    align-items: center;
  }
  .intro .h2 {
    margin-bottom: 20px;
  }

  /* SHOWCASE */

  .showcase .section {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
  }

  .switch {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-end
  }
  .switchActive {
    font-weight: 800;
  }
  .switch-block {
    cursor: pointer;
  }

  .switch .border {
    height: 40px;
    width: 1px;
    background: rgba(0,0,0,0.1);
    margin: 0 40px;
  }

  .imgs {
    display: none;
  }
  .isVisible {
    display: flex;
    justify-content: space-evenly;
  }

  #layer {
    background-color: #fff;
    height: 0%;
    width: 100%;
  }

  #showcase-img {
    display: flex;
    align-items: flex-end;
  }

  .img1 {
    height: 65vh;
    width: 29%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .img2 {
    height: 45vh;
    width: 33%;
    margin: 0 20px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .img3 {
    width: 38%;
    height: 80vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 960px) {
    .img1 {
      height: 65vh;
      width: 100%;
    }
    .img2 {
      height: 45vh;
      width: 100%;
      margin: 20px 0;
    }
    .img3 {
      width: 100%;
      height: 80vh;
    }
    .isVisible {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 600px) {
    .showcase .section {justify-content: center;}
    .switch {justify-content: center;}
    .switch .border {
      margin: 0 30px;
    }
  }

  /* STORY */

  .story {
    padding: 20vh 0 30vh 0;
  }
  .story .section {
    margin-bottom: 20vh;
  }
  .story .h2 {
    margin-bottom: 20px;
  }

  .story-img {
    width: 100%;
    height: 60vh;
    background: url('/images/story-img.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  #story-img-layer {
    height: 100%;
    width: 100%;
    background-color: #fff;
  }

  /* HIGHLIGHTS */

  .highlights .h1 {
    margin-bottom: 60px;
  }
  .panels {
    
  }
  .panel {
    height: calc(100vh - 100px);
    width: 100vw;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .panel-gradient {
    height: 100%; width: 100%;
    padding: 60px;
    background: linear-gradient(rgba(0,0,0,0.2), transparent);
    display: flex;
    justify-content: space-between;
  }
  .panel-gradient .h3 {
    color: #fff;
  }
  .panel-gradient .h4 {
    color: #fff;
  }
  .panel-gradient .h3 {
    text-align: right;
  }

  @media only screen and (max-width: 960px) {
    .panel-gradient {
      padding: 40px;
      display: block;
    }
    .panel-gradient .h3 {
      margin-top: 20px;
      text-align: left;
    }
  }
  @media only screen and (max-width: 600px) {
    .panel-gradient {
      padding: 25px;
    }
  }

  /* STATS */

  .stats {
    padding-top: 30vh;
    padding-bottom: 30vh;
  }
  .stats .heading {
    margin-bottom: 20vh;
  }
  .heading-right-col {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .stats-arrow {
    transform: rotate(45deg);
  }
  .stats-list {
    margin-bottom: 12vh;
  }
  .stats-list .h4 {
    color: #08172E;
    font-weight: 800;
  }
  .stats-list .list {
    margin-top: -3vh;
  }
  .stats-list .list .list-row {
    display: flex;
    justify-content: space-between;
    padding: 3vh 0;
  }

  .stats-list .list .middle {
    border-top: 0.5px solid rgba(0,0,0,0.1);
    border-bottom: 0.5px solid rgba(0,0,0,0.1);
  }

  .stat-cta {
    text-align: right;
  }

  @media only screen and (max-width: 600px) {
    .stats-list .list .list-row p {
      font-size: 12px;
    }
    .stat-list .stat-data {
      text-align: right;
    }
  }

  /* PRICING */

  .pricing {
    margin: 0 0 20vh 0;
  }

  .pricing .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15vh;
  }
  .pricing .heading p {
    width: 32vw;
  }

  .price-box {
    padding: 8vh 5vw;
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vh;
  }
  .price-box .content {
    margin-bottom: -5px;
  }
  .pricing-cta {
    text-align: right;
  }

  @media only screen and (max-width: 960px) {
    .pricing .heading {
      display: block;
      margin-bottom: 12vh;
    }
    .pricing .heading h2 {
      margin-bottom: 5vh;
    }
    .pricing .heading p {
      width: 60vw;
    }

    .price-box {
      padding: 50px;
      display: block;
    }
    .price-box .title {
      margin-bottom: 3vh;
    }

  }
  @media only screen and (max-width: 600px) {
    .pricing .heading p {
      width: 100%;
    }
    .price-box {
      padding: 30px;
      display: block;
    }
    .price-box .title {
      margin-bottom: 2vh;
    }
  }

</style>
