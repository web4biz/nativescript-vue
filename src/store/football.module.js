import { getJSON }			from 'tns-core-modules/http';

const state     = () => {
        return {
            teams:          [],
            games:          [],
            error:          ''
        };
    };

const getters   = {
        teams:      state => state.teams || [],
        games:      state => state.games || [],
        error:      state => state.error
    };

const actions   = {
    
    async getTeams( { commit }, { competitionId, year } ) {
        console.log( 'GETTEAMS', competitionId, year );
        try {
            const response		= await getJSON( `https://www.openligadb.de/api/getbltable/${competitionId}/${year}` );

            // put position inside
            const teams        = response.map( (team,index) => {
                return {
                    ...team,
                    position:   index + 1
                }
            })

            commit( 'teamsSuccess', teams );
        }
        catch(error) {
            commit( 'teamsSuccess', [] );
            commit( 'teamsError', error );
            throw error;
        }
    },
};

const mutations = {
    teamsSuccess( state, teams ) {
        state.teams     = teams;
    },
    teamsError( state, error ) {
        state.error     = error;
    },
};

export const football = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};