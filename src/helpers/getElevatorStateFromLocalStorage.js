const getElevatorStateFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('elevatorState')).map(
        (elevatorState) => {
            return {
                ...elevatorState,
                heading: 0,
                isMoving: false,
                isWaiting: false,
            };
        },
    );
};

export default getElevatorStateFromLocalStorage;
