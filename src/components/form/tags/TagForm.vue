<template>
    <v-card width="1000px">
      <v-form class="card">
        <div class="divisor">
          <div class="divisor-config">
            <div style="width: 50%">
              <v-text-field label="Nome" class="fill" outlined v-model="formulario.tagnome"
              prepend-inner-icon="mdi-clipboard-account"/>
              <v-textarea prepend-inner-icon="mdi-text-box" class="fill"  label="Descrição" outlined
              v-model="formulario.tagdescricao"/>
            </div>
            <div style="width: 50%" class="color">
              <v-color-picker class="color" v-model="formulario.tagcor"></v-color-picker>
            </div>
          </div>
          <div>
          <div class="d-flex linha">
              <div class="executavel space">
                <v-autocomplete prepend-inner-icon="mdi-cog" label="Tipo" outlined :items="['Fluxo','Categoria','Geral']"
                v-model="formulario.tagidtagtipo"
                />
              </div>
              <div class="executavel space">
                <v-text-field label="Prioridade" outlined 
                prepend-inner-icon="mdi-priority-high"
                v-model="formulario.tagprioridade"/>
              </div>
              <div>
                <v-switch label="Inverter cor do texto" v-model="formulario.tagdark"/>
              </div>
            </div>
          </div>
          <div class="divisor-tag">
            <v-btn class="elevation-0 pa-2 tag" :dark="formulario.tagdark" 
            :color="formulario.tagcor" rounded>{{formulario.tagnome}}</v-btn>
          </div>
        </div>
        <div class="actions">
          <v-btn color="primary" @click="$_criarTarefa">Finalizar</v-btn>
        </div>
      </v-form>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FormTarefa',
    data () {
      return {
        formulario: {
          tagidusuarioambiente: sessionStorage.getItem('usuarioambiente').toString(),
          tagnome: '',
          tagdescricao: '',
          tagcor: '#faa',
          tagdark: false,
          tagprioridade : null,
          tagidtagtipo: null,
        }
      }
    },

    methods: {
      $_criarTarefa() {
        // Fluxo','Categoria','Geral
        switch (this.formulario.tagidtagtipo) {
          case 'Fluxo': this.formulario.tagidtagtipo = 5;
          break;
          case 'Categoria': this.formulario.tagidtagtipo = 6;
          break;
          case 'Geral': this.formulario.tagidtagtipo = 4;
          break;
          default: 4
        }
        const newFormulario = { ...this.formulario, tagdark: (this.formulario.tagdark) ? 0 : 1};
        const dados = newFormulario;
        const res = axios.post(
            '/tag',
            { dados },
        );
        res.then((item) => {
          this.$emit('sucesso', item);
        }).catch(() => {
          //
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