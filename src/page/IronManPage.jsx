import { useEffect, useState } from "react";
import { seacrhGiphy } from "../service/http";

import GifList from "../component/GifList";

export default function IronManPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchIronManGiphy() {
      const getSearchGiphy = await seacrhGiphy('iron man');
      setData(getSearchGiphy.data.data);
    }
    fetchIronManGiphy()
  }, []);
  return (
    <div className="px-20">
      <h1 className="text-2xl text-neutral-600 font-semibold my-20">Iron Man Giphy</h1>
      <GifList data={data} />
    </div>
  );
}
