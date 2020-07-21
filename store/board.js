export const state = () => ({
    boardsList: []
})

export const mutations = {
    setBoardData(state, board) {
        state.boardsList.push(board);
    },
    updateBoard() {

    }
}

export const actions = {
    async getData({commit}, id) {
        const request = await this.$axios.get(`https://2ch.hk/${id}/catalog.json`);
        commit(`setBoardData`, request.data);
    }
}

export const getters = {
    boardData: state => boardName => state.boardsList.find(board => board.Board === boardName),
}
