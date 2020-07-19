export const state = () => ({
    boards: []
})

export const mutations = {
    setBoards(state, boards) {
        state.boards = boards;
    }
}

export const actions = {
    async fetch({commit}) {
        const request = await this.$axios.get(`https://2ch.hk/makaba/mobile.fcgi?task=get_boards`);
        commit(`setBoards`, request.data);
    }
}

export const getters = {
    boardsList: state => state.boards,
    boardsIds: state => Object.values(state.boards).reduce((acc,cur )=> {
        cur.map(item => {
            acc.push(item.id);
        })
        return acc;
    }, [])
}
