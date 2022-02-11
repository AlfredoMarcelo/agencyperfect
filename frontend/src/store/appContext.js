import { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = PassedComponent =>{
    const StoreWrapper = props =>{
        const [state, setState] = useState(getState({
            getStore: ()=> state.store,
            getActions: ()=> state.getActions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore),
                actions: {...state.actions}

            })
        }))

        useEffect(()=>{

            state.actions.isAuthenthicated()


        },[])

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props}/>
            </Context.Provider>
        )
    }
    return StoreWrapper;
}
export default injectContext;