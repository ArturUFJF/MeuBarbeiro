import { configureStore } from '@reduxjs/toolkit';
import barbershopReducer from '../redux/slices/barbershopSlice'; 

const store = configureStore({
  reducer: {
    barbershop: barbershopReducer, 
  },
});

export default store;