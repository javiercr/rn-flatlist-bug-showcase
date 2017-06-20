Demo project to showcase bug with `FlatList` / `VirtualizedList` and the `onViewableItemsChanged` callback on react-native `0.45.1`

## Steps to reproduce:
1. Clone the project
2. `yarn install`
3. `yarn run ios`
4. Enable Remote Debugging (cmd + D)
5. Open console on debugger 
5. Scroll the list and notice how items that are visible are included on `changed` for the `onViewableItemsChanged` callback with `isViewable` as false.

You can also notice that this bug is not present if you downgrade to `"react": "16.0.0-alpha.6"` and `"react-native": "^0.44.0"` (the default versions for creat-react-native-app).
