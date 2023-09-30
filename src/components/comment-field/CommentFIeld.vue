<template>
    <div>
        <v-textarea :label="label" clearable filled>
        </v-textarea>
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
    </div>
</template>

<script>
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
</style>
