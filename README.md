## TimelineApp

### To run on android

1. Run ```yarn``` or ```npm install``` in root directory
2. Run ```npx react-native run-android```

### To run on iOS

1. Run ```yarn``` or ```npm install``` in root directory
2. Run ```cd ios && pod install```
3. Run ```cd .. && npx react-native run-ios```

### Folder structure

```

    src
    ├── api
    │   └── timeLineApi.js
    ├── components
    │   ├── ListItem.js
    │   └── MenuHeader.js
    ├── context
    │   ├── createDataContext.js
    │   └── timeLineContext.js
    ├── hooks
    │   ├── useLikeTweet.js
    │   └── useUnlikeTweet.js
    └── screens
        └── Timeline.js

```
