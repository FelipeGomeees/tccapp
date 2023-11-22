<template>
    <v-card>
      <v-card-title class="text-h5 lighten-2 title" >
        <v-icon>mdi-filter</v-icon>Pesquisa por {{label}}
      </v-card-title>
      <v-card-text>
        <br/>
        <v-autocomplete label="Campo" outlined dense v-model="form.campo" item-text="label" item-value="value"
        v-if="tarefa"
        de
        :items="[
        {label: 'Data Abertura', value: 'tardataabertura'}, 
        {label: 'Data Prazo', value: 'tardataprazo'}
        ]" >
        </v-autocomplete>
        <v-autocomplete label="Campo" outlined dense v-model="form.campo" item-text="label" item-value="value"
        v-if="usuario"
        de
        :items="[
        {label: 'Primeiro Acesso', value: 'usadataprimeiroacesso'}, 
        {label: 'Ultimo Acesso', value: 'usadataultimoacesso'}
        ]" >
        </v-autocomplete>
        <br/>
          <div class="d-flex around-container-date">
            <!-- <date-input  @change="$_alterDataInicial">
            </date-input> -->
            <div class="container-date">
              <v-text-field 
                @focus="openDateInicial = !openDateInicial"
                label="Data Inicial"
                readonly
                append-icon="mdi-calendar"
                outlined
                dense
                v-model="form.datainicial"
                ></v-text-field>
                <v-date-picker
                  v-if="openDateInicial"
                  v-model="form.datainicial"
                  class="mt-4 date-picker"
                ></v-date-picker>
            </div>
            <div class="container-date">
              <v-text-field 
                @focus="openDateFinal = !openDateFinal"
                label="Data Final"
                readonly
                append-icon="mdi-calendar"
                outlined
                dense
                v-model="form.datafinal"
                ></v-text-field>
                <v-date-picker
                  v-if="openDateFinal"
                  v-model="form.datafinal"
                  class="mt-4 date-picker"
                ></v-date-picker>
            </div>
            <!-- <date-input  @change="$_alterDataFinal">
            </date-input> -->
          </div>
        <v-switch label="Não participadas" v-model="form.colaboradas" v-if="tarefa"></v-switch>
        <v-switch label="Finalizadas e Arquivadas" v-model="form.finalizadas" v-if="tarefa"></v-switch>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$_forceLoad"
        >
          Limpar
        </v-btn>
        <v-btn
          color="primary"
          @click="$_validaFiltro"
        >
          Salvar
        </v-btn>
      </v-card-actions>
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
      <!-- Passar snackbar para outro lugar, já que sera reutilizado mais vezes -->
    </v-card>
</template>

<script>
// import DateInput from '@/components/dateinput/DateInput.vue'
export default {
    name: "FilterDialog",
    components: {
      // DateInput,
    },
    props: {
      label: {
        type: String,
      },
      dialog: { 
        type: Boolean,
      },
      tarefa: {
        type: Boolean,
      },
      usuario: {
        type: Boolean,
      }
    },

    data() {
      return {
        form: {
          datainicial: null,
          datafinal: null,
          campo: null,
          colaboradas: null,
          finalizadas: null,
        },
        openDateInicial: false,
        openDateFinal: false,
        text: '',
        snackbar: false,
      }
    },

    methods: {
      $_forceLoad() {
        this.form = {datainicial: null, datafinal: null, campo: null};
        this.$emit('change');
      },

      $_validaFiltro() {
        if ((this.$props.tarefa || this.$props.usuario) && !this.form.campo) {
            this.text = 'É necessário selecionar um campo!';
            this.snackbar = true;
            return;
        }
        if (!this.form.datafinal || !this.form.datainicial) {
            this.text = 'É necessário preencher as duas datas!';
            this.snackbar = true;
            return;
        }
        if (new Date(this.form.datafinal) < new Date(this.form.datainicial)) {
            this.text = 'A data inicial não pode ser maior do que a data final!';
            this.snackbar = true;
            return;
        }
        this.$emit('change', this.form);
      }
    },
}
</script>

<style scoped>
  .title {
    background-color: #ff9d1c
  }

  .icones {
    display: flex;
    justify-content: right;
  }

  .icones > * {
    padding-left: 10px;
    transition: 0.2s;
  }

  .icones > *:hover {
    color: #ffb765;
    cursor: pointer;
  }

  .padding > * {
    padding: 10x;
  }

  .date-picker {
    position: absolute;
    top: 40px;
    left: 0px;
    z-index: 999;
  }

  .container-date {
    position: relative;
    
  }

  .around-container-date > * {
    padding: 5px;
  }
</style>