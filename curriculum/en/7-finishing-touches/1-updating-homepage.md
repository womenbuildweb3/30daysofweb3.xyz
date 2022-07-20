---
title: Updating the Homepage
description: Updating the Homepage
optional: false
---

In our `index.js` file, we want to be able to show all of the upcoming events people can RSVP to. At the top of the file we can import `gql` and `useQuery` from apollo client. We will also need to import `useState` and our `EventCard` component.

```javascript
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import EventCard from "../components/EventCard";
```

We can define our query above our `Home` function like this:

```javascript
const UPCOMING_EVENTS = gql`
  query Events($currentTimestamp: String) {
    events(where: { eventTimestamp_gt: $currentTimestamp }) {
      id
      name
      eventTimestamp
      imageURL
    }
  }
`;
```

This query will return the id, name, eventTimestamp, and imageURL for every event that hasn't already happened yet.

Now in our `Home` function, we can fetch the current timestamp and load the query with the apollo client. Once we get the list of events, we can map over them to render a list of event cards.

```javascript
export default function Home() {
  const [currentTimestamp, setEventTimestamp] = useState(
    new Date().getTime().toString()
  );
  const { loading, error, data } = useQuery(UPCOMING_EVENTS, {
    variables: { currentTimestamp },
  });

  if (loading)
    return (
      <Landing>
        <p>Loading...</p>
      </Landing>
    );
  if (error)
    return (
      <Landing>
        <p>`Error! ${error.message}`</p>
      </Landing>
    );

  return (
    <Landing>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {data &&
          data.events.map((event) => (
            <li key={event.id}>
              <EventCard
                id={event.id}
                name={event.name}
                eventTimestamp={event.eventTimestamp}
                imageURL={event.imageURL}
              />
            </li>
          ))}
      </ul>
    </Landing>
  );
}
```

Now on the homepage we should be able to see a list of the events we created!
