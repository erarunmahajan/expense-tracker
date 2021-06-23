
// 1. set filter for text

export const setTextFilter =({text=''})=>({
  type:'SET_TEXT_FILTER',
  text
})

// 2. set sortby for amount

export const setSortByAmount=()=>({
  type:'SORT_BY_AMOUNT',
})

// 3. set sort by for date

export const setSortByDate=()=>({
  type:'SORT_BY_DATE'
})
// 4. set filter for start date

export const setStartDate=(startDate)=>({
  type:'SET_START_DATE',
  startDate
})

// 5. set filter for end date

export const setEndDate=(endDate)=>({
  type:'SET_END_DATE',
  endDate
})