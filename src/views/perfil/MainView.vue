<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreScreen from '@/components/always/CoreScreen.vue';
import CommentField from '@/components/comment-field/CommentFIeld.vue'
import SidePerfil from '@/components/side/side-perfil/SideForum.vue'
import CoreTaskCard from '@/components/cards/CoreTaskCard.vue'

export default {
    name: 'ContatoView',
    components: {
        CoreScreen,
        CommentField,
        SidePerfil,
        CoreTaskCard,
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
                    <comment-field :label="'Descricao'"/>
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
                    <h4>Contato e Plataformas</h4>
                    <div class="d-flex">
                        <v-icon>mdi-email</v-icon>
                        <h4>fe@gmail.com</h4>
                    </div>
                    <div class="d-flex">
                        <v-icon>mdi-github</v-icon>
                        <h4>fe@gmail.com</h4>
                    </div>   
                    <div class="d-flex">
                        <v-icon>mdi-stack-overflow</v-icon>
                        <h4>https://stackoverflow.com/users/16287/drew-dormann</h4>
                    </div>
                    <div class="d-flex">
                        <v-icon>mdi-gmail</v-icon>
                        <h4>fe@gmail.com</h4>
                    </div>
                </div>
                <br/>
                <v-divider></v-divider>
                <h4>Projetos em Andamento</h4>
                <br/>
                <div class="expand-card">
                        <core-task-card v2></core-task-card>
                        <core-task-card v2></core-task-card>
                        <core-task-card v2></core-task-card>
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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .expand-card > * {
        margin: 5px
    }

    .fill {
        width: 100%;
        /* background-color:  #ffb765; */
    }
</style>