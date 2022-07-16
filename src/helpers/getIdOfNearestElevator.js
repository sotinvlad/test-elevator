const getIdOfNearestElevator = (elevatorState, button) => {
    let resultIndexOfElevator = -1;
    let freeElevators = [];
    for (let i = 0; i < elevatorState.length; i++) {
        if (
            elevatorState[i].stack.length === 0 &&
            elevatorState[i].isWaiting === false &&
            elevatorState[i].isMoving === false
        ) {
            freeElevators.push(elevatorState[i].id);
        }
    }
    let minRange = Infinity;
    for (let i = 0; i < freeElevators.length; i++) {
        let rangeFromCurrentFloorToTarget = Math.abs(
            elevatorState[freeElevators[i]].currentFloor - button,
        );
        if (rangeFromCurrentFloorToTarget < minRange) {
            minRange = rangeFromCurrentFloorToTarget;
            resultIndexOfElevator = elevatorState[freeElevators[i]].id;
        }
    }
    if (resultIndexOfElevator !== -1) return resultIndexOfElevator;
    let minStackLength = Infinity;
    for (let i = 0; i < elevatorState.length; i++) {
        if (elevatorState[i].stack.length < minStackLength) {
            minStackLength = elevatorState[i].stack.length;
            resultIndexOfElevator = elevatorState[i].id;
        }
    }
    return resultIndexOfElevator;
};

export default getIdOfNearestElevator;
