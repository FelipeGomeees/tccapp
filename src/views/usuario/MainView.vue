<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import SideUsuario from '@/components/side/side-usuario/SideUsuario.vue';
import CoreFilter from '@/components/filter/CoreFilter.vue';
import axios from 'axios';
import moment from 'moment';


export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        SideUsuario,
        CoreFilter,
    },

    data() {
        return {
            headers: [
                {
                    text: 'Apelido',
                    align: 'start',
                    sortable: true,
                    value: 'usaapelido',
                },
                { text: 'Nome', align: 'start',value: 'usunome' },
                { text: 'Email', value: 'usuemail', align: 'start' },
                { text: 'Descrição', value: 'usadescricao' },
                { text: 'Entrou em', value: 'usadataprimeiroacesso' },
                { text: 'Ultimo Acesso', value: 'usadataultimoacesso' },
            ],
            items: [],
            search: null,
            dialog: false,
            selecionado: null,
            loading: true,
            chave: null,
            filter: false,
        };
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        $_selectItem(e) {
            sessionStorage.removeItem('edit');
            this.selecionado = e;
        },

        $_load(where) {
            this.filter = false;
            const idAmbiente = sessionStorage.getItem('ambiente');
            let dados = {
                idAmb: idAmbiente,
            };
            if (where) {
                dados.where = {};
                if (where.campo) { 
                    dados.where[where.campo] = [where.datainicial, where.datafinal];
                }   else {
                    return;
                }
            } else {
                dados = {
                    idAmb: idAmbiente,
                }
            }
            this.loading = true;
            const res = axios.get(
                '/usuarioambiente/detalhado',
                { params: dados },
            );
            res.then((item) => {
                this.items = item.data;
                this.loading = false;
            });
        },

        

        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY HH:mm');
        },

        $_geraChave() {
            const dados = {
                id: sessionStorage.getItem('ambiente'),
            }
            const res = axios.post(
                '/chaveambiente/invite',
                { dados },
            );
            res.then((dados) => {
                console.log(dados);
                this.chave = dados.data[0].chachave;
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
                    <h2># Usuarios</h2>
                </div>
                <br/>
                <div class="d-flex">
                    <span>Gerencie permissões e situações dos colaboradores.</span>
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
                    <v-btn color="primary" @click="dialog = !dialog">Gerar Convite</v-btn>
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
                <template v-slot:item.usadataprimeiroacesso="{ item }">
                    <div>{{$_formataData(item.usadataprimeiroacesso)}}</div>
                </template>
                <template v-slot:item.usadataultimoacesso="{ item }">
                    <div>{{$_formataData(item.usadataultimoacesso)}}</div>
                </template>
                <template v-slot:footer.page-text="items"> 
                    {{ items.pageStart }} - {{ items.pageStop }} de {{ items.itemsLength }} 
                </template>
                </v-data-table>
            </div>
            <v-dialog width="445px" v-model="dialog">
                <v-card>
                    <v-card-title class="text-h5 primary" >
                        <v-icon x-large>mdi-key-variant</v-icon> Gerar Chave
                    </v-card-title>
                    <p class="sub">
                        Compartilhe a chave com um usuario para adiciona-lo ao ambiente,
                        o prazo de expiração é de duas horas.
                    </p>
                    <v-card-text>
                        <v-text-field append-icon="mdi-content-copy" outlined readonly v-model="chave"
                        label="Chave">
                        </v-text-field>
                    </v-card-text>
                    <div class="d-flex justify-center">
                        <v-btn color="primary" @click="$_geraChave">Nova Chave</v-btn>
                    </div>
                    <br/>
                </v-card>
            </v-dialog>
            <v-dialog
            v-model="filter"
            persistent
            width="500"
            >
                <core-filter @change="$_load" label="Data Criação" usuario
                >
                </core-filter>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-usuario :dados="selecionado" @editar="dialog = true" v-if="selecionado"/>
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

    .table {
        width: 97%;
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

    .sub {
        padding: 25px;
    }

    >>> .v-dialog {
        overflow-y: visible;
    }
</style>