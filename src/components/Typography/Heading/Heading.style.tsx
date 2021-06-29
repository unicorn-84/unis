import styled, { css } from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { HeadingProps } from './Heading.component';

function createMarkedStyle({ marked }: HeadingProps) {
  return css`
    background-color: ${marked && theme.palette[marked]};
    display: inline-block;
  `;
}

const StyledHeading = styled.h1<HeadingProps>`
  ${({ variant }) => theme.typography?.[variant || 'title']};
  color: ${({ color }) => color && theme.palette[color]};
  ${({ marked }) => marked && createMarkedStyle};
  margin: ${({ disableMargins }) => disableMargins && 0};
`;

StyledHeading.defaultProps = {
  theme,
};

export default StyledHeading;
