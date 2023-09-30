<template>
    <div>
       <v-card-title class="flex-center">
            Detalhes da Equipe
            <v-icon class="close" @click.native="OpenDetail(false)">
                mdi-close
            </v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Requisitado por
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="usersMenor" class="flex-center"></core-icon-stack>
        </v-card-text>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Contatos
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="usersMenor" class="flex-center"></core-icon-stack>
        </v-card-text>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Colaboradores
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="users" class="flex-center"></core-icon-stack>
        </v-card-text>
        <v-divider></v-divider>
        <p class="flex-center">Sua função</p>
        <div class="flex-center">
            <v-icon>mdi-xml</v-icon> 
        </div>
        <p class="flex-center"> Colaborador</p>
        <v-divider></v-divider>
        <p class="flex-center">Ações</p>
        <br/>
        <h2 class="flex-center relogio">00:00</h2>
        <div class="flex-center">
            <v-btn color="#24e04a" style="color: white"> INICIAR </v-btn>
        </div>
        <div class="flex-center">
            <v-btn color="primary"> PAUSAR </v-btn>
        </div>
        <div class="flex-center">
            <v-btn color="#e02434" style="color: white"> FINALIZAR </v-btn>
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
            iniciado: false,
            
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
</style>