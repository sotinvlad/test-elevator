import classNames from 'classnames';
import { useEffect } from 'react';

import arrowUp from './../assets/up-arrow.png';
import arrowDown from './../assets/down-arrow.png';

const Elevator = ({
    countOfFloors,
    currentFloor,
    isWaiting,
    isMoving,
    speed = 1,
    heading,
    id,
    setIsWaiting,
    setIsMoving,
    setHeading,
}) => {
    useEffect(() => {
        if (isMoving) {
            setTimeout(() => {
                setIsWaiting(id, true);
                setIsMoving(id, false);
                setHeading(id, 0);
            }, speed * 1000);
            setTimeout(() => {
                setIsWaiting(id, false);
            }, speed * 1000 + 3000);
        }
    }, [isMoving]);
    let elevatorStyle = {
        height: `${countOfFloors * 150}px`,
    };
    let cabinStyle = {
        marginTop: `${countOfFloors * 150 - currentFloor * 150}px`,
        transition: `margin-top ${speed}s linear`,
    };
    return (
        <div className='Elevator' style={elevatorStyle}>
            <div
                className={classNames('Elevator__cabin', {
                    'Elevator__cabin-waiting': isWaiting,
                })}
                style={cabinStyle}>
                {heading > 0 && <img src={arrowUp} />}
                {heading < 0 && <img src={arrowDown} />}
                {isMoving && <span>{currentFloor}</span>}
            </div>
        </div>
    );
};
export default Elevator;
