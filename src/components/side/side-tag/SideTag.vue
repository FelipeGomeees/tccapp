<template>
     <v-card class="card-detalhe">
        <v-card-title class="flex-center">
            Detalhes da Tag
        </v-card-title>
            <v-icon class="close" @click.native="$emit('close')">
                mdi-close
            </v-icon>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Modelo
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <v-btn class="elevation-0 pa-2 tag" :dark="$_dark(dados.tagdark)"
            :color="dados.tagcor" rounded>{{dados.tagnome}}</v-btn>
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-center justify-space-around">
            <div><b>Categoria:</b> {{$_voltaTipo(dados.tagtipo)}}</div>
            <div><b>Prioridade:</b> {{dados.tagprioridade}}</div>
        </div>
        <br/>
                <v-divider></v-divider>
        <div class="flex-center">
            "{{dados.tagdescricao}}"
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Criada
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="usersMenor" class="flex-center"></core-icon-stack>
        </v-card-text>
        <div class="flex-center">
            <v-icon>mdi-calendar</v-icon> {{$_formataData(dados.tagdatacriacao)}}
        </div>
        <br/>
        <!-- <v-divider></v-divider> -->
        <!-- <div class="flex-center">
            <div>
                Detalhes
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <div>
                <div class="flex-center">
                    <v-icon class="numero-stats">
                        mdi-forum
                    </v-icon>
                </div>
                <br/>
                <div class="flex-center">
                    <div class="texto-stats">
                        Utilizada majoritariamente em <a>Forums</a>
                    </div>
                </div>
            </div>
        </div>
        <br/> -->
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Ações
            </div>
        </div>
        <br/>
        <div class="d-flex justify-space-around">
            <div></div>
            <div>
                <v-btn @click="$_setSession">EDITAR</v-btn>
            </div>
            <div> 
                <v-btn @click="$_deletar" color="error">DELETAR</v-btn>
            </div>
            <div></div>
        </div>
        <br/>
    </v-card>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreIconStack from '@/components/bigiconstack/CoreIconStack.vue'
import moment from 'moment'
import axios from 'axios'

export default {
    name: 'SideTarefas',
    components: {
        CoreIconStack
    },

    props: {
        dados: {
            type: Object,
        }
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
        }
    },

    methods: {
        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY HH:mm');
        },

        $_deletar() {
            console.log(this.$props.dados.id, 'DASDASD')
            const res = axios.delete(
                `/tag/${this.$props.dados.id}`,
            );
            res.then(() => {
                console.log('aa');
            });
        },

        $_setSession() {
            sessionStorage.setItem('edit', this.$props.dados.id);
            this.$emit('editar');
        },

        $_dark(dark) {
            return (dark === "0") ? true : false;
        },

        $_voltaTipo(tipo) {
            switch (tipo) {
                case 2: return 'Estado';
                case 1: return 'Tipo';
                case 0: return 'Geral';
                default: 4
            }
        },
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
    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
</style>