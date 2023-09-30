<template>
    <div>
        <v-card-title class="flex-center">
            Detalhes do Usuario
        </v-card-title>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Dados Pessoais
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="usersMenor" class="flex-center"></core-icon-stack>
        </v-card-text>
        <div class="flex-center">
            <h4>{{usersMenor[0].useapelido}}</h4>
        </div>
        <div class="flex-center">
            <span>{{usersMenor[0].usenome}}</span>
        </div>
        <br/>
        <div class="flex-center">
            <show-more :msg="usersMenor[0].usedescricao"></show-more>
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <v-icon>mdi-email</v-icon>
            <a>fe@gmail.com</a>
        </div>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <v-icon>mdi-github</v-icon>
            <a>fe@gmail.com</a>
        </div>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <v-icon>mdi-stack-overflow</v-icon>
            <h4>https://stackoverflow.com/users/16287/drew-dormann</h4>
        </div>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Criada
            </div>
        </div>
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
    </div>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreIconStack from '@/components/bigiconstack/CoreIconStack.vue'
import ShowMore from '@/components/show-more/ShowMore.vue'

export default {
    name: 'SideTarefas',
    components: {
        CoreIconStack,
        ShowMore,
    },

    data() {
        return {

            usersMenor: [
                {
                    usenome: 'felipe.gomes',
                    useapelido: 'Felipe Gomes',
                    usestackoverflow: '@...',
                    usegoogledrive: null,
                    usegithub: '@...',
                },
            ],
            items: [{
                name: 'Desenvolvedor I',
                color: '#4287f5',
                dark: true,
            },{
                name: 'WEB',
                color: '#4287f5',
                dark: true,
            },{
                name: 'Vue',
                color: '#3ad683',
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
    .flex-between {
        display: flex;
        justify-content: space-between;
    }
    .lista-margin {
        padding: 0px 10px 0px 10px;
    }
</style>