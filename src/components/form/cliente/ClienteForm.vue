<template>
    <v-card width="1000px">
      <v-form class="card">
        <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Detalhes
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Contato
      </v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <div>
          <div class="d-flex justify-space-around">
            <div class="nome">
              <v-text-field label="Nome" class="fill" outlined v-model="formulario.clinome"
              prepend-inner-icon="mdi-clipboard-account"/>
            </div>
            <div class="fisica">
              <v-switch label="Pessoa Fisica" v-model="fisica"/>
            </div>
          </div>
          <v-text-field prepend-inner-icon="mdi-clipboard-account" class="fill"  label="Sobrenome" outlined
          v-if="fisica"
          v-model="formulario.clisobrenome"/>
          <v-text-field prepend-inner-icon="mdi-card-account-details" class="fill"  label="CPF" outlined
          v-if="fisica"
          v-model="formulario.clicpf"/>
          <v-text-field prepend-inner-icon="mdi-domain" class="fill"  label="CNPJ" outlined
          v-else
          v-model="formulario.clicnpj"/>
          <v-textarea prepend-inner-icon="mdi-text-box" class="fill"  label="Observação" outlined
          v-model="formulario.cliobservacao"/>
          </div>
         </v-stepper-content>
          <v-stepper-content step="2">
            <contato-selector @atualizado="$_modelaContatos"></contato-selector>
          </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <br/>
        <div class="d-flex justify-space-between">
          <v-btn>Cancelar</v-btn>
          <div>
            <v-btn class="space" @click="e1 -= 1; formAtual -= 1" v-if="formAtual !== 0">Voltar</v-btn>
            <v-btn color="primary" @click="e1 += 1; formAtual += 1" v-if="formAtual !== 1">Próximo</v-btn>
            <v-btn v-else color="primary" @click="$_criarCliente">Finalizar</v-btn>
          </div>
        </div>
      </v-form>
    </v-card>
</template>

<script>
import axios from 'axios';
import contatoSelector from '@/components/contatoselector/ContatoSelector.vue';

export default {
    name: 'FormExecutavel',
    components: {
      contatoSelector,
    },
    data () {
      return {
        e1: 1,
        formAtual: 0,
        formulario: {
          cliidusuarioambiente: sessionStorage.getItem('usuarioambiente').toString(),
          clinome: null,
          clisobrenome: null,
          cliobservacao: null,
          clicpf: null,
          clicnpj: null,
        },
        contato: null,
        fisica: false,
      }
    },

    methods: {
      $_criarCliente() {
        const dados = { cliente: this.formulario, contato: this.contato };
        const res = axios.post(
            '/cliente',
            { dados },
        );
        res.then((item) => {
          console.log(item);
        })
        this.$emit('finalizar');
      },

      $_modelaTags(tags) {
        console.log(tags, 'tags');
        this.tags = tags;
      },

      $_modelaContatos(contatos) {
        this.contato = contatos
      },
    },

    created() {
        const idAmb = sessionStorage.getItem('ambiente');
        const resTag = axios.get(
            `/tag/${idAmb}`,
        );
        resTag.then((item) => {
            console.log(item);
            this.dadosTags = item.data;
        });
    }
}
</script>

<style scoped>

.nome {
  width: 80%;
}

.fisica {
  width: 15%;
}

.card {
  padding: 30px;
}
.actions {
  text-align: right;
}
.actions > * {
  margin-left: 18px;
  transform: translateY(20px);
}
.linha {
  width: 100%;
}
  .title {
    background-color: #ffb765
  }

  .color {
    margin: auto;
  }

  .space {
    margin-right: 25px;
  }

  .fill {
    width: 100%;
  }

  .divisor-config {
    display: flex;
  }

  .divisor-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  .tag {
    margin-bottom: 10px;
  }

</style>