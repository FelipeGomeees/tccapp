<template>
        <v-card class="elevation-6 card" width="100%" max-width="400px" height="120px">
        <v-card-title class="flex-between pa-3">
            <div>
                <div>Input sem validação</div>
            </div>
            <div>
                <v-btn color="#65cc5e" rounded class="elevation-0 pa-2 tag" height="19px"></v-btn>
                <v-btn color="yellow" rounded class="elevation-0 pa-2 tag" height="19px"></v-btn>
            </div>
        </v-card-title>
        <v-card-subtitle class="flex">
            <div class="flex-center">
                <v-icon class="margin">
                    mdi-github
                </v-icon>
                <div>
                    /pServidorWeb
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
                    17-03-2023 - 20-03-2023
                </div>
            </div>
            <core-icon-stack :items="users"></core-icon-stack>
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

export default {
    components: {
        CoreIconStack,
    },

    props: {
        v2: {
            type: Boolean,
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
</style>