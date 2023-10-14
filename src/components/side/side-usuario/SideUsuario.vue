<template>
    <div>
        <v-card-title class="flex-center">
            Detalhes do Usuario
        </v-card-title>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Dados Pessoais
            </div>
        </div>
        <v-card-text>
            <core-icon-stack :items="usersMenor" class="flex-center"></core-icon-stack>
        </v-card-text>
        <div class="flex-center">
            <h4>{{dados.usaapelido}}</h4>
        </div>
        <div class="flex-center">
            <span>{{dados.usunome}}</span>
        </div>
        <br/>
        <div class="flex-center">
           {{dados.usadescricao}}
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <v-icon>mdi-email</v-icon>
            <a>{{dados.usuemail}}</a>
        </div>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <v-icon>mdi-github</v-icon>
            <a>fe@gmail.com</a>
        </div>
        <v-divider></v-divider>
        <div class="flex-between lista-margin">
            <v-icon>mdi-stack-overflow</v-icon>
            <a>https://stackoverflow.com/users/16287/drew-dormann</a>
        </div>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Se juntou em:
            </div>
        </div>
        <div class="flex-center">
            <v-icon>mdi-calendar-heart</v-icon> 
            {{$_formataData(dados.usadataprimeiroacesso)}}
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-center">
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
        </div>
        <br/>
        <v-divider></v-divider>
        <div class="flex-center">
            <div>
                Ações
            </div>
        </div>
        <br/>
        <div class="flex-center">
            <div>
                <div class="flex-center">
                    <v-btn @click="$_editaPermissoes">PERMISSÕES</v-btn>
                </div>
                <br/>
                 <div class="flex-center">
                    <v-btn @click="$_deletar">EXPULSAR</v-btn>
                </div>
                <br/>
            </div>
        </div>
    </div>
</template>

<script>
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
import CoreIconStack from '@/components/bigiconstack/CoreIconStack.vue'
import moment from 'moment'
import axios from 'axios'

export default {
    name: 'SideUsuario',
    components: {
        CoreIconStack,
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
        return moment(data).format('DD/MM/YYYY');
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
</style>