<template>
    <v-card class="card-detalhe">
        <v-card-title class="flex-center">
            Detalhes da Equipe
        </v-card-title>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Requisitado por
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="dados.colaboradores" class="flex-center"></core-icon-stack>
        </v-card-text>
        <!-- <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Contatos
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="dados.colaboradores" class="flex-center"></core-icon-stack>
        </v-card-text> -->
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Colaboradores
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="dados.colaboradores" class="flex-center"></core-icon-stack>
        </v-card-text>
        <v-divider></v-divider>
        <p class="flex-center">Estado Atual</p>
            <div class="tag" v-if="dados">
                <tag-list type1 :data="dados.tags"></tag-list>
            </div>
        <br/>
        <v-divider></v-divider>
        <p class="flex-center">Ações</p>
        <div class="hidden-on-mobile">
            <div class="flex-center">
                <v-btn color="green"> CONCLUIR </v-btn>
            </div>
            <br/>
            <div class="flex-center">
                <v-btn color="primary"> FINALIZAR </v-btn>
            </div>
            <br/>
            <div class="flex-center">
                <v-btn> SOLICITAR SAIDA </v-btn>
            </div>
        </div>
        <br/>
        <v-dialog v-model="dialog">
            
        </v-dialog>
    </v-card>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreIconStack from '@/components/bigiconstack/CoreIconStack.vue'
import TagList from '@/components/taglist/TagList.vue'

export default {
    name: 'SideTarefas',
    components: {
        CoreIconStack,
        TagList,
    },

    props: {
        dados: {
            type: Object,
        }
    },

    data() {
        return {
            dialog: false,
            iniciado: true,
            users: [
                {
                    usenome: 'felipe.dsn',
                    useapelido: 'Felipe Gomes',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'fefstak',
                    useapelido: 'Fernanda Takano',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'davi.machado',
                    useapelido: 'Davi Machado',
                    usestackoverflow: '@...',
                    usegoogledrive: null,
                    usegithub: '@...',
                },
                {
                    usenome: '@guilherme.faccat',
                    useapelido: 'Guilherme',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'ana.root',
                    useapelido: 'Ana Laura',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'wesley.t',
                    useapelido: 'Wesley Tales',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'isabel.rainha',
                    useapelido: 'Isabel Rainha',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'amancio.mt',
                    useapelido: 'Matheus Amancio',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: null,
                },
                {
                    usenome: 'fernando.pfl',
                    useapelido: 'Fernando Porfilio',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
            ],

            usersMenor: [
                {
                    usenome: 'felipe.dsn',
                    useapelido: 'Felipe Gomes',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'fefstak',
                    useapelido: 'Fernanda Takano',
                    usestackoverflow: '@...',
                    usegoogledrive: '@...',
                    usegithub: '@...',
                },
                {
                    usenome: 'davi.machado',
                    useapelido: 'Davi Machado',
                    usestackoverflow: '@...',
                    usegoogledrive: null,
                    usegithub: '@...',
                },
            ],
        }
    },
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

    .tag {
        text-align: center;
    }
</style>