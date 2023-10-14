<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import SideUsuario from '@/components/side/side-usuario/SideUsuario.vue';
import ShowMore from '@/components/show-more/ShowMore.vue'
import axios from 'axios';


export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        SideUsuario,
        ShowMore,
    },

    data() {
        return {
            headers: [
                { text: 'Avatar', align: 'center', value: true },
                {
                    text: 'Apelido',
                    align: 'start',
                    sortable: false,
                    value: 'usaapelido',
                },
                { text: 'Nome', align: 'center',value: 'usunome' },
                { text: 'Email', value: 'usuemail', align: 'center' },
                { text: 'Descrição', value: 'usadescricao' },
                { text: 'Entrou em', value: 'usadataprimeiroacesso' },
            ],
            items: [],
            search: null,
            dialog: false,
            selecionado: null,
            loading: true,
            chave: null,
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

        $_load() {
            this.loading = true;
            const res = axios.get(
                '/usuarioambiente/detalhado',
            );
            res.then((item) => {
                this.items = item.data;
                this.loading = false;
            });
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
    <core-screen>
        <template v-slot:main>
            <div class="coluna-card">
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
                    <v-text-field
                    outlined
                    dense
                    append-icon="mdi-magnify"
                    v-model="search"
                    label="Pesquisa"
                    class="mx-4"
                    ></v-text-field>
                    <v-btn color="primary" @click="dialog = !dialog">Gerar Convite</v-btn>
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
                <template v-slot:item.avatar>
                    <h2>HEEEEEEEEEEEEE</h2>
                </template>
                <template v-slot:item.usadescricao="{ item }">
                    <show-more :msg="item.usadescricao"></show-more>
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
        align-items: center;
        color: #30343f;
        transform: translateY(11px);
    }

    .table {
        width: 97%;
    }

    .v-data-table >>> .v-data-table-header {
         background-color: #ffb765;
    }

    .sub {
        padding: 25px;
    }
</style>