import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#ffb765',
            secondary: '#ffcf65',
            accent: '#ffb765',
          },
          // dark: {
          //   primary: colors.blue.lighten3,
          // },
        },
      },
});