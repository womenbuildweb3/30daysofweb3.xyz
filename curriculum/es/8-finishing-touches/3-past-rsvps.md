---
title: Past RSVPs ESPANOL
description: Let users view past events they RSVP'ed to on your full-stack decentralized event platform.
optional: false
tweet: "Build a full-stack event platform dapp with #30DaysofWeb3 @womenbuildweb3 🎫"
---

We can set up the `past.js` file in the `pages/my-rsvps` folder almost the same as we did for the upcoming RSVPs. First we need to import our helper utilities.

```javascript
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import EventCard from "../../components/EventCard";
```

Next we can define our query to grab all of the user's RSVPs.

```javascript
const MY_PAST_RSVPS = gql`
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

Now we can set up the `MyPastRSVPs` function just as we did for the upcoming RSVPs, but here we will only show past events by checking if the `eventTimestamp` is less than the `currentTimestamp`.

```javascript
export default function MyPastRSVPs() {
  const { data: account } = useAccount();

  const id = account ? account.address.toLowerCase() : "";
  const [currentTimestamp, setEventTimestamp] = useState(new Date().getTime());
  const { loading, error, data } = useQuery(MY_PAST_RSVPS, {
    variables: { id },
  });

  if (loading)
    return (
      <Dashboard page="rsvps" isUpcoming={false}>
        <p>Loading...</p>
      </Dashboard>
    );
  if (error)
    return (
      <Dashboard page="rsvps" isUpcoming={false}>
        <p>`Error! ${error.message}`</p>
      </Dashboard>
    );
  if (data) console.log(data);

  return (
    <Dashboard page="rsvps" isUpcoming={false}>
      {account ? (
        <div>
          {data && !data.account && <p>No past RSVPs found</p>}
          {data && data.account && (
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {data.account.rsvps.map(function (rsvp) {
                if (rsvp.event.eventTimestamp < currentTimestamp) {
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
