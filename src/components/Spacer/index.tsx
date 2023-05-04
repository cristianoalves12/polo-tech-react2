import styled from "styled-components";

type SpacerProps = {
    height?: number;
    width?: number;
}

const StyledSpacer = styled.div<SpacerProps>`
    height: ${(props) => props.height && `${props.height}rem`};
    width: ${(props) => props.width && `${props.width}rem`};
`;

const Spacer = ({ height, width }: SpacerProps) => {
    return <StyledSpacer height={height} width={width}></StyledSpacer>
}