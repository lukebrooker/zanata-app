import React from 'react' // eslint-disable-line no-unused-vars
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="H"
    visibleOnLoad={false}
    changePositionKey="W">
    <LogMonitor />
  </DockMonitor>
)
