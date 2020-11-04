<template>
    <Page>
        <ActionBar title="BLUE" color="white" backgroundColor="blue">
        </ActionBar>

        <StackLayout>
            <Button text="Go Red"   @tap="goRed()"  class="btn red"></Button>
            <Button text="Go Pink"  @tap="goPink()" class="btn pink"></Button>
            <Button text="Go Home"  @tap="goHome()" class="btn btn-primary"></Button>
            <Button text="Go Back"  @tap="goBack()" class="btn btn-outline"></Button>
        </StackLayout>
    </Page>
</template>

<script>
// Example: manual routing in composition api

import { ref }                  from '@vue/composition-api';
import * as frame               from 'tns-core-modules/ui/frame';

export default {
    name:       'Blue',
    setup( {}, { root } ) {
        const pink      = ref('');

        pink.value      = '#FF0088';

        function goRed() {
            root.$goto( 'red', { transition:
                {
                    name:               'slideTop',
                    duration:           2000,
                    curve:              'spring'
                }
            });
        }
        function goPink() {
            root.$goto( 'rgb', {
                props: {
                    color: 'pink'
                },
                transition: 'slideBottom'
            });
        }
        function goBack() {
            root.$navigateBack();
        }
        function goHome() {
            const backStack     = frame.topmost().backStack[0];
            this.$navigateBack( 
                {
				    clearHistory:       true
                },
                backStack 
            );
        }

        return {
            pink,
            goRed,
            goPink,
            goBack,
            goHome
        };
    }
}
</script>
