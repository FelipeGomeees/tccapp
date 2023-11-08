<template>
  <div class="d-flex">
    <v-avatar color='#30343f' class="avatar-dark hidden-on-mobile" size="52px" >   
      <v-img src="https://picsum.photos/200"></v-img>
    </v-avatar>
    <v-card :class="{['card-resposta']: !principal, ['hidden-on-mobile']: true}" width="700px">
      <div class="esfera" v-if="!principal">
      </div>
      <v-card-subtitle
      :class="{['sub-resposta']: !principal , sub: principal, ['d-flex']: true}">
      <div class="d-flex justify-space-between fill">
        <div class="d-flex">
          <b>Felipe Gomes </b>
          <p> | {{$_horasAtras(dados.fordatacriacao)}}</p>
          <p v-if="dados.fordataedicao"> | Editado {{$_horasAtras(dados.fordataedicao)}} atrás</p>
        </div>
        <forum-menu @visibilidade="ocultar = !ocultar"/>
      </div>
      </v-card-subtitle>
      <v-card-text v-if="!ocultar">
        {{dados.forcomentario}}
      </v-card-text>
      <v-card-text v-if="!ocultar">
        <div class="d-flex review-wrapper">
          <div v-if="!up" class="review">
            <v-icon @click="up = true; down = false;" >mdi-thumb-up-outline</v-icon><p>{{dados.forreacaopositiva}}</p>
          </div>
          <div v-else class="review">
            <v-icon @click="up = false" color="green">mdi-thumb-up</v-icon><p>{{dados.forreacaonegativa}}</p>
          </div>
          <div v-if="!down" class="review">
            <v-icon @click="up = false; down = true;" >mdi-thumb-down-outline</v-icon><p>{{dados.forreacaopositiva}}</p>
          </div>
          <div v-else class="review">
            <v-icon @click="down = false" color="red">mdi-thumb-down</v-icon><p>{{dados.forreacaonegativa}}</p>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="hidden-on-desktop">
      <v-card-subtitle
      :class="{['sub-resposta-mobile']: !principal, ['sub-mobile']: principal , sub: principal}">
        <div class="d-flex justify-space-between fill">
          <div class="d-flex">
            <b>Felipe Gomes </b>
            <p> | {{$_horasAtras(dados.fordatacriacao)}}s</p>
            <p v-if="dados.fordataedicao" > | Editado {{$_horasAtras(dados.fordataedicao)}} atrás</p>
          </div>
          <v-icon>mdi-arrow-up</v-icon>
        </div>
      </v-card-subtitle>
      <v-card-text>
        {{dados.forcomentario}}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ForumMenu from '@/components/forum-menu/ForumMenu.vue'
import moment from 'moment'

export default {
    name: 'CoreAppBar',

    components: {
      ForumMenu,
    },

    props: {
      principal: {
        type: Boolean,
      },
      dados: {
        type: Object,
      }
    },

    data() {
      return {
        up: false,
        down: false,
        ocultar: false,
      }
    },

    methods: {
      $_horasAtras(data) {
        const comentario = moment(data);
        const hora = (moment.duration(comentario.diff(new Date()))).hours();
        if (hora === 0) {
          const minuto = (moment.duration(comentario.diff(new Date()))).minutes();
          if (minuto === 0) {
            const segundo = (moment.duration(comentario.diff(new Date()))).seconds();
            return (Number(segundo) === 1) ? `${segundo} segundo atrás` : `${segundo} segundos atrás`;
          }
          return (Number(minuto ) === 1) ? `${minuto} minuto atrás` : `${minuto } minutos atrás`;
        }
        return (Number(hora) === 1) ? `${hora} hora atrás` : `${hora} horas atrás`;
      },
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

    .review-wrapper {
      justify-content: right;
      width: 100%;
    }


</style>