<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import TagForm from '@/components/form/tags/TagForm.vue';
import SideTag from '@/components/side/side-tag/SideTag.vue';

export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        TagForm,
        SideTag,
    },

    data() {
        return {
            headers: [
                {
                    text: 'Nome',
                    align: 'start',
                    sortable: false,
                    value: 'tagnome',
                },
                { text: 'Descrição', value: 'tagdescricao' },
                { text: 'Tipo', value: 'tagtipo' },
                { text: 'Prioridade', value: 'tagprioridade' },
                { text: 'Cor', value: 'tagcor', align: 'center' },
            ],
            items: [
            {
                tagnome: 'Desenvolvimento',
                tagdescricao: 'Projeto em estado de coding',
                tagtipo: 'Fluxo',
                tagprioridade: '3',
                tagcor: '#0077',
                tagdark: true,
                acoes: '5'
            },
            {
                tagnome: 'Em Andamento',
                tagdescricao: 'Projeto em estado de coding',
                tagtipo: 'Fluxo',
                tagprioridade: '3',
                tagcor: '#aaffaa',
                tagdark: false,
                acoes: '5'
            },
            {
                tagnome: 'Desenvolvimento',
                tagdescricao: 'Projeto em estado de coding',
                tagtipo: 'Fluxo',
                tagprioridade: '3',
                tagcor: '#aaffaa',
                tagdark: false,
                acoes: '5'
            },
            {
                tagnome: 'Desenvolvimento',
                tagdescricao: 'Projeto em estado de coding',
                tagtipo: 'Fluxo',
                tagprioridade: '3',
                tagcor: '#aaffaa',
                tagdark: false,
                acoes: '5'
            },
            {
                tagnome: 'Desenvolvimento',
                tagdescricao: 'Projeto em estado de coding',
                tagtipo: 'Fluxo',
                tagprioridade: '3',
                tagcor: '#aaffaa',
                tagdark: false,
                acoes: '5'
            },
            {
                tagnome: 'Desenvolvimento',
                tagdescricao: 'Projeto em estado de coding',
                tagtipo: 'Fluxo',
                tagprioridade: '3',
                tagcor: '#aaffaa',
                tagdark: false,
                acoes: '5'
            }],
            search: null,
            dialog: false,
        };
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        OpenDetail(bool) {
            console.log(bool);
            this.detail = bool;
        },

        ShowProfile() {

        },
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
                >
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
                <tag-form></tag-form>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-tag/>
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