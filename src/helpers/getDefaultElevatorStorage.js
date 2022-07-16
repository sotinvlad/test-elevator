const getDefaultElevatorState = (countOfElevators) => {
    return Array(countOfElevators)
        .fill()
        .map((_, id) => {
            return {
                id: id,
                currentFloor: 1,
                speed: 1,
                stack: [],
                heading: 0,
                isMoving: false,
                isWaiting: false,
            };
        });
};

export default getDefaultElevatorState;
