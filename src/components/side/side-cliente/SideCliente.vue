<template>
    <v-card class="card-detalhe">
        <v-card-title class="flex-center">
            Detalhes do Cliente
        </v-card-title>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Dados
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <v-icon>mdi-account</v-icon>
        </div>
        <br/>
        <b class="flex-center">
           {{dados.cliente.clinome}}
        </b>
        <div class="flex-center padding">
           {{dados.cliente.cliobservacao}}
        </div>
        <div class="flex-center padding" v-if="dados.cliente.clicpf">
           <b class="margem">CPF:</b>{{dados.cliente.clicpf}}
        </div>
        <div class="flex-center padding" v-else>
           <b class="margem">CNPJ:</b>{{dados.cliente.clicnpj}}
        </div>
        <v-divider></v-divider>
        <div class="flex-between lista-margin" v-for="item in dados.contato" :key="item.id">
            <div>{{item.clctipocontato}}</div>
            <a>{{item.clccontato}}</a>
        </div>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Criado em:
            </div>
        </div>
        <div class="flex-center">
            <v-icon>mdi-calendar-heart</v-icon> {{$_formataData(dados.cliente.clidatacriacao)}}
        </div>
        <br/>
        <div class="flex-center">
            <div class="tag-filler" v-if="dados.tags">
                <div v-for="(item, index) in dados.tags" :key="index" class="tag-container">
                    <v-btn :color="item.tagcor" :dark="item.tagdark === '0' ? true : false" rounded class="elevation-0 pa-2 tag" height="19px"
                    @click="$_returnTag(item)">
                        {{item.tagnome}}
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
import moment from 'moment'
import axios from 'axios'

export default {
    name: 'SideTarefas',
    components: {
    },

    props: {
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
            return moment(data).format('DD/MM/YYYY HH:mm');
        },

        $_deletar() {
            console.log(this.$props.dados.id, 'DASDASD')
            const res = axios.delete(
                `/executavel/${this.$props.dados.id}`,
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
    .padding {
        padding: 0px 10px 0px 10px;
    }

    .margem {
        margin-right: 10px;
    }
</style>