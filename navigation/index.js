// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {DarkTheme, DefaultTheme, NavigationContainer,} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LinkingConfiguration from "./LinkingConfiguration";
import {Text, View} from "../components/Themed";
import {StyleSheet} from "react-native";
import Video from "react-native-video/src";

export default function Navigation({colorScheme}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator/>
    </NavigationContainer>
  );
}

function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <Video
        source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
        paused={false}
        muted
        controls
        debug={{
          enable: true,
          thread: true,
        }}
        disableFocus
        enterPictureInPictureOnLeave={false}
        style={{width: '100%', height: 300}}
      />
    </View>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={MainScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});