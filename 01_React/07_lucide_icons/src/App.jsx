import React from 'react';
import {Icon, Camera, Trash2, Youtube} from 'lucide-react';
import {cupSaucer, burger} from '@lucide/lab'
function App() {

  return (
    <>
      <Camera color='yellow' size={50} strokeWidth={1}/>
      <Trash2 color='white' size={40} strokeWidth={1}/>
      <Youtube color='red' size={50} strokeWidth={1}/>
      <Icon iconNode={cupSaucer} color='brown' size={50} strokeWidth={1}/>
      <Icon iconNode={burger} color='yellow' size={50} strokeWidth={1}/>
    </>
  )
}

export default App
