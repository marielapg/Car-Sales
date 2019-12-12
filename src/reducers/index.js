import {ADD_FEATURE, REMOVE_FEATURE} from "../actions";

 const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },

    additionalFeatures: [
      { id: 1, 
        name: 'V-6 engine', 
        price: 1500 },

      { id: 2, 
        name: 'Racing detail package',
         price: 1500 },

      { id: 3, 
        name: 'Premium sound system', 
        price: 500 },

      { id: 4, 
        name: 'Rear spoiler', 
        price: 250 }
    ]
  };

   const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            const featureAdd = state.additionalFeatures.filter(feat => {
                return feat.id === action.payload.id
            })
            return {
                ...state, 
                    car: {
                    ...state.car,
                    features: [...state.car.features, ...featureAdd]
                },
                additionalPrice: state.additionalPrice + featureAdd.price
            }
        case REMOVE_FEATURE:
            const featureRemove = state.car.features.filter(feat => (
                feat.id !== action.payload.id
            ))
            console.log(featureRemove)
            return {
                ...state, 
                    car: {
                    ...state.car,
                    features: featureRemove
                }
            }
        default:
            return state
    }
}

export default appReducer;