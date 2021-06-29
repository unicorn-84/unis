import styled, { css } from 'styled-components';
import { BoxProps } from './Box.component';
import { DefaultTheme as theme } from '../../../theme';

function createFlexBasisStyle(basis: BoxProps['basis']) {
  if (typeof basis === 'string') {
    return css`
      flex-basis: ${theme.sizes[basis] || basis};
    `;
  }
  return;
}

function createHeightStyle(height: BoxProps['height']) {
  switch (typeof height) {
    case 'string':
      return css`
        height: ${theme.sizes[height] || height};
      `;
    case 'object':
      let style = css``;
      Object.entries(height).forEach(item => {
        const [key, value] = item;
        if (typeof value === 'string') {
          if (key === 'min') {
            style = css`
              ${style};
              min-height: ${theme.sizes[value]};
            `;
          }
          if (key === 'max') {
            style = css`
              ${style};
              max-height: ${theme.sizes[value]};
            `;
          }
          if (key === 'height') {
            style = css`
              ${style};
              height: ${theme.sizes[value]};
            `;
          }
        }
      });
      return style;
    default:
      return;
  }
}

function createWidthStyle(width: BoxProps['width']) {
  switch (typeof width) {
    case 'string':
      return css`
        width: ${theme.sizes[width] || width};
      `;
    case 'object':
      let style = css``;
      Object.entries(width).forEach(item => {
        const [key, value] = item;
        if (typeof value === 'string') {
          if (key === 'min') {
            style = css`
              ${style};
              min-width: ${theme.sizes[value] || value};
            `;
          }
          if (key === 'max') {
            style = css`
              ${style};
              max-width: ${theme.sizes[value] || value};
            `;
          }
          if (key === 'height') {
            style = css`
              ${style};
              width: ${theme.sizes[value] || value};
            `;
          }
        }
      });
      return style;
    default:
      return;
  }
}

function createMarginStyle(margin: BoxProps['margin']) {
  switch (typeof margin) {
    case 'string':
      return css`
        margin: ${theme.spacing[margin]};
      `;
    case 'object':
      let style = css``;

      Object.entries(margin).forEach(item => {
        const [key, value] = item;

        if (key !== 'x' && key !== 'y') {
          style = css`
            ${style};
            ${`margin-${key}: ${value && theme.spacing[value]}`};
          `;
        }

        if (key === 'x') {
          style = css`
            margin-left: ${value && theme.spacing[value]};
            margin-right: ${value && theme.spacing[value]};
            ${style};
          `;
        }

        if (key === 'y') {
          style = css`
            margin-top: ${value && theme.spacing[value]};
            margin-bottom: ${value && theme.spacing[value]};
            ${style};
          `;
        }
      });
      return style;
    default:
      return;
  }
}

function createPaddingStyle(padding: BoxProps['padding']) {
  switch (typeof padding) {
    case 'string':
      return css`
        padding: ${theme.spacing[padding]};
      `;
    case 'object':
      let style = css``;

      Object.entries(padding).forEach(item => {
        const [key, value] = item;

        if (key !== 'x' && key !== 'y') {
          style = css`
            ${style};
            ${`padding-${key}: ${value && theme.spacing[value]}`};
          `;
        }

        if (key === 'x') {
          style = css`
            padding-left: ${value && theme.spacing[value]};
            padding-right: ${value && theme.spacing[value]};
            ${style};
          `;
        }

        if (key === 'y') {
          style = css`
            padding-top: ${value && theme.spacing[value]};
            padding-bottom: ${value && theme.spacing[value]};
            ${style};
          `;
        }
      });
      return style;
    default:
      return;
  }
}

const createGapStyle = ({ gap, direction, wrap }: BoxProps) => {
  if ((!wrap || wrap === 'nowrap') && gap) {
    if (direction === 'column' || direction === 'column-reverse') {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${theme.spacing[gap]};
        }
      `;
    }
    return css`
      & > *:not(:last-child) {
        margin-right: ${theme.spacing[gap]};
      }
    `;
  }
  return;
};

const BoxContainer = styled.div<BoxProps>`
  display: ${({ display }) => display};

  flex-direction: ${({ direction }) => direction};

  align-items: ${({ align }) => align};

  justify-content: ${({ justify }) => justify};

  flex-wrap: ${({ wrap }) => wrap};

  flex-shrink: ${({ shrink }) => shrink};

  flex-grow: ${({ grow }) => grow};

  ${createGapStyle};

  ${({ margin }) => margin && createMarginStyle(margin)};

  ${({ padding }) => padding && createPaddingStyle(padding)};

  ${({ basis }) => basis && createFlexBasisStyle(basis)};

  ${({ height }) => height && createHeightStyle(height)}

  ${({ width }) => width && createWidthStyle(width)}
`;

BoxContainer.defaultProps = {
  theme,
};

export default BoxContainer;
