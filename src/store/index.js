import Vue                  from 'vue';
import Vuex                 from 'vuex';

import { football }       from './football.module';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            football,
        }
    });

    console.log( 'FOOTBALL', football.namespaced )

    return Store;
}