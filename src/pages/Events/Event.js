import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import appService from "../../Appservices/App.service";
import Image from "../../components/Image";

const Event = () => {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await appService.get("events", id);

        if (response.data) {
          setEvent(response.data.item);
          //console.log(response.data.item);
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchResults();
  }, [id]);

  return event ? (
    <section>
      <h1>{event.title}</h1>
      <article>{event.description}</article>
      <figure>
        <Image img={event.image} alt={event.title} />
      </figure>
    </section>
  ) : (
    <>...Loading</>
  );
};

export default Event;
