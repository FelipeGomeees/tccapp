<template>
    <v-container fluid fill-height :class="{['bg-color-1']: !ambientSelection, ['bg-color-2']: ambientSelection}">
        <v-layout align-center justify-center>
            <v-card class="elevation-8 card" width="500" v-if="ambientSelection === 'entrar'">
                <h2 class="titulo">Boas Vindas de volta <a>USU</a></h2>
                <p class="subtitulo">Seus ultimos ambientes:</p>
                <br/>
                <ambient-img :dados="ambientesRecentes" @click="NavigateTo('/home');"/>
                <br/>
                <p class="crie uma conta">
                    Possui um Convite?
                </p>
                <div class="d-flex justify-center flex-column">
                    <v-text-field 
                    prepend-icon="#"
                    v-model="convite"
                    placeholder="ex: 5ACC49"></v-text-field>
                    <v-btn color="primary" @click="$_validaCodigo()">Validar</v-btn>
                </div>
                <br/>
                <br/>
                <p class="crie uma conta">
                    Buscando seu proprio lugar? <a @click="ambientSelection = 'criar0'"> crie um ambiente!</a>
                </p>
                <v-dialog v-model="joinDialog" v-if="ambienteConvidado" width="400px">
                    <v-card class="d-flex flex-column card-dialog">
                        <h2>Ambiente encontrado</h2>
                        <div class="linha"></div>
                        <br/>
                        <div class="quadrado">
                            <v-img src="@/assets/logo.png"></v-img>
                        </div>
                        <p>{{ambienteConvidado[0].ambnome}}</p>
                        <br/>
                        <div>
                            <v-btn color="primary" @click="$_novoUsuarioAmbiente()">Juntar-se</v-btn>
                        </div>
                    </v-card>
                </v-dialog>
            </v-card>
            <v-card class="elevation-8 card" width="750" v-if="ambientSelection === 'criar0'">
                <a @click="ambientSelection = 'entrar'">{{'< Voltar'}}</a>
                <h2 class="titulo">Vamos começar</h2>
                <p class="subtitulo">Customize seu ambiente:</p>
                <br/>
                <div class="d-flex">
                    <v-text-field 
                    prepend-icon="mdi-card-account-details"
                    v-model="formulario.ambiente.nomeambiente"
                    label="Nome do Ambiente">
                    </v-text-field>
                </div>
                <div class="expand">
                    <comment-field slim :label="'Descrição do ambiente'" v-model="formulario.ambiente.descricao"/>
                </div>  
                <div>
                    <v-file-input
                        accept="image/*"
                        label="Logotipo do Ambiente"
                    ></v-file-input>
                </div>
                <br/>
                <v-divider></v-divider>
                <br/>
                <div class="d-flex justify-center flex-column">
                    <v-btn color="primary" @click="ambientSelection = 'criar1'">Próximo</v-btn>
                </div>
            </v-card>
            <v-card class="elevation-8 card" width="750" v-if="ambientSelection === 'criar1'">
                <a @click="ambientSelection = 'criar0'">{{'< Voltar'}}</a>
                <h2 class="titulo">Tags Recomendadas</h2>
                <p class="subtitulo">Escolha um template ou selecione manualmente (opcional)</p>
                <br/>
                <div class="d-flex">
                    <v-combobox v-model="combo" :items="templates" 
                    placeholder="Template Inicial (Não Obrigatório)">
                    </v-combobox>
                    <v-btn @click="miniAccord = !miniAccord">
                        <v-icon v-if="miniAccord">mdi-grid-large</v-icon>
                        <v-icon v-else>mdi-grid</v-icon>
                    </v-btn>
                </div>
                <br/>
                <accordeon-list :mini="miniAccord" :dados="dataTags"/>
                <br/>
                <div class="d-flex justify-center fill">
                    <v-btn color="white" @click="ambientSelection = 'criar2'">Pular</v-btn>
                    <v-btn color="primary" @click="ambientSelection = 'criar2'">Próximo</v-btn>
                </div>
            </v-card>
           <v-card class="elevation-8 card" width="750" v-if="ambientSelection === 'criar2'">
                <a @click="ambientSelection = 'criar1'">{{'< Voltar'}}</a>
                <h2 class="titulo">Permissões Iniciais</h2>
                <p class="subtitulo">Define as regras padrões aplicadas a todo usuario que se juntar ao ambiente</p>
                <br/>
                <br/>
                <accordeon-list-permissao :mini="miniAccord"/>
                <br/>
                <div class="d-flex justify-center fill">
                    <v-btn color="white" @click="$_novoAmbienteDefault()">Pular</v-btn>
                    <v-btn color="primary" @click="$_novoAmbientePreset()">Finalizar</v-btn>
                </div>
            </v-card>
            <v-snackbar
            v-model="snackbar"
            >
            {{ text }}

                <template v-slot:actions>
                    <v-btn
                    color="pink"
                    variant="text"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-layout>
    </v-container>
