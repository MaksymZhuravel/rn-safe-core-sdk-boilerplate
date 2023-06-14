# rn-safe-core-sdk-boilerplate

# Instalation
- **Install node modules**
```yarn install```
- **Install Pods**
```
cd ios
pod install
```
- **Once installed, run the rn-nodeify command in the root directory to prepare the Node.js modules for use in the React Native environment:**
```npx rn-nodeify --install --hack```
- **This may require restarting the React Native development server.**
```yarn start```

# Errors are possible
- **XCode ERROR: 144 duplicate symbols for architecture arm64**
##### Go to XCode project -> Pods -> CocoaAsyncSocket -> Build Phases -> Compile Sources
##### Remove GCDAsyncSocket.m and GCDAsyncUdpSocket.m
#### Rebuild app
  ![xcode screenshot](https://i.imgur.com/HTkJ39o.png)
