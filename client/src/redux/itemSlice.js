// import { createSlice } from '@reduxjs/toolkit'


// export const itemSlice = createSlice({
//   name: 'item',
//   initialState: {
//     ItemList: [
//       {
//         item_title: "Full Cleaning Kit",
//         item_item_imageUrl : "https://m.media-amazon.com/images/I/91tLbHxY1FL._AC_SL1500_.jpg" ,
//         item_category: "cleaning" ,
//         unit_price: "138",
//         post_date: Date()
//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "",
//         unit_price: "",
//         post_date: Date()
//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "" ,
//         unit_price: "",
//         post_date: Date()
//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "" ,
//         unit_price: "",
//         post_date: Date()
//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "" ,
//         unit_price: "",
//         post_date: Date()
//     },
//     {
//       title: "",
//       item_imageUrl : "" ,
//       item_category: "" ,
//       unit_price: "",
//       post_date: Date()
//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "" ,
//         unit_price: "",
//         post_date: Date()

//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "" ,
//         unit_price: "",
//         post_date: Date()
//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "" ,
//         unit_price: "",
//         post_date: Date()
//     },
//     {
//         title: "",
//         item_imageUrl : "" ,
//         item_category: "" ,
//         unit_price: "",
//         post_date: Date()
//     },
    
//     ]
//   },
//   reducers: {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes

//     deleteItem: (state, action) => {
//       state.ItemList=state.ItemList.filter((el)=>el.title!== action.payload.title)
//     },
//     editItem: (state, action) => {
//       let i=state.ItemList.findIndex((el)=>el.title===action.payload.title);
//       state.ItemList[i]=action.payload.edited;
//     },
//     addItem: (state, action) => {
//       state.ItemList.push(action.payload)
//     }
//     // readMore: (state, action) => {
//     //     state.ItemList.
//     // }
//   }
// })

// // Action creators are generated for each case reducer function
// export const { addItem, deleteItem, editItem } = itemSlice.actions

// export default itemSlice.reducer