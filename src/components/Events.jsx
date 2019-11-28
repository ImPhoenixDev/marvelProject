import React, { useState, useEffect, Fragment } from "react";

export default function Events(props) {
  // const { thumbnail, extension, name, available, eventsPath } = props;
  const { eventsPath, selectorProp } = props;
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
    const imageUrl = events.data.results[selectorProp].thumbnail.path;
    console.log(imageUrl);
    var imageUrls = imageUrl + ".jpg";
    return imageUrls;
  }

  return (
    <Fragment>
      {events.data && <img src={imageUrls} alt="hi" />}
      {/* {events.data != undefined && (
        <div className="">
          <picture>
            <img src={imageUrl} alt="" srcset={imageUrl} />
          </picture>
        </div>
      )} */}
    </Fragment>
  );
}
