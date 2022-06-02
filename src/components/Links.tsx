import {useCollection} from 'react-firebase-hooks/firestore';
import {linksCollection} from '../firebase'

const Links = ({}) => {

    const [value, loading, error] = useCollection(linksCollection)
    return <div>
    </div>
}

export default Links
