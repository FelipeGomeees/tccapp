<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';

export default {
    name: 'HomeView',

    components: {
        // CoreDialog,
    },
    
}
</script>

<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center column>
            <div class="centro">
                <div class="centro-borda">
                    <v-img src="../../../public/img/logo.png" width="100px" height="100px" contain></v-img>
                </div>
                <br/>
                <br/>
                <div class="text">
                    <h3>Boas Vindas a DEV02, <a>Comece por aqui:</a></h3>
                <br/>   
                </div>
                <div class="card-container">
                    <v-card>
                        <h4>Ambiente</h4>
                         <div>
                        <v-icon x-large>mdi-arrange-bring-forward</v-icon>
                        </div>
                    </v-card>
                    <v-card>
                        <h4>Diversos</h4>
                        <div>
                            <v-icon x-large>mdi-cube-outline</v-icon>
                        </div>
                    </v-card>
                    <v-card>
                        <h4>Gerencial</h4>
                        <div>
                        <v-icon x-large>mdi-note-edit</v-icon>
                        </div>
                    </v-card>
                </div>
                <br/>
                <div class="card-container">
                    <v-card>
                        <h4>Forum</h4>
                        <div>
                        <v-icon x-large>mdi-forum-outline</v-icon>
                        </div>
                    </v-card>
                    <v-card>
                        <h4>Relátorio</h4>
                        <div>
                        <v-icon x-large>mdi-printer</v-icon>
                        </div>
                    </v-card>
                    <v-card>
                        <h4>Perfil</h4>
                         <div>
                        <v-icon x-large>mdi-account-clock</v-icon>
                        </div>
                    </v-card>
                </div>
            </div>
        </v-layout>
    </v-container>
</template>

<style scoped>

    .centro {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .card-container {
        width: 500px;
        height: 160px;
        display: flex;
    }

    .card-container > * {
        height: 100%;
        width: 30%;
        margin: 5px;
    }

    .card-container h3 {
        text-align: center;
    }

    .card-container div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }

    .text {
        text-align: center;
    }

    .centro-borda {
        display: flex;
        justify-content: center;
    }
</style>