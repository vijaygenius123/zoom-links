import {query, where} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {linksCollection} from '../firebase'
import Link from "./Link";
import {FC, useState} from "react";

interface LinksProps {
    userId: string
}

const Links:FC<LinksProps> = ({userId}) => {
    const [search, setSearch] = useState('')
    const [values, loading, error] = useCollectionData(query(linksCollection,
        where("uid", "==", userId)
    ))

    if (loading) {
        return <h2>Loading ...</h2>
    }

    if (error) {
        return <h2>Error ...</h2>
    }

    return <div className={"w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl m-auto"}>
        <h1 className={"text-center text-2xl"}>Meeting Links</h1>
        <input className={"p-3 border-2 rounded-lg w-full m-1 border-blue-500"} placeholder={"Search"} type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <div className={"flex flex-col justify-center align-items-center "}>
            {
                values?.filter(e => {
                    if(search) {
                        return e.name.search(search) !== -1
                    } else return true
                }).map((e, id) => <Link meetingId={e.meetingId} name={e.name} key={id}/>)
            }
        </div>
    </div>
}

export default Links
