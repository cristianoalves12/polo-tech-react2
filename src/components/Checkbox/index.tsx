import styled from "styled-components"
import { globalColorsObject } from "../../styles";

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

type CheckboxProps = {
    checked: boolean
}

const HiddenCheckbox = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px; 
`

const StyledCheckbox = styled.div<CheckboxProps>`
    display: inline-block;
    width: 25px;
    height: 25px;
    background: ${(props) => 
        props.checked ? globalColorsObject.primaryColor : "none"};
    border: 3px solid ${globalColorsObject.primaryColor};
    border-radius: 25px;
    transition: all 100ms;
`;

const Checkbox = ({ checked }: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <HiddenCheckbox type="checkbox" />
            <StyledCheckbox checked={checked} />        
        </CheckboxContainer>
    )
}

export default Checkbox;