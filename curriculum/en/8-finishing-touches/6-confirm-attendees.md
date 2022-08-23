---
title: Confirm Attendees
description: Let users confirm attendees for past events they created on your full-stack decentralized event platform.
optional: false
tweet: "Build a full-stack event platform dapp with #30DaysofWeb3 @womenbuildweb3 🎫"
---

The last page we need to make is the page where users can confirm attendees for their events. This file is called `[id].js` and is in the`pages/my-events/past` folder.

At the top of the file we can import our helper utilities again.

```javascript
import { useState, useEffect } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectContract from "../../../utils/connectContract";
import formatTimestamp from "../../../utils/formatTimestamp";
import Alert from "../../../components/Alert";
```

And at the top of our `PastEvent` function we can set up our account and state trackers.

```javascript
const { data: account } = useAccount();
const [success, setSuccess] = useState(null);
const [message, setMessage] = useState(null);
const [loading, setLoading] = useState(null);
const [mounted, setMounted] = useState(false);
```

We’ll check if we’ve confirmed attendees or not. If not, we can show a button to confirm attendee(s).
There will be two methods `confirmAttendee` and `confirmAllAttendees`.

If a user wants to confirm only one attendee, the `confirmAttendee` method will be used. If they want to confirm all the attendees at once, the `confirmAllAttendees` method will be used.

We can start with the `confirmAttendee` method. Create this function and set it up just as we did for other contract call functions. For this method we need to pass in the event id and attendee address.

```javascript
const confirmAttendee = async (attendee) => {
  try {
    const rsvpContract = connectContract();

    if (rsvpContract) {
      const txn = await rsvpContract.confirmAttendee(event.id, attendee);
      setLoading(true);
      console.log("Minting...", txn.hash);

      await txn.wait();
      console.log("Minted -- ", txn.hash);
      setSuccess(true);
      setLoading(false);
      setMessage("Attendance has been confirmed.");
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    setSuccess(false);
    // setMessage(
    //   `Error: ${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}tx/${txn.hash}`
    // );
    setMessage("Error!");
    setLoading(false);
    console.log(error);
  }
};
```

We can create a new function called `confirmAllAttendees` to call the corresponding function from our contract and implement it just as we did above. For this method we only need to pass in the event id.

```javascript
const confirmAllAttendees = async () => {
  console.log("confirmAllAttendees");
  try {
    const rsvpContract = connectContract();

    if (rsvpContract) {
      console.log("contract exists");
      const txn = await rsvpContract.confirmAllAttendees(event.id, {
        gasLimit: 300000,
      });
      console.log("await txn");
      setLoading(true);
      console.log("Mining...", txn.hash);

      await txn.wait();
      console.log("Mined -- ", txn.hash);
      setSuccess(true);
      setLoading(false);
      setMessage("All attendees confirmed successfully.");
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    setSuccess(false);
    // setMessage(
    //   `Error: ${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}tx/${txn.hash}`
    // );
    setMessage("Error!");
    setLoading(false);
    console.log(error);
  }
};
```

Create a `checkIfConfirmed` funtion so we can easily check if attendees have already been confirmed. This method will just loop through all confirmed addresses to see if any of them matches the user's address.

```javascript
function checkIfConfirmed(event, address) {
  for (let i = 0; i < event.confirmedAttendees.length; i++) {
    let confirmedAddress = event.confirmedAttendees[i].attendee.id;
    if (confirmedAddress.toLowerCase() == address.toLowerCase()) {
      return true;
    }
  }
  return false;
}
```

We will put our query in the `getServersideProps` function.

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
          eventOwner
          eventTimestamp
          maxCapacity
          totalRSVPs
          totalConfirmedAttendees
          rsvps {
            id
            attendee {
              id
            }
          }
          confirmedAttendees {
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

Inside our `PastEvent` function we can return a table of users to confirm and a button to confirm them.

```javascript
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Head>
          <title>My Dashboard | web3rsvp</title>
          <meta name="description" content="Manage your events and RSVPs" />
        </Head>
        <div className="flex flex-wrap py-8">
          <DashboardNav page={"events"} />
          <div className="sm:w-10/12 sm:pl-8">
            {loading && (
              <Alert
                alertType={"loading"}
                alertBody={"Please wait"}
                triggerAlert={true}
                color={"white"}
              />
            )}
            {success && (
              <Alert
                alertType={"success"}
                alertBody={message}
                triggerAlert={true}
                color={"palegreen"}
              />
            )}
            {success === false && (
              <Alert
                alertType={"failed"}
                alertBody={message}
                triggerAlert={true}
                color={"palevioletred"}
              />
            )}
            {account ? (
              account.address.toLowerCase() ===
              event.eventOwner.toLowerCase() ? (
                <section>
                  <Link href="/my-events/past">
                    <a className="text-indigo-800 text-sm hover:underline">
                      &#8592; Back
                    </a>
                  </Link>
                  <h6 className="text-sm mt-4 mb-2">
                    {formatTimestamp(event.eventTimestamp)}
                  </h6>
                  <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl mb-8">
                    {event.name}
                  </h1>
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Attendee
                              </th>
                              <th
                                scope="col"
                                className="text-right py-3.5 pl-3 pr-4 sm:pr-6"
                              >
                                <button
                                  type="button"
                                  className="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  onClick={confirmAllAttendees}
                                >
                                  Confirm All
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {event.rsvps.map((rsvp) => (
                              <tr key={rsvp.attendee.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {rsvp.attendee.id}
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  {checkIfConfirmed(event, rsvp.attendee.id) ? (
                                    <p>Confirmed</p>
                                  ) : (
                                    <button
                                      type="button"
                                      className="text-indigo-600 hover:text-indigo-900"
                                      onClick={() =>
                                        confirmAttendee(rsvp.attendee.id)
                                      }
                                    >
                                      Confirm attendee
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <p>You do not have permission to manage this event.</p>
              )
            ) : (
              <ConnectButton />
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default PastEvent;
```

And that's it! Congrats, you created a full-stack web3 app! You should be really proud of yourself for getting this far. 🎊

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz)
