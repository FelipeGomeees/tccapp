<template>
    <div>
        <div class="d-flex">
            <v-autocomplete label="Pesquisa Tags" 
             :items="items"
             item-text="tagnome"
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
                <v-btn :color="item.tagcor" :dark="item.tagdark === '0' ? true : false"  
                rounded class="elevation-0 pa-2 tag" height="19px"
                @click="$_returnTag(item)">
                    {{item.tagnome}}
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
    name: 'TagSelector',

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
                    return item.tagnome != el.tagnome;
                })
            });
            this.selecionados = [];
        },

        $_returnTag(item) {
            this.items.push(item);
            this.itemsAdicionados = this.itemsAdicionados.filter((el) => {
                return el.tagnome != item.tagnome;
            })
        },
    },

    mounted() {
        console.log(this.$props);
      this.items = this.$props.dados;
    }, 

    watch: {
        itemsAdicionados() {
            const itemsEmit = [];
            for (let i = 0;i < this.itemsAdicionados.length; i += 1) {
                itemsEmit.push(this.itemsAdicionados[i].id);
            }
            this.$emit('salvo', itemsEmit);
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