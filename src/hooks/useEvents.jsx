import { useEffect, useState } from "react";

const useEvents = URL => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(Response => Response.json())
      .then(data => setEvents({ ...data }));
  }, URL);

  return events;
};
export default useEvents;
