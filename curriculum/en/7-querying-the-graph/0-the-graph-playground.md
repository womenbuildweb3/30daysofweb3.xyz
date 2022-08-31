---
title: Using The Graph playground
description: Test your subgraph using The Graph playground.
optional: false
tweet: "Query a subgraph for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ⛓"
---

Now that we have created an event, we need to be able to fetch the event information to show on the event details page. We also need to know the deposit amount for the event before we can create an RSVP.

This is where our subgraph comes in. When we open up our deployed subgraph playground, we can see there is an example default query in the left container.

If we click the “play” or “execute” button, we can see that this query returns a list of data in JSON format with the same fields as our query. You can see a full list of the fields that can be queried for each entity by clicking on the entity name in the Schema section on the right.

![The Graph's hosted service query playground](https://i.imgur.com/eYDRuF9.png)

You can also copy and paste the HTTP url into an API testing app like Postman or Insomnia if you prefer to test that way.

As shown in the example query, we can limit the number of results returned by using the `first` keyword.

```javascript
{
  events(first: 20) {
        id
  	name
  }
}
```

If we want to look for an entry with a specific value for a field, we can do that by setting the value in the query parameters. For example, if we have the id for an event entity, we can look it up like this:

```javascript
{
  event(id: "1234") {
        id
  	name
  }
}
```

To query for multiple entities, we can use the `where` keyword. The `where` keyword is set to an object with search values defined for a certain field in the entity.

If we want to query for all events with a certain name, we can change event to events, and set the name field to our event name.

```javascript
{
  events(where: { name: "Holiday Party" }) {
    id
    name
  }
}
```

We can also attach modifiers to the end of the field to add more constraints and filters. For example, if we want to find all events where the name field is not null, we can use the query below:

```javascript
{
  events(where: { name_not: null }) {
    id
    name
  }
}
```

You can see a full list of modifiers here: https://thegraph.com/docs/en/developer/graphql-api/#all-filters

We can also order our events using the orderBy keyword. To order all events by the `eventTimestamp`, we can use this query:

```javascript
{
  events(orderBy: eventTimestamp) {
    id
    name
    eventTimestamp
  }
}
```

You can find a full reference for querying in The Graph’s docs here: https://thegraph.com/docs/en/developer/graphql-api/

## ✋ Need Help?

If you need help, check to see if your question has already been asked in **#section-7-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in **#announcements** for those!

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz),
Editors: [Sarah Z](https://twitter.com/haegeez)
