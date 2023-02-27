export const INCR = 'INCREMENT';
export const DECR = 'DECREMENT';
export const INCR_ODD = 'INCREMENT_IF_ODD';
export const INCR_ASYNC = 'INCREMENT_ASYNCHRONOUS';

export const incr = () => {
    return {
        type: INCR
    };
};

export const decr = () => {
    return {
        type: DECR
    };
};

export const incr_odd = () => {
    return {
        type: INCR_ODD
    };
};

export const incr_async = () => (dispatch) => {
    setTimeout(() => {
        dispatch(incr())
    }, 1000)
};