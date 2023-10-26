<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
// import axios from 'axios';
import moment from 'moment';



export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
    },

    data() {
        return {
            items: [],
            search: null,
            dialog: false,
            selecionado: null,
            loading: true,
        };
    },

    methods: {
        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY');
        },
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

       async $_print() {
            this.$root.$emit('prepara-print');
            setTimeout(() => {
                window.print();
                this.$root.$emit('prepara-print');
            }, 0)  
        },

        $_load() {
            // this.loading = true;
            // const res = axios.get(
            //     '/cliente/detalhado',
            // );
            // res.then((item) => {
            //     console.log(item.data, 'cliente');
            //     this.items = item.data;
            //     this.loading = false;
            // });
        },

        $_reload() {
            this.$_load();
            this.dialog = false;
        },
    },

    created() {
       this.$_load();
    },
}
</script>

<template>
    <core-screen hasFill>
        <template v-slot:fill>
            <div class="all">
                <div class="header">
                    <h2 class="d-flex"><div class="d-print-none"># </div> Relatório de Tipos de Tarefa</h2>
                </div>
                <br/>
                <div class="d-flex d-print-none">
                    <span>Relatório com a quantidade de tarefas em cada tipo, por cliente</span>
                </div>
                <div class="d-flex header">
                    <b>Periodo: 18/10/2023 a 24/10/2023</b>
                </div>
                <br class="d-print-none"/>
                <v-divider class="d-print-none"></v-divider>
                <br/>
                <div class="d-flex justify-end d-print-none">
                    <v-text-field
                    outlined
                    dense
                    append-icon="mdi-magnify"
                    v-model="search"
                    label="Pesquisa"
                    class="mx-4"
                    ></v-text-field>
                    <v-btn color="primary" @click="$_print"><v-icon>mdi-printer</v-icon></v-btn>
                    <v-btn color="primary"><v-icon>mdi-filter</v-icon></v-btn>
                </div>
            </div>
            <div class="table">
                <table class="tabela">
                    <tr class="cabeçalho">
                        <th class="no-left">Codigo</th>
                        <th>Nome</th>
                        <th>Tempo em Aberto</th>
                        <th>Estado</th>
                        <th>Tipo</th>
                        <th>Participantes</th>
                    </tr>
                    <tr class="linha">
                        <td class="no-left">4</td>
                        <td>Conclusão TCC SI 2023</td>
                        <td>00:01h:34m</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>PROJETO</td>
                        <td>2</td>
                    </tr>
                    <tr class="linha">
                        <td class="no-left no-bottom">5</td>
                        <td class="no-bottom">Novo App de Carga e Descarga</td>
                        <td class="no-bottom">23d:01h:34m</td>
                        <td class="no-bottom">PLANEJAMENTO</td>
                        <td class="no-bottom">PROJETO</td>
                        <td class="no-bottom">1</td>
                    </tr>
                </table>
            </div>
            <!-- <v-dialog width="840px" v-model="dialog">
                <v-card-title class="text-h5 primary" >
                    <v-icon x-large>mdi-tag</v-icon> Novo Cliente
                </v-card-title>
                <cliente-form @sucesso="$_reload"></cliente-form>
            </v-dialog> -->
        </template>
        <!-- <template v-slot:side>
            <side-cliente :dados="selecionado" @editar="dialog = true" v-if="selecionado"/>
        </template> -->
    </core-screen>
</template>

<style scoped>
    .tabela {
        width: 100%;
        border: 1px solid black;
        background-color: rgb(89, 89, 89);
    }

    .cabeçalho {
        background-color:  #ff9d1c;
    }
    .linha {
        background-color: #f2f2f2;
    }

    .all {
        width: 70vw;
    }

    td {
        text-align: center;
    }

    @media print {
        td, th {
            print-color-adjust: exact;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            font-size: 12px;
            padding: 5px;
        }

        .cabeçalho {
            background-color:  #e6e6e6;
        }

        .linha {
        background-color: rgb(255, 255, 255);
        }

        .no-left {
            border-left: 0px;
        }

        .no-bottom {
            border-bottom: 0px;
        }

        .header {
            width: 100vw;
            display: flex;
            justify-content: center;
        }
    }
</style>