export const logAge = ({getState}) => (next) => (action) => {
    const entrie = Object.entries(getState())[0]
    console.log(`caught in middleware {"${entrie[0]}":${entrie[1]}}`);
    next(action);
}