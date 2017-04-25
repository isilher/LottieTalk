# LottieTalk

Code examples for a talk on implementing [bodymovin](https://github.com/bodymovin/bodymovin) animations using Airbnb's [Lottie](https://github.com/airbnb/lottie-react-native).


## Setup

Installation is configured to work with [Yarn](https://yarnpkg.com).

1. Git clone this repo.
2. cd to the cloned repo.
3. Install the Application with `yarn install`


## Running the App

1. cd to the repo.
2. Open the project in Xcode: `open ios/LottieTalk.xcodeproj`
3. Run the packager: `yarn start`
4. Run the simulator:
 * iOs: start the simulator from within Xcode :arrow_forward:
 * Android: `react-native run-android` (make sure you either have a simulator or an external connected device setup)


## Credits

Animation files used were taken from [lottiefiles.com](http://www.lottiefiles.com/). See [Credits.txt](App/Animations/Credits.txt) for more info.


## Notes

The building animation originally has a background image embedded. This is not supported by React Native Lottie, so it won't show on iOs. On the Android device I tested it breaks the animation completely, showing nothing. To play with these examples on Android I advise you swap to a different animation.
