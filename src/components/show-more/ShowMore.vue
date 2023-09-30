<template>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <div class="container"
                v-bind="attrs"
            v-on="on">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
      </template>
      <span>{{msg}}</span>
    </v-tooltip>
</template>

<script>
export default {
    name: 'ShowMore',

    props: {
        msg: {
            type: String,
        }
    }
}
</script>


<style scoped>
    .container {
        width: 50px;
        height: 20px;
        background-color: rgb(243, 243, 243);
        border: 1px solid rgb(214, 214, 214);
        border-radius: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .container:hover {
        cursor: pointer;
    }

    .dot {
        width: 7px;
        height: 7px;
        border-radius: 100%;
        background-color: rgb(198, 198, 198);
    }
</style>