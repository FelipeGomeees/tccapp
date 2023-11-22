<template>
    <v-card>
      <v-card-title class="text-h5 lighten-2 title" >
        <v-icon>mdi-filter</v-icon>Pesquisa por {{label}}
      </v-card-title>
      <v-card-text>
        <br/>
        <v-autocomplete label="Campo" outlined></v-autocomplete>
        <br/>
          <div class="d-flex">
            <date-input label="Data Inicial" @change="$_alterDataInicial">
            </date-input>
            <date-input label="Data Final" @change="$_alterDataFinal">
            </date-input>
          </div>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="form = {datainicial: null, datafinal: null}, $emit('change', form)"
        >
          Limpar
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="$emit('change', form)"
        >
          Salvar
        </v-btn>
      </v-card-actions>
      <!-- Passar snackbar para outro lugar, já que sera reutilizado mais vezes -->
    </v-card>
</template>

<script>
import DateInput from '@/components/dateinput/DateInput.vue'
export default {
    name: "FilterDialog",
    components: {
      DateInput,
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
      }
    },

    data() {
      return {
        form: {
          datainicial: null,
          datafinal: null,
        }
      }
    },

    methods: {
      $_alterDataInicial(valor) {
        console.log(valor);
        this.form.datainicial = valor;
      },

      $_alterDataFinal(valor) {
        console.log(valor);
        this.form.datafinal = valor;
      },
    },
}
</script>

<style scoped>
  .title {
    background-color: #ffb765
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
</style>