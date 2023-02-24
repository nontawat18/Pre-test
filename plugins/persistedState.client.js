import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
    createPersistedState({
        key: "Dummy",
        paths: ["dummy"]
    })(store);
};