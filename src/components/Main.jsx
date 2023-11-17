import React from "react";

function Main() {
    return(
        <>
            <div className="h-screen pt-16 flex">
                <div className="pl-20 w-8/12">
                    <h1 className="font-main text-7xl">Hi Friends!</h1>
                    <p className="pt-8">Welcome to Zira & Co. | Virtual Assistant Agency.</p>
                    <p>We are so happy you're here.</p>
                        <h2>Do you...</h2>
                            <ul>
                                <li>o painpoint 1 painpoint 1 painpoint 1 </li>
                                <li>o painpoint 2</li>
                                <li>o painpoint 3</li>
                                <li>o painpoint 4</li>
                                <li>o painpoint 5</li>
                            </ul>
                </div>
                <div className="w-4/12">
                    <img className="rounded-full w-80 h-80" src="/public/images/headshot.png"/>
                </div>
            </div>
        </>
    )
}

export default Main