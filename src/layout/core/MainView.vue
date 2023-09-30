<template>
    <layout-base>
        <core-navigator></core-navigator>
            <template #main>
                <v-main>
                    <router-view name="AppBar"/>
                    <v-fade-transition mode="out-in">
                        <router-view>
                    </v-fade-transition>
                </v-main>
            </template>
    </layout-base>
</template>

<script>
import LayoutBase from '../base/MainView.vue'
import CoreNavigator from '@/components/navigator/CoreNavigator.vue'

export default {
    name: 'CoreLayout',
    components: {
        LayoutBase,
        CoreNavigator,
    }
}
</script>

<style>

</style>