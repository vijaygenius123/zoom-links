import {FC} from "react";

interface LinkProps {
    key?: number,
    meetingId: string,
    name: string
}

const Link:FC<LinkProps> = ({name, meetingId}) => {

    return <div className={"m-1 p-2 rounded-lg border-blue-500 border-2 w-full text-center"}>
        <h3>{name} - <a className={"text-blue-500"} target={"_blank"} href={`https://rbs.zoom.us/j/${meetingId}`} rel={"noreferrer"}>{meetingId}</a></h3>
        </div>
}

export default Link
