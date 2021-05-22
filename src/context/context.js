import React, { createContext, useContext, useReducer } from "react";

export const initContext = (preDefinedState={}) => {
    return {
        state: {
            ...preDefinedState
        },
        reducer: function (state, action) {
            switch (action.type) {
                case 'itemList': {
                    return {
                        ...state,
                        isLoading: action.payload.isLoading,
                        list: action.payload.searchRes,
                    }

                }
                case 'beforeFetchReq':{
                    return {
                        ...state,
                        isLoading: action.payload.isLoading,
                    }
                }
                default: {
                    return { ...state }
                }
            }
        }
    }

}

export const Context = createContext({});
export const ContextProvider = (props) => (
    <Context.Provider value={useReducer(props.reducer, props.initialState)}>
        {props.children}
    </Context.Provider>
);

export const useAppContext = () => useContext(Context);