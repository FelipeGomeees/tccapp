<template>
    <div class="flex">
        <div v-for="(item, index) in data" :key="index">
            <v-btn color="grey" rounded class="elevation-0 pa-2 tag" height="19px"
            dark v-if="projeto">
                {{item.tagnome}}
            </v-btn>
                        <v-btn :color="item.tagcor" rounded class="elevation-0 pa-2 tag" height="19px"
            :dark="item.tagdark === '0' ? true : false" v-else>
                {{item.tagnome}}
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
        projeto: Boolean,
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
        margin: 0px 10px 10px 0px;
    }

    .tags-container {
        width: 100%;
        text-align: center;
    }

    @media print {
        .flex {
            display: flex;
        }

        .flex * {
            border: 1px solid black;
            border-radius: 20px;
            margin: 5px;
        }
    }
</style>