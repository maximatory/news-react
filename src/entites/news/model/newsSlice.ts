import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from '../../../shared/interfaces/interfaces'
import { PAGE_SIZE } from '../../../shared/constants/constants'
import { INews } from '..'


// Define a type for the slice state
interface State {
  news: INews[],
  filters: IFilters
}

// Define the initial state using that type
const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload
    },
    setFilters: (state, action: PayloadAction<{key:string, value:string | number | null}>) => {
      const {key, value} = action.payload
      state.filters = {...state.filters, [key]: value}
    },
  },
})

export const { setNews, setFilters } = newsSlice.actions

export default newsSlice.reducer