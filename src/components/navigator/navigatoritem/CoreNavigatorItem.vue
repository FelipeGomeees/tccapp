<script>
export default {
    name: 'CoreNavigatorItem',
    props: {
        icon: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: 'item',
        },
        subitems: {
            type: Array,
        },
        url: {
            type: String,
        }
    },

    data() {
        return {
            ativo: false,
        }
    },

    methods: {
        $_selecionado() {
            this.ativo = !this.ativo;
            this.$emit('close-side-navigators', 2)
        }
    }
}
</script>

<template>
    <div>
        <div>
            <v-list-item link @click="$_selecionado()" :to="url">
                <v-list-item-icon>
                    <v-icon>{{icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{label}}</v-list-item-title>
            </v-list-item>
        </div>
        <v-divider></v-divider>
        <div v-if="ativo" class="side-list-wrapper">
            <v-list v-for="item in subitems" :key="item.label" class="side-list">
                <v-list-item link class="side-list-item" :to="item.url">
                    <v-list-item-title>{{item.label}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<style scoped>
    .side-list {
        padding: 0px;
    }

    .side-list-wrapper {
        background-color: #eeeeee;
    }

    .side-list-item > * {
        padding-left: 30%;
    }
</style>