import isFloorNext from './isFloorNext';

const isFloorInStack = (elevatorState, button) => {
    for (let i = 0; i < elevatorState.length; i++) {
        if (isFloorNext(elevatorState, button)) {
            return true;
        }
        if (elevatorState[i].stack.includes(button)) {
            return true;
        }
    }
    return false;
};

export default isFloorInStack;
