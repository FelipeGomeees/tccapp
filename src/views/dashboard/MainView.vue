<script>
import CoreTaskCard from '@/components/cards/CoreTaskCard.vue'
import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreScreen from '@/components/always/CoreScreen.vue'

export default {
    name: 'ContatoView',
    components: {
        CoreTaskCard,
        CoreDialog,
        CoreScreen,
    },

    data() {
        return {
            detail: false,
            progress: 10,
            bufferValue: 100,
        };
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        OpenDetail(bool) {
            console.log(bool);
            this.detail = bool;
        },

        ShowProfile() {

        },
    },
}
</script>

<template>
    <core-screen>
        <template v-slot:main>
            <div class="header">
                <h2># Designações</h2>
                <div class="container-filtros">
                    <v-card class="pa-2"><v-icon>mdi-view-grid</v-icon> Exibição</v-card>
                    <v-card class="pa-2"><v-icon>mdi-filter</v-icon> Filtros</v-card>
                </div>
            </div>
            <v-divider></v-divider>
            <div class="tag-filtro">
                <v-icon>mdi-calendar-heart</v-icon> Criadas em 17 de Março de 2023
            </div>
            <core-task-card @click.native="OpenDetail(true)"></core-task-card>
            <core-task-card></core-task-card>
            <core-task-card></core-task-card>
            <core-task-card></core-task-card>
            <core-task-card></core-task-card>       
        </template>
        <template v-slot:side>
            <v-card class="card-detalhe" v-show="detail">
                <v-card-title class="flex-center">
                    Input Sem Validação
                    <v-icon class="close" @click.native="OpenDetail(false)">
                        mdi-close
                    </v-icon>
                </v-card-title>
                <div class="flex-center">
                    <v-icon class="margin">
                        mdi-github
                    </v-icon>
                    <div>
                        /pServidorWeb
                    </div>
                </div>
                <div class="flex-center">
                    <div class="tags-container">
                    <v-btn color="gray" rounded class="elevation-0 pa-2 tag" height="19px">
                        VUE 3
                    </v-btn>
                    <v-btn color="gray" rounded class="elevation-0 pa-2 tag" height="19px">
                        NUXT
                    </v-btn>
                    </div>
                </div>
                <v-divider></v-divider>
                <v-card-text>
                    Input do formulario de recebimento não aparenta conter
                    nenhum tipo de validação, evitar para desenvolvimento, urgente.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="datas">
                    <div>
                        <v-icon>mdi-calendar-heart</v-icon> Criado em:<br/> 27/03/23 as 14:32
                    </div>
                    <div>
                        <v-icon>mdi-calendar-heart</v-icon> Entrega até:<br/> 30/03/23 as 23:59
                    </div>
                </v-card-text>
                <v-divider></v-divider>
                <br>
                <div class="tags-container">
                    <v-btn color="#65cc5e" rounded class="elevation-0 pa-2 tag" height="19px">
                        Em Desenvolvimento
                    </v-btn>
                </div>
                <div class="tags-container">
                    <v-btn color="yellow" rounded class="elevation-0 pa-2 tag" height="19px">
                        Correção
                    </v-btn>
                </div>
                <v-divider></v-divider>
                <br/>
                <div class="flex-center"> Ações rápidas</div>
                <v-card
                    class="mx-auto"
                    max-width="400"
                    tile
                >
                <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title><v-icon>mdi-paperclip</v-icon> Anexos </v-list-item-title>
                    <v-list-item-subtitle>Clique para verificar arquivos relacionados</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title><v-icon>mdi-forum-outline</v-icon> Comunicação</v-list-item-title>
                    <v-list-item-subtitle>Comunicar-se com a equipe ou com participantes</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title><v-icon>mdi-source-branch</v-icon> Commits</v-list-item-title>
                    <v-list-item-subtitle>Alterações feitas até o momento</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                </v-card>
                <v-divider></v-divider>
                <br/>
                <div class="flex-center">
                    <v-btn>Expandir Informações</v-btn>
                </div>
                <div class="flex-center">
                    <core-dialog></core-dialog>
                </div>
                <br/>
            </v-card>
        </template>
    </core-screen>
</template>

<style scoped>

    .border {
        border: 1px solid red;
    }

    .tag {
        margin-bottom: 10px;
    }

    .tags-container {
        width: 100%;
        text-align: center;
    }

    .flex-center {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    .datas {
        display: flex;
        justify-content: space-around;
    }

    .flex-center {
        display: flex;
        justify-content: center;
    }

    .datas > div {
        width: 50%;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
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
        justify-content: space-between;
    }

    .header > h2 {
        color: #30343f;
        transform: translateY(11px);
    }

    .tag-filtro {
        width: 100%;
        border-top: 1px solid grey;
        padding-top: 10px;
    }
</style>