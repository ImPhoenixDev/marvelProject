import React, { useState, useEffect, Fragment } from "react";
import useEvents from "../hooks/useEvents";
import "../assets/styles/components/Events.styl";

export default function Events(props) {
  const { eventsURL } = props;
  const completePath = `${eventsURL}?ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9`;
  const eventsData = useEvents(completePath);

  console.log(eventsData);

  return (
    <section className="wrapper">
      <div>
        <h1 className="title">Events</h1>
        <small className="there-are-events">
          There are the events this personage has participated.
        </small>
      </div>
      {eventsData.data !== undefined && (
        <div className="gallery">
          {eventsData.data.results.map(results => {
            return (
              <div className="event" key={results.id}>
                <img
                  src={`${results.thumbnail.path}.${results.thumbnail.extension}`}
                  alt={`${results.title} image`}
                  className="thumbnail"
                />
                <small className="description" key>
                  {results.description}
                </small>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
