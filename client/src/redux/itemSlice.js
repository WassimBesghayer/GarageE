import { createSlice } from '@reduxjs/toolkit'


export const itemSlice = createSlice({
    name: 'item',
    initialState: {
    ItemList: [
        {
        item_title: "Full Cleaning Kit",
        item_imageUrl : "https://m.media-amazon.com/images/I/91tLbHxY1FL._AC_SL1500_.jpg" ,
        item_category: "cleaning" ,
        unit_price: 138,
        post_date: Date()
    },
    {
        title: "Steering Wheel Civer",
        item_imageUrl : "https://m.media-amazon.com/images/I/61Cq6ZWq9SL._AC_UF1000,1000_QL80_.jpg" ,
        item_category: "accessories",
        unit_price: 30,
        post_date: Date()
    },
    {
        title: "injectors cleaner",
        item_imageUrl : "https://m.media-amazon.com/images/I/715uzQJebvL._AC_UF1000,1000_QL80_.jpg" ,
        item_category: "maintenance" ,
        unit_price: 17,
        post_date: Date()
    },
    {
        title: "Car Jack",
        item_imageUrl : "https://www.cdiscount.com/pdt2/5/7/2/1/700x700/auc3094811846572/rw/cric-losange-1-5t-cric-voiture-auto-ciseaux-cric-e.jpg" ,
        item_category: "must-have" ,
        unit_price: 50,
        post_date: Date()
    },
    {
        title: "Fire Extinguisher",
        item_imageUrl : "https://www.hazchemsafety.com/wp-content/uploads/2018/08/FE0260-%E2%88%99-6kg-Dry-Powder-Fire-Extinguisher.png" ,
        item_category: "must-have" ,
        unit_price: 30,
        post_date: Date()
    },
    {
        title: "Cigarette Lighter",
        item_imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcBu151Y6mVvUy8z0wMIs9EWb010tKkxIOFAyeaoKFTu-JkzhotxUQFb-cvD9wtu8qcc&usqp=CAU" ,
        item_category: "accessories" ,
        unit_price: 15,
        post_date: Date()
    },
    {
        title: "USB Charger",
        item_imageUrl : "https://www.cdiscount.com/pdt2/8/3/2/1/700x700/yol0797550563832/rw/chargeur-allume-cigare-voiture-double-usb-2-1ah.jpg" ,
        item_category: "accessories" ,
        unit_price: 8.5,
        post_date: Date()

    },
    {
        title: "Windshield Wiper",
        item_imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FP7yZ8JI7DIriex2Ve4UsC5jl252SYZdcg&s" ,
        item_category: "spare parts" ,
        unit_price: 35,
        post_date: Date()
    },
    {
        title: "Windshield wiper - Window tractor with spray function",
        item_imageUrl : "https://media.s-bol.com/Wvzwq4kg22Qg/OYqWXxR/1105x1200.jpg" ,
        item_category: "cleaning" ,
        unit_price: 78,
        post_date: Date()
    },
    {
        title: "Tyre Snow Chains",
        item_imageUrl : "https://5.imimg.com/data5/SELLER/Default/2021/10/EI/HF/UW/134835158/snow-chain-non-skid-chain-tire-chain-ferreterro-1-1024x1024-500x500.jpeg" ,
        item_category: "must-have" ,
        unit_price: 149,
        post_date: Date()
    },
    
    ]
},

reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

    deleteItem: (state, action) => {
        state.ItemList=state.ItemList.filter((el)=>el.title!== action.payload.title)
    },
    editItem: (state, action) => {
        let i=state.ItemList.findIndex((el)=>el.title===action.payload.title);
        state.ItemList[i]=action.payload.edited;
    },
    addItem: (state, action) => {
        state.ItemList.push(action.payload)
    }
}
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, editItem } = itemSlice.actions

export default itemSlice.reducer