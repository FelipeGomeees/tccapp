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
        Tags
      </v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <div>
          <div class="d-flex justify-space-around">
            <div class="nome">
              <v-text-field label="Nome" class="fill" outlined v-model="formulario.exenome"
              prepend-inner-icon="mdi-clipboard-account"/>
            </div>
            <div class="versao">
              <v-text-field prepend-inner-icon="mdi-text-box" class="fill"  label="Versão" outlined
              v-model="formulario.exeversao"/>
            </div>
          </div>
          <v-textarea prepend-inner-icon="mdi-text-box" class="fill"  label="Descrição" outlined
          v-model="formulario.exedescricao"/>
            <v-text-field prepend-inner-icon="mdi-text-box" class="fill"  label="URL" outlined
            v-model="formulario.exeurl"/>
             </div>
           </v-stepper-content>
            <v-stepper-content step="2">
              <tag-selector @atualizado="$_modelaTags" v-if="dadosTags"
              :dados="dadosTags"></tag-selector>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <br/>
        <div class="d-flex justify-space-between">
          <v-btn>Cancelar</v-btn>
          <div>
            <v-btn class="space" @click="e1 -= 1; formAtual -= 1" v-if="formAtual !== 0">Voltar</v-btn>
            <v-btn color="primary" @click="e1 += 1; formAtual += 1" v-if="formAtual !== 1">Próximo</v-btn>
            <v-btn v-else color="primary" @click="$_criarExecutavel">Finalizar</v-btn>
          </div>
        </div>
      </v-form>
    </v-card>
</template>

<script>
import axios from 'axios';
import tagSelector from '@/components/tagselector/TagSelector.vue';

export default {
    name: 'FormExecutavel',
    components: {
      tagSelector,
    },
    data () {
      return {
        e1: 1,
        formAtual: 0,
        formulario: {
          exeidusuarioambiente: sessionStorage.getItem('usuarioambiente').toString(),
          exenome: '',
          exedescricao: '',
          exeversao: null,
          exeurl: null,
        },
        tags: null,
        dadosTags: null,
      }
    },

    methods: {
      $_criarExecutavel() {
        // Fluxo','Categoria','Geral
        const dados = this.formulario;
        const put = sessionStorage.getItem('edit');
        if (put) {
            const res = axios.put(
                `/executavel/${put}`,
                { dados },
            );
            res.then((item) => {
            axios.delete(
              `/tagexecutavel/all/${put}`,
            );
            this.tags.forEach((tag) => {
                const idUsuarioAmbiente = sessionStorage.getItem('usuarioambiente');
                const tagDados = {
                  taeidtag: tag.id,
                  taeidexecutavel: put,
                  taeidusuarioambiente: idUsuarioAmbiente,
                }
                const resTag = axios.post(
                  '/tagexecutavel',
                  { dados: tagDados },
                );
                resTag.then((itemTag) => {
                  console.log(itemTag, 'itemTag');
                  this.$emit('sucesso', item);
                })
            });
            }).catch(() => {
              //
            }).finally(() => {
              this.formAtual = 0;
              this.el = 1;
            })
        } else {
          const res = axios.post(
              '/executavel',
              { dados },
          );
          res.then((item) => {
            this.tags.forEach((tag) => {
              const tagDados = {
                  taeidtag: tag,
                  taeidexecutavel: item.data[0].id,
                  taeidusuarioambiente: item.data[0].exeidusuarioambiente,
              }
              const resTag = axios.post(
                  '/tagexecutavel',
                  { dados: tagDados },
              );
              resTag.then((itemTag) => {
                console.log(itemTag, 'itemTag');
                this.$emit('sucesso', item);
              }).catch(() => {
                //
              });
            });
          }).catch(() => {
             //
          });
        }
      },

      $_modelaTags(tags) {
        console.log(tags, 'tags');
        this.tags = tags;
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

.versao {
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