import styled, { css } from 'styled-components';
import { LinkProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

const disabledStyles = css`
  pointer-events: none;
  opacity: 0.3;
`;

const underlineStyles = (underline: LinkProps['underline']) => {
  switch (underline) {
    case 'none':
      return css`
        text-decoration: none;
        :hover,
        :focus {
          text-decoration: none;
        }
      `;
    case 'always':
      return css`
        text-decoration: underline;
        :hover,
        :focus {
          text-decoration: underline;
        }
      `;
    default:
      return css`
        text-decoration: none;
        :hover,
        :focus {
          text-decoration: underline;
        }
      `;
  }
};

const StyledLink = styled.a<LinkProps>`
  cursor: pointer;

  ${({ disabled }) => disabled && disabledStyles}

  ${({ underline }) => underlineStyles(underline)}

  ${({ variant }) => theme.typography[variant || 'text']};

  color: ${({ color }) => color && theme.palette[color]};
  background-color: ${({ marked }) => marked && theme.palette[marked]};
`;

StyledLink.defaultProps = {
  theme,
};

export default StyledLink;
