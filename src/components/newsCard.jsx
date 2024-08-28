import filler from "../assets/filler.jpg";

export default function NewsCard({ item }) {
  const imgSrc = item.urlToImage || filler; // fallback image if urlToImage is null

  return (
    <div className="newsCard">
      <img
        src={imgSrc}
        alt={item.title}
        className="newsImage"
        onError={(e) => (e.target.src = "../assets/filler.jpg")}
      />
      <div className="title">{item.title}</div>
      <a href={item.url} className="readMore">
        Read More
      </a>
    </div>
  );
}
