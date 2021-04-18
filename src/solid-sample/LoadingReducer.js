export function loadingReducer(state, {type}) {
    switch (type) {
        case 'LOADING':
            return {isLoading: true};
        case 'FINISHED':
            return {isLoading: false};
        default:
            return state;
    }
}