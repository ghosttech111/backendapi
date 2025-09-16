import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { getUserById } from "./api/UserAPI";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = " https://ee17de85b5b4.ngrok-free.app/BackendAPI";
const api = axios.create({
  baseURL: URL,
});
export default function App() {

 const [ws, setWs] = useState<WebSocket | null>(null);
  useEffect(() => {

    //HTTP -> ws
    //HTTP -> wss://

    const socket = new WebSocket(

 "wss://ee17de85b5b4.ngrok-free.app/BackendAPI/User"

    );

    socket.onopen = () => {
      console.log("Connection Established");
      };

      socket.onmessage = (event) => {
        console.log("Received: " + event.data);
      }
      socket.onerror = (error) => {
        console.log("WebSocket Error: " + error);
      };

      socket.onclose = () => {

        console.log("WebSocket Closed");

      };

      setWs(socket);

      return () => {
        socket.close();
      };

  },[]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="Get Data"
        onPress={() => {

          if(ws){

            ws.send("Hello from React Native App");
            
          }

        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
