<template>
    <v-card class="card-detalhe">
        <v-card-title class="flex-center">
            Detalhes do Usuario
        </v-card-title>
            <v-icon class="close" @click.native="$emit('close')">
                mdi-close
            </v-icon>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Dados Pessoais
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <v-avatar width="100px" height="100px">
                <v-img src="https://picsum.photos/200"></v-img>
            </v-avatar>
        </div>
        <div class="flex-center">
            <h4>{{dados.usaapelido}}</h4>
        </div>
        <div class="flex-center">
            <span>{{dados.usunome}}</span>
        </div>
        <br/>
        <div class="flex-center">
           "{{dados.usadescricao}}"
        </div>
        <div class="flex-center">
            <a>{{dados.usuemail}}</a>
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Se juntou em:
            </div>
        </div>
        <div class="flex-center">
            <v-icon>mdi-calendar</v-icon> 
            {{$_formataData(dados.usadataprimeiroacesso)}}
        </div>
        <br/>
        <div class="flex-center">
            <div>
                Ultimo Acesso:
            </div>
        </div>
        <div class="flex-center">
            <v-icon>mdi-calendar</v-icon> 
            {{$_formataData(dados.usadataultimoacesso)}}
        </div>
        <br/>
        <v-divider></v-divider>
        <!-- <div class="flex-center">
            <div>
                Tags
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <div class="tag-filler">
                <div v-for="(item, index) in items" :key="index" class="tag-container">
                    <v-btn :color="item.color" :dark="item.dark" rounded class="elevation-0 pa-2 tag" height="19px"
                    @click="$_returnTag(item)">
                        {{item.name}}
                    </v-btn>
                </div>
            </div>
        </div> -->
        <!-- <br/>
        <v-divider></v-divider> -->
        <div class="flex-center">
            <div>
                Ações
            </div>
        </div>
        <br/>
        <div class="d-flex justify-space-around">
            <div></div>
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
    name: 'SideUsuario',
    components: {
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
                    usenome: 'felipe.gomes',
                    useapelido: 'Felipe Gomes',
                    usestackoverflow: '@...',
                    usegoogledrive: null,
                    usegithub: '@...',
                },
            ],
            items: [{
                name: 'Desenvolvedor I',
                color: '#4287f5',
                dark: true,
            },{
                name: 'WEB',
                color: '#4287f5',
                dark: true,
            },{
                name: 'Vue',
                color: '#3ad683',
                dark: true,
            }],
        }
    },

    methods: {
    $_formataData(data) {
        return moment(data).format('DD/MM/YYYY HH:mm');
    },

    $_deletar() {
        console.log(this.$props.dados.id);
        const res = axios.delete(
            `/usuarioambiente/${this.$props.dados.id}`,
        );
        res.then(() => {
            console.log('aa');
        });
    },

    $_editaPermissoes() {
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
    .flex-between {
        display: flex;
        justify-content: space-between;
    }
    .lista-margin {
        padding: 0px 10px 0px 10px;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
</style>