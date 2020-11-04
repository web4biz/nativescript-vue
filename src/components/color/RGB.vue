<template>
    <Page>
        <ActionBar :title="'RGB ' + color" color="white" backgroundColor="blue">
        </ActionBar>

        <StackLayout>
            <Button text="Go Home"  @tap="goHome()" class="btn btn-primary"></Button>
            <Button text="Go Back"  @tap="goBack()" class="btn btn-outline"></Button>
        </StackLayout>
    </Page>
</template>

<script>
// Example: manual routing in options api with properties

import * as frame 			from 'tns-core-modules/ui/frame';

export default {
	name:       'rgb',
	data()      {
		return {
			pink:       '#FF0088'
		}
	},
	props:      {
		color:      String
	},
	methods:    {
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
