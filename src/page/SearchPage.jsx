import { useState } from "react";
import GifList from "../component/GifList";
import SearchBar from "../component/SearchBar";
import { seacrhGiphy } from "../service/http";

export default function SearchPage() {
  const [data, setData] = useState(null);
  const [querySearch, setQuerySearch] = useState(null);

  const searchDataHandle = async () => {
    const getSearchGiphy = await seacrhGiphy(querySearch);
    setData(getSearchGiphy.data.data)
  };

  const queryHandle = (e) => {
    setQuerySearch(e.target.value)
  }

  return (
    <div className="px-5 md:px-20">
      <SearchBar
        querySearch={querySearch}
        setQuerySearch={setQuerySearch}
        searchDataHandle={searchDataHandle}
        queryHandle={queryHandle}
      />
      <GifList data={data}/>
    </div>
  );
}
