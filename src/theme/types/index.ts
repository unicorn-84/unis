export * from './IPalette';
export * from './IEffects';
export * from './ITypeScale';
export * from './ISpacing';
export * from './ISizes';
export * from './ITheme';
export * from './IBreakpoints';

export interface IObjectKeys {
  [key: string]: string;
}

export interface ISides extends IObjectKeys {
  x: string;
  y: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
}
