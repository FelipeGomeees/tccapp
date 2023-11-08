<script>
export default {
    name: 'CoreScreen',
    props: {
        hasFill: Boolean,
        hasPrint: Boolean,
        hasPrincipal: Boolean,
        hasSide: Boolean,
        detail: Boolean,
        showAsCard: Boolean,
    },
    data() {
        return {
            show: false,
            showDetail: false,
        };
    },

    methods: {
        $_showSideCard() {
            this.show = !this.show;
        }
    },

    watch: {
        detail: function() {
            this.showDetail = this.$props.detail;

            console.log(this.showDetail, this.$props.detail);
        },

        // showDetail: function() {
            
        // }
    }
}
</script>


<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <div class="coluna-fill" v-if="hasFill">
                <slot name="fill">
                </slot>
            </div>
            <div class="coluna-principal" v-if="hasPrincipal">
                <slot name="main">
                </slot>
            </div>
            <v-dialog class="hidden-on-mobile card-lateral" v-if="hasSide && !showAsCard" v-model="showDetail"
            max-width="500px"> <!-- MUDAR PARA DIALOG -->
                <slot name="side">
                </slot>
            </v-dialog>
            <v-card class="hidden-on-mobile card-lateral" v-if="hasSide && showAsCard" v-model="showDetail"
            max-width="500px"> <!-- MUDAR PARA DIALOG -->
                <slot name="side">
                </slot>
            </v-card>
            <div class="print" v-if="hasPrint">
                <slot name="print">
                </slot>
            </div>
            <v-dialog v-model="show" transition="dialog-bottom-transition">
                <v-card>
                    <slot name="side">
                    </slot>
                </v-card>
            </v-dialog>
            <v-btn
            elevation="4"
            fab
            color="primary"
            class="float hidden-on-desktop"
            @click="$_showSideCard()"
            >
            <v-icon v-if="!show">mdi-more</v-icon>
            <v-icon v-else>mdi-close</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<style scoped>
    .card-lateral {
        width: 22%;
        transition: 1s;
        position: fixed;
        right: 2%;
        margin-top: 2%;
    }

    .coluna-principal {
        width: 100%;
        margin-right: 100px;
        margin-left: 6%;
    }

     .coluna-fill {
        width: 100%;
        margin-left: 410px;
        margin-right: 410px;
    }

    @media print {
        .coluna-fill {
            width: 100vw;
            margin-left: 0px;
            margin-right: 0px;
        }
    }

    .coluna-principal > * {
         margin: 10px 20px 10px 20px;
    }

    .header {
        display: flex;
        align-items: center;
        color: #30343f;
        transform: translateY(11px);
    }

    .hidden-on-desktop {
        display: none;
    }

    @media screen and (max-width: 1628px) {
        .coluna-principal {
            overflow: hidden;
            width: 100%;
            margin-right: 1px;
            margin-left: -30px;
        }

        .hidden-on-mobile {
            display: none;
        }

        .hidden-on-desktop {
            display: block;
        }
    }

    .float {
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 20001;
    }

    .print {
        display: none;
    }

   @media print {
        .print {
            align-items: left;
            padding: 5px;
            margin: 0px;
            display: block;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100vw;
            height: 100%;
        }

        .coluna-principal, .card-lateral {
            display: none;
        }
   }
</style>