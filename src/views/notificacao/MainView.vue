<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CardForum from '@/components/cardforum/CoreCardForum.vue'
import CoreScreen from '@/components/always/CoreScreen.vue';
import SideTarefas from '@/components/side/side-tarefas/SideTarefas.vue'
import CommentField from '@/components/comment-field/CommentFIeld.vue'
import TagList from '@/components/taglist/TagList.vue'
import axios from 'axios';
import moment from 'moment';
// import moment from 'moment';


export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CardForum,
        CoreScreen,
        SideTarefas,
        CommentField,
        TagList,
    },

    data() {
        return {
            tipo: null,
            dados: null,
            dadosTarefa: null,
            config: {
                fortipoforum: sessionStorage.getItem('tabelaforum'),
                foridtipoforum: sessionStorage.getItem('idforum'),
                foridforum: null,
            },
        };
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY HH:mm');
        },

        $_load() {
            const idForum = sessionStorage.getItem('idforum');
            const tabela = sessionStorage.getItem('tabelaforum');
            const res = axios.get(
                `/forum/${tabela}/${idForum}`,
            );   
            const resTarefa = axios.get(
                `/tarefa/detalhado/${idForum}`,
            );
            res.then((tarefa) => {
                this.dados = tarefa.data[0];
            });  
            res.then((forum) => {
                this.dados = forum.data;
                console.log(this.dados);
            });
            resTarefa.then((forum) => {
                this.dadosTarefa = forum.data[0];
                console.log(this.dadosTarefa);
            });
        },
    },

    created() {
        this.$_load();
    }
}
</script>

<template>
    <core-screen hasPrincipal hasSide showAsCard>
        <template v-slot:main>
                <div class="header">
                    <h2># {{dadosTarefa.tarefa.idtarefa}} | {{dadosTarefa.tarefa.tarnome}}</h2>
                    <v-icon>mdi-connection</v-icon>
                </div>
                <br/>
                 <tag-list :data="dadosTarefa.tags"></tag-list>
                <div>
                    <v-icon>mdi-calendar</v-icon><b> Criado em </b>: {{$_formataData(dadosTarefa.tarefa.tardataabertura)}}
                </div>
            <div>
                <v-divider></v-divider>
                <br/>
                <div class="expand">
                    <!-- <btn>Comentário</btn> -->
                    <comment-field hidden comentario :label="'Participe da discussão'" :config="config"/>
                    <br/>
                </div>  
                <h4>Comentários ({{dados.length}})</h4>
                <br/>
                    <div v-for="comentario in dados" :key="comentario.id">
                        <card-forum :principal="!!(!comentario.foridforum)" :dados="comentario"></card-forum>
                        <br/>
                    </div>
            </div>
        </template>
        <template v-slot:side>
            <side-tarefas :dados="dadosTarefa"/>
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

    .card-detalhe {
        width: 410px;
        transition: 1s;
        position: fixed;
        right: 5%;
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


    .datas {
        display: flex;
        justify-content: space-around;
    }

    .datas > div {
        width: 50%;
    }

    .projeto {
        display: flex;
        justify-content: space-between;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
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
        height: 150px;
        width: 100%;
        border-bottom: 1px solid black;
    }

    .expand {
        width: 70%;
    }
</style>