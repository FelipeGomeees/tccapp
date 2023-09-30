<template>
  <div class="d-flex">
    <v-avatar color='#30343f' class="avatar-dark hidden-on-mobile" size="52px">   
      1
    </v-avatar>
    <v-card :class="{['card-resposta']: !principal, ['hidden-on-mobile']: true}">
      <div class="esfera" v-if="!principal">
      </div>
      <v-card-subtitle
      :class="{['sub-resposta']: !principal , sub: principal, ['d-flex']: true}">
      <div class="d-flex justify-space-between fill">
        <div class="d-flex">
          <b>Felipe Gomes </b>
          <p> | 5 Horas Atrás</p>
          <p> | Editado 2 horas atrás</p>
        </div>
        <forum-menu/>
      </div>
      </v-card-subtitle>
      <v-card-text>
        Houve um rollback acidental de um dos commits da tarefa <a>#2332</a>, durante a adição do novo input de login (<a>#2411</a>)
      </v-card-text>
      <v-card-text>
        <div class="d-flex">
          <div v-if="!up" class="review">
            <v-icon @click="up = true; down = false;" >mdi-thumb-up-outline</v-icon><p>10</p>
          </div>
          <div v-else class="review">
            <v-icon @click="up = false" color="green">mdi-thumb-up</v-icon><p>10</p>
          </div>
          <div v-if="!down" class="review">
            <v-icon @click="up = false; down = true;" >mdi-thumb-down-outline</v-icon><p>10</p>
          </div>
          <div v-else class="review">
            <v-icon @click="down = false" color="red">mdi-thumb-down</v-icon><p>10</p>
          </div>
          <v-icon >mdi-star</v-icon><p>10</p>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="hidden-on-desktop">
      <v-card-subtitle
      :class="{['sub-resposta-mobile']: !principal, ['sub-mobile']: principal , sub: principal}">
        <div class="d-flex justify-space-between fill">
          <div class="d-flex">
            <b>Felipe Gomes </b>
            <p> | 5 Horas Atrás</p>
            <p> | Editado 2 horas atrás</p>
          </div>
          <v-icon>mdi-arrow-up</v-icon>
        </div>
      </v-card-subtitle>
      <v-card-text>
        Houve um rollback acidental de um dos commits da tarefa <a>#2332</a>, durante a adição do novo input de login (<a>#2411</a>)
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ForumMenu from '@/components/forum-menu/ForumMenu.vue'
export default {
    name: 'CoreAppBar',

    components: {
      ForumMenu,
    },

    props: {
      principal: {
        type: Boolean,
      }
    },

    data() {
      return {
        up: false,
        down: false,
      }
    },

    computed: {
      $mobile() {
        return this.$vuetify.breakpoint.mobile ? '50px' : '30px'
      }
    }
}
</script>

<style scoped>
      .avatar-dark {
        color: white;
    }

    .avatar:hover, .avatar-dark:hover {
        cursor: pointer;
    }

    .card {
      margin-left: 25px;
    }

    .card-resposta{
      margin-left: 45px;
    }

    .sub {
      background-color: #ffb765;
      height: 50px;
      margin-bottom: 15px;
    }

    .fill {
      width: 100%;
    }

    .sub-resposta {
      background-color: #ffcf65;
      height: 50px;
      margin-bottom: 15px;
    }

    .sub-resposta-mobile {
      background-color: #ffcf65;
      height: 65px;
      margin-bottom: 15px;
    }

    .esfera {
      height: 15px;
      width: 15px;
      border-radius: 100%;
      position: absolute;
      background-color: #ffcf65;;
      left: -10px;
      top: 10px;
    }

     @media screen and (max-width: 768px) {
        .hidden-on-mobile {
            display: none;
        }
    }

    @media screen and (min-width: 769px) {
        .hidden-on-desktop {
            display: none;
        }
    }

    .review {
      display: flex;
    }


</style>