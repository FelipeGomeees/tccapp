<template>
    <div>
       <v-card-title class="flex-center">
            Informações Gerais
        </v-card-title>
        <v-divider></v-divider>
        <!-- <div class="flex-center">
            <div>
                Gráfico de Contribuição
            </div>
        </div>
        <v-card-text>
            Aqui vai um gráfico...
        </v-card-text>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Ultimos Projetos
            </div>
        </div>
        <v-card-text>
            Aqui vai um gráfico...
        </v-card-text>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Cargos
            </div>
        </div>
        <v-card-text>
            Aqui vai um gráfico...
        </v-card-text> -->
        <v-divider></v-divider>
        <p class="flex-center">Detalhes</p>
        <div class="flex-center">
            <v-icon x-large>mdi-account</v-icon>
        </div>
        <br/>
                <v-divider></v-divider>
        <div class="d-flex justify-space-between ll">
           <b class="margem">Membro á:</b><div>8 Meses</div>
        </div>
                <v-divider></v-divider>
        <div class="d-flex justify-space-between ll">
           <b class="margem">Tarefas em Andamento:</b><div>3</div>
        </div>
                <v-divider></v-divider>
        <div class="d-flex justify-space-between ll">
           <b class="margem">Tarefas Concluidas:</b><div>5</div>
        </div>
                <v-divider></v-divider>
        <div class="d-flex justify-space-between ll">
           <b class="margem">Comentários:</b><div>48</div>
        </div>
                <v-divider></v-divider>
        <div class="d-flex justify-space-between ll">
           <b class="margem">Permissões Administrativas?</b><div>Não</div>
        </div>
        <v-divider></v-divider>
        <p class="flex-center">Ações</p>
        <br/>
        <div class="flex-center">
            <v-btn> ENVIAR NOTIFICAÇÃO </v-btn>
        </div>
        <br/>
        <div class="flex-center">
            <v-btn color="primary" class="margem"> PERMISSÕES </v-btn>
            <v-btn color="#e02434" style="color: white"> REMOVER </v-btn>
        </div>
        <br/>
    </div>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue'

export default {
    name: 'SidePerfil',

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

    .ll {
        padding: 0px 10px 0px 10px;
    }

    .margem {
        margin-right: 10px;
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