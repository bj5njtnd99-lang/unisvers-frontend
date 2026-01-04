export default function SearchBar({ onSearch }) {
  return (
    <input
      className="search-input"
      placeholder="Recherche..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
