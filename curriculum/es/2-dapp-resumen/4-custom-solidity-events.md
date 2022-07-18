## Custom Solidity Events ESPANOL

### Define Events

Recall that Solidity events are a way for our subgraph to _listen_ for specific actions to enable us to make queries about the data from our smart contract. We have functions written to create a new event on our platform, RSVP to an event, confirm individual attendees, confirm the group of attendees, and send unclaimed funds back to the event owner. In order for our subgraph to be able to access the information from these functions, we need to expose them via events. We'll write the following events and _emit_ them inside of their corresponding function:

- **NewEventCreated**: exposes data about the new event like the owner, max capacity, event owner, deposit amount, etc.
- **NewRSVP**: exposes data about the user who RSVP'd and the event they RSVP'd to
- **ConfirmedAttendee**: exposes data about the user who was confirmed and the event that they were confirmed for
- **DepositsPaid**: exposes data about unclaimed deposits being sent to the event organizer

All of our events are denoted by using the keyword _event_, followed by the custom name for our event.

Define your events at the very top of your file, inside the curly braces (right after `contract Web3RSVP {`):

```solidity
event NewEventCreated(
        bytes32 eventID,
        address creatorAddress,
        uint256 eventTimestamp,
        uint256 maxCapacity,
        uint256 deposit,
        string eventDataCID
    );

    event NewRSVP(bytes32 eventID, address attendeeAddress);

    event ConfirmedAttendee(bytes32 eventID, address attendeeAddress);

    event DepositsPaidOut(bytes32 eventID);
```

### Emit Events

Now that we've defined them, we actually have to _emit_ them somewhere. Defining events is adding them as a tool on your toolbelt, but emitting them is actually pulling that tool out and using it. Each event should be emitted where it makes sense, after a specific action has been taken.

For our first event, `newEventCreated`, we should emit this at the very end of our function `createNewEvent`.

To emit an event, we use the keyword _emit_ and then pass in the arguments, AKA the actual values we want, based on the parameters we defined.

Emit NewEventCreated at the bottom of your `createNewEvent` function like this:

```solidity
emit NewEventCreated(
           eventId,
           msg.sender,
           eventTimestamp,
           maxCapacity,
           deposit,
           eventDataCID
       );
```

`NewRSVP` should be emitted at the very end of our function `confirmAttendee` like this:

```solidity
emit NewRSVP(eventId, msg.sender);

```

`ConfirmedAttendees` should be emitted at the very end of our function `confirmAttendee` like this:

```solidity
emit ConfirmedAttendee(eventId, attendee);

```

`DepositPaidOut` should be emitted at the very end of our function `withdrawUnclaimedDeposits` like this:

```solidity
emit DepositsPaidOut(eventId);

```

## You Did It!

