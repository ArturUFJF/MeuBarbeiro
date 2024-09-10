import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Ação assíncrona para buscar barbearias do servidor
export const fetchBarbershop = createAsyncThunk(
  'barbershop/fetchBarbershop',
  async () => {
    const newBarbershops = [];
    let id = 26;

    while (id < 1000) {
      const response = await fetch(`https://treinamentoapi.codejr.com.br/api/artur/barberShop/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      const data = await response.json();

      if (data && data.barberShop) {
        const barbershopWithProducts = {
          ...data.barberShop,
          products: data.products || [], // Se houver produtos, adicione-os
        };
        newBarbershops.push(barbershopWithProducts);
      }

      if (data.status !== 200) {
        break;
      }
      id++;
    }
    return newBarbershops; // Retorna as barbearias para o Redux
  }
);

const barbershopSlice = createSlice({
  name: 'barbershop',
  initialState: {
    barbershops: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBarbershop.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBarbershop.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.barbershops = action.payload; // Atualiza o estado com as barbearias recebidas
      })
      .addCase(fetchBarbershop.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default barbershopSlice.reducer;