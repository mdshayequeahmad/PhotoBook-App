import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imagesList: null,
  searchInput: null,
  imageId: null,
  isModalOpen: false,
  isLoading: true,
};

export const photoBookSlice = createSlice({
  name: "photobook",
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.imagesList = action.payload;
    },
    addSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    addImageId: (state, action) => {
      state.imageId = action.payload;
    },
    modalChanger: (state, action) => {
      if (state.isModalOpen === false) {
        state.isModalOpen = true;
      } else {
        state.isModalOpen = false;
      }
    },
    loadingChanger: (state, action) => {
      if (state.isLoading === false) {
        state.isLoading = true;
      } else {
        state.isLoading = false;
      }
    },
  },
});

export const { addImages, addSearchInput, addImageId, modalChanger, loadingChanger } = photoBookSlice.actions;

export default photoBookSlice.reducer;
