import { useState } from "react";
import GifList from "../component/GifList";
import SearchBar from "../component/SearchBar";
import { seacrhGiphy } from "../service/http";

export default function SearchPage() {
  const [data, setData] = useState(null);

  const queryHandle = async (e) => {
    const getSearchGiphy = await seacrhGiphy(e.target.value);
    setData(getSearchGiphy.data.data)
  }

  return (
    <div className="px-5 md:px-20">
      <SearchBar
        queryHandle={queryHandle}
      />
      <GifList data={data}/>
    </div>
  );
}
