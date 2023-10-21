<template>
    <div>
        <div class="d-flex">
            <v-autocomplete label="Tipo" 
             :items="tipo"
             v-model="tipoSelecionado"
            outlined/>
            <v-text-field outlined v-model="info" label="Informação"/>
            <v-btn color="primary margin" height="54px" @click="$_saveContato">
            <v-icon>mdi-arrow-down-thick</v-icon>
            </v-btn>
        </div>
        <span style="color: #999999">Contato</span>
        <div class="tag-filler" v-if="tabela.length">
        <table class="fill">
            <tr>
                <th>Tipo</th>
                <th>Informação</th>
            </tr>
            <tr v-for="(item, index) in tabela" :key="index" :class="{ dark: index % 2 !== 0}"
            @click="$_deleteContato(item)">
                <td>{{item.clctipocontato}}</td>
                <td>{{item.clccontato}}</td>
            </tr>
            </table>
        </div>
        <div class="tag-filler" v-else>
            <div style="margin-left: 10px">
                . . .
            </div>       
        </div>
    </div>
</template>

<script>

export default {
    name: 'TagSelector',

    props: {
        dados: Array,
    },

    data() {
        return {
            tipoSelecionado: null,
            info: null,
            tipo: ['E-mail', 'Telefone'],
            tabela: [],
        }
    },

    methods: {
        $_saveContato() {
            this.tabela.push({ 
                clctipocontato: this.tipoSelecionado,
                clccontato: this.info,
            });
            this.tipoSelecionado = null;
            this.info = null;
        },

        $_deleteContato(item) {
            this.tabela = this.tabela.filter((el) => {
                return el.clccontato != item.clccontato;
            })
        },
    },

    watch: {
        tabela: {
            deep: true,
            handler() {
                this.$emit('atualizado', this.tabela);
            },
        }
    }
}
</script>


<style scoped>
  .tag-filler {
    border: 1px solid #c2c2c2;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    margin: 15px;
  }

  .margin {
    margin-left: 15px;
  }

  .fill {
    width: 100%;
  }

  .dark {
    background-color: #f0f0f0;
  }

  table th {
    background-color:  #ffb765;
  }

  table th:first-child {
    width: 20%;
  }

  table * {
    border: 1px solid rgb(44, 44, 44)
  }

 table td {
    padding: 0px 5px 0px 5px;
 }

  table tr:hover {
    background-color:  #ff6565;
    cursor:pointer;
 }
</style>