import React from "react";

function Header() {
    return(
        <>
            <div className='p-4 h-18 flex justify-between text-sm'>
                <h1 className="font-main text-2xl">zira & co.</h1>
                <ul className="flex gap-8">
                    <li>about</li>
                    <li>services</li>
                    <li>the process</li>
                    <li>other</li>
                </ul>
                
                <div className="flex gap-4">
                    <div>o</div>
                    <div>o</div>
                    <div>o</div>
                    <button className="bg-maroon hover:bg-dustypink text-white font-bold p-2 rounded align-center">contact us</button>
                </div>
                

            </div>       
        </>

    )
}

export default Header