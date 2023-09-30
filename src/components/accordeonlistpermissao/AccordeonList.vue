<template>
  <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in configs"
        :key="i"
      >
        <v-expansion-panel-header>{{item.titulo}}</v-expansion-panel-header>
        <div class="expansion-container">
            <v-expansion-panel-content
            v-for="(tag,index) in item.tags"
            :key="index"
            class="combo-container"
            >
                <!-- Bind Estilos no mini, v-if v-else nao adianta -->
                <v-card class="card" elevation="4" @click="$_marcaCheck(index)">
                    <div class="texto">
                        <h4>{{tag.nome}}</h4>
                        <p>{{tag.descricao}}</p>
                        <div class="alinhamento">
                            <div class="combobox">
                                <v-combobox v-model="combo" :items="templates" 
                                placeholder="Template Inicial (Não Obrigatório)">
                                </v-combobox>
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-expansion-panel-content>
        </div>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
    name: 'AccordionList',
    props: {
        mini: {
            type: Boolean,
        },
    },
    data() {
        return {
            templates: ['Liberado', 'Somente com Aprovação', 'Bloqueado'],
            configs: [{
                titulo: 'Permissões Padrões',
                tags: [{
                    nome: 'Criação e edição',
                    descricao: "Processo de criação e edição de qualquer dado de uma tarefa, com excessão de manipulação de seus participantes",
                },{
                    nome: 'Movimentação livre de tags de andamento',
                    descricao: 'Alterar o andamento de uma tarefa, como de desenvolvimento para em testes'
                },{
                    nome: 'Arquivamento',
                    descricao: 'Arquivar tarefas, as removendo da linha de produção'
                },{
                    nome: 'PHP',
                },{
                    nome: 'Python',
                },{
                    nome: 'React',
                },
                ]
            }, { 
                titulo: 'Permissões Administrativas',
                tags: [{
                    nome: 'Criação e edição',
                    descricao: "Processo de criação e edição de qualquer dado de uma tarefa, com excessão de manipulação de seus participantes",
                },{
                    nome: 'Movimentação livre de tags de andamento',
                    descricao: 'Alterar o andamento de uma tarefa, como de desenvolvimento para em testes'
                },{
                    nome: 'Arquivamento',
                    descricao: 'Arquivar tarefas, as removendo da linha de produção'
                },{
                    nome: 'PHP',
                },{
                    nome: 'Python',
                },{
                    nome: 'React',
                }]},
            ],
        }
    },

    methods: {
        $_marcaCheck(index) {
            console.log(this.$refs[`check${index}`]); 
        }
    }
}
</script>

<style scoped>
    .expansion-container {
        display: flex;
        max-height: 380px;
        flex-wrap: wrap;
        width: 100%;
        overflow-y: scroll;
    }
    .combo-container {
        width: 100%;
    }
    .card {
        width: 100%;
        padding: 10px;
    }

    .card-mini {
        width: 100%;
        height: 20%;
    }

    .card > p {
        padding: 0px 15px 15px 15px;
        height: 45%;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .combo {
        display: flex;
        justify-content: left;
        padding-left: 15px;
        align-items: center;
        width: 100%;
    }

    .combobox {
        width: 50%;
    }

    .alinhamento {
        width: 100%;
        display: flex;
        justify-content: right;
    }
</style>
