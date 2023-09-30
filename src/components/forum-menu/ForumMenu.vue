<template>
    <v-menu offset-y v-model="menu">
      <template v-slot:activator>
        <v-icon @click="menu = true">
            mdi-dots-horizontal
        </v-icon>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'Responder' },
                { title: 'Ocultar' },
            ],

            menu: false,
        }
    }
}
</script>
