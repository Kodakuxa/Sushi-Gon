import { createSlice, current } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name : 'cart',
  initialState: { 
    items : [],
    total : 0
},

reducers: {
  addItem(state, action) {
    const newItem = action.payload;
    const existingItem = state.items.find(item => item.id === newItem.id);
    const totalPrice = newItem.price * newItem.amount;

    if (!existingItem) {
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
        quant: newItem.amount
      });
    } else {
      existingItem.quant += newItem.amount;
    }

    state.total = state.total + totalPrice;
    console.log(state.total);
    console.log(current(state.items));
  },
  removerItem(state, action) {
    const index = state.items.findIndex(item => item.id === action.payload)
    const itemToUpdate = state.items[index];
    itemToUpdate.quant --;
    state.total = state.total - itemToUpdate.price;
    if (itemToUpdate.quant === 0) {
      state.items.splice(index, 1);
    } else {
      state.items[index] = itemToUpdate;
    }
  }
}
})

export const { addItem, removerItem } = cartSlice.actions;

export default cartSlice.reducer