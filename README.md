#Whiteboard Chat Website

This is a work in progress build of the chat whiteboard using frameworks and libraries.

> need to know what Javascript, HTML, & CSS

####Install necessary packages
_node js needs to be downloaded to run this command_

```bash
npm install
```

####React js
React is being used for the frontend.

```bash
npm start
```

_Run react individually / need to be in client folder_

####Frontend to do list

- [ ] Drawing Menu Design
      !["Tools Inspiration"](testingTools\toolsInspiration.png)
- [ ] Whiteboard Canvas
  - [ ] drawing & erasing (p5 js)
  - [ ] Package data (json)
  - [ ] host controls

####Express js & MongoDB
Express is being used for the backend networking.
Mongo is used for storage.

```bash
npm run dev
```

_Run express with nodemon: save restarts server_

- [ ] Socket.io: Connect devices
- [ ] MongoDB
  - [ ] User Database
  ```javascript
  [
    {
      ID: "1",
      name: "Arpan",
      RoomID: "8dss9dfdsd798fds",
      Status: "active",
    },
  ];
  ```
  - [ ] Drawing Database
  ```javascript
  [
    {
      ID: "1",
      RoomID:"8dss9dfdsd798fds"
      Strokes: {
        (collection of datapoints)
      }
      color: black
      tool: pen (if add more tools)
    }
  ]
  ```
- [ ] Host Control: freeze, force push, user async
