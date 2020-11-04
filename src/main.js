import Vue                  from 'nativescript-vue';
import VueCompositionApi    from '@vue/composition-api';
import hooks                from '@u3u/vue-hooks';
import VueDevtools          from 'nativescript-vue-devtools';

import App                  from './components/App';
import router               from './router/routes';
import store                from './store/index';

if(TNS_ENV !== 'production') {
    Vue.use(VueDevtools, { host: '192.168.1.205' } )
}

Vue.use( VueCompositionApi );
Vue.use( hooks );

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.prototype.$router = router;

Vue.prototype.$goto = function (to, options) {
    var options = options || {
            clearHistory: false,
            backstackVisible: true,
            transition: {
                name:       'slide',
                duration:   380,
                curve:      'easeIn'
            }
        };
    this.$navigateTo( this.$router[to], options );
}
  
Vue.registerElement(
    'RadSideDrawer',
    () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
    store,
    render: h => h('frame', [h(App)]),
    // render: h => h('frame', [h(router['wizard'])])
}).$start()
