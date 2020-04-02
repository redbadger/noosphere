const base = 20;

const theme = {
  size: {
    width: 1366,
    height: 768,
    maxCodePaneHeight: 200,
  },
  colors: {
    primary: 'rgba(0,0,0,.7)',
    secondary: 'rgb(0,0,0)',
    tertiary: 'rgb(255, 255, 255)',
    quaternary: 'rgba(0,0,0,.8)',
    quinary: '#8bddfd',
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace',
  },
  fontSizes: {
    h1: base * 2,
    h2: base * 1.5,
    h3: base * 1.17,
    text: base,
    monospace: base / 2,
  },
  space: [base / 2, base, base * 1.5],
};

export default theme;
