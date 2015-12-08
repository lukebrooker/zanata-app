function pxToRem (value, baseFontSize) {
  baseFontSize = baseFontSize || '16'
  return +(value / baseFontSize).toFixed(3) + 'rem'
}

// Calculate Rhythm
function r (value, unit) {
  unit = unit || 'rem'
  return value * 1.5 + unit
}

// Calculate Modular Scale
function calcScale (value, base, ratio, unit) {
  return +(Math.pow(ratio, value) * base).toFixed(3) + unit
}

function ms (value, unit) {
  unit = unit || 'rem'
  return calcScale(value, 1, 1.2, unit)
}

/* eslint-disable */
module.exports = {
  cssDest: './src/index.css',
  configs: {
    breakPoints: {
      sm: '@media screen and (min-width: ' + pxToRem(470) + ')',
      md: '@media screen and (min-width: ' + pxToRem(880) + ')',
      lg: '@media screen and (min-width: ' + pxToRem(1200) + ')'
    },
    custom: {
      // Colours
      pri: '#19a5da',
      sec: 'hsl(256, 76%, 65%)',
      success: 'hsl(157, 70%, 46%)',
      unsure: 'hsl(60, 85%, 50%)',
      warning: 'hsl(27, 97%, 63%)',
      danger: 'hsl(353, 80%, 59%)',
      dark: 'hsl(212, 18%, 40%)',
      neutral: 'hsl(195, 32%, 80%)',
      light: 'hsl(213, 44%, 95%)',
      // Borders
      bd1: 'solid 1px',
      bd2: 'solid 2px',
      // Rhythm
      rq: r(0.25),
      rh: r(0.5),
      r3q: r(0.75),
      r1: r(1),
      r1h: r(1.5),
      r2: r(2),
      r4: r(4),
      // Modular Scale
      msn2: ms(-2),
      msn1: ms(-1),
      ms0: ms(0),
      ms1: ms(1),
      ms2: ms(2),
      ms3: ms(3),
      ms4: ms(4),
      ms5: ms(5),
      ms6: ms(6),
      // Fonts
      zsans: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
      zmono: '"Source Code Pro", Hack, Consolas, monaco, monospace',
      // Shadows
      sh1: '0 1px 4px 0 rgba(0, 0, 0, 0.185)',
      sh2: '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.15)',
      sh3: '0 11px 7px 0 rgba(0, 0, 0, 0.09), 0 13px 25px 0 rgba(0, 0, 0, 0.15)',
      sh4: '0 14px 12px 0 rgba(0, 0, 0, 0.085), 0 20px 40px 0 rgba(0, 0, 0, 0.15)',
      sh5: '0 17px 17px 0 rgba(0, 0, 0, 0.075), 0 27px 55px 0 rgba(0, 0, 0, 0.15)',
      ish1: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.185)',
      // Flexbox
      flx1: '1',
      if: 'inline-flex',
      // Defaults
      i: 'inherit'
    },
    classNames: [
      'Lh(1.5)',
      'Ff(zsans)',
      'H(100%)',
      'M(0)'
    ]
  }
}
/* eslint-enable */
