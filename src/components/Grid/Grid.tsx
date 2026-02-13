import Card from '../Card/Card'
const Grid = ({ users }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {users.map(({ id, firstname, lastname, email, birthDate }) => {
        return (
          <div key={id}>
            <Card 
              name={`${firstname} ${lastname}`} 
              email={email} 
              birthDate={birthDate}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Grid