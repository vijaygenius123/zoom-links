import {addDoc} from 'firebase/firestore'
import {linksCollection} from '../firebase'
import {FC, FormEvent, useState} from "react";

interface AddLinkProps {
    uid: string
}


const AddLink: FC<AddLinkProps> = ({uid}) => {
    const [name, setName] = useState('')
    const [meetingId, setMeetingID] = useState('')


    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        if (meetingId && name) {
            addDoc(linksCollection, {
                uid,
                meetingId: meetingId.replace(' ', ''),
                name
            }).then()
        }
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
                        id="name" type="text" placeholder="Name" required value={name}
                        onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        Meeting ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="id" type="text" placeholder="123 123 1234" required value={meetingId}
                        onChange={e => setMeetingID(e.target.value)}/>
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
