<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer"/>

                <Label class="drawer-item" text="Colors" @tap="$goto('color')" />
                <Label class="drawer-item" text="Football Tables" @tap="$goto('tables')" />
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <Label class="message" :text="msg" col="0" row="0" @tap="tapText()" />
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
import { ref }                  from '@vue/composition-api';

export default {
    name:           'App',
    setup( {}, root ) {

        const msg           = ref('Hello World'),
              drawer        = ref(null);

        function tapText() {
            console.log( 'TAP TEXT' );
        }

        return {
            msg,
            drawer,
            tapText
        };
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.title {
    text-align: left;
    padding-left: 16;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}

.drawer-header {
    padding: 50 16 16 16;
    margin-bottom: 16;
    background-color: #53ba82;
    color: #ffffff;
    font-size: 24;
}

.drawer-item {
    padding: 8 16;
    color: #333333;
    font-size: 16;
}
</style>
