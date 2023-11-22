<template>
    <v-card class="card-detalhe">
        <div class="d-flex justify-center finalizado" v-if="dados.tarefa.tardatafinalizado">
            <v-icon color="#fff">
                mdi-check-circle-outline
            </v-icon>
            <div>
                FINALIZADO
            </div>
        </div>
        <v-card-title class="flex-center">
            {{dados.tarefa.tarnome}}
            <v-icon :class="{close: true, closefinalizado: dados.tarefa.tardatafinalizado }" @click.native="$emit('close')">
                mdi-close
            </v-icon>
        </v-card-title>
        <div class="flex-center">
            <v-icon>
                mdi-github
            </v-icon>
            <div>
                {{dados.tarefa.exenome}}
            </div>
        </div>
        <div class="container">
            <div class="tags-container" v-for="tag in dados.exectags" :key="tag.id">
                <v-btn color="gray" 
                rounded class="elevation-0 pa-2 tag" height="19px">
                    {{tag.tagnome}}
                </v-btn>
            </div>
        </div>
        <v-divider></v-divider>
        <v-card-text>
            {{dados.tarefa.tardescricao}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="d-flex justify-space-around">
            <div class="to-center">
                <div class="d-flex"><v-icon>mdi-calendar-month</v-icon><div>Criado em:</div></div>
                <div>{{$_formataData(dados.tarefa.tardataabertura)}}</div>
            </div>
            <div class="to-center">
                <div class="d-flex"><v-icon>mdi-calendar-check</v-icon><div>Entregue até:</div></div>
                <div>{{$_formataData(dados.tarefa.tardataprazo)}}</div>
            </div>
            <div class="to-center">
                <div class="d-flex"><v-icon>mdi-account </v-icon><div>Para:</div></div>
                <div>{{dados.cliente[0].clinome}}</div>
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <br>
        <div class="d-flex justify-center">
            <v-btn :color="tag.tagcor" :dark="tag.tagdark === '0' ? true : false" v-for="tag in dados.tags" :key="tag.id"
            rounded class="elevation-0 pa-2 tag" height="19px">
                {{tag.tagnome}}
            </v-btn>
        </div>
        <!-- <v-divider></v-divider>
        <br/>
        <div class="flex-center"> Ações rápidas</div> -->
        <!-- <v-card
            class="mx-auto"
            max-width="400"
            tile
        >
        <v-list-item two-line>
        <v-list-item-content>
            <v-list-item-title><v-icon>mdi-paperclip</v-icon> Anexos </v-list-item-title>
            <v-list-item-subtitle>Clique para verificar arquivos relacionados</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
        <v-list-item-content>
            <v-list-item-title><v-icon>mdi-forum-outline</v-icon> Comunicação</v-list-item-title>
            <v-list-item-subtitle>Comunicar-se com a equipe ou com participantes</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
        <v-list-item-content>
            <v-list-item-title><v-icon>mdi-source-branch</v-icon> Commits</v-list-item-title>
            <v-list-item-subtitle>Alterações feitas até o momento</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
        </v-card> -->
        <v-divider></v-divider>
        <br/>
        <div class="flex-center">
            <v-btn @click="$_abreTarefa(dados.tarefa.idtarefa)">Expandir Informações</v-btn>
        </div>
        <br/>
        <div class="flex-center">
            <core-dialog v-if="dados.tarefa.tarpedirconvite && !dados.tarefa.tardatafinalizado"></core-dialog>
        </div>
        <br/>
    </v-card>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import moment from 'moment';

export default {
    name: 'SideTarefas',
    props: {
        dados: Object,
    },
    components: {
        CoreDialog,
    },
    methods: {
        $_formataData(data) {
            return moment(data).format('DD/MM/YYYY');
        },

        $_abreTarefa(id) {
            sessionStorage.setItem('tarefa', id);
            this.$router.push('/tarefa');
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

    .tags-container {
        text-align: center;
    }

    .tag {
        margin: 0px 10px 10px 10px;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .closefinalizado {
        top: 40px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .to-center {
        text-align: center;
        margin-top: 10px;
    }

    .finalizado {
        color: #fff;
        background-color: rgb(25, 120, 88);
    }

    .finalizado > div {
        margin-left: 5px;
    }
</style>