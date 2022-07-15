# Displaying Event Details ESPANOL

In the `Head` section, we can change "name" in the `<title>` tag and in the `meta` content to `{event.name}`

```
<Head>
<title> {event.name} | web3rsvp</title>
<meta name="description" content={event.name} />
<link rel="icon" href="/favicon.ico" />
</Head>
```

Next, we'll import a function to format the timestamp called `formatTimestamp`. This function gets pulled from our utils folder.

Import the following somewhere at the top of your file with all the other imports:

```
import formatTimestamp from "../../utils/formatTimestamp";
```

And replace the text that says "time" with the formatted time.

```
<h6 className="mb-2">{formatTimestamp(event.eventTimestamp)}</h6>
```

We can also replace the other event details. So `name` can be changed to `{event.name}`, and `description` can be changed to `{event.description}`.

We can change `# attending` to show the total RSVPs and the maxCapacity with `{event.totalRSVPs}/{event.maxCapacity} attending` .

To display the event image, we will need to import the `Image` component from `next/image` at the top of the file.

```
import Image from "next/image";
```

Now we can add the image above the event description. We'll only display the image if the imageURL isn't null.

```
<div className="mb-8 w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
  {event.imageURL && (
    <Image src={event.imageURL} alt="event image" layout="fill" />
  )}
</div>
<p>{event.description}</p>
```

After `Hosted by{" "}`, inside the `<a>` tag we can add the event owner's address with `{event.eventOwner}`. Then we can link the address to the testnet explorer using our `NEXT_PUBLIC_TESTNET_EXPLORER_URL` variable.

```
<span className="truncate">
    Hosted by{" "}
    <a
      className="text-indigo-800 truncate hover:underline"
      href={`${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}address/${event.eventOwner}`}
      target="_blank"
      rel="noreferrer"
    >
      {event.eventOwner}
    </a>
</span>
```

You should now be able to see all of the event details!
