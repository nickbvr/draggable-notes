export const onKeyEnter = (func, e, idx) => {
    if (e.key === 'Enter') {
        return func(idx);
    }
};
