import React from "react"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { HeaderBackButton } from "../components"
import { typography } from "../theme"

export const nativeStackNavigationOptions: NativeStackNavigationOptions = {
  statusBarColor: "#523CF8",
  navigationBarColor: "white",
  headerTitleStyle: { color: "white", fontFamily: typography.primary.semiBold, fontSize: 17 },
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#523CF8",
  },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerLeft: (props) => <HeaderBackButton {...props} />,
}
