import "./App.css";
import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      setInfo({});
      fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=20`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Explore Anime</h1>

      <div className="divInput">
        <SearchInput value={text} onChange={(search) => setText(search)} />
        {info.data && (
          <ul className="animes-list">
            {info.data.map((anime) => (
              <li key={anime.id}>
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                />
                {anime.attributes.canonicalTitle}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
