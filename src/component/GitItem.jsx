export default function GifItem({ gifUrl }) {
  return (
      <div className="my-2">
        <img src={gifUrl} alt="gif" className="w-full max-h-40"/>
      </div>
  );
}
