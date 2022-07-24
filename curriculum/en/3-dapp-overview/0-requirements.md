---
title: Dapp Overview
description: With 30 Days of Web3, you will develop a full-stack decentralized event platform using must-know web3 tools, protocols, and frameworks including Solidity, The Graph, IPFS, Polygon, Ethers.js, and RainbowKit.
optional: false
---

## Define Goal & Requirements

During these 30 days, we’ll be working to create a full-stack RSVP dapp. Think of it as a web3-native eventbrite, except attendees need to deposit ETH to RSVP and will get it back upon them checking in at the event.

**Here’s what our smart contract should be able to handle:**

**Creation of a new event:**

- A unique ID
- A reference to who created the event (a wallet address of the creator)
- The time of the event, so we know when refunds should become available.
- The maximum capacity of attendees for that event
- The deposit amount for that event
- Keep track of those who RSVP’d
- Keep track of users who check into the event
- Find the difference between those who RSVP’d and those who checked in, and refund everyone except those.

**RSVP to an event:**

- Pass in a unique event ID the user wishes to RSVP to
- Ensure that the value of their deposit is sufficient for that event’s deposit requirement
- Ensure that the event hasn’t already started based on the timestamp of the event - people shouldn’t be able to RSVP after the event has started
- Ensure that the event is under max capacity

**Check in attendees:**

- Pass a unique event ID for the event the user wants to confirm users for
- Ensure that only the creator of the event can confirm attendees
- Pass in the attendee address of the user who is checking in and check if their address is saved in RSVP list
- If they are found in the RSVP list, add them to a list of confirmed attendees
- If user is in the confirmed attendees list, return their deposit

**Withdraw any remaining deposits from guests who didn’t check in and send them to the owner of the event:**

- Pass in a unique event ID for the event the user wishes to withdraw funds from
- Ensure that at least 7 days has passed since the event
- Find the difference in the number of guests who rsvp’d and guests who checked in
- Multiple the deposit amount times the discrepancy of guests between rsvp and check in and send the amount back to the owner

### Events and Subgraphs

As we’re writing our smart contract, we’re going to create custom events that will help us build our subgraph. **Events** are _triggers that your frontend and subgraph can listen to_, and this makes them perfect for conditionally executing code on the front end and conditionally indexing data.

The subgraph is what will allow us to create the ability to add a dashboard functionality, where users can see events they’ve created and/or attended. More on subgraphs later, but for now the important thing to note is that we have to expose data about the events that a user creates and RSVPs for via Solidity Events.

**The events we’ll be creating:**

- **NewRSVP:** to be emitted inside the function that gets called when a user RSVPs for an event
- **ConfirmedAttendee:** to be emitted inside the function that gets called when a user gets checked into an event
- **DepositsPaid:** to be emitted inside the function that gets called when a user gets checked into an event and gets their deposit back

### Subgraph Preparation

We'll be diving into the specifics of building our subgraph after the smart contract section, but you should understand the role of a subgraph in your dapp as you're writing the smart contract to make sure that you're optimizing your contract for the on-chain information you want to show on your front end

The **subgraph** allows you to _ask sophisticated questions_ about your data. The subgraph only has access to data we expose via _Solidity events_. For this reason, we're going to create custom events that expose data we'll ask questions about our data to get insights about the events our users are RSVP'd for, events that are in the future vs events that have already passed.
