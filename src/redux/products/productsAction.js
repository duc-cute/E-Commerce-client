/** @format */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const getNewProducts = createAsyncThunk(
  "product/new",
  async (data, { rejectWithValue }) => {
    const response = await apis.getProducts({ sort: "-createdAt" });
    if (!response.success) return rejectWithValue(response);
    return response.products;
  }
);
