import "./App.css";
import { useState, useEffect } from "react";
import NewsCard from "./components/newsCard";

export default function App() {
  const [arts, setArts] = useState([]);

  function categoryNews(cat) {
    const apikey = "5c1ead755a234e4fa2ed9014e8ae88c2";
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${apikey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArts(data.articles);
      })
      .catch((error) => console.error("Error fetching data...", error));
  }

  useEffect(() => {
    categoryNews("general");
  }, []);

  console.log(arts);

  return (
    <>
      <div className="heading">
        <h1>UrbanEcho</h1>
      </div>
      <div className="navBar">
        <ul className="navList">
          <li>
            <button className="options" onClick={() => categoryNews("general")}>
              General
            </button>
          </li>
          <li>
            <button
              className="options"
              onClick={() => categoryNews("technology")}
            >
              Technology
            </button>
          </li>
          <li>
            <button className="options" onClick={() => categoryNews("science")}>
              Science
            </button>
          </li>
          <li>
            <button
              className="options"
              onClick={() => categoryNews("entertainment")}
            >
              Entertainment
            </button>
          </li>
          <li>
            <button className="options" onClick={() => categoryNews("sports")}>
              Sports
            </button>
          </li>
          <li>
            <button
              className="options"
              onClick={() => categoryNews("business")}
            >
              Finance
            </button>
          </li>
        </ul>
      </div>
      <div className="newsFeed">
        {arts.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
      <div className="footer">
        <div className="card">
          <h3>About UrbanEcho</h3>
          <div className="about">
            UrbanEcho is your go-to source for the latest news across the globe.
            From breaking headlines to in-depth analysis, we bring you the
            stories that matter. Stay informed with news that is credible,
            comprehensive, and always up-to-date.
          </div>
        </div>
        <div className="card">
          <h3>Contact Us</h3>
          <div className="email">adityasingh.ggn1@gmail.com</div>
          <div className="phone">98XXXXXXXX</div>
          <div className="address">123 News Street, Media City, NY 10001</div>
        </div>
      </div>
    </>
  );
}
