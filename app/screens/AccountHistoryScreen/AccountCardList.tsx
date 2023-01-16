import * as React from "react"
import { ListRenderItem, StyleProp, useWindowDimensions, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { FlatList } from "react-native-gesture-handler"
import { AccountCard } from "./AccountCard"
import { AccountDTO } from "../../services/api"

export interface AccountCardListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  accounts: AccountDTO[]
  activeAccount: AccountDTO
  onChangeActiveAccount: (activeAccount: AccountDTO) => void
}

/**
 * Describe your component here
 */
export const AccountCardList = observer(function AccountCardList(props: AccountCardListProps) {
  const { style, accounts, activeAccount, onChangeActiveAccount } = props
  const $styles = [$container, style]

  const { width: windowWidth } = useWindowDimensions()
  const CARD_WIDTH = windowWidth - CARD_MARGIN_HORIZONTAL * 4 - CARD_OFFSET_HORIZONTAL * 2

  const renderAccount: ListRenderItem<AccountDTO> = React.useCallback(({ item, index }) => {
    const isFirstItem = index === 0
    const isLastItem = index === accounts.length - 1

    return (
      <AccountCard
        style={[
          $card,
          { width: CARD_WIDTH },
          isFirstItem ? $cardFirst : null,
          isLastItem ? $cardLast : null,
        ]}
        account={item}
      />
    )
  }, [])

  // ScrollView's points to stop
  // based on cards width, margins and offsets
  const scrollViewSteps = accounts.map((_, index) => {
    const isFirstItem = index === 0

    if (isFirstItem) return CARD_WIDTH + LIST_MARGIN_HORIZONTAL - CARD_OFFSET_HORIZONTAL
    return CARD_WIDTH + CARD_MARGIN_HORIZONTAL * 2
  })
  const snapToOffsets = scrollViewSteps.map((_, index) => {
    return scrollViewSteps.slice(0, index).reduce((sum, width) => sum + width, 0)
  })

  const onViewChanged = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const { index } = viewableItems[0]
      onChangeActiveAccount(accounts[index])
    }
  })

  const viewConfigRef = React.useRef({ itemVisiblePercentThreshold: 50 })

  return (
    <View style={$styles}>
      <View style={$dotList}>
        {accounts.map((item) => (
          <View
            key={activeAccount.id.toString()}
            style={[$dot, item === activeAccount ? $dotActive : null]}
          />
        ))}
      </View>
      <FlatList
        style={$accountList}
        data={accounts}
        renderItem={renderAccount}
        horizontal
        snapToOffsets={snapToOffsets}
        snapToAlignment="center"
        decelerationRate="fast"
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewChanged.current}
        nestedScrollEnabled
      />
    </View>
  )
})

const $container: ViewStyle = {}

const $accountList: ViewStyle = {
  marginTop: 20,
}

const LIST_MARGIN_HORIZONTAL = 12
const CARD_MARGIN_HORIZONTAL = 10
// Part of the next or prev card that should be visible
const CARD_OFFSET_HORIZONTAL = 8

const $card: ViewStyle = {
  marginHorizontal: CARD_MARGIN_HORIZONTAL,
}
const $cardFirst: ViewStyle = {
  marginLeft: LIST_MARGIN_HORIZONTAL,
}
const $cardLast: ViewStyle = {
  marginRight: LIST_MARGIN_HORIZONTAL,
}

const $dotList: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
}
const $dot: ViewStyle = {
  marginHorizontal: 6,
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: "white",
}
const $dotActive: ViewStyle = {
  transform: [
    {
      scale: 2,
    },
  ],
  borderWidth: 1,
  borderColor: "white",
  backgroundColor: "transparent",
}
