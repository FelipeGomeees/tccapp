<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center column>
            <!-- <v-img src="./taskfy-bg.png"
            class="back-img">
            </v-img> -->
            <div class="logo">
                <img src="../../../public/img/TaskerL.png" alt="">
            </div>
            <v-card class="elevation-8 card" width="500">
                <h2 class="titulo">Boas Vindas ao Tasker!</h2>
                <p class="subtitulo">Realize seu login ou conecte-se a plataforma</p>
                <br/>
                <v-text-field 
                prepend-icon="mdi-account"
                v-model="email"
                label="Email"
                @keyup.enter="FocusSwap('senha')">
                </v-text-field>
                <v-text-field 
                ref="senha"
                prepend-icon="mdi-lock"
                type="password"
                v-model="senha"
                label="Senha"
                @keyup.enter="Login()"></v-text-field>
                <div class="container-inferior">
                    <div class="d-flex align">
                        <v-checkbox></v-checkbox><span class="texto-menor">Me mantenha logado</span>
                    </div>
                    <v-btn @click="Login()" color="#ffb765">Entrar</v-btn>
                </div>
                <br/>
                <p class="crie uma conta">
                    Ou 
                    <a @click="NavigateTo('/novaconta')">crie sua conta</a>
                    gratuitamente
                </p>
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
                    Fechar
                    </v-btn>
                </template>
            </v-snackbar>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import { SetToken } from '@/utils/api-config';
// import TagTemplateList from '@/components/formulario/TagTemplateList.vue'
export default {
    name: 'AppBarView',

    data() {
        return {
            usuario: null,
            senha: null,
            email: null,
            snackbar: false,
            text: 'Usuario ou senha inválidos',
            criandoconta: false,
        }
    },

    methods: {
        NavigateTo(url) {
            this.$router.push({ path: url })
        },

        FocusSwap(ref) {
            this.$refs[ref].focus();
        },

        Login() {
            const dados = {
                where: { usuemail: this.email, ususenha: this.senha },
            }
            if (!this.email || !this.senha) {
                this.text = 'Alguns campos não foram preenchidos';
                this.snackbar = true;
                return;
            }
            console.log(dados);
            const res = axios.get(
                '/usuario/login',
                { params: dados },
            );
            console.log(dados);
            res.then((data) => {
                console.log(data);
                if (data.data.length > 0) {
                    SetToken(data.data);
                    this.NavigateTo('/preambiente')
                } else {
                     this.text = 'Usuario ou senha inválidos';
                    this.snackbar = true;
                }
            })
        },
    },

    created(){
        sessionStorage.clear();
    }
}
</script>

<style scoped>
    h2, span, p {
        text-align: center;
        color: #30343f;
    }

    a {
        color: #ff9d1c;
    }

    .container-inferior {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        animation: logo 1.2s ease-out;
    }

    .align {
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 300px;
        height: 100px;
    }

    .logo img {
        max-width: 100%;
        max-height: 100%; 
        animation: logo 1.2s ease-out;
    }

    @keyframes logo {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }
</style>