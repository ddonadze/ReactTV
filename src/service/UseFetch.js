import { useEffect, useState } from "react";

const useFetch = (playListId) => {
    const url = 'https://youtube.googleapis.com/youtube/v3/playlistItems';
    const part = 'part=contentDetails%2C%20id%2C%20snippet%2C%20status';
    const maxResults = 'maxResults=3';
    const playlistId = playListId;
    const key = 'key=AIzaSyBg5ghXhpR69NmKBRH2NQjqBlH-I59I6sM';

    const [data, setData] = useState(null)

    useEffect(() => {

        fetch(`${url}?${part}&${maxResults}&${playlistId}&${key}`)
          .then( res => {
            return res.json();
          })
          .then(data => {
              setData(data);
          });
      }, [playListId]);

      return {data}
}

export default useFetch;