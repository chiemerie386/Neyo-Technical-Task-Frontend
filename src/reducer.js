import { createContext, useState, useEffect} from "react";


const Context = createContext()

function AppContextProvider (props) {
    const colour = localStorage.getItem("colour") || ""
    const [activeSketch, setActiveSketch] = useState('')
    const [activeSketchBody, setActiveSketchBody] = useState('')
    const [userColour, setUserColour] = useState(colour)
 

    useEffect(()=>{
        const activeSketchId =  localStorage.getItem("active-sketch-id")
        setActiveSketch(activeSketchId)
    },[activeSketch])

    return (
        <Context.Provider
        value={{
            activeSketch,
            setActiveSketch,
            activeSketchBody,
            setActiveSketchBody,
            userColour,
            setUserColour
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {AppContextProvider, Context}