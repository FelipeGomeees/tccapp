<template>
    <v-card class="elevation-6 card" width="100%" >
        <v-card-title>
            <div :class="{['detalhes-nomes']: !v2, ['detalhes-nomesv2']: v2}">
                <div class="nome">{{dados.tarefa.tarnome}}</div>
                <!-- <v-icon>mdi-source-branch</v-icon> 
                <div>Fix</div> -->
                <div class="flex-center exe">
                        <v-icon class="margin">
                            mdi-github
                        </v-icon>
                        <div>
                            {{dados.tarefa.exenome}}
                        </div>
                </div>
            </div>
            <div class="detalhes" v-if="!v2">
                <div v-for="tag in dados.tags" :key="tag.id">
                    <v-btn v-if="tag.tagtipo === 2"
                    :color="tag.tagcor" rounded class="elevation-0 pa-2 tag" height="19px">
                    </v-btn>
                    <v-btn v-if="tag.tagtipo === 1" 
                    :color="tag.tagcor" rounded class="elevation-0 pa-2 tag" height="19px">
                    </v-btn>
                </div>
            </div>
            <div class="detalhes-v2 d-flex" v-else>
                <div v-for="tag in dados.tags" :key="tag.id">
                    <v-btn v-if="tag.tagtipo === 2"
                    :color="tag.tagcor" rounded class="elevation-0 pa-2 tag" height="19px">
                    </v-btn>
                    <v-btn v-if="tag.tagtipo === 1" 
                    :color="tag.tagcor" rounded class="elevation-0 pa-2 tag" height="19px">
                    </v-btn>
                </div>
            </div>
        </v-card-title>
        <v-divider v-if="!v2"></v-divider>
        <div v-else class="espaco"></div>
        <v-card-text class="d-flex justify-space-between pa-2" v-if="!v2">
            <div class="flex-center margin" v-if="!dados.tarefa.tardatafinalizado">
                <v-icon>
                    mdi-calendar
                </v-icon>
                <div>
                    {{$_formataData(dados.tarefa.tardataabertura)}} - {{$_formataData(dados.tarefa.tardataprazo)}}
                </div>
            </div>
            <div class="flex-center margin finalizado" v-else>
                <v-icon color="rgb(25, 120, 88)">
                    mdi-check-circle-outline
                </v-icon>
                <div>
                    FINALIZADO   
                </div>
            </div>
            <core-icon-stack :items="dados.colaboradores"></core-icon-stack>
        </v-card-text>
        <v-card-text class="d-flex justify-space-between" v-else>
            <div class="flex-center ua">
                
                <v-icon>
                    mdi-calendar
                </v-icon>
                <div>
                    17-03-2023 - 20-03-2023
                </div>
            </div>
            <div class="flex-center ua">
                <div>Colaborador </div>
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
        }
    },

    methods: {
        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY');
        },
    }
}
</script>

<style scoped>
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

    .detalhes-nomesv2 {
        width: 82%;
        height: 66px;
        height: 20px; /* ERA 70% */
    }

    .detalhes-nomes {
        width: 82%;
        height: 66px;
        height: 70%; /* ERA 70% */
    }

    .nome {
        width: 100%;
    }

    .exe {
        width: 100%;
        font-weight: 400;
        font-size: 15px;
    }

    .detalhes {
        width: 18%;
    }

    .espaco {
        height: 5px;
    }

    .finalizado {
        color: rgb(25, 120, 88)
    }

    .finalizado > div {
        margin-left: 5px;
    }
</style>