import React, {useState} from 'react'
import ButtonComponent from './ButtonComponent'

export default function CounterButton() {
    const [counter, setCounter] = useState(0)

    return <ButtonComponent
        content={`you clicked me ${counter} times`}
        onClick={()=>setCounter(counter+1)}
    />
}