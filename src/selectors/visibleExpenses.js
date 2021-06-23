import moment from 'moment';

export const visibleExpenses = (expenses, { sortBy, text, endDate, startDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') :true; // intially we were comparing based on numbers but now we are actually comparing dates
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment,'day') :true;
        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        return sortBy === 'date' ? a.createdAt - b.createdAt : a.amount - b.amount
    })
}