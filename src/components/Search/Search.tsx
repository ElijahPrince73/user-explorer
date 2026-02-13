interface SearchProps {
  onSearchCallback: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onSearchCallback }: SearchProps) => {
  return (
    <input className="my-4 border " type="text" placeholder="Search for user" onChange={(e) => onSearchCallback(e.target.value)}/>
  )
}
export default Search