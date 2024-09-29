import Card from './component/card.jsx'

const App = () => {

  const user = [
    {
      name: "John Doe",
      email: "john@gmail.com",
      age: 20,
    },
    {
      name: "huihui",
      email: "huihui@gmail.com",
      age: 30,
    }
  ]

  return (
    <div>
      {user.map((user,index) => (
        <Card key={index} name={user.name} 
        email={user.email} age={user.age} />
      ))}
    </div>
  )
}

export default App