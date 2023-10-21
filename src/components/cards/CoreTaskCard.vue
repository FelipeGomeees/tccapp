<template>
    <v-card class="elevation-6 card" width="100%" max-width="400px" height="120px">
        <v-card-title class="flex-between pa-3">
            <div>
                <div>{{dados.tarefa.tarnome}}</div>
                <!-- <v-icon>mdi-source-branch</v-icon> 
                <div>Fix</div> -->
            </div>
            <div v-for="tag in dados.tags" :key="tag.id">
                <v-btn :color="tag.tagcor" rounded class="elevation-0 pa-2 tag" height="19px"></v-btn>
            </div>
        </v-card-title>
        <v-card-subtitle class="flex">
            <div class="flex-center">
                <v-icon class="margin">
                    mdi-github
                </v-icon>
                <div>
                    {{dados.tarefa.exenome}}
                </div>
            </div>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text class="d-flex justify-space-between pa-2" v-if="!v2">
            <div class="flex-center margin">
                <v-icon>
                    mdi-calendar-heart
                </v-icon>
                <div>
                    {{$_formataData(dados.tarefa.tardataabertura)}} - {{$_formataData(dados.tarefa.tardataprazo)}}
                </div>
            </div>
            <core-icon-stack :items="dados.colaboradores"></core-icon-stack>
        </v-card-text>
        <v-card-text class="d-flex justify-space-between" v-else>
            <div class="flex-center ua">
                <v-icon>
                    mdi-calendar-heart
                </v-icon>
                <div>
                    17-03-2023 - 20-03-2023
                </div>
            </div>
            <div class="flex-center ua">
                <div>Contato </div>
                <v-icon>
                    mdi-xml
                </v-icon>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import CoreIconStack from '@/components/iconstack/CoreIconStack.vue'
import moment from 'moment'

export default {
    components: {
        CoreIconStack,
    },

    props: {
        v2: {
            type: Boolean,
        },
        dados: {
            type: Object,
        }
    },

    data() {
        return {
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
        }
    },

    methods: {
        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY');
        },
    }
}
</script>

<style>
    .flex-center {
        display: flex;
        align-items: center;
    }

     .tag {
        margin-left: 5px;
    }

    .flex-between {
        display: flex;
        justify-content: space-between;
    }
</style>