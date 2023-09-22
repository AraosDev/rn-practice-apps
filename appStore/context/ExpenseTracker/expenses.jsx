import { createContext, useReducer } from "react";

export const dummyExpenses = [
    {
        id: 'e1',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e2',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e3',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e4',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e5',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e6',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e7',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e8',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e9',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e10',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e11',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e12',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
    {
        id: 'e13',
        amount: 100,
        description: 'Cups',
        date: new Date('1997-11-13')
    },
];

export const ExpenseCtx = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    updateExpense: (id, { description, amount, date }) => {},
    deleteExpense: (id) => {},
});

export const expenseReducer = (expenses, action) => {
    switch(action.type) {
        case 'ADD': {
            const { data } = action.payload;
            const newExpense = {
                id: `e${expenses.length + 1}`,
                ...data
            };
            return [newExpense, ...expenses];
        }
        case 'UPDATE': {
            const { id: updatableId, data } = action.payload;
            const newExpenses = [...expenses];
            const updatableIndex = newExpenses.findIndex(({ id }) => id === updatableId);
            newExpenses.splice(
                updatableIndex,
                1,
                { ...newExpenses[updatableIndex], ...data }
            );
            return newExpenses;
        }
        case 'DELETE': {
            const { id: deletableId } = action.payload;
            return expenses.filter(({ id }) => id !== deletableId);
        }
        default:
            return expenses;
    }
}; 

export function ExpenseProvider({ children }) {
    const [expenses, dispatch] = useReducer(expenseReducer, dummyExpenses);

    const providerValue = {
        expenses,
        addExpense: (data) => {
            dispatch({ type: 'ADD', payload: { data }, });
        },
        updateExpense: (id, data) => {
            dispatch({ type: 'UPDATE', payload: { id, data } });
        },
        deleteExpense: (id) => {
            dispatch({ type: 'DELETE', payload: { id } });
        },
    };
    return (
        <ExpenseCtx.Provider value={providerValue}>{children}</ExpenseCtx.Provider>
    );
} 