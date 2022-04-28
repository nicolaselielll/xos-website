<template>
    <div class="footer">
        <div class="menu-container">
            <div class="menu">
                <span class="menu-item">Experiences</span>
                <span class="menu-item">Living</span>
                <span class="menu-item">Destinations</span>
                <span class="menu-item">Charter</span>
            </div>
        </div>
        <div class="footer-info">
            <v-row>
                <v-col cols="12" md="3">
                    <Logo />
                </v-col>
                <v-col cols="12" xs="6" sm="4" md="3">
                    <p class="p-small">hello@xosyacht.com<br>+358 50 466 2223</p>
                </v-col>
                <v-col cols="12" xs="6" sm="4" md="3">
                    <p class="p-small">Hernesaarenranta 37<br>00100, Helsinki</p>
                </v-col>
                <v-col cols="12" sm="4" md="3">
                    <div class="copyright">
                        <p class="p-small">Xos Yacht © 22<br><a href="https://struggle.wtf">Site by Struggle C&amp;C</a></p>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
.menu-container {
    padding: 60px 120px;
    display: flex;
    justify-content: flex-end;
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

.footer-info {
    border-top: 0.5px solid rgba(0,0,0,0.1);
    padding: 60px 120px;
}

.footer-info .p-small {
    line-height: 2
}
.copyright {
    text-align: right;
    color: #2D2D2D;
    opacity: 0.8;
}

@media only screen and (max-width: 960px) {
    .menu-container {
        padding: 50px;
        display: flex;
        justify-content: flex-start;
    }
    .footer-info {
        padding: 50px;
    }
    .copyright {
        text-align: left;
    }
}
@media only screen and (max-width: 600px) {
    .menu-container {
        display: none;
    }
    .footer-info {
        padding: 25px;
    }
}

</style>