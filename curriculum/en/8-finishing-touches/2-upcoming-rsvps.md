---
title: Upcoming RSVPs
description: Let users view upcoming events they RSVP'ed to on your full-stack decentralized event platform.
optional: false
tweet: "Build a full-stack event platform dapp with #30DaysofWeb3 @womenbuildweb3 🎫"
---

In the `pages/my-rsvps` folder, we have two pages where we want to show the user's upcoming and past events that they RSVPed to.

You can open this page at http://localhost:3000/my-rsvps/upcoming, or you can navigate there from the homepage by connecting your wallet and clicking on your wallet address in the upper right corner to open a dropdown menu.

In the `upcoming.js` file, we can import `useState`, `useAccount` and `ConnectButton` so the user can connect their wallet. We can also import `gql` and `useQuery` so we can get details about the event from our subgraph. Finally we can import the `EventCard` component.

```javascript
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import EventCard from "../../components/EventCard";
```

Before our `MyUpcomingRSVPs` function, we can define our gql query which will fetch all of the rsvps for the user's account.

```javascript
const MY_UPCOMING_RSVPS = gql`
  query Account($id: String) {
    account(id: $id) {
      id
      rsvps {
        event {
          id
          name
          eventTimestamp
          imageURL
        }
      }
    }
  }
`;
```

To only show the rsvps for upcoming events, we can filter the events returned from the query by the `eventTimestamp`.

We also want to let the user connect their wallet just as we did on our other pages with the `ConnectButton` and `useAccount` hook.

We can get the user's wallet address from the `useAccount` hook and pass it into our query. To make sure that our subgraph is able to match the address correctly, we need to transform the address to all lower case.

Once we have our query results, we can pass those into our `EventCard` component.

```javascript
export default function MyUpcomingRSVPs() {
  const { data: account } = useAccount();

  const id = account ? account.address.toLowerCase() : "";
  const [currentTimestamp, setEventTimestamp] = useState(new Date().getTime());
  const { loading, error, data } = useQuery(MY_UPCOMING_RSVPS, {
    variables: { id },
  });

  if (loading)
    return (
      <Dashboard page="rsvps" isUpcoming={true}>
        <p>Loading...</p>
      </Dashboard>
    );
  if (error)
    return (
      <Dashboard page="rsvps" isUpcoming={true}>
        <p>`Error! ${error.message}`</p>
      </Dashboard>
    );

  return (
    <Dashboard page="rsvps" isUpcoming={true}>
      {account ? (
        <div>
          {data && !data.account && <p>No upcoming RSVPs found</p>}
          {data && data.account && (
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {data.account.rsvps.map(function (rsvp) {
                if (rsvp.event.eventTimestamp > currentTimestamp) {
                  return (
                    <li key={rsvp.event.id}>
                      <EventCard
                        id={rsvp.event.id}
                        name={rsvp.event.name}
                        eventTimestamp={rsvp.event.eventTimestamp}
                        imageURL={rsvp.event.imageURL}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center py-8">
          <p className="mb-4">Please connect your wallet to view your rsvps</p>
          <ConnectButton />
        </div>
      )}
    </Dashboard>
  );
}
```

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz)
