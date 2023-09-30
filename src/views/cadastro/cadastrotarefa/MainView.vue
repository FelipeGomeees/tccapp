<template>
    <core-screen>
        <template v-slot:main>
            <form-tarefa></form-tarefa>
        </template>  
    </core-screen>
</template>

<script>
import CoreScreen from '@/components/always/CoreScreen.vue'
import FormTarefa from '@/components/form/tarefas/TarefaDialog.vue'
// import TagTemplateList from '@/components/formulario/TagTemplateList.vue'
export default {
    name: 'AppBarView',

    components: {
        CoreScreen,
        FormTarefa,
    },

    data() {
        return {
        }
    },

    methods: {
    },
}
</script>

<style scoped>
    h2, span, p {
        text-align: center;
        color: #30343f;
    }

    a {
        color: #ffb765;
    }

    .container-inferior {
        display: flex;
        justify-content: space-between;
    }

    .border {
        border: 1px solid red;
    }

    .bg-color-1 {
        background-color: linear-gradient(#fff, #e5e5e5);
        background-size: 100%;
        transition: background-color 1000ms linear;
    }

    .bg-color-2 {
        transition: background-color 1000ms linear;
         background-size: 100%;
        background-color: linear-gradient(#fff, #fe9c3a);
    }

    .card {
        padding: 20px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(6px);
        z-index: 3;
    }
</style>