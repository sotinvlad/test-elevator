const isElevatorInThatFloor = (elevatorState, button) => {
    for (let i = 0; i < elevatorState.length; i++) {
        if (elevatorState[i].currentFloor === button) {
            return true;
        }
    }
    return false;
};

export default isElevatorInThatFloor;
