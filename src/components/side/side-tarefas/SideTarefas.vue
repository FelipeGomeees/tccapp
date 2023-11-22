<template>
    <v-card class="card-detalhe">
        <v-card-title class="flex-center">
            Detalhes da Equipe
        </v-card-title>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Criado por:
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="dados.colaboradores" class="flex-center" contato></core-icon-stack>
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
            <core-icon-stack :items="dados.colaboradores" class="flex-center" colaborador v-if="dados.colaboradores.length === 1">
            </core-icon-stack>
            <div class="">

            </div>
        </v-card-text>
        <v-divider></v-divider>
        <p class="flex-center">Estado Atual</p>
            <div class="tag" v-if="dados">
                <tag-list type1 :data="dados.tags"></tag-list>
            </div>
        <br/>
        <v-divider></v-divider>
        <p class="flex-center">Ações</p>
        <div class="hidden-on-mobile" v-if="!dados.tarefa.tardatafinalizado">
            <div class="flex-center">
                <v-btn color="green" @click="$_concluirTarefa"> CONCLUIR </v-btn>
            </div>
            <br/>
            <div class="flex-center">
                <v-btn color="primary" @click="$_finalizarTarefa"> FINALIZAR </v-btn>
            </div>
            <br/>
            <div class="flex-center">
                <v-btn @click="$_solicitarSaida"> SOLICITAR SAIDA </v-btn>
            </div>
        </div>
        <div class="hidden-on-mobile" v-else>
            <div class="flex-center">
                <b>Esta tarefa está finalizada ou arquivada</b>
            </div>
            <br/>
            <!-- <div class="flex-center">
                <v-btn @click="$_solicitarSaida"> REEABRIR </v-btn>
            </div> -->
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
import axios from 'axios'

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
            ],
            idUseAmb: sessionStorage.getItem('usuarioambiente'),
            idTarefa: this.$props.dados.tarefa.idtarefa
        }
    },

    methods: {
            $_solicitarSaida() {
                const res = axios.post(
                    `/notificacao/solicitarsaida/${this.idUseAmb}/${this.idTarefa}`,
                );
                res.then((data) => {
                    console.log(data);
                })
            },

            $_finalizarTarefa() {
                const res = axios.put(
                    `tarefa/finalizar/${this.idTarefa}`,
                );
                res.then((data) => {
                    console.log(data);
                })
            },

            $_concluirTarefa() {
                const res = axios.put(
                     `colaborador/concluir/${this.idUseAmb}/${this.idTarefa}`,
                );
                res.then((data) => {
                    console.log(data);
                })
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

    .tag {
        text-align: center;
    }
</style>