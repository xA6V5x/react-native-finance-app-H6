import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { typography } from "../../theme"
import { Text } from "../../components/Text"
import { TransactionListItem } from "../../components/TransactionListItem"
import { Icon } from "../../components"
import { useAccountHistoryNavigation } from "../../navigators"

export interface RecentTransactionsViewProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

export const RecentTransactionsView = observer(function RecentTransactionsView(
  props: RecentTransactionsViewProps,
) {
  const { style } = props
  const $styles = [$container, style]

  const transactions = [...new Array(5)].map((_, index) => ({ id: index }))

  const navigation = useAccountHistoryNavigation()
  const openTransactionList = () => navigation.navigate("TransactionList")

  return (
    <View style={$styles}>
      <View style={$transactionsHeader}>
        <Text style={$transactionsHeaderText}>Recent transactions</Text>
        <TouchableOpacity style={$transactionsFilterButton} onPress={openTransactionList}>
          <Icon size={18} color="white" icon="filter" />
        </TouchableOpacity>
      </View>
      <View style={$transactionsList}>
        {transactions.map((transaction, index) => {
          const isLastItem = index === transactions.length - 1

          return (
            <React.Fragment key={transaction.id}>
              <TransactionListItem />
              {!isLastItem && <View style={$transactionsListItemDivider} />}
            </React.Fragment>
          )
        })}
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  backgroundColor: "white",
  borderRadius: 25,
  paddingHorizontal: 22,
  paddingTop: 20,
  paddingBottom: 30,
}

const $transactionsHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}
const $transactionsHeaderText: TextStyle = {
  color: "#16110D",
  fontFamily: typography.primary.semiBold,
  fontSize: 17,
  lineHeight: 21,
  flex: 1,
}
const $transactionsFilterButton: ViewStyle = {
  backgroundColor: "#523CF8",
  width: 30,
  height: 30,
  borderRadius: 15,
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
}
const $transactionsList: ViewStyle = {
  marginTop: 22,
}

const TRANSACTION_LIST_ITEM_TYPE_WIDTH = 30
const TRANSACTION_LIST_ITEM_TYPE_MARGIN = 15
const $transactionsListItemDivider: ViewStyle = {
  marginLeft: TRANSACTION_LIST_ITEM_TYPE_WIDTH + TRANSACTION_LIST_ITEM_TYPE_MARGIN,
  marginTop: 13,
  marginBottom: 15,
  height: 1,
  backgroundColor: "#DCDCDC",
}
