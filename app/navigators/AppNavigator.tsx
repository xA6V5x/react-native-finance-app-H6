/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme, View } from "react-native"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { AccountHistoryNavigator } from "./AccountHistoryNavigator"
import { BottomNavigationBar, Icon, IconTypes } from "../components"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppTabParamList = {
  Dashboard: undefined
  Cards: undefined
  AccountHistoryNavigator: undefined
  Payments: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

const Tab = createBottomTabNavigator<AppTabParamList>()

const AppTab = observer(function AppTab() {
  const colorScheme = useColorScheme()
  const colorActive = "#523CF8"
  const colorInactive = colorScheme === "light" ? "#DCDCDC" : "#646464"

  const renderTabBarIcon = ({ icon, focused }: { icon: IconTypes; focused: boolean }) => (
    <Icon size={24} color={focused ? colorActive : colorInactive} icon={icon} />
  )

  return (
    <Tab.Navigator
      initialRouteName="AccountHistoryNavigator"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomNavigationBar {...props} />}
    >
      <Tab.Screen
        name="Dashboard"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon({ focused, icon: "wallet" }),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon({ focused, icon: "card" }),
        }}
      />
      <Tab.Screen
        name="AccountHistoryNavigator"
        component={AccountHistoryNavigator}
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon({ focused, icon: "analytics" }),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon({ focused, icon: "payments" }),
        }}
      />
    </Tab.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppTab />
    </NavigationContainer>
  )
})
