<template>
    <Page>
        <ActionBar title="RED" color="white" backgroundColor="blue">
        </ActionBar>

        <StackLayout>
            <Button text="Go Blue"  @tap="goBlue()" class="btn blue"></Button>
            <Button text="Go Gray"  @tap="goGray()" class="btn gray"></Button>
            <Button text="Go Home"  @tap="goHome()" class="btn btn-primary"></Button>
            <Button text="Go Back"  @tap="goBack()" class="btn btn-outline"></Button>
        </StackLayout>
    </Page>
</template>

<script>
// Example: manual routing in options api

import * as frame from 'tns-core-modules/ui/frame';

export default {
	name:       'blue',
    data()      {
		return {
			pink:       '#FF0088'
        }
    },
    methods:    {
		goBlue()     {
            this.$goto( 'blue', { transition:
                {
                    name:               'slideTop',
                    duration:           2000,
                    curve:              'spring'
                }
            });
        },
		goGray()     {
            this.$goto( 'rgb', {
                props: {
                    color: 'gray'
                },
                transition: 'slideBottom'
            });
		},
		goBack()     {
            this.$navigateBack();
		},
		goHome()     {
            const backStack     = frame.topmost().backStack[0];
            this.$navigateBack( 
                {
				    clearHistory:       true
                },
                backStack 
            );
		}
    }
}
</script>