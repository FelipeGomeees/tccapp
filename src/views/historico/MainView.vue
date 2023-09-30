<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreScreen from '@/components/always/CoreScreen.vue';
import SidePerfil from '@/components/side/side-perfil/SideForum.vue'
import CoreTaskCard from '@/components/cards/CoreTaskCard.vue'
import CoreTimelineCard from '@/components/coretimelinecard/CoreTimelineCard.vue';

export default {
    name: 'ContatoView',
    components: {
        CoreScreen,
        SidePerfil,
        CoreTaskCard,
        CoreTimelineCard,
    },

    data() {
        return {
            detail: false,
            progress: 10,
            bufferValue: 100,
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
                <div class="d-flex">
                    <v-btn fab color="primary">F</v-btn>
                    <div>
                        <div class="header">
                            <h2># Felipe Gomes</h2>
                        </div>
                        <div class="flex">
                            <v-btn color="#4287f5" rounded dark class="elevation-0 pa-2 tag" height="19px">
                                Desenvolvedor I
                            </v-btn>
                            <v-btn color="#4287f5" rounded dark class="elevation-0 pa-2 tag" height="19px">
                                WEB
                            </v-btn>
                            <v-btn color="#3ad683" rounded class="elevation-0 pa-2 tag" height="19px">
                                VUE
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div class="flex-between">
                    <div>
                        <v-icon>mdi-flag-variant</v-icon> Membro des de: 27 de Março de 2023 as 14:32 (4 meses)
                    </div>
                </div>
                <div class="expand" v-if="false">
                    <p>Movimentação</p>
                    <p>Discussão</p>
                    <p>Administrativo</p>
                    <p>Privado</p>
                </div>  
                <div class="descricao">
                    <div class="fill d-flex justify-space-between">
                        <h4>Descrição</h4>
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </div>
                    <br/>
                    <div class="d-flex" v-if="false">
                        
                    </div>
                    <div v-else>
                        Não á nada aqui...
                    </div>
                </div>
                <br/>
                <!-- -->
                <div>
                    <div>
                        <core-timeline-card></core-timeline-card>
                    </div>
                     <br/>
                    <v-divider/>
                    <div class="expand-card">
                        <h4>Projetos em Andamento</h4>
                        <div class="cards">
                            <core-task-card v2></core-task-card>
                            <core-task-card v2></core-task-card>
                            <core-task-card v2></core-task-card>
                        </div>
                    </div>
                     <v-divider/>
                </div>
            </div>    
        </template>
        <template v-slot:side>
            <side-perfil/>
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

    .coluna-card > * {
         display: inline-block;
         margin: 10px 20px 10px 20px;
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

    .descricao {
        border: 1px solid black;
        border-radius: 4px;
        padding: 10px;
        width: 95%;
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
        transform: translateY(-1px);
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

    .expand-card {
        width: 95%;
    }

    .fill {
        width: 100%;
        /* background-color:  #ffb765; */
    }

    .cards > * {
        margin: 10px;
        display: flex;
        flex-wrap: wrap;
    }
</style>