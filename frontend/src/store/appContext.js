import { createContext } from "react";

export const Context = createContext(null);

const injectContext = PassedComponent =>{
    const StoreWrapper = props =>{

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props}/>
            </Context.Provider>
        )
    }
    return StoreWrapper;
}
export default injectContext;