import { IEffects } from './IEffects';
import { IPalette } from './IPalette';
import { ISpacing } from './ISpacing';
import { ITypeScale } from './ITypeScale';
import { IBreakpoints } from './IBreakpoints';
import { ISizes } from './ISizes';

export interface ITheme {
  name: string;
  palette: IPalette;
  typography: ITypeScale;
  effects: IEffects;
  spacing: ISpacing;
  sizes: ISizes;
  breakpoints: IBreakpoints;
  // components?: Partial<IComponents>;
}
