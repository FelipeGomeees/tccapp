<template>
    <div>
        <div class="icon-container" v-if="!stack">
            <div v-for="item in $items" :key="item.useapelido" :class="{ concluido: item.coldatafinalizacao, margem: true}">
                <v-avatar color="#ffb765" :class="{ avatar: true}" size="52px"
                 @click="showCard = !showCard; userInfo = item">   
                    {{(item.usaapelido.slice(0, 2))}}
                </v-avatar>
            </div>
            <div v-if="items.length > 5">
                <v-avatar color='#30343f' class="avatar-dark" size="52px">   
                    +{{items.length - 5}}
                </v-avatar>
            </div>
        </div>
        <div class="icon-container" v-else>
            <div v-for="item in $items" :key="item.useapelido">
                <v-avatar color="#ffb765" class="avatar" :size="size"
                 @click="showCard = !showCard; userInfo = item">   
                    {{(item.usaapelido.slice(0, 2))}}
                </v-avatar>
            </div>
            <div v-if="items.length > 5">
                <v-avatar color='#30343f' class="avatar-dark" :size="size">   
                    +{{items.length - 5}}
                </v-avatar>
            </div>
        </div>
        <v-card v-if="showCard" class="card">
            <v-card-title class="card-title">
                <div class="title-labels">
                    <v-avatar color="#ffb765">
                        {{(userInfo.usaapelido.slice(0, 2))}}
                    </v-avatar>
                    <div class="nomes">
                        <span>{{userInfo.usaapelido}}<br/></span>
                        <h5 class="true-name">#{{userInfo.usunome}}</h5>
                    </div>
                </div>
                <v-icon @click="showCard = !showCard" class="close">mdi-close</v-icon>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle class="sub">
                <div class="social-icons" v-if="false">
                    <v-icon v-if="userInfo.usegithub">mdi-github</v-icon>
                    <v-icon v-if="userInfo.usegoogledrive">mdi-google-drive</v-icon>
                    <v-icon v-if="userInfo.usestackoverflow">mdi-stack-overflow</v-icon>
                </div>
                <a>
                    Detalhes
                </a>
            </v-card-subtitle>
        </v-card>
    </div>
</template>

<script>
// import initialColor from '@/plugins/initialcolor.js';

export default {
    name: 'CoreIconStack',
    props: {
        items: Array,
        stack: Boolean,
    },
    data() {
        return {
            showCard: false,
            userInfo: null,
        };
    },

    methods: {
        // initialColor(initalLetter) {
        //     return initialColor(initalLetter);
        // }
    },

    computed: {
        $items() {
            return this.$props.items.slice(0, 5);
        },
    }
}
</script>

<style scoped>

    .avatar {
        color: #30343f;
        font-weight: 800;
    }

    .avatar-dark {
        color: white;
    }

    .avatar:hover, .avatar-dark:hover {
        cursor: pointer;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }

    .card {
        transition: opacity .5;
        position: absolute;
        z-index: 5;
        width: 300px;
        height: 160px;
        transform: translate(-100px, -100px);
    }

    .card-title {
        justify-content: space-between;
    }

    .close {
        margin-bottom: 50px;
    }

    .nomes {
        margin-left: 10px;
    }

    .title-labels {
        display: flex;
        align-items: center;
    }

    .true-name {
        font-weight: 300;
    }

    .sub {
        display: flex;
        justify-content: space-between;
    }

    .social-icons > * {
        margin-left: 5px;
        cursor: pointer;
    }

    .concluido {
        box-sizing: border-box;
        border: 2px solid green;
        border-radius: 100%;
    }

    .margem {
        margin: 0px 5px 0px 5px;
    }
</style>