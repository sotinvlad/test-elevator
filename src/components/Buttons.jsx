import addToStack from './../helpers/addToStack';

const Buttons = ({ countOfButtons, setElevatorState, currentFloor }) => {
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
                <div className='Button__block'></div>
            </div>
        ));
    return <div className='Buttons'>{buttons}</div>;
};
export default Buttons;