You've written your functions, defined your structs, and defined custom events! This is what your final code should look like:

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Web3RSVP {

    event NewEventCreated(
        bytes32 eventID,
        address creatorAddress,
        uint256 eventTimestamp,
        uint256 maxCapacity,
        uint256 deposit,
        string eventDataCID
    );

    event NewRSVP(bytes32 eventID, address attendeeAddress);

    event ConfirmedAttendee(bytes32 eventID, address attendeeAddress);

    event DepositsPaidOut(bytes32 eventID);

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

    function createNewEvent(
        uint256 eventTimestamp,
        uint256 deposit,
        uint256 maxCapacity,
        string calldata eventDataCID
    ) external {
        // generate an eventID based on other things passed in to generate a hash
        bytes32 eventId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                eventTimestamp,
                deposit,
                maxCapacity
            )
        );

        address[] memory confirmedRSVPs;
        address[] memory claimedRSVPs;


        //this creates a new CreateEvent struct and adds it to the idToEvent mapping
        idToEvent[eventId] = CreateEvent(
            eventId,
            eventDataCID,
            msg.sender,
            eventTimestamp,
            deposit,
            maxCapacity,
            confirmedRSVPs,
            claimedRSVPs,
            false
        );

        emit NewEventCreated(
            eventId,
            msg.sender,
            eventTimestamp,
            maxCapacity,
            deposit,
            eventDataCID
        );
    }

    function createNewRSVP(bytes32 eventId) external payable {
        // look up event
        CreateEvent storage myEvent = idToEvent[eventId];

        // transfer deposit to our contract / require that they sent in enough ETH
        require(msg.value == myEvent.deposit, "NOT ENOUGH");

        //require that the event hasn't already happened (<eventTimestamp)
        require(block.timestamp <= myEvent.eventTimestamp, "ALREADY HAPPENED");

        //make sure event is under max capacity
        require(
            myEvent.confirmedRSVPs.length < myEvent.maxCapacity,
            "This event has reached capacity"
        );

        //require that msg.sender isn't already in myEvent.confirmedRSVPs
        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            require(myEvent.confirmedRSVPs[i] != msg.sender, "ALREADY CONFIRMED");
        }

        myEvent.confirmedRSVPs.push(payable(msg.sender));

        emit NewRSVP(eventId, msg.sender);
    }

    function confirmAllAttendees(bytes32 eventId) external {
        // look up event
        CreateEvent memory myEvent = idToEvent[eventId];

        // make sure you require that msg.sender is the owner of the event
        require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

        //confirm each attendee
        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            confirmAttendee(eventId, myEvent.confirmedRSVPs[i]);
        }
    }

    function confirmAttendee(bytes32 eventId, address attendee) public {
        // look up event
        CreateEvent storage myEvent = idToEvent[eventId];

        // make sure you require that msg.sender is the owner of the event
        require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

        // require that attendee is in myEvent.confirmedRSVPs
        address rsvpConfirm;

        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            if(myEvent.confirmedRSVPs[i] == attendee){
                rsvpConfirm = myEvent.confirmedRSVPs[i];
            }
        }

        require(rsvpConfirm == attendee, "NO RSVP TO CONFIRM");


        // require that attendee is NOT in the claimedRSVPs list
        for (uint8 i = 0; i < myEvent.claimedRSVPs.length; i++) {
            require(myEvent.claimedRSVPs[i] != attendee, "ALREADY CLAIMED");
        }

        // require that deposits are not already claimed
        require(myEvent.paidOut == false, "ALREADY PAID OUT");

        // add them to the claimedRSVPs list
        myEvent.claimedRSVPs.push(attendee);

        // sending eth back to the staker https://solidity-by-example.org/sending-ether
        (bool sent,) = attendee.call{value: myEvent.deposit}("");

        //if this fails
        if(!sent){
            myEvent.claimedRSVPs.pop();
        }

        require(sent, "Failed to send Ether");

        emit ConfirmedAttendee(eventId, attendee);
    }

    function withdrawUnclaimedDeposits(bytes32 eventId) external {
        // look up event
        CreateEvent memory myEvent = idToEvent[eventId];

        // check if already paid
        require(!myEvent.paidOut, "ALREADY PAID");

        // check if it's been 7 days past myEvent.eventTimestamp
        require(
            block.timestamp >= (myEvent.eventTimestamp + 7 days),
            "TOO EARLY"
        );

        // only the event owner can withdraw
        require(msg.sender == myEvent.eventOwner, "MUST BE EVENT OWNER");

        // calculate how many people didn't claim by comparing
        uint256 unclaimed = myEvent.confirmedRSVPs.length - myEvent.claimedRSVPs.length;

        uint256 payout = unclaimed * myEvent.deposit;

        // mark as paid before sending to avoid reentrancy attack
        myEvent.paidOut = true;

        // send the payout to the owner
        (bool sent, ) = msg.sender.call{value: payout}("");

        // if this fails
        if(!sent){
            myEvent.paidOut == false;
        }

        require(sent, "Failed to send Ether");

        emit DepositsPaidOut(eventId);
    }
}
```
