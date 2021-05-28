
export const visibleExpenses = (expenses, { sortBy, text, endDate, startDate }) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase()) ;
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        return sortBy === 'date' ?a.createdAt - b.createdAt : a.amount - b.amount
      })
}