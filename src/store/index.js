const initialState = {
    mixes: [],
    currentMix: 'groovy disco',
    playing: false,
    fromMixcloud: false
};

function mixesApp(state = initialState, action) {
    const {type, payload} = action;
    switch (action.type) {
        case 'PLAY_MIX':
            return {
                ...state,
                currentMix: payload.currentMix,
                fromMixcloud: payload.fromMixcloud
            };
        case 'ADD_MIX':
            return {
                ...state,
                mixes: [...state.mixes, {...payload, id: payload.key}]
            };
        default:
            return state;
    }
}

export default mixesApp;
