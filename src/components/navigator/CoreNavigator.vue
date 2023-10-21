<template>
    <v-navigation-drawer app
        permanent
        v-if="!this.$vuetify.breakpoint.mobile"
        class="navigator"
      >
        <v-list color="primary" width="250px">
          <v-list-item link class="lista">
            <v-list-item-content>
              <v-list-item-title class="text-h6  ">
                {{nome}}
              </v-list-item-title>
              <v-list-item-subtitle>#6124</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
          class="minimize"
        >
          <core-navigator-item icon="mdi-cat" label="Home" url="/home" />
          <core-navigator-item icon="mdi-arrange-bring-forward" label="Tarefas" :subitems="subtarefa"
          />
          <core-navigator-item icon="mdi-cube-outline" label="Objetos" :subitems="objetos"/>
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
        subtarefa: [{label: 'Designações', url: "/ambiente"},{ label: 'Cadastro', url: "/cadastro/tarefa"},{label: 'Detalhes', url: "/tarefa"}],
        subatividade: [{label: 'Perfil', url: '/perfil'}, {label: 'Histórico'},{ label: 'Notificações'}],
        // subforum: [{label: 'Tarefa', url: '/perfil'}, {label: 'Histórico'},{ label: 'Notificações'}],
        objetos: [{label: 'Tags', url: '/tags'}, {label: 'Executaveis', url: '/executavel' }, {label: 'Clientes', url: '/cliente'},
        { label: 'Arquivos'}], 
        relatorio: [
        {label: 'Tarefas por Cliente', url: '/tarefacliente'},
        {label: 'Tarefas por Colaborador', url: '/tarefacolaborador' },
        {label: 'Situação Tarefas', url: '/situacao'}], 
        adm: [{label: 'Usuarios', url: '/usuario'}],
        nome: '',
      }
    },

    created() {
      const usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.nome = usuario.nome;
    }
  }
</script>

<style scoped>
.border {
  border: 1px solid red;
}

.navigator {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
}

.lista {
  border-radius: 50px;
}
</style>
