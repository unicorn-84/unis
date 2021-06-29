import styled from 'styled-components';
import { ContainerProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

const StyledContainer = styled.div<ContainerProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props =>
    props.maxWidth ? props.theme.breakpoints[props.maxWidth] : '100%'};
  padding-left: ${props =>
    props.disableGutters ? null : props.theme.spacing['small']};
  padding-right: ${props =>
    props.disableGutters ? null : props.theme.spacing['small']};
`;

StyledContainer.defaultProps = {
  theme,
};

export default StyledContainer;
