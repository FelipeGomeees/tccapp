<template>
    <div>
        <div class="d-flex">
            <v-autocomplete label="Descritivas" 
             :items="items"
             item-text="name"
             return-object
             v-model="selecionados"
            outlined
            chips
            small-chips
            multiple/>
            <v-btn color="primary margin" height="54px" @click="$_saveTags">
            <v-icon>mdi-arrow-down-thick</v-icon>
            </v-btn>
        </div>
        <span style="color: #999999">Tags Salvas</span>
        <div class="tag-filler" v-if="itemsAdicionados.length">
            <div v-for="(item, index) in itemsAdicionados" :key="index" class="tag-container">
                <v-btn :color="item.color" :dark="item.dark" rounded class="elevation-0 pa-2 tag" height="19px"
                @click="$_returnTag(item)">
                    {{item.name}}
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
    data() {
        return {
            items: [{
                name: 'Node',
                color: '#ccc',
                dark: true,
            },{
                name: 'Vue',
                color: '#ccc',
                dark: true,
            },{
                name: 'Desenvolvimento',
                color: '#ccc',
                dark: true,
            }],
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

  .tag {
    margin: 15px;
  }

  .margin {
    margin-left: 15px;
  }
</style>