import { IObjectKeys } from '.';

/**
 * Color palette.
 */
export interface IPalette extends IObjectKeys {
  /**
   * Code for Brand colors.
   */
  brandPrimary: string;
  brandSecondary: string;
  /**
   * Code for Text colors.
   */
  textPrimary: string;
  textSecondary: string;
  textLight: string;
  textDark: string;
  textGray: string;
  /**
   * Code for dark color.
   */
  dark: string;
  /**
   * Code for light color.
   */
  light: string;
  /**
   * Code for gray color.
   */
  gray: string;
  /**
   * Code for Fon colors.
   */
  fonLight: string;
  fonDark: string;
  fonGray: string;
}
