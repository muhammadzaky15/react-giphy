import GifList from "../component/GifList";
import SearchBar from "../component/SearchBar";

export default function SearchPage() {
  return (
    <div className="px-20">
      <SearchBar />
      <GifList />
    </div>
  );
}
