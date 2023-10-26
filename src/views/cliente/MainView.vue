<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import ClienteForm from '@/components/form/cliente/ClienteForm.vue';
import SideCliente from '@/components/side/side-cliente/SideCliente.vue';
import ShowMore from '@/components/show-more/ShowMore.vue'
import axios from 'axios';
import moment from 'moment';



export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        ClienteForm,
        SideCliente,
        ShowMore,
    },

    data() {
        return {
            headers: [
                {
                    text: 'Nome',
                    align: 'start',
                    sortable: false,
                    value: 'cliente.clinome',
                },
                { text: 'Observação', align: 'center', value: 'obs' },
                { text: 'CPF', value: 'clicpf' },
                // { text: 'Contato', value: 'contato' },
                { text: 'Criado em', value: 'clidatacriacao', align: 'center' },
            ],
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

        $_selectItem(e) {
            sessionStorage.removeItem('edit');
            this.selecionado = e;
        },

        $_load() {
            this.loading = true;
            const res = axios.get(
                '/cliente/detalhado',
            );
            res.then((item) => {
                console.log(item.data, 'cliente');
                this.items = item.data;
                this.loading = false;
            });
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
    <core-screen>
        <template v-slot:main>
            <div class="coluna-card">
                <div class="header">
                    <h2># Clientes</h2>
                </div>
                <br/>
                <div class="d-flex">
                    <span>Administre clientes fisicos e juridicos atualmente cadastrados</span>
                </div>
                <br/>
                <v-divider></v-divider>
                <br/>
                <div class="d-flex justify-end">
                    <v-text-field
                    outlined
                    dense
                    append-icon="mdi-magnify"
                    v-model="search"
                    label="Pesquisa"
                    class="mx-4"
                    ></v-text-field>
                    <v-btn color="primary" @click="dialog = !dialog">Novo Cliente</v-btn>
                </div>
            </div>
            <div class="table">
                <v-data-table
                :headers="headers"
                :items="items"
                item-key="name"
                class="elevation-1 table-header"
                :search="search"
                v-if="!loading"
                @click:row="$_selectItem"
                >
                <template v-slot:item.obs="{ item }">
                    <show-more :msg="item.cliente.cliobservacao"></show-more>
                </template>
                <template v-slot:item.clicontato="{ item }">
                    <a>{{item.cliente.clicontato}}</a>
                </template>
                <template v-slot:item.clidatacriacao="{ item }">
                    {{$_formataData(item.cliente.clidatacriacao)}}
                </template>
                </v-data-table>
            </div>
            <v-dialog width="840px" v-model="dialog">
                <v-card-title class="text-h5 primary" >
                    <v-icon x-large>mdi-tag</v-icon> Novo Cliente
                </v-card-title>
                <cliente-form @sucesso="$_reload"></cliente-form>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-cliente :dados="selecionado" @editar="dialog = true" v-if="selecionado"/>
        </template>
    </core-screen>
</template>

<style scoped>

    .flex {
        display: flex;
        width: 100%;
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

    .header {
        display: flex;
        align-items: center;
        color: #30343f;
        transform: translateY(11px);
    }

    .table {
        width: 97%;
    }

    .v-data-table >>> .v-data-table-header {
         background-color: #ff9d1c;
    }
</style>