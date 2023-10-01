<template>
    <div>
        <v-card-title class="flex-center">
            Detalhes do Executavel
        </v-card-title>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Dados
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <v-icon>mdi-gitlab</v-icon>
        </div>
        <br/>
        <b class="flex-center">
            Ocelog
        </b>
        <div class="flex-center">
            Software de Gerenciamento de Tarefas 
        </div>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <div>URL</div>
            <a>https://github.com/vuejs</a>
        </div>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <div>Versão</div>
            <div>1.2</div>
        </div>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Criação
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="usersMenor" class="flex-center"></core-icon-stack>
        </v-card-text>
        <div class="flex-center">
            <v-icon>mdi-calendar-heart</v-icon> 17 de Março de 2023
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Tags
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <div class="tag-filler">
                <div v-for="(item, index) in items" :key="index" class="tag-container">
                    <v-btn :color="item.color" :dark="item.dark" rounded class="elevation-0 pa-2 tag" height="19px"
                    @click="$_returnTag(item)">
                        {{item.name}}
                    </v-btn>
                </div>
            </div>
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Ações
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <div>
                <div class="flex-center">
                    <v-btn @click="$_editar">EDITAR</v-btn>
                </div>
                <br/>
                 <div class="flex-center">
                    <v-btn @click="$_deletar">DELETAR</v-btn>
                </div>
                <br/>
            </div>
        </div>
    </div>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreIconStack from '@/components/bigiconstack/CoreIconStack.vue'

export default {
    name: 'SideTarefas',
    components: {
        CoreIconStack
    },

    data() {
        return {

            usersMenor: [
                {
                    usenome: 'davi.machado',
                    useapelido: 'Davi Machado',
                    usestackoverflow: '@...',
                    usegoogledrive: null,
                    usegithub: '@...',
                },
            ],
            items: [{
                name: 'Node',
                color: '#ccc',
                dark: true,
            },{
                name: 'Vue',
                color: '#ccc',
                dark: true,
            },{
                name: 'Desenvolvimento',
                color: '#ccc',
                dark: true,
            }],
        }
    }
} 
</script>


<style scoped>
    .flex-center {
        display: flex;
        justify-content: center;
    }

    .flex-between {
        display: flex;
        justify-content: space-between;
    }

    .lista-margin {
        padding: 0px 10px 0px 10px;
    }

    @media screen and (max-width: 768px) {
        .hidden-on-mobile {
            display: none;
        }
    }

    @media screen and (min-width: 769px) {

        .hidden-on-desktop {
            display: none;
        }
    }

    .numero-stats {
        color: #000;
        margin-left: 10px;
        background-color: #ffb765;
        padding: 10px;
        border-radius: 20px;
    }

    .texto-stats {
        margin-left: 10px;
        text-align: center;
    }

    .container-stats {
        padding: 5px;
        width: 50%;
    }
    .tag-filler {
        width: 70%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .tag {
        margin: 3px;
    }
</style>