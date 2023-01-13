import React from "react"
import { createStackNavigator, StackNavigationProp, StackScreenProps } from "@react-navigation/stack"
import { AccountHistoryScreen, TransactionListScreen } from "../screens"
import { useNavigation } from "@react-navigation/native"

export type AccountHistoryNavigatorParamList = {
  AccountHistory: undefined
  TransactionList: undefined
}

const Stack = createStackNavigator<AccountHistoryNavigatorParamList>()

export const AccountHistoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountHistory" component={AccountHistoryScreen} />
      <Stack.Screen name="TransactionList" component={TransactionListScreen} />
    </Stack.Navigator>
  )
}

export const useAccountHistoryNavigation = 
  useNavigation<StackNavigationProp<AccountHistoryNavigatorParamList>>
