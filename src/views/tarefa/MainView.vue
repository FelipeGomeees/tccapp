<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreScreen from '@/components/always/CoreScreen.vue'
import TagList from '@/components/taglist/TagList.vue'
import SideTarefas from '@/components/side/side-tarefas/SideTarefas.vue'

export default {
    name: 'ContatoView',
    components: {
        CoreScreen,
        TagList,
        SideTarefas,
    },

    data() {
        return {
            detail: false,
            progress: 10,
            bufferValue: 100,

            tagsHeader: [
                { descricao: 'Desenvolvimento', cor: '#3f3' },
                { descricao: 'Correção', cor: '#ff0' },
            ],
            tagsProjeto: [
                { descricao: 'VUE', cor: '#eee' },
                { descricao: 'nuxt', cor: '#eee' },
            ]
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
            <div v-if="!idtarefa">
                <v-text-field
                outlined
                dense
                append-icon="mdi-magnify"
                v-model="search"
                label="ID da Tarefa"
                class="mx-4"
                 ></v-text-field>
                <h4>
                    Utilize o ID de uma tarefa para acessar seus detalhes
                </h4>
            </div>
            <div class="header">
                <h2># 2456 | Input sem validação</h2>
                <v-icon>mdi-connection</v-icon>
            </div>
            <tag-list :data="tagsHeader" criavel></tag-list>
            <div class="flex-between">
                <div>
                    <v-icon>mdi-calendar-heart</v-icon> Criado em: 27 de Março de 2023 as 14:32
                </div>
            </div>
            <div class="tag-filtro">
                Input do formulario de recebimento não aparenta conter nenhum tipo de validação, 
                evitar para desenvolvimento, urgente.
                <br/><br/>
                Cliente #5646 relatou que o input de CPF do modulo de contabilidade está sem validações numericas relativos
                a regras de negocio padrões do banco.
            </div>
            <div class="header">
                <h3>Informações do Projeto</h3>
            </div>
            <div class="conteudo projeto">
                <div>
                    <v-icon>
                        mdi-github
                    </v-icon>
                        /pServidorWeb
                </div>
                <div>
                    <tag-list :data="tagsProjeto"></tag-list>
                </div>
                <p>Plataforma base para os executáveis do projeto</p>
            </div> 
            <div class="d-flex justify-space-between">
                <div class="header">
                    <h3>Ultimos Comentários</h3><h4>(2)</h4>
                </div>
                <a>
                    Ver todos ->
                </a>
            </div>
            <div class="conteudo">

            </div>
            <div class="d-flex justify-space-between">
                <div class="header">
                    <h3>Linha do Tempo</h3>
                </div>
                <a>
                    Ver Completa ->
                </a>
            </div>
            <div class="conteudo">
                
            </div>
            <div class="d-flex justify-space-between">
                <div class="header">
                    <h3>Anexos</h3>
                </div>
                <a>
                    Ver todos
                </a>
            </div>
            <div class="conteudo">
                
            </div>
        </template>
        <template v-slot:side>
            <side-tarefas/>
        </template>
    </core-screen>
</template>

<style scoped>

    .card-superior {
        width: 100%;
    }

    .flex {
        display: flex;
        width: 100%;
    }

    .flex-between {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .datas {
        display: flex;
        justify-content: space-around;
    }

    .datas > div {
        width: 50%;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    /* ESTILO CARDS */

    .container-filtros {
        display: flex;
        justify-content: right;
        margin-right: 15px;
    }

    .container-filtros > * {
        margin-left: 25px;
    }

    .container-filtros > *:hover {
        cursor: pointer;
    }

    .linha-divisora {
        width: 100%;
        height: 5px;
        background-color: #29ba48;
    }

    .header {
        display: flex;
        align-items: center;
        color: #30343f;
        transform: translateY(11px);
    }

    .tag-filtro {
        width: 100%;
        border-top: 1px solid grey;
        padding-top: 10px;
    }

    .tag {
        margin-bottom: 10px;
    }

    .tags-container {
        width: 100%;
        text-align: center;
    }

    .conteudo {
        min-height: 150px;
        width: 100%;
        border-bottom: 1px solid black;
    }
</style>