<script>
/* eslint-disable vue/valid-v-slot */
import CoreScreen from '@/components/always/CoreScreen.vue';
import TagForm from '@/components/form/tags/TagForm.vue';
import SideExecutavel from '@/components/side/side-executavel/SideExecutavel.vue';
import ShowMore from '@/components/show-more/ShowMore.vue'

export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CoreScreen,
        TagForm,
        SideExecutavel,
        ShowMore,
    },

    data() {
        return {
            headers: [
                {
                    text: 'Nome',
                    align: 'start',
                    sortable: false,
                    value: 'exenome',
                },
                { text: 'Descrição', align: 'center',value: 'exedescricao' },
                { text: 'URL', value: 'exeurl' },
                { text: 'Criado em', value: 'exedatacriacao' },
                { text: 'Versão', value: 'exeversao', align: 'center' },
            ],
            items: [
            {
                exenome: 'Desenvolvimento',
                exedescricao: 'Projeto em estado de coding',
                exeurl: 'https://github.com/vuejs',
                exedatacriacao: '26-03-2002 14:32',
                exeversao: '1.2',
            },
            {
                exenome: 'Desenvolvimento',
                exedescricao: 'Projeto em estado de coding',
                exeurl: 'https://github.com/vuejs',
                exedatacriacao: '26-03-2002 14:32',
                exeversao: '1.2',
            },
            {
                exenome: 'Desenvolvimento',
                exedescricao: 'Projeto em estado de coding',
                exeurl: 'https://github.com/vuejs',
                exedatacriacao: '26-03-2002 14:32',
                exeversao: '1.2',
            },
            {
                exenome: 'Desenvolvimento',
                exedescricao: 'Projeto em estado de coding',
                exeurl: 'https://github.com/vuejs',
                exedatacriacao: '26-03-2002 14:32',
                exeversao: '1.2',
            },
            {
                exenome: 'Desenvolvimento',
                exedescricao: 'Projeto em estado de coding',
                exeurl: 'https://github.com/vuejs',
                exedatacriacao: '26-03-2002 14:32',
                exeversao: '1.2',
            },
            {
                exenome: 'Desenvolvimento',
                exedescricao: 'Projeto em estado de coding',
                exeurl: 'https://github.com/vuejs',
                exedatacriacao: '26-03-2002 14:32',
                exeversao: '1.2',
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
                    <h2># Executaveis</h2>
                </div>
                <br/>
                <div class="d-flex">
                    <span>Gerencia informaçoes sobre os projetos e executáveis presentes no seu ambiente.</span>
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
                <template v-slot:item.exedescricao="{ item }">
                    <show-more :msg="item.exedescricao"></show-more>
                </template>
                <template v-slot:item.exeurl="{ item }">
                    <a>{{item.exeurl}}</a>
                </template>
                </v-data-table>
            </div>
            <v-dialog width="840px" v-model="dialog">
                <v-card-title class="text-h5 primary" >
                    <v-icon x-large>mdi-tag</v-icon> Nova Tag
                </v-card-title>
                <tag-form></tag-form>
            </v-dialog>
        </template>
        <template v-slot:side>
            <side-executavel/>
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