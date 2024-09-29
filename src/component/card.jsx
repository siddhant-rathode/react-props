const card = (props) => {
    
  return (
    <div className="bg-gray-300 p-4 rounded-md flex m-9
     flex-col items-center justify-center ">
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        <h1>{props.age}</h1>
    </div>
  )
}

export default card