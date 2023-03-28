import * as Styled from "styles/ComponentStyles";

function VerticalInput(props){
    return (
        <Styled.VerticalInput>
            <label>{props.label}</label>
            <Styled.UnderlinedInput type={props.type} placeholder={props.placeholder} />
        </Styled.VerticalInput>
    );
}

export default VerticalInput;

