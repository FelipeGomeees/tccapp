<template>
    <dir>
        <div class="titulo">
            <h1 class="id">
                {{dados.tarefa.id}}
            </h1>
            <h1 class="nome">
                {{dados.tarefa.tarnome}}
            </h1>
        </div>
        <div class="tags">
            <tag-list :data="dados.tags" criavel></tag-list>
        </div>
        <div class="descricao">
            {{ dados.tarefa.tardescricao }}
        </div>
        <div class="vazio">
            
        </div>
    </dir>
</template>

<script>

import TagList from '@/components/taglist/TagList.vue'
// import CoreDialog from '@/components/dialog/SolicitacaoDialog.vue';
export default {
    name: 'SideTarefas',
    components: {
        TagList,
    },

    props: {
        dados: {
            type: Object,
        }
    },

    data() {
        return {
            iniciado: true,
        }
    }
} 
</script>


<style scoped>
    .flex-center {
        display: flex;
        justify-content: center;
    }

    .titulo {
        width: 100%;
        border: 1px solid black;
        display: flex;
    }

    .id {
        width: 10%;
        text-align: center;
        border-right: 1px solid black;
    }

    .nome {
        padding-left: 5px;
    }

    .tags, .descricao {
        width: 100%;
        border-bottom: 1px;
        border-right: 1px;
        border-left: 1px;
        border-color: black;
        border-style: solid;
    }

    .vazio {
        width: 100%;
        border-bottom: 1px;
        border-right: 1px;
        border-left: 1px;
        border-color: black;
        border-style: solid;
        height: 250px;
        overflow: hidden;
    }
</style>