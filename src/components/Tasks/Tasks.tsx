import {Square} from 'phosphor-react'
import {CheckSquare} from 'phosphor-react'
import { ReactNode } from 'react'
import {Trash} from 'phosphor-react'


interface Tasks {
    itsChecked: string,
    content: string,

}

export function Tasks({itsChecked, content}:  Tasks){

    return(
    <>
    <div className='flex content-between text-gray100 text-md h-16'>
        <button>{itsChecked}</button> <p>{content}</p> <Trash/>
    </div>
    </>
    )
}