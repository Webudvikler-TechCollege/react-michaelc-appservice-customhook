import { useEffect, useState } from "react";
import appService from "../../Appservices/App.service";

import { Link, Outlet } from "react-router-dom";

const Events = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await appService.getAll("events");

        if (response.data) {
          setStages(response.data.items);
          console.log(response.data.items);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchResults();
  }, []);

  return (
    <>
      <ul>
        {stages.map((stage, i) => (
          <li key={i}>
            <Link to={`/events/${stage.id}`}>{stage.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Events;
