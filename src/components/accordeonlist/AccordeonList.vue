<template>
  <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in dados"
        :key="i"
      >
        <v-expansion-panel-header>{{item.categoria}}</v-expansion-panel-header>
        <div class="expansion-container">
            <v-expansion-panel-content
            v-for="(tag,index) in item.tags"
            :key="index"
            class="combo-container"
            >
                <!-- Bind Estilos no mini, v-if v-else nao adianta -->
                <v-card class="card" elevation="4" @click="$_marcaCheck(index)">
                    <div class="combo">
                        <v-checkbox :ref="`check${index}`"></v-checkbox>
                        <v-btn :color="tag.tapcor" rounded class="elevation-0 pa-2 tag" height="19px"
                        :dark="$_isDark(tag.tapdark)">
                            {{tag.tapnome}}
                        </v-btn>
                    </div>
                    <p>{{tag.tapdescricao}}</p>
                    <div class="link">
                        <a>Mais sobre {{tag.tapnome}}</a>
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
        dados: {
            type: Array,
        },
    },
    data() {
        return {
            configs: [{
                titulo: 'Linguagens de Programação',
                tags: [{
                    nome: 'Vue',
                    cor: '#54ff82',
                    descricao: "Vue (pronuncia-se /vjuː/, como view, em inglês) é um framework progressivo para a construção de interfaces de usuário.",
                    dark: false,
                },{
                    nome: 'Node',
                    cor: '#32a852',
                    dark: true,
                },{
                    nome: 'Delphi',
                    cor: '#ff4554',
                    dark: true,
                },{
                    nome: 'PHP',
                    cor: '#538abd',
                    dark: true,
                },{
                    nome: 'Python',
                    cor: '#edde11',
                    dark: true,
                },{
                    nome: 'React',
                    cor: '#35aaf2',
                    dark: true,
                },]
            },{
            titulo: 'DevOps',
                tags: [{
                    nome: 'AWS',
                    cor: '#f29822'
                },{
                    nome: 'Azure',
                    cor: '#35aaf2',
                    dark: true,
                },{
                    nome: 'Nginx',
                    cor: '#32a852',
                    dark: true,
                },{
                    nome: 'Apache',
                    cor: '#f0165b',
                    dark: true,
                },]
            },{
            titulo: 'Fluxo de Tarefa',
                tags: [{
                    nome: 'Em Desenvolvimento',
                    cor: '#16f0a7',
                    descricao: 'Tarefa em fase prática, atualmente em processo de coding'
                },{
                    nome: 'Em Testes',
                    cor: '#f5ed00',
                    descricao: 'Tarefa passando por processos manuais de testes e validações'
                },{
                    nome: 'Em Análise',
                    cor: '#222',
                    dark: true,
                },{
                    nome: 'Em Planejamento',
                    cor: '#f53838',
                    dark: true,
                },]
            }
            ,{
            titulo: 'Categorias Gerais',
                tags: [{
                    nome: 'Feature',
                    cor: '#598db3',
                    dark: true,
                },{
                    nome: 'Correção',
                    cor: '#fff'
                },{
                    nome: 'Diversos',
                    cor: '#ccc'
                },]
            }
            ],
        }
    },

    methods: {
        $_marcaCheck(index) {
            console.log(this.$refs[`check${index}`]); 
        },

        $_isDark(dark) {
            return (dark === 'S' ? true : false);
        },
    }
}
</script>

<style scoped>
    .expansion-container {
        display: flex;
        flex-wrap: wrap;
        max-height: 380px;
        overflow-y: scroll;
    }
    .combo-container {
        width: 50%;
        height: 200px;
    }
    .card {
        width: 100%;
        height: 100%;
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

    .tag {
        margin-right: 10px;
    }

    .link {
        text-align: right;
    }
</style>
