<template>
  <div class="container-date">
    <v-text-field 
      @focus="openDate = !openDate"
      :label="label"
      readonly
      append-icon="mdi-calendar"
      outlined
      dense
      v-model="value"
      ></v-text-field>
      <v-date-picker
        v-if="openDate"
        v-model="value"
        class="mt-4 date-picker"
      ></v-date-picker>
  </div>
</template>

<script>
export default {
    name: "DateInput",
    props: {
      label: {
        type: String,
      }
    },

    data() {
      return {
        value: '',
        openDate: false,
      }
    },

    methods: {
      $_blur() {
        setTimeout(() => {
          this.openDate = !this.openDate;
        }, 100)
      }
    },

    watch: {
      value() {
        this.$emit('change', this.value);
      },
    },
}
</script>

<style scoped>
  .date-picker {
    position: absolute;
    top: 40px;
    left: 0px;
    z-index: 999;
  }

  .container-date {
    position: relative;
    
  }
  
</style>