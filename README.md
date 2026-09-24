# AMUX

React Native Command Center client for tmux-mobile.

This app is a client only. It authenticates against a tmux-mobile controller
with the existing Google device-login flow, stores the returned browser session
token in SecureStore, and calls the same HTTPS API used by the web Command
Center.

## Scope

First screen:

- Machine filter
- Agent session cards
- Start Codex/Claude in a machine directory
- Send text to a pane
- Rename tmux/rmux window
- View pane tail
- View structured transcript

The older browser main app/window-driver UI is intentionally not ported yet.

## Development

```bash
yarn install
yarn dev
yarn ios
yarn typecheck
```

The default controller is `https://eng.impo.ai`. Override it at build time with:

```bash
TMUX_MOBILE_CONTROLLER_URL=https://example.com yarn dev
```

## Native iOS releases

The checked-in `ios` project is maintained by hand. Xcode 27 builds require
the scene lifecycle on iOS 27: keep `AppDelegate` conforming to
`ExpoReactNativeFactoryProvider` and the Info.plist scene manifest pointing to
`EXExpoAppSceneDelegate`. Expo 57.0.23 or newer supplies that delegate and starts
React Native from the scene; do not also start it from `AppDelegate`.
See the [Expo migration guide](https://github.com/expo/fyi/blob/main/ios-scene-lifecycle.md#staying-on-sdk-57-with-xcode-27).

Runtime 7 requires a new native build (Expo 57.0.25 / React Native 0.86.3).
Do not publish its JavaScript as an OTA for older runtime 6 binaries.
