import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {auth} from "./firebase";
import AddLink from "./components/AddLink";
import Links from "./components/Links";

function App() {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        return (
            <div className={"bg-blue-500 h-screen w-screen"}>
                <h1 className={"text-center text-2xl text-white"}>Zoom Links</h1>
                <h2 className={"text-center text-xl text-white "}>Welcome, {user.user.displayName}</h2>
                {user &&
                    <>
                        <AddLink uid={user.user.uid}/>
                        <Links/>
                    </>
                }

            </div>
        );
    }

    return (
        <div className={"bg-blue-500 h-screen w-screen"}>
            <h1 className={"text-center text-2xl text-white"}>Zoom Links</h1>
            <div className={"text-center p-4"}>
                <button className={"outline-0 px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-400"} onClick={() => signInWithGoogle()}>Sign In With Google
                </button>
            </div>
        </div>
    )
}

export default App;
