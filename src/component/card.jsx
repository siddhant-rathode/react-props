const Card = (props) => {
  const { name , email, age} = props;
    
  return (
    <div className="bg-gray-300 p-4 rounded-md flex m-9
     flex-col items-center justify-center ">
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default Card