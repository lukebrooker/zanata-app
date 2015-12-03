// Calculate Rhythm
function r (value, unit) {
  unit = unit || 'rem'
  return value * 1.5 + unit
}

module.exports = {
  cssDest: './src/index.css',
  configs: {
    breakPoints: {
      sm: '@media screen(min-width=750px)',
      md: '@media(min-width=1000px)',
      lg: '@media(min-width=1200px)'
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
      // Rhythm
      rq: r(0.25),
      rh: r(0.5),
      r3q: r(0.75),
      r1: r(1),
      r1h: r(1.5),
      r2: r(2),
      r4: r(4),
      // Extra
      expand: '1 1 auto'
    },
    classNames: [
      'Lh(1.5)'
    ]
  }
}
