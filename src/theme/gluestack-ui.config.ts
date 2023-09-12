import { config as defaultConfig, createConfig } from '@gluestack-ui/themed';

export const config = createConfig({
  ...defaultConfig.theme,
  aliases: {
    ...defaultConfig.theme.aliases,
    jc: 'justifyContent',
  },
  themes: {
    
  },
  globalStyle: {
    ...defaultConfig.theme.globalStyle,
    bg: '$black',
    bgColor: '$black',
  },
  tokens: {
    ...defaultConfig.theme.tokens,

    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary0: '#ffae42',
      primary50: '#f8c32a',
      primary100: '#f5a818',
      primary200: '#f28d06',
      primary300: '#ef7200',
      primary400: '#eb5600',
      primary500: '#e83a00',
      primary600: '#e42e00',
      primary700: '#e02200',
      primary800: '#dc1600',
      primary900: '#d80a00',
      primary950: '#000000',
      secondary0: '#a78c70',
      secondary50: '#94775e',
      secondary100: '#81624c',
      secondary200: '#6e4d3a',
      secondary300: '#5b3828',
      secondary400: '#482316',
      secondary500: '#351e0e',
      secondary600: '#2c190a',
      secondary700: '#231406',
      secondary800: '#1a0f02',
      secondary900: '#110a00',
      secondary950: '#000000',
      neutral0: '#93ff60',
      neutral50: '#8aff5e',
      neutral100: '#7dff5c',
      neutral200: '#6eff5a',
      neutral300: '#5fff58',
      neutral400: '#4fff56',
      neutral500: '#40ff54',
      neutral600: '#31ff52',
      neutral700: '#22ff50',
      neutral800: '#13ff4e',
      neutral900: '#04ff4c',
      neutral950: '#000000',
      accent0: '#00ffff',
      accent50: '#00eeff',
      accent100: '#00ddff',
      accent200: '#00ccff',
      accent300: '#00bbff',
      accent400: '#00aaff',
      accent500: '#0099ff',
      accent600: '#0088ff',
      accent700: '#0077ff',
      accent800: '#0066ff',
      accent900: '#0055ff',
      accent950: '#000000',
    },
  },
  
});

type ConfigType = typeof config;

declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}