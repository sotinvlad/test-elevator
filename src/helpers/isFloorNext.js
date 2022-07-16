const isFloorNext = (elevatorState, button) => {
    for (let i = 0; i < elevatorState.length; i++) {
        if (
            elevatorState[i].currentFloor === button &&
            (elevatorState[i].isMoving || elevatorState[i].isWaiting)
        ) {
            return true;
        }
    }
    return false;
};

export default isFloorNext;
