import { createSlice } from '@reduxjs/toolkit'


export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    ArticleList: [
      {
        title: "Should I get Paint Protection?",
        imageUrl : "https://carcare.net.au/wp-content/uploads/Porsche-Cermic-Paint-Protection-1024x576.jpg" ,
        content: "It is interesting people often just purchase it at the point of sale of a new car and roll it into finance package (you are still paying for it people!). They are either pressured into it by a the dealership sales person or purchase it without a lot of thought because “Davo” next door had it applied to his new car and said its great. Just to clarify we are talking about ceramic (some call it glass) coatings here.Like most things it is more about the questions you should ask yourself. There are 3 main ones. How long will I keep the car? (if less than 3-4 years possibly not worth it). How regularly will the car be washed, and do you like to keep it looking good? (if you do it often it is a lot easier with a car that has paint protection), Will the car be going off road? Ceramic paint protection is very hard and will stop a lot of the scratches but definitely not all (despite what you might be told in the dealership). So if you need to “compound” or “cut” a vehicles paintwork because of any scratches and that car has paint protection on it you do really need to at a minimum do the whole panel and take all of the coating off. Because it is so hard (roughly 3x harder than your paint) it does take a while to do it properly. Then of course it needs to be re-applied. So if you are keeping the vehicle for at least 3 years, like to keep it looking good and it’s not going off road (or at least not going to be “pin-striping” the car with those scrub scratches) then you should consider it. Just a caveat on the vehicles that go off-road this of course doesn’t mean it can’t be applied on all the flat surfaces and then possibly the “old school type” (PTFE) down the sides. Applying the coating itself is actually not all that hard with the correct training using the right methods and products. Just remember the coating is only ever going to be as good as the paint you put it on. Preparation is the key. I hear you say but it is a new car. It might not have many k’s on the clock but you can be sure this car is well travelled, sometimes by sea, road and rail before you get your hands on it! Sorry to burst the bubble here but every car requires a minimum of preparation. You can of course also put these coatings on older cars as well. However this will mean more to do to in order to prepare the paint." ,
        topic: "paint",
        writer: "7amma",
        post_date: Date()
    },
    {
      title: "Basic Interior Cleaning Tips",
      imageUrl : "https://carcare.net.au/wp-content/uploads/standard-tools-interior-vac-1024x576.jpg" ,
      content: "Depending on how long between vacuuming your car, the quality of the fabrics, what you are vacuuming up and the tools at your disposal, all this will determine what sort of result you can achieve. Oh, and how patient you are! So hopefully some of the ideas and simple hacks with tools many of you will have around your house will get you a result. While it might sound obvious, you need good light. If you cannot see it every chance you will miss it, this goes for glasses as well if you use reading glasses you should probably have them on! Be methodical, divide the car into sections making sure you move the seats all the way forward and back. With the mats (fabric) bang them with a tennis racquet or similar and put them back on the seat. Do not put them on the car, they will scratch the paint on the ground they will pick up dirt leaves etc. I generally put them on the seat to vacuum the floor and put them back and give a vacuum when they are in position. Lastly, on the obvious stuff do not run the vacuum hose through the car, it will have a tendency to pick stuff up and you will knock it into the car as you move the hose around. Okay, some of the hacks and tips detailers use: 1) Sandy floors bang them. Ways to do this. With your hand (might get a bit sore though!), a rubber mallet, I have even seen a massage tool used! A stiff brush will also help lift sand. 2) Pressure wash (even a hose) rubber matts, drink holder rubbers, ash trays anything you can take out of the car that might need a little bit more attention. 3) A couple of microfiber cloths and possibly a bit of general purpose cleaner good for things like makeup removal sunscreen etc (be careful with leather you are better off using a specific leather cleaner and conditioner here). Use one cloth to get rid of the bulk of the grime, the other as a “finisher”. Stay away from any solvent base products, it can potentially pull the colour out of vinyl and plastics. 4) Use a clean paint brush for the vents and other tough to get at places. Be careful of the metal part of the brush, you can always wrap some insulation tape around there as a precaution. 5) The dreaded animal hair. There are so many items around. I have found the anti-static brushes coupled with the vacuum to be the most effective, along with what looks/feels like volcanic rock. However, I have not seen that in retail outlets. 6) It is handy to have an assortment of different shaped brushes to get into all those hard to get at spots. So these are the main items detailers will use when doing a basic interior vacuum. Remember, all you are trying to do is remove foreign matter out of the car in the most efficient and least invasive way.",
      topic: "cleaning",
      writer: "Majdi",
      post_date: Date()
    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()
    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()
    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()
    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()
    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()

    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()
    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()
    },
    {
      title: "",
      imageUrl : "" ,
      content: "" ,
      topic: "",
      writer: "",
      post_date: Date()
    },
    
      ]
  },
  reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

    deleteArticle: (state, action) => {
      state.ArticleList=state.ArticleList.filter((el)=>el.title!== action.payload.title)
    },
    // editArticle: (state, action) => {
    //   let i=state.ArticleList.findIndex((el)=>el.title===action.payload.title);
    //   state.ArticleList[i]=action.payload.edited;
    // },
    addArticle: (state, action) => {
      state.ArticleList.push(action.payload)
    }
    // readMore: (state, action) => {
    //     state.ArticleList.
    // }
  }
})

// Action creators are generated for each case reducer function
export const { addArticle, deleteArticle, editArticle } = articleSlice.actions

export default articleSlice.reducer