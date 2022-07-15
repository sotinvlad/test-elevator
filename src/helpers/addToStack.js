const addToStack = (stack, id) => {
    if (stack.includes(id)) return stack;
    else return [...stack, id];
};

export default addToStack;
