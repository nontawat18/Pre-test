// import config from "@/config";
import axios from "axios";
/* states */

export const state = () => ({
    dummy: []
});

/* getters */
export const getters = {


};


/* mutations */
export const mutations = {
    getDummy(state, data) {
        state.dummy = {
            ...state.dummy,
            ...data,
        };
    },
};

/* actions */

export const actions = {
   async getDummy({ commit }) {
        const URL = `https://dummyjson.com/products?limit=3`;
        axios
            .get(URL)
            .then((response) => {
                console.log("getDummy", response.data);
                commit("getDummy", response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    },

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};