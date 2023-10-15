<script>
import CoreTaskCard from '@/components/cards/CoreTaskCard.vue'
import CoreScreen from '@/components/always/CoreScreen.vue'
import FormTarefa from '@/components/form/tarefas/TarefaDialog.vue'
import SideAmbiente from '@/components/side/side-ambiente/SideAmbiente.vue';
import axios from 'axios'

export default {
    name: 'ContatoView',
    components: {
        CoreTaskCard,
        CoreScreen,
        FormTarefa,
        SideAmbiente,
    },

    data() {
        return {
            detail: false,
            progress: 10,
            bufferValue: 100,
            modoLista: false,

            tarefas: null,

            dialogTarefa: false,
            loading: true,
        };
    },

    methods: {
        $_load() {
            this.loading = true;
            const idUsuarioAmbiente = sessionStorage.getItem('usuarioambiente');
            const res = axios.get(
                `/tarefa/detalhado/${idUsuarioAmbiente }`,
            );
            res.then((item) => {
                this.tarefas = item.data;
                this.loading = false;
            });
        },

        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        OpenDetail(bool) {
            console.log('a');
            this.detail = bool;
        },
    },

    created() {
       this.$_load();
    },
}
</script>

<template>
    <core-screen>
        <template v-slot:main>
            <div class="header">
                <h2># Designações</h2>
            </div>
            <br/>
            <div class="search">
                <v-text-field outlined append-icon="mdi-magnify"
                dense>
                </v-text-field>
                <v-card class="pa-2" @click="modoLista = !modoLista">
                        <v-icon v-if="modoLista">mdi-view-list</v-icon> 
                        <v-icon v-else>mdi-card-multiple-outline</v-icon> 
                        Exibição
                    </v-card>
                <v-card class="pa-2">
                    <v-icon>mdi-filter</v-icon> Filtros
                </v-card>
            </div>
            <div class="tag-filtro">
                <div class="d-flex">
                    <v-icon>mdi-calendar-heart</v-icon> Criadas em 17 de Março de 2023
                </div>
                <v-btn color="primary" @click="dialogTarefa = !dialogTarefa">Nova Tarefa</v-btn>
            </div>
            <div class="task-container" v-if="!loading">
                <div v-for="(item, index) in tarefas" :key="index">
                    <core-task-card @click.native="OpenDetail(true)"></core-task-card>
                </div>
            </div>
            <h3 class="d-flex justify-center" v-if="false">
                Nenhuma tarefa por aqui...
            </h3>    
            <v-dialog v-model="dialogTarefa" max-width="840px">
                <v-card-title class="text-h5 lighten-2 title">
                    <v-icon>mdi-calendar-check</v-icon>Nova Tarefa
                </v-card-title>
                <form-tarefa
                @finalizar="dialogTarefa = false"
                ></form-tarefa>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-ambiente v-show="detail" @close="detail = false"/>
        </template>
    </core-screen>
</template>

<style scoped>

    .border {
        border: 1px solid red;
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

    /* ESTILO CARDS */

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
        display: flex;
        justify-content: space-between;
        padding-right: 25px;
    }

    .search {
        width: 100%;
        display: flex;
        height: 40px;
        padding-right: 25px;
        border-top: 1px solid grey;
        padding-top: 10px;
    }

    .search > * {
        margin: 0px 4px 0px 4px;
    }

    .task-container {
        display: flex;
        flex-wrap: wrap;
    }

    .task-container > * {
        margin: 4px;
    }
</style>