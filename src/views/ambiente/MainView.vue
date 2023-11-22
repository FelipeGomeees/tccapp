<script>
import CoreTaskCard from '@/components/cards/CoreTaskCard.vue'
import CoreScreen from '@/components/always/CoreScreen.vue'
import FormTarefa from '@/components/form/tarefas/TarefaDialog.vue'
import SideAmbiente from '@/components/side/side-ambiente/SideAmbiente.vue';
import CoreFilter from '@/components/filter/CoreFilter.vue';
import axios from 'axios'

export default {
    name: 'ContatoView',
    components: {
        CoreTaskCard,
        CoreScreen,
        FormTarefa,
        SideAmbiente,
        CoreFilter,
    },

    data() {
        return {
            detail: false,
            progress: 10,
            bufferValue: 100,
            modoLista: false,
            selecionado: null,
            filter: false,
            tarefas: null,
            dialogTarefa: false,
            loading: true,
        };
    },

    methods: {
        $_load(where) {
            this.filter = false;
            const idUsuarioAmbiente = sessionStorage.getItem('usuarioambiente');
            const idAmbiente = sessionStorage.getItem('ambiente');
            let dados = {
                idAmb: idAmbiente,
                idUsuAmb: idUsuarioAmbiente,
            };
            if (where) {
                dados.where = {};
                if (where.campo) { 
                    dados.where[where.campo] = [where.datainicial, where.datafinal];
                }   else {
                    return;
                }
                // if (where.colaboradas) {
                //     dados.where.visibidade = null,
                // }
                // if (where.colaboradas) {
                //     dados.where.visibidade = null,
                // }
            } else {
                dados = {
                    idAmb: idAmbiente,
                    idUsuAmb: idUsuarioAmbiente,
                }
            }
            this.loading = true;
            const res = axios.get(
                `/tarefa/detalhado/todos`,
                { params: dados },
                
            );
            res.then((item) => {
                this.tarefas = item.data;
                console.log(item.data);
                this.loading = false;
            });
        },

        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        OpenDetail(bool) {
            this.detail = bool;
        },
    },

    created() {
       this.$_load();
    },
}
</script>

<template>
    <core-screen hasPrincipal hasSide :detail="detail">
        <template v-slot:main>
            <div class="header">
                <h2># Designações</h2>
            </div>
            <br/>
            <v-divider></v-divider>
            <!-- <div class="search">
                <v-text-field outlined append-icon="mdi-magnify"
                dense>
                </v-text-field>
            </div> -->
            
            <div class="tag-filtro">
                <div class="acoes">
                    <v-text-field
                        outlined
                        dense
                        append-icon="mdi-magnify"
                        label="Pesquisar Tarefa"
                        class="mx-4 input"
                    ></v-text-field>
                    <v-btn color="white" v-if="modoLista" @click="modoLista = !modoLista">
                        <v-icon>mdi-view-list</v-icon></v-btn>
                    <v-btn color="white" v-else @click="modoLista = !modoLista">
                        <v-icon>mdi-card-multiple-outline</v-icon></v-btn>
                    <v-btn color="primary form-icon" @click="filter = !filter"><v-icon>mdi-filter</v-icon></v-btn>
                    <v-btn color="primary" @click="dialogTarefa = !dialogTarefa">Nova Tarefa</v-btn>
                </div>
            </div>
            <div class="task-container" v-if="!loading">
                <div v-for="(item, index) in tarefas" :key="index" class="card">
                    <core-task-card @click.native="selecionado = item; OpenDetail(true);" 
                    :dados="item"></core-task-card>
                </div>
            </div>
            <h3 class="d-flex justify-center" v-if="false">
                Nenhuma tarefa por aqui...
            </h3>    
            <v-dialog v-model="dialogTarefa" max-width="840px">
                <v-card-title class="text-h5 primary">
                    <v-icon class="form-icon">mdi-calendar-check</v-icon>Nova Tarefa
                </v-card-title>
                <form-tarefa
                @finalizar="dialogTarefa = false"
                ></form-tarefa>
            </v-dialog>
            <v-dialog
            v-model="filter"
            persistent
            width="500"
            >
                <core-filter @change="$_load" label="Data" tarefa>
                </core-filter>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-ambiente :dados="selecionado"
             @close="detail = false"/>
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
        color: #ffffff;
        transform: translateY(11px);
        background-color: #ff9d1c;
        padding-left: 12px;
        padding-right: 12px;
        box-shadow: -15px 5px #a5a5a5;
    }

    .tag-filtro {
        width: 100%;
        display: flex;
        justify-content: right;
        padding-right: 80px;
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

    .card {
        width: 32%;
    }

    .task-container {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    }

    .task-container > * {
        margin: 4px;
    }

    .acoes * {
        margin-left: 5px;
    }

    .acoes {
        display: flex;
    }

    .data-header {
        display: flex;
        align-items: center;
    }

    .input {
        width: 400px;
    }

    .form-icon {
        margin-right: 5px;
    }

     >>> .v-dialog {
        overflow-y: visible;
    }
</style>