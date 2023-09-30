<template>
    <div class="flex">
        <div v-for="(item, index) in data" :key="index">
            <v-btn :color="item.cor" rounded class="elevation-0 pa-2 tag" height="19px">
                {{item.descricao}}
            </v-btn>
        </div>
        <v-btn color="#ddd" rounded class="elevation-0 pa-2 tag" height="19px" v-if="criavel">
            +
        </v-btn>
    </div>
</template>

<script>

export default {
    name: 'TagList',
    
    props: {
        data: Array,
        criavel: Boolean,
        coluna: Boolean,
    }
}
</script>


<style scoped>
    .tag-filtro {
        width: 100%;
        border-top: 1px solid grey;
        padding-top: 10px;
    }

    .tag {
        margin-bottom: 10px;
    }

    .tags-container {
        width: 100%;
        text-align: center;
    }
</style>