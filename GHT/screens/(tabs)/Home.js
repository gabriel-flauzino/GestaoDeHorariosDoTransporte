import { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const HoursNow = new Date().getHours()

export function HomeScreen() {

  
  return (
    <>
      <View></View>
      <Greetings>{HoursNow < 6 || HoursNow > 17 ? "Boa noite" : HoursNow < 12 ? "Bom dia" : "Boa tarde"}, Gabriel!</Greetings>
    </>
  );
}

const Greetings = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 6px;
`