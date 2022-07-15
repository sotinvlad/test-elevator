import classNames from 'classnames';

const Elevator = ({
    countOfFloors,
    currentFloor = 5,
    isWaiting = false,
    isMoving = false,
    speed = 1,
    heading,
}) => {
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
                style={cabinStyle}></div>
        </div>
    );
};
export default Elevator;
