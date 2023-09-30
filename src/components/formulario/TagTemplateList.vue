<template>
    <v-expansion-panels accordion>
        <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
        >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, cud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    name: 'TagTemplateList',

    data() {
        return {
        }
    }
}
</script>