</template>

<script>
import AmbientImg from '@/components/ambient-img/AmbientImg.vue'
import CommentField from '@/components/comment-field/CommentFIeld.vue'
import AccordeonList from '@/components/accordeonlist/AccordeonList.vue'
import AccordeonListPermissao from '@/components/accordeonlistpermissao/AccordeonList.vue'
import axios from 'axios'

export default {
    name: 'AppBarView',
    
    components: {
        AmbientImg,
        CommentField,
        AccordeonList,
        AccordeonListPermissao,
        // TagTemplateList,
    },

    data() {
        return {
            snackbar: false,
            ambientSelection: "entrar",
            combo: null,
            templates: ['Nenhum', 'Lite', 'Agile', 'Kanban'],
            miniAccord: false,
            criandoconta: false,
            text: '',
            ambiente: null,

            ambientesRecentes: null,

            dataTags: null,
            dataPermissao: null,

            formulario: {
                ambiente: {
                    nomeambiente: null,
                    descricao: null,
                    icone: null,
                },
                tags: [],
                regras: [],
            },

            convite: null,

            token: null,

            joinDialog: false,
            ambienteConvidado: null,
        }
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

//        {
// 	  "ambnom": "AMBIENTE TESTE",
//     "ambdescricao": "Ambiente de Testes",
//     "ambicone": "",
//     "ambdatacriacao": "2023-10-10"
// }

        $_novoAmbientePreset() {
            this.NavigateTo('/home');
        },

        $_novoAmbienteDefault() {
            // FALTA VALIDACAO PARA MESMO USUARIO NAO ENTRAR NO AMBIENTE
            const ambientBody = {
                ambnome: this.formulario.ambiente.nomeambiente,
                ambdescricao: 'Teste',
                ambicone: '',
                usuario: this.token.tokidusuario,
            };
            const res = axios.post(
                '/ambiente/novo',
                { dados: ambientBody },
            );
            res.then(() => {
                this.NavigateTo('/home');
            });
        },

        $_novoUsuarioAmbiente() {
            const now = new Date().toISOString();
            console.log(this.ambienteConvidado[0])
            const ambientBody = {
                usaidusuario: this.token.tokidusuario,
                usaidambiente: this.ambienteConvidado[0].idambiente,
                usaapelido: 'USU',
                usadescricao: '',
                usadataprimeiroacesso: now,
                usadataultimoacesso: now,
                usaicone: '',
            };
            const res = axios.post(
                '/usuarioambiente',
                ambientBody,
            );
            res.then((data) => {
                if (data.data.length) {
                    this.NavigateTo('/home');
                }
            })
        },

        async $_carregaTags() {
            const res = axios.get(
                '/tagpadrao/all',
            );
            res.then((data) => {
                this.dataTags = data.data;
            })
        },

        $_carregaAmbientes() {
            const dados = {
                id: this.token
            }
            console.log(dados, 'dados');
            const res = axios.get(
                '/usuarioambiente/recente',
                { params: { id: this.token.tokidusuario } },
            );
            res.then((data) => {
                this.ambientesRecentes = data.data;
            })
        },

        $_validaCodigo() {
            const res = axios.get(
                '/chaveambiente/valida',
                { params: { chave: this.convite } },
            );
            res.then((data) => {
                console.log('A', data);
                if (data.data.length) {
                    this.ambienteConvidado = data.data;
                    this.joinDialog = true;
                }
            })
        }
    },

    created() {
        const token = JSON.parse(sessionStorage.getItem('token'))[0];
        this.token = token;
        this.$_carregaTags();
        this.$_carregaAmbientes();
    }
}
</script>

<style scoped>
    h2, span, p {
        text-align: center;
        color: #30343f;
    }

    a {
        color: #ffb765;
    }

    .border {
        border: 1px solid red;
    }

    .bg-color-1 {
        background-color: linear-gradient(#fff, #e5e5e5);
        background-size: 100%;
        transition: background-color 1000ms linear;
    }

    .bg-color-2 {
        transition: background-color 1000ms linear;
         background-size: 100%;
        background-color: linear-gradient(#fff, #fe9c3a);
    }

    .card {
        padding: 20px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(6px);
        z-index: 3;
    }

    .container-inferior {
        display: flex;
        justify-content: space-between;
    }

    .ilustracao-template {
        background-color: #ffcf65;
        width: 100%;
        height: 120px;
    }

    .fill > * {
        width: 50%;
    }

    .quadrado {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-dialog {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .dialog {
        max-width: 400px;
    }
    .linha {
        width: 100%;
        height: 1px;
        background-color: black;
    }
</style>