# Ode to Joy
Playing Beethoven's "Ode to Joy" on VirtualPiano.net in TypeScript with Puppeteer

---

This is just a small demo project.  It runs in Puppeteer, which drives Google Chromium
in either headless or GUI mode.  Using Puppeteer, we interact with VirtualPiano.net
to play Beethoven's "Ode to Joy."

## Durations and Rests

This project uses a promise-based `sleep()` function in order to establish note
and rest duration.  Please DO NOT use `sleep()` functions in your own code if you are
automating UI tests.  There is always a functional condition to wait on instead.

## Installation

To install:
1. Clone this repository
2. `cd` to the new directory and run `npm install`
3. Run `npm start` to build and run the application itself
