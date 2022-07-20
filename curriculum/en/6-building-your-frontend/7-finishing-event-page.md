# Finishing the Create Event Page

At the top of the `create-event` page, import the `connectButton` from RainbowKit, `useAccount` from wagmi, and the `Alert` component.

```javascript
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Alert from "../components/Alert";
```

At the top of `CreateEvent`, just under `export default function CreateEvent() {` set up the `account` variable with `useAccount`:

```javascript
const { data: account } = useAccount();
```

We'll also set up `state` variables to keep track of our alert messages, so our users can see if their event was successfully created or not. Add these just under the `useAccount()` line above:

```javascript
const [success, setSuccess] = useState(null);
const [message, setMessage] = useState(null);
const [loading, setLoading] = useState(null);
const [eventID, setEventID] = useState(null);
```

In our `createEvent` function, right before we console log "Minting..." and the transaction hash, we can set the status of `loading` to true. Once the transaction has gone through successfully, we can set our success variable to true, set `loading` to false, and set our success message.

```javascript
setLoading(true);
console.log("Minting...", txn.hash);
await txn.wait();
console.log("Minted -- ", txn.hash);
let wait = await txn.wait();
setEventID(wait.events[0].args[0]);
setSuccess(true);
setLoading(false);
setMessage("Your event has been created successfully.");
```

If we catch an error, we can set the message to show the error.

```javascript
setSuccess(false);
setMessage(`There was an error creating your event: ${error.message}`);
setLoading(false);
```

Here's what your `createEvent` function should look like now:

```javascript
const createEvent = async (cid) => {
    try {
      const rsvpContract = connectContract();

      if (rsvpContract) {
        let deposit = ethers.utils.parseEther(refund);
        let eventDateAndTime = new Date(`${eventDate} ${eventTime}`);
        let eventTimestamp = eventDateAndTime.getTime();
        let eventDataCID = cid;

        const txn = await rsvpContract.createNewEvent(
          eventTimestamp,
          deposit,
          maxCapacity,
          eventDataCID,
          { gasLimit: 900000 }
        );
        setLoading(true);
        console.log("Minting...", txn.hash);
        let wait = await txn.wait();
        console.log("Minted -- ", txn.hash);

        setEventID(wait.events[0].args[0]);

        setSuccess(true);
        setLoading(false);
        setMessage("Your event has been created successfully.");
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      setSuccess(false);
      setMessage(`There was an error creating your event: ${error.message}`);
      setLoading(false);
      console.log(error);
    }
  };

```

Now we can set up the alert component to show based on the success and loading status. We can add this inside the `section`.

```javascript
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
```

We can also wrap our form and header in a conditional statement so they don't show if the user successfully creates an event.

```javascript
{!success && (
  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-4">
    Create your virtual event
  </h1>
)}
```

We can also hide the form if a user hasn't connected their wallet.

```javascript
{account && !success && (
  <form>
      ...
  </form>
)}
```

We can uncomment the section asking the user to connect their wallet, and only show this if the user hasn't already connected their wallet.

```javascript
{!account && (
  <section className="flex flex-col items-start py-8">
    <p className="mb-4">Please connect your wallet to create events.</p>
    <ConnectButton />
  </section>
)}
```

If the event is successfully created, we can show the user a success message and a link to their event page. We can add this at the bottom of the `section`.

```javascript
{success && eventID && (
  <div>
    Success! Please wait a few minutes, then check out your event page{" "}
    <span className="font-bold">
      <Link href={`/event/${eventID}`}>here</Link>
    </span>
  </div>
)}
```

And that's it! Test out the page to see if you are able to successfully create a new event.

If you run into any errors, you can see a full copy of this page here: https://github.com/womenbuildweb3/Web3RSVP-frontend/blob/main/pages/create-event.js
