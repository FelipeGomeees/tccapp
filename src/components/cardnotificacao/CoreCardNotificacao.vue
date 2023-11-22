<template>
  <div class="d-flex">
    <v-card :class="{['card-resposta']: !principal, ['hidden-on-mobile']: true}" width="700px">
      <v-card-subtitle
      :class="{
      ['sub-resposta']: !principal , 
      tipo1: dados.notidtiponotificacao === 1, 
      tipo2: dados.notidtiponotificacao === 2, 
      tipo3: dados.notidtiponotificacao === 3, 
      sub: principal, ['d-flex']: true
      }">
      <div class="d-flex justify-space-between fill">
        <div class="d-flex">
          <v-icon class="margem">{{$_retornaIcone(dados.notidtiponotificacao)}}</v-icon>
          <b v-if="dados.notidtiponotificacao !== 2"> {{dados.notidusuarioambiente}} </b>
          <b v-else> Tasker </b>
          <p> | {{$_horasAtras(dados.notdatanotificacao)}}</p>
          <p v-if="dados.fordataedicao"> | Editado {{$_horasAtras(dados.fordataedicao)}} atrás</p>
        </div>
        <forum-menu @visibilidade="ocultar = !ocultar"/>
      </div>
      </v-card-subtitle>
      <v-card-text v-if="!ocultar">
        {{dados.notdescricao}}
      </v-card-text>
      <v-card-text v-if="dados.notidtiponotificacao === 2" class="d-flex justify-space-between">
        <div>

        </div>
        <div>
          <v-btn class="margem">Recusar</v-btn>
          <v-btn color="primary">Permitir</v-btn>
        </div>
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
        const hora = (moment.duration(moment(new Date()).diff(comentario))).hours();
        if (hora === 0) {
          const minuto = (moment.duration(moment(new Date()).diff(comentario))).minutes();
          if (minuto === 0) {
            const segundo = (moment.duration(moment(new Date()).diff(comentario))).seconds();
            return (Number(segundo) === 1) ? `${segundo} segundo atrás` : `${segundo} segundos atrás`;
          }
          return (Number(minuto ) === 1) ? `${minuto} minuto atrás` : `${minuto } minutos atrás`;
        }
        return (Number(hora) === 1) ? `${hora} hora atrás` : `${hora} horas atrás`;
      },

      $_retornaIcone(tipo) {
        switch(tipo) {
          case 1: return 'mdi-check-circle';
          case 2: return 'mdi-account-multiple-plus';
          case 3: return 'mdi-forum';
        }
      },
    },

    computed: {
      $mobile() {
        return this.$vuetify.breakpoint.mobile ? '50px' : '30px'
      },
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
      background-color: #e8ff65;
      height: 50px;
      margin-bottom: 15px;
    }

    .fill {
      width: 100%;
    }

    .sub-resposta {
      height: 50px;
      margin-bottom: 15px;
    }

    .tipo2 {
      background-color: #91f89d;
    }

    .tipo3 {
      background-color: #77abff;
    }

    .tipo1 {
      background-color: #ffdd8f;
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

    .margem {
      margin-right: 15px;
    }


</style>