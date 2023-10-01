<template>
    <div class="d-flex justify-center container">
        <div
        class="d-flex flex-column wrapper"
        v-for="(item,i) in dados"
        :key="i"
        >
            <!-- URL / MOSTRAR SE O CARA É O DONO DO AMBIENTE -->
            <div class="quadrado" @click="$_openAmbiente(item)">
                <v-img src="@/assets/logo.png"></v-img>
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
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: grayscale(100%);
        transition: filter 0.5s;
    }

    .quadrado:hover {
        border-radius: 50%;
        filter: grayscale(0%);
        border: 1px solid  #ffb765;
        cursor: pointer;
    }

    .wrapper {
        text-align: center;
        transition: 0.2s;
    }

    .wrapper:hover {
        color: #ffb765;
    }
</style>