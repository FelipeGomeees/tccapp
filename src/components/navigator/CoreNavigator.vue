<template>
    <v-navigation-drawer :app="!print"
        permanent
        v-if="!this.$vuetify.breakpoint.mobile"
        class="navigator"
        ref="navigator"
      >
        <v-list color="primary" width="250px">
          <v-list-item link class="lista">
            <v-list-item-content>
              <v-list-item-title class="text-h6  logo">
                <img src="../../../public/img/TaskerL.png" alt="">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
          class="minimize"
        >
          <core-navigator-item icon="mdi-home" label="Home" url="/home" />
          <core-navigator-item icon="mdi-arrange-bring-forward" label="Tarefas" :subitems="subtarefa"
          />
          <core-navigator-item icon="mdi-cube-outline" label="Diversos" :subitems="diversos"/>
          <core-navigator-item icon="mdi-note-edit" label="Gerencial" :subitems="adm"/>
          <core-navigator-item icon="mdi-forum-outline" label="Forum" url="/forum"/>
          <core-navigator-item icon="mdi-printer" label="Relatório" :subitems="relatorio"/>
          <core-navigator-item icon="mdi-account-clock" label="Usuario" :subitems="subatividade"/>
          <core-navigator-item icon="mdi-exit-run" label="Sair"/>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  import CoreNavigatorItem from './navigatoritem/CoreNavigatorItem.vue'

  export default {
    name: 'CoreNavigator',

    components: {
      CoreNavigatorItem,
    },

    data() {
      return {
        subtarefa: [{label: 'Designações', url: "/ambiente"},{label: 'Detalhes', url: "/tarefa"}],
        subatividade: [{label: 'Perfil', url: '/perfil'},{ label: 'Notificações', url: '/notificacao'}],
        // subforum: [{label: 'Tarefa', url: '/perfil'}, {label: 'Histórico'},{ label: 'Notificações'}],
        diversos: [{label: 'Tags', url: '/tags'}, {label: 'Executaveis', url: '/executavel' }, {label: 'Clientes', url: '/cliente'}], 
        relatorio: [
        {label: 'Estado Tarefa Clientes', url: '/clientetipo'},
        {label: 'Tarefas por Periodo', url: '/clienteperiodo' },
        {label: 'Situação Tarefas', url: '/situacaotarefa'}], 
        adm: [{label: 'Usuarios', url: '/usuario'}],
        nome: '',
        print: false,
      }
    },
    

    mounted() {
      console.log(this.$refs.navigator.$props, 'refs');
      this.$root.$on('prepara-print', () => {
            this.print = !this.print;
      });
      // const usuario = JSON.parse(sessionStorage.getItem('usuario'));
      // this.nome = usuario.nome;
    }
  }
</script>

<style scoped>
.navigator {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
}

.lista {
  border-radius: 50px;
}

    .logo {
        width: 300px;
        height: 50px;
    }

    .logo img {
        max-width: 100%;
        max-height: 100%; 
        animation: logo 1.2s ease-out;
        filter: brightness(0) invert(1);
    }

        /* .header {
        display: flex;
        justify-content: space-between;
    }

    .header > h2 {
        color: #ffffff;
        transform: translateY(11px);
        background-color: #ff9d1c;
        padding-left: 12px;
        padding-right: 12px;
        box-shadow: -15px 5px #434343;
    } */
</style>
