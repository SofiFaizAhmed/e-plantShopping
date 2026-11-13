
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {

    // Add a plant to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check whether the item already exists
      const existingItem = state.items.find(
        item => item.name === name
      );

      if (existingItem) {
        // Increase quantity if item already exists
        existingItem.quantity++;
      } else {
        // Add new item with quantity 1
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // Remove a plant from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },

    // Update the quantity of a plant
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // Find the item in the cart
      const itemToUpdate = state.items.find(
        item => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },

  },
});

// Export action creators
export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;
