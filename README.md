Demo project to showcase bug with `FlatList` / `VirtualizedList` and the `onViewableItemsChanged` callback on react-native `0.45.1`

## Steps to reproduce:
* Clone the project
* yarn install
* yarn run ios
* Enable Remote Debugging (cmd + D)
* Open console on debugger 
* Scroll the list and notice how items that are visible are included on `changed` for the `onViewableItemsChanged` callback with `isViewable` as false.

You can also notice that this bug is not present if you downgrade to ``react": "16.0.0-alpha.6"` and `"react-native": "^0.44.0"`.
