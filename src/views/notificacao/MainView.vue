<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CardNotificacao from '@/components/cardnotificacao/CoreCardNotificacao.vue'
import CoreScreen from '@/components/always/CoreScreen.vue';
import axios from 'axios';
import moment from 'moment';
// import moment from 'moment';


export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CardNotificacao,
        CoreScreen,
    },

    data() {
        return {
            tipo: null,
            dados: null,
            config: {
                fortipoforum: sessionStorage.getItem('tabelaforum'),
                foridtipoforum: sessionStorage.getItem('idforum'),
                foridforum: null,
            },
             notificacoes: null
        };
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY HH:mm');
        },

        $_load() {
            const idUsuAmb= sessionStorage.getItem('usuarioambiente');
            const res = axios.get(
                `/notificacao/${idUsuAmb}`,
            );   
            res.then((dados) => {
                this.notificacoes = dados.data;
            });
        },
    },

    created() {
        this.$_load();
    }
}
</script>

<template>
    <core-screen hasPrincipal hasSide showAsCard minify>
        <template v-slot:main>
                <div class="header">
                    <h2># Notificações </h2>
                </div>
                <br/>
                <br/>
                <div class="d-flex justify-center">
                    <span>Gerencia e interaja com as notificações relevantes para você.</span>
                </div>
            <div v-if="notificacoes">
                <v-divider></v-divider>
                <br/>
                  <div class="d-flex justify-center">
                    <div class="input">
                        <v-text-field
                        outlined
                        dense
                        append-icon="mdi-magnify"
                        v-model="search"
                        label="Pesquisa"
                        class="mx-4"
                        ></v-text-field>     
                    </div>
                    <v-btn color="primary form-icon"><v-icon>mdi-filter</v-icon></v-btn>
                    <v-btn color="error" @click="dialog = !dialog">limpar Tudo</v-btn>
                </div>
                <!-- <h4>Comentários ({{dados.length}})</h4> -->
                <br/>
                    <div  v-for="notificacao in notificacoes" :key="notificacao.id">
                        <card-notificacao :dados="notificacao"></card-notificacao>
                        <br/>
                    </div>
            </div>
        </template>
        <template v-slot:side>
            <!-- <side-tarefas :dados="dadosTarefa"/> -->
        </template>
    </core-screen>
</template>

<style scoped>

    .card-superior {
        width: 100%;
    }

    .flex {
        display: flex;
        width: 100%;
    }

    .card-detalhe {
        width: 410px;
        transition: 1s;
        position: fixed;
        right: 5%;
    }

    .coluna-card {
        overflow: hidden;
        width: 900px;
        margin-right: 410px;
    }

    .flex-center {
        display: flex;
        justify-content: center;
    }

    .flex-between {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }


    .datas {
        display: flex;
        justify-content: space-around;
    }

    .datas > div {
        width: 50%;
    }

    .projeto {
        display: flex;
        justify-content: space-between;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

        .header {
        display: flex;
        justify-content: space-between;
    }

    .header > h2 {
        color: #ffffff;
        transform: translateY(11px);
        background-color: #ff9d1c;
        padding-left: 12px;
        padding-right: 12px;
        box-shadow: -15px 5px #a5a5a5;
    }

    /* ESTILO CARDS */

    .container-filtros {
        display: flex;
        justify-content: right;
        margin-right: 15px;
    }

    .container-filtros > * {
        margin-left: 25px;
    }

    .container-filtros > *:hover {
        cursor: pointer;
    }

    .linha-divisora {
        width: 100%;
        height: 5px;
        background-color: #29ba48;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #30343f;
        transform: translateY(11px);
    }

    .tag-filtro {
        width: 100%;
        border-top: 1px solid grey;
        padding-top: 10px;
    }

    .tag {
        margin-bottom: 10px;
    }

    .tags-container {
        width: 100%;
        text-align: center;
    }

    .conteudo {
        height: 150px;
        width: 100%;
        border-bottom: 1px solid black;
    }

    .expand {
        width: 70%;
    }

    .form-icon {
        margin-right: 15px;
    }
</style>