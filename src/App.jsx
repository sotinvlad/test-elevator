import { useState, useEffect } from 'react';

import Buttons from './components/Buttons';
import Elevator from './components/Elevator';
import './App.scss';

function App({ countOfFloors = 5, countOfElevators = 1 }) {
    const [elevatorState, setElevatorState] = useState({
        currentFloor: 1,
        speed: 1,
        stack: [],
        heading: '',
        isMoving: false,
        isWaiting: false,
    });
    const { currentFloor, speed, stack, heading, isMoving, isWaiting } =
        elevatorState;
    const setIsMoving = (value) => {
        setElevatorState((prevState) => {
            return {
                ...prevState,
                isMoving: value,
            };
        });
    };
    const setIsWaiting = (value) => {
        setElevatorState((prevState) => {
            return {
                ...prevState,
                isWaiting: value,
            };
        });
    };
    const setCurrentFloor = (value) => {
        setElevatorState((prevState) => {
            return {
                ...prevState,
                currentFloor: value,
            };
        });
    };
    const setHeading = (value) => {
        setElevatorState((prevState) => {
            return {
                ...prevState,
                heading: value,
            };
        });
    };
    useEffect(() => {
        if (isMoving) {
            setTimeout(() => {
                setIsWaiting(true);
                setIsMoving(false);
                setHeading(0);
            }, speed * 1000);
            setTimeout(() => {
                setIsWaiting(false);
            }, speed * 1000 + 3000);
        }
    }, [isMoving]);
    if (stack.length > 0 && !isWaiting && !isMoving) {
        const headingFloor = stack[0];
        const speed = Math.abs(currentFloor - headingFloor);
        setElevatorState((prevState) => {
            prevState.stack.shift();
            return {
                speed: speed,
                stack: prevState.stack,
            };
        });
        setHeading(headingFloor - currentFloor);
        setIsMoving(true);
        setCurrentFloor(headingFloor);
    }

    return (
        <div className='App'>
            <Elevator
                countOfFloors={countOfFloors}
                currentFloor={currentFloor}
                isWaiting={isWaiting}
                isMoving={isMoving}
                speed={speed}
                heading={heading}
            />
            <Buttons
                countOfButtons={countOfFloors}
                setElevatorState={setElevatorState}
                currentFloor={currentFloor}
                isMoving={isMoving}
                stack={stack}
            />
        </div>
    );
}

export default App;
