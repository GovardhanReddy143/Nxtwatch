import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSaveVideos: () => {},
  activetabItem: () => {},
  activeTab: '',
  onChangeTheme: () => {},
  removeSaveVideos: () => {},
})

export default CartContext
