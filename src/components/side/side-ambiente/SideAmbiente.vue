<template>
    <v-card class="card-detalhe">
        <v-card-title class="flex-center">
            Input Sem Validação
            <v-icon class="close" @click.native="$emit('close')">
                mdi-close
            </v-icon>
        </v-card-title>
        <div class="flex-center">
            <v-icon>
                mdi-github
            </v-icon>
            <div>
                /pServidorWeb
            </div>
        </div>
        <div class="flex-center">
            <div class="tags-container">
            <v-btn color="gray" rounded class="elevation-0 pa-2 tag" height="19px">
                VUE 3
            </v-btn>
            <v-btn color="gray" rounded class="elevation-0 pa-2 tag" height="19px">
                NUXT
            </v-btn>
            </div>
        </div>
        <v-divider></v-divider>
        <v-card-text>
            Input do formulario de recebimento não aparenta conter
            nenhum tipo de validação, evitar para desenvolvimento, urgente.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="datas">
            <div>
                <v-icon>mdi-calendar-heart</v-icon> Criado em:<br/> 27/03/23 as 14:32
            </div>
            <div>
                <v-icon>mdi-calendar-heart</v-icon> Entrega até:<br/> 30/03/23 as 23:59
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <br>
        <div class="tags-container">
            <v-btn color="#65cc5e" rounded class="elevation-0 pa-2 tag" height="19px">
                Em Desenvolvimento
            </v-btn>
        </div>
        <div class="tags-container">
            <v-btn color="yellow" rounded class="elevation-0 pa-2 tag" height="19px">
                Correção
            </v-btn>
        </div>
        <v-divider></v-divider>
        <br/>
        <div class="flex-center"> Ações rápidas</div>
        <v-card
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
        </v-card>
        <v-divider></v-divider>
        <br/>
        <div class="flex-center">
            <v-btn>Expandir Informações</v-btn>
        </div>
        <div class="flex-center">
            <core-dialog></core-dialog>
        </div>
        <br/>
    </v-card>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';

export default {
    name: 'SideTarefas',
    components: {
        CoreDialog,
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

    .tags-container {
        width: 100%;
        text-align: center;
    }

    .tag {
        margin-bottom: 10px;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
</style>