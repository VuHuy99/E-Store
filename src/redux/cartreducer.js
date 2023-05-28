import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

export const cartslide = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //them
    addtocart: (state,action) => {
    
       const item = state.products.find(item=>item.id   === action.payload.id) 
   
   if(item) {

     item.quantity +=action.payload.quantity
    // item.color = action.payload.color

   }else{      
    
       state.products.push(action.payload);
               
  }},



    //xoa
    removeitem: (state,action) => {

         

      state.products = state.products.filter(item =>item.id !== action.payload) //loc de xoa cac item bi nhan xoa


    },
    resetcart: (state) => {
      state.products= []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart,removeitem,resetcart } = cartslide.actions

export default cartslide.reducer;