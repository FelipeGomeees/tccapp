<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreScreen from '@/components/always/CoreScreen.vue'
import TagList from '@/components/taglist/TagList.vue'
import SideTarefas from '@/components/side/side-tarefas/SideTarefas.vue'
import PrintTarefa from '@/components/print/tarefa/PrintTarefa.vue'
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'ContatoView',
    components: {
        CoreScreen,
        TagList,
        SideTarefas,
        PrintTarefa,
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
            ],

            dados: null,
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

        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY');
        },

        $_load() {
            const idtarefa = sessionStorage.getItem('tarefa');
            const res = axios.get(
                `/tarefa/detalhado/${idtarefa}`,
            );
            res.then((tarefa) => {
                this.dados = tarefa.data[0];
            });
        },

        $_abrirForum() {
            sessionStorage.setItem('idforum', this.dados.tarefa.id);
            sessionStorage.setItem('tabelaforum', 'tarefa');
            this.$router.push('/forum');
        },
    },

    created() {
    this.$_load();
    }
}
</script>

<template>
    <core-screen v-if="dados">
        <template v-slot:main>
            <!-- <div v-if="!idtarefa">
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
            </div> -->
            <div class="header">
                <h2># {{dados.tarefa.id}} | {{dados.tarefa.tarnome}}</h2>
                <v-icon v-if="dados.tarefa.tartarefapai">mdi-connection</v-icon>
            </div>
            <tag-list :data="dados.tags" criavel></tag-list>
            <div class="flex-between">
                <div>
                    <v-icon>mdi-calendar-heart</v-icon> Criado em: {{$_formataData(dados.tarefa.tardataabertura)}}
                </div>
            </div>
            <div class="tag-filtro">
                {{dados.tarefa.tardescricao}}
            </div>
            <div class="header">
                <h3>Informações do Projeto</h3>
            </div>
            <div class="conteudo projeto">
                <div>
                    <v-icon>
                        mdi-github
                    </v-icon>
                        {{dados.tarefa.exenome}}
                </div>
                <div>
                    <tag-list :data="dados.exectags" projeto></tag-list>
                </div>
                <p>{{dados.tarefa.exedescricao}}</p>
            </div> 
            <div class="d-flex justify-space-between">
                <div class="header">
                    <h3>Ultimos Comentários</h3><h4>(2)</h4>
                </div>
                <a @click="$_abrirForum">
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
            <side-tarefas :dados="dados"/>
        </template>
        <template v-slot:print>
            <print-tarefa :dados="dados"/>
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