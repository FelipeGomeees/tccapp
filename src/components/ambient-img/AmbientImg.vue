<template>
    <div class="d-flex container">
        <div
        class="d-flex flex-column wrapper"
        v-for="(item,i) in dados"
        :key="i"
        >
            <!-- URL / MOSTRAR SE O CARA É O DONO DO AMBIENTE -->
            <div class="quadrado" @click="$_openAmbiente(item)">
                <v-img v-if="i === 1" src="../../../public/img/logo.png" width="100px" height="100px" contain></v-img>
                <v-img v-else src="../../../public/img/vue.png" width="100px" height="100px" contain></v-img>
            </div>
            <p>{{item.ambnome}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import initialColor from '@/plugins/initialcolor.js';

export default {
    name: 'AmbientImg',
    props: {
        dados: {
            type: Array,
        }
    },

    data() {
        return {

        }
    },

    methods: {
        $_openAmbiente(item) {
            sessionStorage.setItem('ambiente', item.idambiente);
            const idusuario = JSON.parse(sessionStorage.getItem('token')).tokidusuario;
            const dados = {
                where: { usaidambiente: item.idambiente, usaidusuario: idusuario },
            };
            const res = axios.get(
                '/usuarioambiente',
                { params: dados },
            );
            res.then((res) => {
                console.log(res, 'res');
                sessionStorage.setItem('usuarioambiente', res.data[0].id);
                this.$router.push({
                    path: '/home',
                })
            });
        }
    },
}
</script>

<style scoped>
    .quadrado {
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: grayscale(100%);
        transition: filter 0.5s;
    }

    .quadrado:hover {
        filter: grayscale(0%);
        cursor: pointer;
    }

    .wrapper {
        text-align: center;
        transition: 0.2s;
    }

    .wrapper:hover {
        color: #ffb765;
    }

    .container  {
        width: 80%;
        display: flex;
        justify-content: space-around;
    }
</style>