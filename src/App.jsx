import Container from './component/Container.jsx'

const App = () => {
  return (
    <Container>
    <h1>hello</h1>
    <h2>huihui</h2>
    </Container>
  )
}

export default App










// import Card from './component/Card.jsx'

// const App = () => {

//   const user = [
//     {
//       name: "John Doe",
//       email: "john@gmail.com",
//       age: 20,
//     },
//     {
//       name: "huihui",
//       email: "huihui@gmail.com",
//       age: 30,
//     },
//     {
//       name: "sidd",
//       email: "sidd@gmail.com",
//       age: 25,
//     }
//   ]

//   return (
//     <div>
//       {user.map((user,index) => (
//         <Card key={index} name={user.name} 
//         email={user.email} age={user.age} />
//       ))}
//     </div>
//   )
// }

// export default App