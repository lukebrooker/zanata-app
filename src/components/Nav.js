import React from 'react' // eslint-disable-line

const Nav = ({
  items,
  ...props
}) => (
  <nav
    {...props}
  >
    <div className='D(f)'>
      {items.map((item, i) => (
        <button
          key={i}
          className='Flxg(1) Bd(n) Bgc(pri) C(light) P(rh) Op(.75):h'
        >
          {item}
        </button>
      ))}
    </div>
  </nav>
)

export default Nav
