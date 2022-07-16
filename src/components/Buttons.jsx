import classNames from 'classnames';

import isFloorInStack from '../helpers/isFloorInStack';
import getIdOfNearestElevator from '../helpers/getIdOfNearestElevator';
import isFloorNext from '../helpers/isFloorNext';
import isElevatorOnThatFloor from '../helpers/isElevatorOnThatFloor';

const Buttons = ({ countOfButtons, setElevatorState, elevatorState }) => {
    const onButtonClick = (id) => {
        const numberOfButton = countOfButtons - id;
        if (isElevatorOnThatFloor(elevatorState, numberOfButton)) return;
        const indexOfElevator = getIdOfNearestElevator(
            elevatorState,
            numberOfButton,
        );
        setElevatorState((prevState) => {
            let newState = [...prevState];
            newState[indexOfElevator].stack.push(numberOfButton);
            return newState;
        });
    };

    let buttons = Array(countOfButtons)
        .fill()
        .map((button, id) => (
            <div
                key={id}
                className='Button'
                onClick={() => {
                    onButtonClick(id);
                }}>
                <span className='Button__text'>{countOfButtons - id}</span>
                <div
                    className={classNames(
                        'Button__block',
                        {
                            'Button__block-instack': isFloorInStack(
                                elevatorState,
                                countOfButtons - id,
                            ),
                        },
                        {
                            'Button__block-next': isFloorNext(
                                elevatorState,
                                countOfButtons - id,
                            ),
                        },
                    )}></div>
            </div>
        ));
    return <div className='Buttons'>{buttons}</div>;
};
export default Buttons;
