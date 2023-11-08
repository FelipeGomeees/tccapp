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
                <div class="logo">
                    <img src="../../../../public/img/TaskerL.png" alt="">
                </div>
                <div class="header">
                    <h2 class="d-flex"><div class="d-print-none"></div> Relatório de Tipos de Tarefa</h2>
                </div>
                <br/>
                <div class="d-flex d-print-none">
                    <span>Relatório com a quantidade de tarefas em cada tipo, por cliente</span>
                </div>
                <div class="d-flex header d-print-none">
                    <b>Periodo: 18/10/2023 a 24/10/2023</b>
                </div>
                <br class="d-print-none"/>
                <v-divider class="d-print-none"></v-divider>
                <br/>
                <div class="acoes">
                    <div class="d-flex justify-end d-print-none">
                        <v-text-field
                        outlined
                        dense
                        append-icon="mdi-magnify"
                        v-model="search"
                        label="Pesquisa"
                        class="mx-4"
                        ></v-text-field>
                        <v-btn color="primary" @click="$_print" class="btn-print"><v-icon>mdi-printer</v-icon></v-btn>
                        <v-btn color="primary"><v-icon>mdi-filter</v-icon></v-btn>
                    </div>
                </div>
            </div>
            <div class="table">
                <table class="tabela">
                    <tr class="cabeçalho">
                        <th class="no-left">Codigo</th>
                        <th>Cliente</th>
                        <!-- <th>Descricao</th> -->
                        <th>Análise</th>
                        <th>Desenvolvimento</th>
                        <th>Erro</th>
                        <th>Projeto</th>
                    </tr>
                    <tr class="linha">
                        <td class="no-left">1</td>
                        <td>Faccat</td>
                        <!-- <td>Concluir documentação do TCC para apresentação dia 08/11/2023</td> -->
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>0</td>
                    </tr>
                    <tr class="linha">
                        <td class="no-bottom no-left">2</td>
                        <td class="no-bottom">Westville C.O</td>
                        <!-- <td>Concluir documentação do TCC para apresentação dia 08/11/2023</td> -->
                        <td class="no-bottom">1</td>
                        <td class="no-bottom">6</td>
                        <td class="no-bottom">3</td>
                        <td class="no-bottom">1</td>
                    </tr>
                    <!-- <tr class="linha">
                        <td class="no-left no-bottom">5</td>
                        <td class="no-bottom">Novo App de Carga e Descarga</td>
                        <td class="no-bottom">23d:01h:34m</td>
                        <td class="no-bottom">PLANEJAMENTO</td>
                        <td class="no-bottom">PROJETO</td>
                        <td class="no-bottom">1</td>
                    </tr> -->
                </table>
            </div>
            <div class="footer d-flex justify-space-between">
                <div>Impresso por: Felipe Gomes</div>
                <div>Periodo: 18/10/2023 a 24/10/2023</div>
            </div>
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

    .logo {
        display: none;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        width: 100px;
        height: 100px;
        filter: grayscale(100);
    }

     .logo img {
        max-width: 100%;
        max-height: 100%; 
        animation: logo 1.2s ease-out;
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

    .acoes {
        width: 100%;
        display: flex;
        justify-content: right;
    }

    .acoes > div {
        width: 50%;
    }

    .btn-print {
        margin-right: 10px;
    }

    .footer {
        visibility:hidden;
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

        .acoes {
            width: 500px;
        }

        .footer {
            display: block;
            visibility: visible;
            position: absolute;
            bottom: 1px;
            width: 98%;
        }

        .logo {
            display: block;
        }
    }
</style>