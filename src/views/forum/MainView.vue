<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CardForum from '@/components/cardforum/CoreCardForum.vue'
import CoreScreen from '@/components/always/CoreScreen.vue';
import SideForum from '@/components/side/side-forum/SideForum.vue'
import CommentField from '@/components/comment-field/CommentFIeld.vue'
import axios from 'axios';
// import moment from 'moment';


export default {
    name: 'ContatoView',
    components: {
        // CoreDialog,
        CardForum,
        CoreScreen,
        SideForum,
        CommentField,
    },

    data() {
        return {
            tipo: null,
            dados: null,
        };
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        $_load() {
            // let res = null;
            // const tipoForum = sessionStorage.getItem('forum');
            // if (tipoForum === 'tarefa') {
            //     res = axios.get(
            //         `/forum/tarefa/${idtarefa}`,
            //     );     
            // } else if (tipoForum === 'executavel') {
            //     res = axios.get(
            //         `/forum/tarefa/${idtarefa}`,
            //     );   
            // } else if (tipoForum === 'tag') {
                
            // }
            const idForum = sessionStorage.getItem('idforum');
            const tabela = sessionStorage.getItem('tabelaforum');
            const res = axios.get(
                `/forum/${tabela}/${idForum}`,
            );     
            console.log(res, 'res');
            res.then((forum) => {
                this.dados = forum.data[0];
                console.log(this.dados);
            });
        },
    },

    created() {
        this.$_load();
    }
}
</script>

<template>
    <core-screen>
        <template v-slot:main>
            <div class="coluna-card">
                <div class="header">
                    <h2># 2456 | Input sem validação</h2>
                    <v-icon>mdi-connection</v-icon>
                </div>
                <br/>
                <div class="flex">
                    <v-btn color="#65cc5e" rounded class="elevation-0 pa-2 tag" height="19px">
                        Em Desenvolvimento
                    </v-btn>
                    <v-btn color="yellow" rounded class="elevation-0 pa-2 tag" height="19px">
                        Correção
                    </v-btn>
                    <v-btn color="#ddd" rounded class="elevation-0 pa-2 tag" height="19px">
                        +
                    </v-btn>
                </div>
                <div class="flex-between">
                    <div>
                        <v-icon>mdi-calendar-heart</v-icon> Criado em: 27 de Março de 2023 as 14:32
                    </div>
                </div>
                <v-divider></v-divider>
                <br/>
                <div class="expand">
                    <!-- <btn>Comentário</btn> -->
                    <comment-field hidden :label="'Participe da discussão'"/>
                    <br/>
                </div>  
                <h4>Comentários (7)</h4>
                <br/>
                    <card-forum principal></card-forum>
                    <br/>
                    <card-forum></card-forum>
                    <br/>
                    <card-forum></card-forum>
                    <br/>  
                    <card-forum></card-forum>
                    <br/>
                    <br/>  
                    <card-forum principal></card-forum>
                    <br/>
                    <br/>
                    <card-forum principal></card-forum>
                    <br/>
                    <card-forum></card-forum>  
                    <br/>
                    <br/>
            </div>
        </template>
        <template v-slot:side>
            <side-forum/>
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
        width: 95%;
    }
</style>