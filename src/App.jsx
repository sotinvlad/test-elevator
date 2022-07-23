import { useState, useEffect } from 'react';

import Buttons from './components/Buttons';
import Elevator from './components/Elevator';
import './App.scss';
import getElevatorStateFromLocalStorage from './helpers/getElevatorStateFromLocalStorage';
import getDefaultElevatorState from './helpers/getDefaultElevatorStorage';

function App({ countOfFloors = 7, countOfElevators = 4 }) {
    const [elevators, setElevators] = useState();
    const [elevatorState, setElevatorState] = useState(
        localStorage.getItem('elevatorState') === null
            ? getDefaultElevatorState(countOfElevators)
            : getElevatorStateFromLocalStorage(),
    );
    const setIsMoving = (id, value) => {
        setElevatorState((prevState) => {
            let newState = [...prevState];
            newState[id].isMoving = value;
            return newState;
        });
    };
    const setIsWaiting = (id, value) => {
        setElevatorState((prevState) => {
            let newState = [...prevState];
            newState[id].isWaiting = value;
            return newState;
        });
    };
    const setCurrentFloor = (id, value) => {
        setElevatorState((prevState) => {
            let newState = [...prevState];
            newState[id].currentFloor = value;
            return newState;
        });
    };
    const setHeading = (id, value) => {
        setElevatorState((prevState) => {
            let newState = [...prevState];
            newState[id].heading = value;
            return newState;
        });
    };
    const setSpeed = (id, value) => {
        setElevatorState((prevState) => {
            let newState = [...prevState];
            newState[id].speed = value;
            return newState;
        });
    };
    const setStack = (id, value) => {
        setElevatorState((prevState) => {
            let newState = [...prevState];
            newState[id].stack = value;
            return newState;
        });
    };
    for (let i = 0; i < countOfElevators; i++) {
        if (
            elevatorState[i].stack.length > 0 &&
            !elevatorState[i].isWaiting &&
            !elevatorState[i].isMoving
        ) {
            const headingFloor = elevatorState[i].stack[0];
            const speed = Math.abs(
                elevatorState[i].currentFloor - headingFloor,
            );
            setSpeed(elevatorState[i].id, speed);
            const newStack = [...elevatorState[i].stack];
            newStack.shift();
            setStack(elevatorState[i].id, newStack);
            setHeading(
                elevatorState[i].id,
                headingFloor - elevatorState[i].currentFloor,
            );
            setIsMoving(elevatorState[i].id, true);
            setCurrentFloor(elevatorState[i].id, headingFloor);
        }
    }

    useEffect(() => {
        return () => {
            localStorage.setItem(
                'elevatorState',
                JSON.stringify(elevatorState),
            );
        };
    });
    useEffect(() => {
        setElevators(
            Array(countOfElevators)
                .fill()
                .map((e, id) => (
                    <Elevator
                        key={id}
                        id={id}
                        countOfFloors={countOfFloors}
                        currentFloor={elevatorState[id].currentFloor}
                        isWaiting={elevatorState[id].isWaiting}
                        isMoving={elevatorState[id].isMoving}
                        speed={elevatorState[id].speed}
                        heading={elevatorState[id].heading}
                        stack={elevatorState[id].stack}
                        elevatorState={elevatorState}
                        setIsWaiting={setIsWaiting}
                        setIsMoving={setIsMoving}
                        setHeading={setHeading}
                    />
                )),
        );
    }, [elevatorState]);
    return (
        <div className='App'>
            {elevators}
            <Buttons
                countOfButtons={countOfFloors}
                setElevatorState={setElevatorState}
                elevatorState={elevatorState}
            />
        </div>
    );
}

export default App;
