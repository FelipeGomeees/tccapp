<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import TagForm from '@/components/form/tags/TagForm.vue';
import SideTag from '@/components/side/side-tag/SideTag.vue';
import ShowMore from '@/components/show-more/ShowMore.vue'
import axios from 'axios';

export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        TagForm,
        SideTag,
        ShowMore,
    },

    data() {
        return {
            headers: [
                { text: 'Nome', align: 'start',value: 'tagnome' },
                { text: 'Descrição', align: 'start', value: 'tagdescricao' },
                { text: 'Tipo', value: 'tatdescricao' },
                { text: 'Prioridade', value: 'tagprioridade' },
                { text: 'Cor', value: 'tagcor', align: 'center' },
            ],
            items: null,
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
            this.selecionado = e;
        },

        $_load() {
         // FILTRAR POR AMBIENTE NO FUTURO
            this.loading = true;
            const res = axios.get(
                '/tag/resumo',
            );
            res.then((item) => {
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
                    <h2># Tags</h2>
                </div>
                <br/>
                <div class="d-flex">
                    <span>Gerencie e administre estatisticas sobre as tags utilizadas no seu ambiente.</span>
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
                    <v-btn color="primary" @click="dialog = !dialog">Nova Tag</v-btn>
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
                <template v-slot:item.tagdescricao="{ item }">
                    <show-more :msg="item.tagdescricao"></show-more>
                </template>
                <template v-slot:item.tagcor="{ item }">
                    <v-btn class="elevation-0 pa-2 circulo"
                    :color="item.tagcor" rounded>
                    </v-btn>
                </template>
                </v-data-table>
            </div>
            <v-dialog width="840px" v-model="dialog">
                <v-card-title class="text-h5 primary" >
                    <v-icon>mdi-tag</v-icon> Nova Tag
                </v-card-title>
                <tag-form @sucesso="$_reload"></tag-form>
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
</style>