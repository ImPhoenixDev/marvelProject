import React, { useState, useEffect, Fragment } from "react";
import useEvents from "../hooks/useEvents";
import "../assets/styles/components/Events.styl";

export default function Events(props) {
  const { eventsURL } = props;

  const eventsURLSecurePath = `${eventsURL}?ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9&limit=50`;
  const completePath = eventsURLSecurePath.replace(/http/, "https");

  console.log(completePath);
  const eventsData = useEvents(completePath);
  console.log(eventsData);

  return (
    <section className="wrapper">
      <div className="info">
        <h1 className="title">Events</h1>
        <small className="there-are-events">
          Here appear the events this personage has participated
        </small>
      </div>
      {eventsData.data !== undefined && (
        <div className="gallery" id="gallery">
          {eventsData.data.results.map(results => {
            return (
              <div className="event" key={results.id}>
                <img
                  src={`${results.thumbnail.path.replace(
                    /^http:\/\//i,
                    "https://"
                  )}.${results.thumbnail.extension}`}
                  alt={`${results.title} image`}
                  className="thumbnail"
                />
                <h2 className="title">{results.title}</h2>
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
