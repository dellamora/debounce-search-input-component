import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import { getAnimeInfos } from "./services/api";

export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  const fetchAnimeInfos = useCallback(async () => {
    setInfo({});
    const response = await getAnimeInfos(text);
    const data = await response.json();
    setInfo(data);
  }, [text]);

  useEffect(() => {
    if (text) {
      fetchAnimeInfos();
    }
  }, [text, fetchAnimeInfos]);

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
