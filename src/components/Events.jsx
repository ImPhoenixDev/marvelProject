import React, { useState, useEffect, Fragment } from "react";
import useEvents from "../hooks/useEvents";
const path =
  "http://gateway.marvel.com/v1/public/characters/1009664/events?ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9";

export default function Events(props) {
  const { thumbnail, selectorProp } = props;
  const [eventsURL, setEventsURL] = useState(path);
  const [evData, setEvData] = useState([]);

  // setEvData(useEvents(eventsURL));
  const data = useEvents(eventsURL);

  // setEventsURL(URL);
  // function getEvents() {
  //   const path = marvelApi.data.results[0].events.collectionURI;
  //   const URL = `${path}?ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9`;
  // }

  // useEffect(() => {
  //   console.log("events links");
  //   console.log(evData.data);
  //   return evData;
  // }, [eventsURL]);

  return (
    <Fragment>
      <h1>Hi</h1>
      {data.data !== undefined && <p>{data.data.limit}</p>}
    </Fragment>
  );
}
