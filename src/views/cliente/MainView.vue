<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import ClienteForm from '@/components/form/cliente/ClienteForm.vue';
import SideCliente from '@/components/side/side-cliente/SideCliente.vue';
import ShowMore from '@/components/show-more/ShowMore.vue'
import CoreFilter from '@/components/filter/CoreFilter.vue';
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
        CoreFilter,
    },

    data() {
        return {
            headers: [
                {
                    text: 'Nome',
                    align: 'start',
                    sortable: true,
                    value: 'cliente.clinome',
                },
                {
                    text: 'Sobrenome',
                    align: 'start',
                    sortable: true,
                    value: 'cliente.clisobrenome',
                },
                { text: 'Observação', align: 'start', value: 'obs', sortable: true },
                { text: 'CPF / CNPJ', value: 'clicpf',sortable: true },
                // { text: 'Contato', value: 'contato' },
                { text: 'Criado em', value: 'clidatacriacao', align: 'center' },
            ],
            items: [],
            search: null,
            dialog: false,
            selecionado: null,
            loading: true,
            filter: false,
        };
    },

    methods: {
        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY HH:mm');
        },
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        $_selectItem(e) {
            sessionStorage.removeItem('edit');
            this.selecionado = e;
        },

        $_load(where) {
            this.filter = false;
            const idAmb = sessionStorage.getItem('ambiente');
            console.log(where, 'whereee');
            let dados = null;
            if (where) {
                dados = {
                    idAmb: idAmb,
                    where: { clidatacriacao: [where.datainicial, where.datafinal] },
                };
            } else {
                dados = {
                    idAmb: idAmb,
                }
            }
            this.loading = true;
            const res = axios.get(
                '/cliente/detalhado',
                { params: dados },
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
    <core-screen hasPrincipal hasSide :detail="!!selecionado">
        <template v-slot:main>
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
                <v-btn color="primary form-icon" @click="filter = !filter"><v-icon>mdi-filter</v-icon></v-btn>
                <v-btn color="primary" @click="dialog = !dialog">Novo Cliente</v-btn>
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
                :footer-props="{
                'items-per-page-text':'Quantidade por página'
                     }"
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
                <template v-slot:item.clicpf="{ item }">
                    <div v-if="item.cliente.clicpf">
                        {{item.cliente.clicpf}}
                    </div>
                    <div v-else>
                        {{item.cliente.clicnpj}}
                    </div>
                </template>
                <template v-slot:footer.page-text="items"> 
                    {{ items.pageStart }} - {{ items.pageStop }} de {{ items.itemsLength }} 
                </template>
                </v-data-table>
            </div>
            <v-dialog width="840px" v-model="dialog">
                <v-card-title class="text-h5 primary" >
                    <v-icon x-large>mdi-tag</v-icon> Novo Cliente
                </v-card-title>
                <cliente-form @sucesso="$_reload"></cliente-form>
            </v-dialog>
            <v-dialog
            v-model="filter"
            width="500"
            >
                <core-filter @change="$_load" label="Data"
                >
                </core-filter>
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

    .v-data-table >>> .v-data-table-header {
         background-color: #ff9d1c;
    }

    .input {
        width: 400px;
    }

    .form-icon {
        margin-right: 15px;
    }

    
     >>> .v-dialog {
        overflow-y: visible;
    }
</style>