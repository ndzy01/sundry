function TestUseState() {
  const [testUseState, setTestUseState] = React.useState('TestUseState')
  return (
    <h1
      onClick={() => {
        setTestUseState('This is a test')
      }}
    >
      {testUseState}
    </h1>
  )
}
const element = <TestUseState></TestUseState>
ReactDOM.render(element, document.getElementById('root'))
