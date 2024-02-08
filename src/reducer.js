import {
  CLEAR_CART,
  DECREASE,
  DISPLAY_ITEMS,
  INCREASE,
  LOADING,
  REMOVE,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() }

    case REMOVE: {
      const newCart = new Map(state.cart)
      newCart.delete(action.payload.id)
      return { ...state, cart: newCart }
    }

    case INCREASE: {
      const newCart = new Map(state.cart)
      const itemId = action.payload.id
      const item = newCart.get(itemId)
      const newItem = { ...item, amount: item.amount + 1 }
      newCart.set(itemId, newItem)
      return { ...state, cart: newCart }
    }
    case DECREASE: {
      const newCart = new Map(state.cart)
      const itemId = action.payload.id
      const item = newCart.get(itemId)
      if (item.amount === 1) {
        return { ...state, cart: newCart }
      }

      const newItem = { ...item, amount: item.amount - 1 }
      newCart.set(itemId, newItem)
      return { ...state, cart: newCart }
    }
    case LOADING:
      return { ...state, loading: true }

    case DISPLAY_ITEMS: {
      const newCart = new Map(
        action.payload.cart.map((item) => [item.id, item])
      )
      return { ...state, loading: false, cart: newCart }
    }
    default:
      return state
  }
}

export default reducer
