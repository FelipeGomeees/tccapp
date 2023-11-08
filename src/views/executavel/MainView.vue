<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import ExecutavelForm from '@/components/form/executavel/ExecutavelForm.vue';
import SideExecutavel from '@/components/side/side-executavel/SideExecutavel.vue';
import ShowMore from '@/components/show-more/ShowMore.vue'
import axios from 'axios';
import moment from 'moment';


export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        ExecutavelForm,
        SideExecutavel,
        ShowMore,
    },

    data() {
        return {
            headers: [
                {
                    text: 'Nome',
                    align: 'start',
                    sortable: true,
                    value: 'exenome',
                },
                { text: 'Descrição', align: 'left',value: 'exedescricao' },
                { text: 'URL', value: 'exeurl' },
                { text: 'Criado em', value: 'exedatacriacao' },
                { text: 'Versão', value: 'exeversao', align: 'center' },
            ],
            items: [],
            search: null,
            dialog: false,
            selecionado: null,
            loading: true,
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
                '/executavel/detalhado',
            );
            res.then((item) => {
                this.items = item.data;
                this.loading = false;
            });
        },

        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY HH:mm');
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
                <h2># Executaveis</h2>
            </div>
            <br/>
            <div class="d-flex">
                <span>Gerencia informaçoes sobre os projetos e executáveis presentes no seu ambiente.</span>
            </div>
            <v-divider></v-divider>
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
                <v-btn color="primary form-icon"><v-icon>mdi-filter</v-icon></v-btn>
                <v-btn color="primary" @click="dialog = !dialog">Novo Executavel</v-btn>
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
                    <template v-slot:item.exedescricao="{ item }">
                        <show-more :msg="item.exedescricao"></show-more>
                    </template>
                    <template v-slot:item.exedatacriacao="{ item }">
                        {{$_formataData(item.exedatacriacao)}}
                    </template>
                    <template v-slot:item.exeurl="{ item }">
                        <a>{{item.exeurl}}</a>
                    </template>
                    <template v-slot:footer.page-text="items"> 
                        {{ items.pageStart }} - {{ items.pageStop }} de {{ items.itemsLength }} 
                    </template>
                </v-data-table>
            </div>
            <v-dialog width="840px" v-model="dialog">
                <v-card-title class="text-h5 primary " >
                    <v-icon class="form-icon">mdi-tag</v-icon> Novo Executavel
                </v-card-title>
                <executavel-form @sucesso="$_reload"></executavel-form>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-executavel :dados="selecionado" @editar="dialog = true" v-if="selecionado"/>
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

        .input {
        width: 400px;
    }

    .form-icon {
        margin-right: 15px;
    }
</style>