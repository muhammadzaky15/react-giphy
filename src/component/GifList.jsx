import { useEffect } from "react";
import GifItem from "./GitItem";

export default function GifList({ data }) {
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {data && data.slice(0, 9).map((item, key) => {
            return <GifItem gifUrl={item.images.preview_gif.url} />
        })}
    </div>
  );
}
