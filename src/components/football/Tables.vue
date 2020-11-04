<template>
    <Page>
        <ActionBar title="World" icon="" class="action-bar">
        </ActionBar>

        <TabView selectedColor="#FF0000" class="m-l-5 m-r-5"> 
            <TabViewItem title="WM">
                <StackLayout>
                    <TableLeague competitionId="fifa18" :year="2018" />
                </StackLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import { ref, onMounted }           from '@vue/composition-api';
import { useGetters, useActions }   from '@u3u/vue-hooks';

import { getJSON }			from 'tns-core-modules/http';

import TableLeague          from './TableLeague';

export default {
    name:           'tables',
    components:     {
	    TableLeague
    },
    setup() {
        const types             = {
                WorldChampId:       4198,
                BundesligaId:       4276,
                SerieAId:           4280,
                ChampLeagueId:      4183
              };

        return {
            types
        };
    }
}
</script>
