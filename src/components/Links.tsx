import {query, where} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {linksCollection} from '../firebase'
import Link from "./Link";
import {FC} from "react";

interface LinksProps {
    userId: string
}

const Links:FC<LinksProps> = ({userId}) => {

    const [values, loading, error] = useCollectionData(query(linksCollection,
        where("uid", "==", userId)
    ))

    if (loading) {
        return <h2>Loading ...</h2>
    }

    if (error) {
        return <h2>Error ...</h2>
    }

    return <div className={"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl m-auto"}>
        <h1 className={"text-center text-2xl"}>Meeting Links</h1>
        <div className={"flex justify-center align-items-center "}>
            {
                values?.map((e, id) => <Link meetingId={e.meetingId} name={e.name} key={id}/>)
            }
        </div>
    </div>
}

export default Links
