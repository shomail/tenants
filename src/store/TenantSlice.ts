import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { State } from './store';
import type { Tenant } from 'types';

const initialState: { tenants: Tenant[] } = {
  tenants: [],
};

export const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Tenant>) => {
      state.tenants.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.tenants = state.tenants.filter((row) => row.id !== action.payload);
    },
  },
});

export const { add, remove } = tenantSlice.actions;

export const selectTenants = (state: State) => state.tenants.tenants;

export const reducer = tenantSlice.reducer;
