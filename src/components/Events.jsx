import React, { useState, useEffect } from "react";

export default function Stories(props) {
  // const { thumbnail, extension, name, available, eventsPath } = props;
  const { eventsPath, selector } = props;
  const [events, setEvents] = useState([]);
  const url = `${eventsPath}?ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then(Response => Response.json())
      .then(data => setEvents(data));
  }, [eventsPath]);
  if (events.data != null) {
    console.log(events);
  }
  if (events.data != undefined) {
    const imageUrl = `${events.data.results[selector].thumbnail}.jpg`;
    return imageUrl;
  }

  return (
    <div className="">
      {events.data != undefined && <img src={imageUrl} alt="" />}
      <h1>hi</h1>
    </div>
  );
}
