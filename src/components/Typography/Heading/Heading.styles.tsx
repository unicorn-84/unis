import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { HeadingProps } from './Heading.component';

const StyledHeading = styled.h1<HeadingProps>`
  ${({ variant }) => theme.typography?.[variant || 'title']};
  /* FIXME: */
  /* color: ${theme.palette?.text?.primary}; */
`;

StyledHeading.defaultProps = {
  theme,
};

export default StyledHeading;
