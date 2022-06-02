import {useCollection} from 'react-firebase-hooks/firestore';
import {linksCollection} from '../firebase'
import {DOMElement, FormEvent, useRef} from "react";


const AddLink = () => {

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        console.log('Handle Submit')
    }
    return (
        <div className="w-full max-w-md mx-auto my-2">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Name"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        Meeting ID
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="id" type="text" placeholder="123 123 1234"/>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddLink