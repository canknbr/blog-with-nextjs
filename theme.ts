import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--brand-color': '#BB2649',
  '--brand-color-light': '#F5E6E9',
  '--brand-color-dark': '#8B1C3A',
  '--brand-color-lighter': '#F9F0F2',
  '--brand-color-darker': '#6A1326',
  '--success-color': '#00BFA6',
  '--warning-color': '#FFB300',
  '--error-color': '#D50000',
};

export const myTheme = buildLegacyTheme({
  '--black': props['--my-black'],
  '--white': props['--my-white'],
  '--gray': '#6A6A6A',
  '--gray-base': '#6a6a6a',
  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  '--brand-primary': props['--brand-color'],
  '--default-button-color': '#6A6A6A',
  '--default-button-primary-color': props['--brand-color'],
  '--default-button-success-color': props['--success-color'],
  '--default-button-warning-color': props['--warning-color'],
  '--default-button-danger-color': props['--error-color'],

  '--state-info-color': props['--brand-color'],
  '--state-success-color': props['--success-color'],
  '--state-warning-color': props['--warning-color'],
  '--state-danger-color': props['--error-color'],

  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--brand-color'],
});
