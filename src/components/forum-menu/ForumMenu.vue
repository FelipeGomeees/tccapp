<template>
    <v-menu offset-y v-model="menu">
      <template v-slot:activator>
        <v-icon @click="menu = true">
            mdi-dots-horizontal
        </v-icon>
      </template>
      <v-list>
        <v-list-item
        class="itemForum"
          v-for="(item, index) in items"
          :key="index"
          @click="$emit(item.title.toLowerCase())"
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
                { title: 'Visibilidade' },
            ],

            menu: false,
        }
    }
}
</script>

<style scoped>
  .itemForum {
    cursor: pointer;
  }
</style>
