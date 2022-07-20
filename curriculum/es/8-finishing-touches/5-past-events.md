# Past Events ESPANOL

In the `pages/my-events/past` folder, open up the `index.js` file.

At the top of the file we can import our helper utilities again.

```
import { useState } from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import EventCard from "../../../components/EventCard";
```

We will define our query almost the same as for the upcoming events, but instead of the `_gt` modifier we will use the `_lt` modifier to fetch past events.

```
const MY_PAST_EVENTS = gql`
  query Events($eventOwner: String, $currentTimestamp: String) {
    events(
      where: { eventOwner: $eventOwner, eventTimestamp_lt: $currentTimestamp }
    ) {
      id
      eventID
      name
      description
      eventTimestamp
      maxCapacity
      totalRSVPs
      imageURL
    }
  }
`;
```

Now we can show all of the past events created by the user and a link where the user can confirm attendees.

```
export default function MyPastEvents() {
  const { data: account } = useAccount();

  const eventOwner = account ? account.address.toLowerCase() : "";
  const [currentTimestamp, setEventTimestamp] = useState(
    new Date().getTime().toString()
  );
  const { loading, error, data } = useQuery(MY_PAST_EVENTS, {
    variables: { eventOwner, currentTimestamp },
  });

  if (loading)
    return (
      <Dashboard page="events" isUpcoming={false}>
        <p>Loading...</p>
      </Dashboard>
    );
  if (error)
    return (
      <Dashboard page="events" isUpcoming={false}>
        <p>`Error! ${error.message}`</p>
      </Dashboard>
    );

  return (
    <Dashboard page="events" isUpcoming={false}>
      {account ? (
        <div>
          {data && data.events.length == 0 && <p>No past events found</p>}
          {data && data.events.length > 0 && (
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {data.events.map((event) => (
                <li key={event.id}>
                  <EventCard
                    id={event.id}
                    name={event.name}
                    eventTimestamp={event.eventTimestamp}
                    imageURL={event.imageURL}
                  />
                  <Link href={`/my-events/past/${event.id}`}>
                    <a className="text-indigo-800 text-sm truncate hover:underline">
                      Confirm attendees
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center py-8">
          <p className="mb-4">Please connect your wallet to view your events</p>
          <ConnectButton />
        </div>
      )}
    </Dashboard>
  );
}
```
