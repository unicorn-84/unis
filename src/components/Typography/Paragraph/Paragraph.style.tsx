import styled from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { ParagraphProps } from '.';

const StyledParagraph = styled.p<ParagraphProps>`
  ${({ variant }) => theme.typography?.[variant || 'body']};
  color: ${({ color }) => color && theme.palette[color]};
  margin: ${({ disableMargins }) => disableMargins && 0};
`;

StyledParagraph.defaultProps = {
  theme,
};

export default StyledParagraph;
