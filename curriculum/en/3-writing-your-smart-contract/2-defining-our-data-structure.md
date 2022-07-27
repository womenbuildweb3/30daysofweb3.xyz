---
title: Defining Our Data Structure
description: Define structs in Solidity to represent events in your full-stack decentralized event platform.
optional: false
tweet: "Write a smart contract in Solidity for a full-stack dapp with #30DaysofWeb3 @womenbuildweb3 ✍️"
---

## Define An 'Event'

Let’s start by defining our smart contract and the information that we want to store on-chain: the creation of a new event by an event organizer and the details associated with that event. We’ll save this in a struct. As a refresher, a _struct is similar to a JS object in that it stores related information about an entity_. In our case, we’re storing information related to the creation of a new event on our RSVP contract.

```solidity
contract Web3RSVP {
    struct CreateEvent {
        bytes32 eventId;
        string eventDataCID;
        address eventOwner;
        uint256 eventTimestamp;
        uint256 deposit;
        uint256 maxCapacity;
        address[] confirmedRSVPs;
        address[] claimedRSVPs;
        bool paidOut;
   }
}
```

These properties are the properties that each individual event will have on our platform. All of these details will also be stored on-chain.

In general, it’s wise to be picky about the data you store on-chain because it’s expensive to store data on Ethereum. Because of this, you’ll notice that we’re not storing details like the event’s name and event description directly in the struct, but instead we’re storing a reference to an IPFS hash where those details will be stored off-chain. More on this later, but for now just know that’s what `eventDataCID` is for!

### Handling Multiple Events

Because we want our contract to be able to handle the creation of multiple events, **we need a mechanism to store and easily look up events by some identifier**, like a unique ID. This is what we will use to tell our program which event a user is RSVPing to, since we can assume there will be many.

To do this, we can create a Solidity `mapping` that maps, or defines a relationship with, a unique eventID to the struct we just defined that is associated with that event.

We’ll use this mapping to make sure we are referencing the correct event when we call functions on that event like RSVPing, confirming attendees, etc.

Inside of our contract and under our struct, we'll define this mapping.

```solidity
contract Web3RSVP {
   struct CreateEvent {
       bytes32 eventId;
       string eventDataCID;
       address eventOwner;
       uint256 eventTimestamp;
       uint256 deposit;
       uint256 maxCapacity;
       address[] confirmedRSVPs;
       address[] claimedRSVPs;
       bool paidOut;
   }

    mapping(bytes32 => CreateEvent) public idToEvent;

}
```

Writers: [Cami](https://twitter.com/camiinthisthang)