import React from "react"
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack"
import { AccountHistoryScreen, TransactionListScreen } from "../screens"
import { useNavigation } from "@react-navigation/native"
import { HeaderRightButton, Icon } from "../components"
import { useNativeStackNavigationOptions } from "./useNativeStackNavigationOptions"
import { useColorScheme } from "react-native"

type AccountHistoryNavigatorParamList = {
  AccountHistory: undefined
  TransactionList: undefined
}

type AccountHistoryNavigation = NativeStackNavigationProp<AccountHistoryNavigatorParamList>

const Stack = createNativeStackNavigator<AccountHistoryNavigatorParamList>()

export const AccountHistoryNavigator = () => {
  const nativeStackNavigationOptions = useNativeStackNavigationOptions()

  return (
    <Stack.Navigator screenOptions={nativeStackNavigationOptions}>
      <Stack.Screen
        name="AccountHistory"
        component={AccountHistoryScreen}
        options={() => ({
          title: "Account History",
          headerRight: () => (
            <HeaderRightButton onPress={() => {}}>
              <Icon icon="settings" size={24} color="white" />
            </HeaderRightButton>
          ),
        })}
      />
      <Stack.Screen name="TransactionList" component={TransactionListScreen} />
    </Stack.Navigator>
  )
}

export const useAccountHistoryNavigation = () => useNavigation<AccountHistoryNavigation>()
