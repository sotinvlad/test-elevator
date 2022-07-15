import classNames from 'classnames';
import addToStack from './../helpers/addToStack';

const Buttons = ({
    countOfButtons,
    setElevatorState,
    currentFloor,
    stack,
    isMoving,
}) => {
    const onButtonClick = (id) => {
        if (currentFloor === countOfButtons - id) return;
        setElevatorState((prevState) => {
            return {
                ...prevState,
                stack: addToStack(prevState.stack, countOfButtons - id),
            };
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
                            'Button__block-instack': stack.includes(
                                countOfButtons - id,
                            ),
                        },
                        {
                            'Button__block-next':
                                countOfButtons - id === currentFloor &&
                                isMoving,
                        },
                    )}></div>
            </div>
        ));
    return <div className='Buttons'>{buttons}</div>;
};
export default Buttons;
