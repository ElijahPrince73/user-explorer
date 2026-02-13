const Card = ({name, email, birthDate}) => {
  return (
    <div className="bg-amber-100 p-3">
      <p>{name}</p>
      <p>{email}</p>
      <p>{birthDate}</p>
    </div>
  )
}

export default Card