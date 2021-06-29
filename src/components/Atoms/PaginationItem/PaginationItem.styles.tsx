import styled, { css } from 'styled-components';
import { DefaultTheme as theme } from '../../../theme';
import { PaginationItemProps } from './PaginationItem.component';

const basePaginationItemStyle = css`
  box-sizing: border-box;
  cursor: pointer;
  border-style: solid;
  border-color: currentColor;
  transition: background-color 0.3s ease-in-out;
`;

const sizeStyle = ({ size }: PaginationItemProps) => {
  return css`
    height: ${theme.spacing[size]};
    width: ${theme.spacing[size]};
    border-width: ${Number.parseInt(theme.spacing[size]) / 10}px;
  `;
};

const shapeStyle = (shape: PaginationItemProps['shape']) => {
  switch (shape) {
    case 'circular':
      return css`
        border-radius: 100%;
      `;

    case 'rounded':
      return css`
        border-radius: 25%;
      `;
    default:
      return css``;
  }
};

const PaginationItemContainer = styled.div<PaginationItemProps>`
  color: ${({ color }) => color && theme.palette[color]};
  background-color: ${({ selected }) => selected && 'currentColor'};

  ${sizeStyle}

  ${({ shape }) => shapeStyle(shape)}

  ${basePaginationItemStyle}
`;

PaginationItemContainer.defaultProps = {
  theme,
};

export default PaginationItemContainer;
