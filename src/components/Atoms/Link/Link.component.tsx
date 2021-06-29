import React, { AnchorHTMLAttributes, MouseEvent } from 'react';
import { IPalette } from '../../../theme/types';
import StyledLink from './Link.style';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  /**
   * Whether the anchor is disabled.
   */
  disabled?: boolean;
  /**
   * Controls when the link should have an underline.
   */
  underline?: 'none' | 'always';
  /**
   * Applies the theme typography styles.
   */
  variant?: 'text' | 'strong' | 'small' | 'button';
  /**
   * A component type or primitive that is rendered as the type of the root element.
   */
  as?: React.ElementType;
  /**
   * The color of the component.
   */
  color?: keyof IPalette;
  /**
   * Defines text that should be marked or highlighted.
   */
  marked?: keyof IPalette;
}

const Link = ({
  children,
  disabled = false,
  underline,
  color,
  marked,
  variant = 'strong',
  ...props
}: LinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };
  return (
    <StyledLink
      onClick={handleClick}
      aria-disabled={disabled}
      disabled={disabled}
      underline={underline}
      color={color}
      marked={marked}
      variant={variant}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
