import './App.css'
import Heading from './components/heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import {ClickMeButton, DangerButton, SuccessButton} from './components/Buttons'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'
import Title from './components/Title'

function App() {


  const students = ['Aryan', 'Rana', 'Rana', 'Parker', 'Sam', 'Andrew'];

  const newStudents = ['Ram', 'Shayam', 'Mohan', 'Vishal', 'Sita'];

  const clickMeHandler = () => {
    console.log('clickMeHandler Clicked');
  }

  const saveHandler = () => {
    console.log('saveHandler Clicked');
  }

  const deleteHandler = () => {
    console.log('deleteHandler Clicked');
  }
  return (
    <>
      <Title titleText = "Hello World!" />
      <Title titleText = "Aryan Sinha" />
      <Title titleText = "Learning props" />

      <Button btnType = "success" btnText = "Click Me" handler = {clickMeHandler}/>
      <Button btnType = "save" btnText = "Save" handler = {saveHandler}/>
      <Button btnType = "danger" btnText = "Delete" handler = {deleteHandler}></Button>

      <Heading></Heading>
      <Paragraph></Paragraph>
      <ClickMeButton/>
      <SuccessButton></SuccessButton>
      <DangerButton></DangerButton>
      <Title></Title>
      <DynamicComponent></DynamicComponent>
      <StudentList students = {students}/>
      <StudentList />
      <StudentList students = {newStudents}/>
      <RandomNumber></RandomNumber>
      <RandomNumber></RandomNumber>
      <RandomNumber></RandomNumber>
    </>
  )
}

export default App
