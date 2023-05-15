import { FormBuilder, Form } from '@formio/react'
import './styles/formio.css'

function App() {
  return (
    <>
      {/* <Form src='https://examples.form.io/example' /> */}

      <FormBuilder
        form={{
          display: 'form',
          components: [],
        }}
        onChange={(schema) => console.log(schema)}
      />
    </>
  )
}

export default App
