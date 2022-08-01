---
title: Hosting Your Code With Radicle
description: Learn how to host your code on Radicle, a decentralized code collaboration network.
optional: true
optionalMsg: If you've dabbled with Radicle or want to bookmark for this later, feel free to jump ahead!
optionalNextPath: /en/curriculum/9-wrapping-up/1-finale
tweet: "Host code for a full-stack dapp on @radicle with #30DaysofWeb3 @womenbuildweb3 💻"
---

Now that we are done with our app, we can upload our code to Radicle to keep it safe. **Radicle** is a _peer-to-peer network for storing git repositories designed to be free from censorship._ You can use Radicle for free similarly to how you would use GitHub or any other git based repository hosting site.

The major benefit to using Radicle is that it is a decentralized protocol rather than a centralized platform. This means that there can be no single point of failure that results in the loss or censorship of your content.

This section is optional, so don't stress if you have any issues. If you're really excited about Radicle and need help with this section, reach out to us through discord!

## Radicle CLI Installation

You can find the official documentation showing how to install the Radicle CLI below:

https://docs.radicle.xyz/getting-started
https://github.com/radicle-dev/radicle-cli

### CLI Installation for Mac

Before we install the Radicle CLI, we will need to install a few dependencies. First we will install Rust and Cargo by running the commands below in order:

```
curl https://sh.rustup.rs -sSf | sh
```

```
source $HOME/.cargo/env
```

Next we will download cmake here: https://cmake.org/download/

Install the application and move it to your Applications folder, open it up, and select Tools → How to Install for Command Line Use in the toolbar.

![Screenshot of How to Install for Command Line Use in the toolbar](https://i.imgur.com/GDLGFv7.png)

Choose one of the options in the pop-up to install cmake for the command line. If you’re not sure which one to use, use the command below:

```
sudo "/Applications/CMake.app/Contents/bin/cmake-gui" --install
```

Now you can run the command below to finally install the Radicle CLI. This might take a few minutes.

```
cargo install --force --locked --git https://seed.alt-clients.radicle.xyz/radicle-cli.git radicle-cli
```

Run `rad` to test if the installation succeeded. You should see the info below:

![Common `rad` commands](https://i.imgur.com/A9wZqqq.png)

## Creating A Radicle Repo

To create a new repo, open up your project folder in your terminal, and run `rad auth` to create our user account. Enter in a username and password, and the CLI will generate your Radicle Peer ID (device id) and personal URN (user id). You can always get this information later by running `rad self` in your terminal.

**Note:** _There is currently no way to retrieve a lost or forgotten passphrase, so please store it safely!_

Next you can run `rad init`, and enter a name and description for the repo. This should generate a project ID. You can always get this id again by running `rad .` .

You can now push the repo to Radicle by running `rad push`. The first time you push your code you will be prompted to select a node. You can select any option.

Now your code is hosted on Radicle! 🎉 You should see where you can see your hosted code.

You don't need to worry about storing this, since you can always run `rad ls` to see a list of all repositories that you've pushed to Radicle.

If you see an error in your browser that mentions your network, log in to your Coinbase Wallet or Metamask and change the network to Ethereum Mainnet.

### Making Changes

You can add changes with `git add` and `git commit` just as you would with any git repository. Just run `rad push` to push your commits to Radicle.

### Cloning

If you want to share your code with others who also have the Radicle CLI installed, they can run `rad clone` plus the project URN and the seed node to clone from.

```
rad clone rad:git:hnrkknc6ntqasrnej6ous5krdw464etyo3i7y --seed pine.radicle.garden
```

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz)
