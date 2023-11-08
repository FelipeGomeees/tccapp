<template>
    <div>
        <v-textarea :label="label" v-model="comentario" clearable filled hide-details>
        </v-textarea>
        <br/>
        <div class="d-flex justify-space-between fill">
          <div class="icones" v-if="!slim">
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
          <div v-if="comentario">
            <v-btn color="primary" @click="$_enviar" height="36px" v-if="!slim">Enviar</v-btn>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'CommentField.vue',

    props: {
      slim: {
        type: Boolean,
      },
      label: {
        type: String,
      },
      hidden: {
        type: Boolean,
        default: false,
      },
      config: {
        type: Object,
      }
    },

    methods: {
      $_enviar() {
          const dados = {
            foridusuarioambiente: sessionStorage.getItem('usuarioambiente').toString(),
            forcomentario: this.comentario,
            fortipoforum: this.$props.config.fortipoforum,
            foridtipoforum: this.$props.config.foridtipoforum,
            fordatacriacao: null,
            fordataedicao: null,
            forreacaopositiva: 0,
            forreacaonegativa: 0,
            foridforum: this.$props.config.foridforum,
          }
          const res = axios.post(
              '/forum',
              { dados },
          );
          res.then((item) => {
            console.log(item);
          });
      }
    },

//     CREATE TABLE "forum" (
//   "id" SERIAL PRIMARY KEY,
//   "foridusuarioambiente" INT,
//   "forcomentario" VARCHAR(255),
//   "fortipoforum" VARCHAR(50),
//   "foridtipoforum" INT,
//   "fordatacriacao" timestamp,
//   "fordataedicao" timestamp,
//   "forreacaopositiva" INT,
//   "forreacaonegativa" INT,
//   "forestrela" INT,
//   "foridforum" INT
// );


    data() {
      return {
        comentario: null,
      }
    }
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
  .fill {
    height: 40px;
  }
</style>
