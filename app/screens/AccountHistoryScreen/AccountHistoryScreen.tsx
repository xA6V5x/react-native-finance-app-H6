import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { AccountCardList } from "./AccountCardList"
import { RecentTransactionsView } from "./RecentTransactionsView"

export const AccountHistoryScreen = observer(function AccountHistoryScreen() {
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
