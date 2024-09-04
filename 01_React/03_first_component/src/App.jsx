import './App.css'
import Heading from './components/heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import {DangerButton, SuccessButton} from './components/Buttons'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'

function App() {

  return (
    <>
      <Heading></Heading>
      <Paragraph></Paragraph>
      <Button></Button>
      <SuccessButton></SuccessButton>
      <DangerButton></DangerButton>
      <DynamicComponent></DynamicComponent>
      <StudentList></StudentList>
    </>
  )
}

export default App
