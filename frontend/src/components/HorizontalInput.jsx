import * as Styled from "styles/ComponentStyles";

function HorizontalInput(props){
    return (
        <Styled.HorizontalInput>
            <label>{props.label}</label>
            <Styled.NoBorderInput type={props.type} placeholder={props.placeholder} />
        </Styled.HorizontalInput>
    );
}

export default HorizontalInput;

