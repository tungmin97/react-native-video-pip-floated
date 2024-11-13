import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import {useEffect,useRef} from 'react'
import {useColorScheme, StyleSheet, View, Button} from "react-native";
import Video, {VideoRef} from "react-native-video/src";

export default function App() {
  const videoRef = useRef(null);
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Navigation colorScheme={colorScheme} />

        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>

        <Video
          ref={videoRef}
          source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
          paused={false}
          muted
          controls
          debug={{
            enable: true,
            thread: true,
          }}
          disableFocus
          enterPictureInPictureOnLeave
          style={{width:'100%',height:300}}
        />
          <Button title={'Picture in Picture'} onPress={() => videoRef.current.enterPictureInPicture() } />
        </View>
      </SafeAreaProvider>
    );
  }
}
