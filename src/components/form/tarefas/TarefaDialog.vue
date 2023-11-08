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
          <div class="executavel space" v-if="complete.clientes">
            <v-autocomplete prepend-inner-icon="mdi-account-circle" label="Cliente" outlined 
            :items="complete.clientes"
            item-value="idcliente"
            item-text="clinome"
            v-model="formulario.taridcliente"/>
          </div>
          <div class="executavel space">
            <v-autocomplete prepend-inner-icon="mdi-cog" label="Executavel" outlined 
            :items="complete.executaveis"
            item-text="exenome"
            item-value="id"
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
                  <v-autocomplete label="Estado" outlined 
                  v-if="complete.tags"
                  :items="complete.tags.estado"
                  item-text="tagnome"
                  item-value="id"
                  v-model="tagestado"/>
                </div>
                <div class="tag-categoria">
                  <v-autocomplete label="Tipo" outlined
                  v-if="complete.tags"
                  :items="complete.tags.tipo"
                  item-text="tagnome"
                  item-value="id"
                  v-model="tagtipo"/>
                </div>
              </div>
              <tag-selector v-if="complete.tags"
              :dados="complete.tags.geral" @atualizado="$_salvaTags"></tag-selector>
            </v-stepper-content>
            <v-stepper-content step="3">
              <user-selector v-if="complete.usuarioambiente"
              :dados="complete.usuarioambiente" @atualizado="$_salvaUsuarios"></user-selector>
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
        <br/>
        <div class="d-flex justify-space-between">
          <v-btn>Cancelar</v-btn>
          <div>
            <v-btn class="space" @click="e1 -= 1; formAtual -= 1" v-if="formAtual !== 0">Voltar</v-btn>
            <v-btn color="primary" @click="e1 += 1; formAtual += 1" v-if="formAtual !== 2">Próximo</v-btn>
            <v-btn v-else color="primary" @click="$_criarTarefa">Finalizar</v-btn>
          </div>
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
          tarvisibilidade: false,
          tarpedirconvite: false,
          taridcliente: null,
        },
        tags: null,
        tagsSelecionado: null,
        tagestado: null,
        tagtipo: null,
        meta: {
          responsavel: sessionStorage.getItem('usuarioambiente').toString(),
        },

        complete: {
          executaveis: null,
          tags: null,
          usuarioambiente: null,
          clientes: null,
        }
      }
    },

    methods: {
      $_criarTarefa() {
        const dados = { tarefa: this.formulario, tags: [...this.tagsSelecionado, this.tagtipo, this.tagestado], 
        colaboradores: this.colaboradores, meta: this.meta };
        const res = axios.post(
            '/tarefa',
            { dados },
        );
        res.then((item) => {
          console.log(item);
        })
        this.$emit('finalizar');
      },

      $_salvaUsuarios(e) {
        this.colaboradores = e;
      },

      $_salvaTags(e) {
        this.tagsSelecionado = e;
      },
    },

    created() {
      const idAmb = sessionStorage.getItem('ambiente');
      const resExecutavel = axios.get(
          `/executavel/${idAmb}`,
      );
      resExecutavel.then((item) => {
          this.complete.executaveis = item.data;
      });
      const resTag = axios.get(
          `/tag/divido/${idAmb}`,
      );
      resTag.then((item) => {
          console.log(item, 'ZZZZZZZZZZZZZZ');
          this.complete.tags = item.data;
      });
      const dados = {
          where: { usaidambiente: idAmb },
      };
      const resUsuarioAmbiente = axios.get(
          '/usuarioambiente',
          { params: dados },
      );
      resUsuarioAmbiente.then((item) => {
          this.complete.usuarioambiente = item.data;
      });
      const resCliente = axios.get(
          '/cliente/detalhado',
          { params: dados },
      );
      resCliente.then((item) => {
          this.complete.clientes = item.data;
      });
      this.loading = false;
    },


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