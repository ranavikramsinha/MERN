import style from './App.module.css'
import Container from './container'

function App() {

  return (
    <>
      <Container>
        <p>This is another content.</p>
      </Container>
      <Container>
        <h1 className={`${style.heading} ${style.paragraph}`}>Hello World!</h1>
      </Container>
    </>
  )
}

export default App
