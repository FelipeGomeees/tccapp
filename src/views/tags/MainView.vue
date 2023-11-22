<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import TagForm from '@/components/form/tags/TagForm.vue';
import SideTag from '@/components/side/side-tag/SideTag.vue';
import ShowMore from '@/components/show-more/ShowMore.vue';
import CoreFilter from '@/components/filter/CoreFilter.vue';
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        TagForm,
        SideTag,
        ShowMore,
        CoreFilter,
    },

    data() {
        return {
            headers: [
                { text: 'Nome', align: 'start',value: 'tagnome' },
                { text: 'Descrição', align: 'left', value: 'tagdescricao' },
                { text: 'Criado em:', value: 'tagdatacriacao', align: 'center' },
                { text: 'Tipo', value: 'tagtipo', align: 'center' },
                { text: 'Prioridade', value: 'tagprioridade', align: 'center' },
                { text: 'Cor', value: 'tagcor', align: 'center' },
            ],
            items: null,
            search: null,
            dialog: false,
            selecionado: null,
            loading: true,
            filter: false,
        };
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY HH:mm');
        },

        $_selectItem(e) {
            this.selecionado = null;
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
                    where: { tagdatacriacao: [where.datainicial, where.datafinal] },
                };
            } else {
                dados = {
                    idAmb: idAmb,
                }
            }
            this.loading = true;
            const res = axios.get(
                `/tag/ambiente`,
                { params: dados },
            );
            res.then((item) => {
                console.log(item);
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
                <h2># Tags</h2>
            </div>
            <br/>
            <div class="d-flex">
                <span>Gerencie e administre estatisticas sobre as tags utilizadas no seu ambiente.</span>
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
                <v-btn color="primary form-icon" @click="filter = !filter"><v-icon>mdi-filter</v-icon></v-btn>
                <v-btn color="primary" @click="dialog = !dialog">Nova Tag</v-btn>
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
                <template v-slot:item.tagdescricao="{ item }">
                    <show-more :msg="item.tagdescricao"></show-more>
                </template>
                <template v-slot:item.tagdatacriacao="{ item }">
                    {{$_formataData(item.tagdatacriacao)}}
                </template>
                <template v-slot:item.tagcor="{ item }">
                    <v-btn class="elevation-0 pa-2 circulo"
                    :color="item.tagcor" rounded>
                    </v-btn>
                </template>
                <template v-slot:footer.page-text="items"> 
                    {{ items.pageStart }} - {{ items.pageStop }} de {{ items.itemsLength }} 
                </template>
                </v-data-table>
            </div>
            <v-dialog width="840px" v-model="dialog">
                <v-card-title class="text-h5 primary" >
                    <v-icon class="form-icon">mdi-tag</v-icon> Nova Tag
                </v-card-title>
                <tag-form @sucesso="$_reload"></tag-form>
            </v-dialog>
            <v-dialog
            v-model="filter"
            persistent
            width="500"
            >
                <core-filter @change="$_load" label="Data Criação"
                >
                </core-filter>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-tag :dados="selecionado" @editar="dialog = true" v-if="selecionado"/>
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

    >>> .v-dialog {
        overflow-y: visible;
    }
</style>