export const state = () => ({
    boardsList: []
})

export const mutations = {
    setBoardData(state, board) {
        state.boardsList.push(board);
    },
    updateBoardData(state, board) {
        state.boardsList = state.boardsList.map(item => {
            if (item.Board === board.Board) {
                return board
            }
            return item
        })
    }
}

export const actions = {
    async getData({commit}, id) {
        const request = await this.$axios.get(`https://2ch.hk/${id}/catalog.json`);
        commit(`setBoardData`, request.data);
    },
    async updateData({commit}, id) {
        const request = await this.$axios.get(`https://2ch.hk/${id}/catalog.json`);
        commit(`updateBoardData`, request.data);
    }
}

export const getters = {
    boardData: state => boardName => state.boardsList.find(board => board.Board === boardName),
}
