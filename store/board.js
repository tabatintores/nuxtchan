export const state = () => ({
    boardData: {}
})

export const mutations = {
    setBoardData(state, board) {
        state.boardData = board;
    }
}

export const actions = {
    async getData({commit}, id) {
        const request = await this.$axios.get(`https://2ch.hk/${id}/catalog.json`);
        commit(`setBoardData`, request.data);
    }
}

export const getters = {
    boardData: state => state.boardData,
}
