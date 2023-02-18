import GifItem from "./GitItem";
import Skeleton from "./Skeleton";

export default function GifList({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data &&
        data.slice(0, 9).map((item, key) => {
          return <GifItem gifUrl={item.images.preview_gif.url} />;
        })}
      {!data && <Skeleton />}
    </div>
  );
}
