<img src="https://user-images.githubusercontent.com/54812906/176489589-ea5d18a4-48cf-4e03-b75c-20085cdc5566.png" />

## 💻 The project

This app will you join and organize online game matches with your friends. 
You will be able to create groups and host matches using discord for authentication and communication.

Made during the #NextLevelWeek event from Rocketseat 🚀

## ✨ Technologies

-   [x] React Native
-   [x] Typescript
-   [x] Expo
-   [x] Context API
-   [x] Async Storage
-   [x] Vector Icons
-   [x] React Native Svg and Svg Transform
-   [x] Axios
-   [x] Gradient colors
-   [x] OAuth2 Discord 
-   [x] Expo Google Fonts
-   [x] React Navigation Stack
-   [x] React Native Gesture Handler
-   [x] Expo Authentication
-   [x] React Native Share
-   [x] Deep Link


## :hammer_and_wrench: Features 

-   [x] OAuth2 social auth with discord and user profile recovery;
-   [x] Listing of all discord servers the user participates;
-   [x] Allow matches scheduling;
-   [x] Matches filter by category;
-   [x] It shows if the user is a hoster of a match or invitation;
-   [x] Match sharing;
-   [x] User redirection to match discord server;
-   [x] Logout function.


## 🔖 Layout

You can view the figma layout [here](https://www.figma.com/community/file/991338130828322960). [Figma](http://figma.com/) account is required.

## Clonning and running the project

In your terminal
```cl
$ git clone https://github.com/bruno0907/gameplay
```

Navigate to the project folder
```cl
$ cd gameplay
```
Run **yarn** or **npm install** to install all the dependencies after clonning the project.

And then start the project with
```cl
$ expo start
```

Now you will need to create your own Discord server to be able to acquire your auth credentials. After that go to project and add a .env file with the following properties.
 ```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## 📄 License

This project is under MIT license. See [LICENSE](LICENSE.md) for aditional details.
