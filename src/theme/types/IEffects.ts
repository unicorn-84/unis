import { IObjectKeys } from '.';

/**
 * Decorative styles in a theme.
 */
export interface IEffects extends IObjectKeys {
  /**
   * Used to provide a visual affordance that this element is elevated above the surface it rests on.
   */
  elevation3: string;
  elevation6: string;
  /**
   * Rounded corner value, for use with border-radius.
   */
  rounded3: string;
  rounded6: string;
}
