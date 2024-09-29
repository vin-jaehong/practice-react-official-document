import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true }
];

export const TestList = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const handleToggleMyList = (artworkId: number, nextSeen: boolean) => {
    const myNextList = [...myList];
    const artwork = myNextList.find((a) => a.id === artworkId);
    if (artwork) {
      artwork.seen = nextSeen;
    }
    setMyList(myNextList);
  };

  const handleToggleYourList = (artworkId: number, nextSeen: boolean) => {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find((a) => a.id === artworkId);
    if (artwork) {
      artwork.seen = nextSeen;
    }
    setYourList(yourNextList);
  };

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
};

const ItemList = ({ artworks, onToggle }: { artworks: any; onToggle: any }) => {
  return (
    <ul>
      {artworks.map((artwork: any) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
};
