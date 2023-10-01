<template>
    <v-card>
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
        Tags
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Finalização
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-text-field label="Nome" outlined 
        prepend-inner-icon="mdi-clipboard-account" 
        v-model="formulario.tarnome"/>
        <v-textarea prepend-inner-icon="mdi-text-box" label="Descrição" outlined
        v-model="formulario.tardescricao"/>
        <div class="d-flex linha">
          <div class="executavel space">
            <v-autocomplete prepend-inner-icon="mdi-cog" label="Executavel" outlined 
            v-model="formulario.taridexecutavel"/>
          </div>
          <div class="tarefa-pai">
            <v-text-field prepend-inner-icon="mdi-link-variant" label="Tarefa-pai" outlined
            v-model="formulario.taridtarefapai"/>
          </div>
        </div>
      </v-stepper-content>
            <v-stepper-content step="2">
              <div class="d-flex linha">
                <div class="tag-fluxo space">
                  <v-autocomplete label="Fluxo" outlined/>
                </div>
                <div class="tag-categoria">
                  <v-autocomplete label="Categoria" outlined/>
                </div>
              </div>
              <tag-selector></tag-selector>
            </v-stepper-content>
            <v-stepper-content step="3">
              <user-selector></user-selector>
              <br/>
              <div class="d-flex justify-space-around">
                <div class="data-final">
                  <v-text-field label="Data Entrega" outlined v-model="formulario.tardataprazo"/>
                </div>
                <div>
                  <v-switch label="Pedidos de Participação" v-model="formulario.tarpedirconvite"/>
                </div>
                <div>
                  <v-switch label="Visivel para todos" v-model="formulario.tarvisibilidade"/>
                </div>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <div class="actions">
          <v-btn @click="e1 -= 1; formAtual -= 1" v-if="formAtual !== 0">Voltar</v-btn>
          <v-btn color="primary" @click="e1 += 1; formAtual += 1" v-if="formAtual !== 2">Salvar</v-btn>
          <v-btn v-else color="primary" @click="$_criarTarefa">Finalizar</v-btn>
        </div>
      </v-form>
    </v-card>
</template>

<script>
import userSelector from '@/components/userselector/UserSelector.vue';
import tagSelector from '@/components/tagselector/TagSelector.vue';
import axios from 'axios';

export default {
    name: 'FormTarefa',
    components: {
      tagSelector,
      userSelector,
    },
    data () {
      return {
        dialog: false,
        e1: 1,
        formAtual: 0,
        formulario: {
          taridambiente: sessionStorage.getItem('ambiente').toString(),
          tarnome: null,
          tardescricao: null,
          taridexecutavel: null,
          tardataabertura: null,
          tardataprazo: null,
          taridtarefapai: null,
          tarvisibilidade: null,
          tarpedirconvite: null,
        }
      }
    },

    methods: {
      $_criarTarefa() {
        const dados = this.formulario;
        const res = axios.post(
            '/tarefa',
            { dados },
        );
        res.then((item) => {
          console.log(item);
        })
        this.$emit('finalizar');
      },
    }
}
</script>

<style scoped>

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

  .space {
    margin-right: 25px;
  }

</style>