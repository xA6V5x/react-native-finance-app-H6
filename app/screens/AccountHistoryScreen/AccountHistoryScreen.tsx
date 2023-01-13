import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../../navigators"
import { Screen } from "../../components"
import { AccountCardList } from "./AccountCardList"
import { RecentTransactionsView } from "./RecentTransactionsView"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AccountHistory: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AccountHistory" component={AccountHistoryScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AccountHistoryScreen: FC<StackScreenProps<AppStackScreenProps, "AccountHistory">> =
  observer(function AccountHistoryScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <AccountCardList style={$accountCardList} />
        <RecentTransactionsView style={$recentTransactions} />
      </Screen>
    )
  })

const SCREEN_PADDING_HORIZONTAL = 12

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: "#523CF8",
  paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
}

const $accountCardList: ViewStyle = {
  marginTop: 20,
  marginHorizontal: -SCREEN_PADDING_HORIZONTAL,
}

const $recentTransactions: ViewStyle = {
  marginTop: 11,
}
