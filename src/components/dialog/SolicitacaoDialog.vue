<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#ffb765"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Solicitar Participação
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 lighten-2 title" >
          <v-icon>mdi-map-marker-alert</v-icon>Solicitar Participação
        </v-card-title>
        <br/>
        <v-card-text>
          Você não possui permissão suficiente para entrar em um projeto sem verificação prévia.
          Solicite permissão de entrada ou aguarde o convite de um superior.
        </v-card-text>
        <v-card-text>
          <v-textarea label="Observação (Opcional)" clearable>
          </v-textarea>
          <div class="icones">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                v-on="on"
              >
                mdi-upload
              </v-icon>
            </template>
            <span>Anexar Arquivo</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                v-on="on"
              >
                mdi-link-variant
              </v-icon>
            </template>
            <span>Vincular Tarefa</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                v-on="on"
              >
                mdi-comment-multiple-outline
              </v-icon>
            </template>
            <span>Marcar Comentário</span>
          </v-tooltip>
          </div>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false;"
          >
            Enviar
          </v-btn>
        </v-card-actions>
       <!-- Passar snackbar para outro lugar, já que sera reutilizado mais vezes -->
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
      label: {
        type: String,
      }
    },
    data () {
      return {
        dialog: false,
      }
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
</style>