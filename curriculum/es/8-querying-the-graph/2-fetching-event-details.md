---
title: Fetching the Event Details ESPANOL
description: Fetch event details from your subgraph.
optional: false
tweet: "Query a subgraph for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ⛓"
---

Open up the `pages/event/[id].js` file, which uses dynamic routing with Next.js to create a new page for each event minted based on the eventID. This is where we can show the details for a single event and users can RSVP.

First, we will need import `gql` the apollo client at the top of the page.

```javascript
import { gql } from "@apollo/client";
import client from "../../apollo-client";
```

We can use the `getServerSideProps` function to fetch data from our subgraph from the server. You can learn more about this function and how Next.js renders content here if you'd like: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

We can get the event ID from the page url, and pass that into our query to fetch the details for that event. Then we can return the data we get back as props to use on the page.

```javascript
export async function getServerSideProps(context) {
  const { id } = context.params;

  const { data } = await client.query({
    query: gql`
      query Event($id: String!) {
        event(id: $id) {
          id
          eventID
          name
          description
          link
          eventOwner
          eventTimestamp
          maxCapacity
          deposit
          totalRSVPs
          totalConfirmedAttendees
          imageURL
          rsvps {
            id
            attendee {
              id
            }
          }
        }
      }
    `,
    variables: {
      id: id,
    },
  });

  return {
    props: {
      event: data.event,
    },
  };
}
```

Now we can import the event from our props in the Event function.

```javascript
function Event({event}) {
```

Notice that this looks a lot like the query in our playground, but it’s nested inside a query object called **Event** where we must define the query input type (in this case, it's a string).

Now we can access the event from the props by using destructuring. To make sure we are receiving the event data we requested, we can try to logging the `event` to the console.

```javascript
function Event({ event }) {
    console.log("EVENT:", event)
```

Create a new event on the create-event page, and click on the link to your event details page once the transaction has gone through. You might have to wait a up to a few minutes for this to go through.

Once you can open up the event details page, you should be able to see your event details in the console.

Now we can use this data to replace the static values on the page.
