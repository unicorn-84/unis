import styled, { css } from 'styled-components';
import { hexToChannels } from '../../../utils';
import { ButtonProps } from '.';
import { DefaultTheme as theme } from '../../../theme';

const BRAND_PRIMARY_COLOR = theme.palette.brandPrimary;
const BRAND_SECONDARY_COLOR = theme.palette.brandSecondary;
const LIGHT_COLOR = theme.palette.light;
const GRAY_COLOR = theme.palette.gray;
const FON_GRAY_COLOR = theme.palette.fonGray;

const primaryColorStyles = css`
  background-color: ${BRAND_PRIMARY_COLOR};
  color: ${BRAND_PRIMARY_COLOR};
  border-color: ${BRAND_PRIMARY_COLOR};
`;

const secondaryColorStyles = css`
  background-color: ${BRAND_SECONDARY_COLOR};
  color: ${BRAND_SECONDARY_COLOR};
  border-color: ${BRAND_SECONDARY_COLOR};
`;

const disabledStyles = css`
  background-color: ${FON_GRAY_COLOR};
  color: ${FON_GRAY_COLOR};
  border-color: ${FON_GRAY_COLOR};
  pointer-events: none;
  user-select: none;
`;

const fullWidthStyles = css`
  width: 100%;
`;

const outlinedStyles = css`
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
`;

const containedStyles = css`
  color: ${LIGHT_COLOR};
`;

const textStyles = (
  color: ButtonProps['color'],
  disabled: ButtonProps['disabled'],
) => {
  let rgb;
  switch (color) {
    case 'primary':
      if ((rgb = hexToChannels(BRAND_PRIMARY_COLOR))) {
        const color = disabled ? GRAY_COLOR : BRAND_PRIMARY_COLOR;
        return css`
          color: ${color};
          background-color: transparent;

          :hover,
          :focus {
            background-color: rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.05);
          }
        `;
      }
      return;
    case 'secondary':
      if ((rgb = hexToChannels(BRAND_SECONDARY_COLOR))) {
        const color = disabled ? GRAY_COLOR : BRAND_SECONDARY_COLOR;
        return css`
          color: ${color};
          background-color: transparent;

          :hover,
          :focus {
            background-color: rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.05);
          }
        `;
      }
      return;
    default:
      return;
  }
};

const baseButtonStyles = css`
  box-sizing: border-box;

  ${theme.typography?.['button']};

  padding: 0 ${theme.spacing['small']};
  border: none;
  border-radius: ${theme.spacing['small']};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button<ButtonProps>`
  ${baseButtonStyles};

  ${({ color }) =>
    color === 'primary' ? primaryColorStyles : secondaryColorStyles}

  ${({ disabled }) => disabled && disabledStyles}

  ${({ variant, color, disabled }) =>
    variant === 'outlined'
      ? outlinedStyles
      : variant === 'contained'
      ? containedStyles
      : textStyles(color, disabled)}

  ${({ fullWidth }) => fullWidth && fullWidthStyles}
`;

StyledButton.defaultProps = {
  theme,
};

export default StyledButton;
