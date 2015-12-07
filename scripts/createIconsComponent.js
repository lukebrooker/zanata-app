var fs = require('fs')
var svgFile = './src/components/Icons/icons.svg'
var componentFileSrc = './src/components/Icons/index.jsx.src'
var componentFile = './src/components/Icons/index.jsx'

function getSVG (cb) {
  fs.readFile(svgFile, 'utf8', function (err, data) {
    var result
    if (err) return console.log(err) // eslint-disable-line
    result = data.replace(/ style="position:absolute"/g, '')
    cb(result)
  })
}

function generateComponent (cb) {
  fs.readFile(componentFileSrc, 'utf8', function (err, data) {
    var component
    if (err) return console.log(err) // eslint-disable-line
    getSVG(function (svg) {
      component = data.replace(/{{svgFile: 'icons.svg'}}/, '\'' + svg + '\'')
      cb(component)
    })
  })
}

generateComponent(function (component) {
  fs.writeFile(componentFile, component, 'utf8', function (err) {
    if (err) return console.log(err) // eslint-disable-line
  })
})
