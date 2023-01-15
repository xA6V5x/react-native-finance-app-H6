import React from "react"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { HeaderBackButton } from "../components"
import { typography } from "../theme"
import { useColorScheme } from "react-native"

export const useNativeStackNavigationOptions = (): NativeStackNavigationOptions => {
  const colorScheme = useColorScheme()

  const backgroundColor = colorScheme === "light" ? "#523CF8" : "#16110D"

  return {
    statusBarColor: backgroundColor,
    headerTitleStyle: {
      color: "white",
      fontFamily: typography.primary.semiBold,
      fontSize: 17,
    },
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: backgroundColor,
    },
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    headerLeft: (props) => <HeaderBackButton {...props} />,
  }
}
