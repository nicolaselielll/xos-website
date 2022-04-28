<template>
    <div class="nav">
        <div class="desktop">
            <Logo />
            <div class="menu">
                <span class="menu-item">Experiences</span>
                <span class="menu-item">Living</span>
                <span class="menu-item">Destinations</span>
                <span class="menu-item">Charter</span>
            </div>
            <div class="book"><span>Reserve</span></div>
        </div>
        <div class="mobile">
            <Logo />
            <div class="burger">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../components/Logo'
    export default {
        data() {
            return {
                //
            }
        }
    }
</script>

<style scoped>
.nav {
    height: 100px;
    background: #fff;
    width: 100vw;
    position: relative;
    z-index: 1000;
    border-bottom: 0.5px solid rgba(0,0,0,0.1)
}
.desktop {
    display: flex;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 25px;
}
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
}
.menu-item {
    font-size: 14px;
    cursor: pointer;
    color: rgba(8, 23, 46, 0.8);
}
.book {
    height: 100%;
    width: 100px;
    background: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.book span {
    font-size: 12px;
}
.mobile {
    display: none;
}
@media only screen and (max-width: 960px) {
    .nav {
        height: 90px;
    }
    .desktop {
        display: none;
    }
    .mobile {
        display: flex;
        height: 100%;
        width: 100%;
        padding: 0 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 10px;
    }
    .burger .line {
        background: #08172E;
        height: 2px;
        width: 30px;
    }
}
</style>