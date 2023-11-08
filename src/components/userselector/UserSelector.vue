<template>
    <div>
        <div class="d-flex">
            <v-autocomplete
              v-model="selecionados"
              :items="items"
              outlined
              chips
              color="blue-grey lighten-2"
              label="Pesquisa Usuários"
              item-text="usaapelido"
              multiple
              return-object
              height="52px"
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  @click="data.select"
                >
                  <v-avatar left>
                    <v-img>F</v-img>
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                  <v-list-item-avatar :color="data.item.color">
                    {{data.item.usaapelido[0]}}
                    <!-- <img :src="data.item.avatar"> -->
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{data.item.usaapelido}}</v-list-item-title>
                    <v-list-item-subtitle>{{data.item.group}}</v-list-item-subtitle>
                  </v-list-item-content>
              </template>
            </v-autocomplete>
            <v-btn color="primary margin" height="54px" @click="$_saveTags">
            <v-icon>mdi-arrow-down-thick</v-icon>
            </v-btn>
        </div>
        <span style="color: #999999">Usuarios Salvoss</span>
        <div class="tag-filler" v-if="itemsAdicionados.length">
            <div v-for="(item, index) in itemsAdicionados" :key="index" class="tag">
                <v-btn :color="item.color" :dark="item.dark" rounded class="elevation-0 pa-2 tag" height="38px"
                @click="$_returnTag(item)">
                  <v-avatar left class="avatar">
                    <v-img>{{item.usaapelido[0]}}</v-img>
                  </v-avatar>
                    {{item.usaapelido}}
                </v-btn>
            </div>
        </div>
        <div class="tag-filler" v-else>
            <div style="margin-left: 10px">
                . . .
            </div>       
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserSelector',
    props: {
      dados: Array,
    },

    data() {
        return {
            items: null,
            itemsAdicionados: [],
            selecionados: null,
        }
    },

    methods: {
        $_saveTags() {
            this.selecionados.forEach(el => {
                this.itemsAdicionados.push(el);
                this.items = this.items.filter((item) => {
                    console.log(el, item, 'a');
                    return item.name != el.name;
                })
            });
            this.selecionados = [];
        },

        $_returnTag(item) {
            this.items.push(item);
            this.itemsAdicionados = this.itemsAdicionados.filter((el) => {
                return el.name != item.name;
            })
        }
    },

    created() {
      this.items = this.$props.dados;
    }, 

    watch: {
        itemsAdicionados() {
            const itemsEmit = [];
            for (let i = 0;i < this.itemsAdicionados.length; i += 1) {
                itemsEmit.push(this.itemsAdicionados[i].id);
            }
            this.$emit('atualizado', itemsEmit);
        }
    }
}
</script>


<style scoped>
  .tag-filler {
    border: 1px solid #a9a9a9;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .tag-container {

  }

  .tag {
    margin: 2px;
  }

  .margin {
    margin-left: 15px;
  }

  .avatar {
    z-index: 10;
  }
</style>