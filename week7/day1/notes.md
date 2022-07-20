Browsers have runtime engines, both V8 and Blink in Chrome.
All browsers run on an engine of some sort
Node uses V8, the same engine that runs JavaScript in the browser, and is an open-source, cross-platform runtime environment used for development of server-side web applications.

- It uses an event-driven architecture
- It uses non-blocking Input/Output API (if many requests on a server, you can take it all rather than one at a time)
  - Allows multiple requests at one time

Difference between Node v Browser JS

- Can access the filesystem and other system level libraries
  -Modify files. access databases, include low-level libraries
- No page
  - No page to display, no document or window available in the global scope
- Core modules
  - Node comes with modules that add extra functionality

Modules have all of their own little worlds without having to interact with each other

Event listeners run different code based on events that occur. They're different from browser events (DOM, click, submit, etc.), whereas node events are network request received, file input completed

- These events are asynchronous, which will execute the operation in the background and continue with processing other requests.

Node is good for game development, servers, streaming servers, drone technology, native apps, etc.

Modules are reusable pieces of code organized in separate files that can be reused throughout the Node.js application

- Each module has its own context, so it cannot interfere with other modules or pollute global scope
- Can be placed in separate files under a separate folder

### Module Pattern:

require() and module.exports =

## Types of Modules

- Core Modules (included in node)
- Local Modules (we write them ourselves via functions)
- Third party Module (models that others have written and have installed)
