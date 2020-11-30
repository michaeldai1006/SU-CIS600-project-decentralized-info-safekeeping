import React from 'react';
import { save, fetch } from './Data.js';
import { useConnect } from '@blockstack/connect';

// Info list home component
export const Home = ({userData, handleSignOut}) => {

    const { authOptions } = useConnect();
    const { userSession } = authOptions;
    const username = userData.username;

    const fetchInfo = async () => {
        // Update value of status text
        const status = document.getElementById("status");
        status.innerText = "Fetching"

        // fetch from gaia hub
        const info = await fetch(userSession, username);

        // Update text area
        const textarea = document.getElementById("textarea");
        textarea.value = info;

        // Update value of status text
        status.innerText = "Fetched"
    }

    const saveInfo = async () => {
        // Update value of status text
        const status = document.getElementById("status");
        status.innerText = "Saving"

        // Get info from text area
        const textarea = document.getElementById("textarea");
        const info = textarea.value;

        // Save to gaia hub
        await save(userSession, info);

        // Update value of status text
        status.innerText = "Saved"
    }

    return (
        <div>
            <text
            id="status"
            >
                Standby
            </text>
            <br/>
            <textarea
            id="textarea"
            >

            </textarea>
            <br/>
            <button
                onClick={fetchInfo}
            >
                Fetch
            </button>
            <button
            onClick={saveInfo}
            >
                Save
            </button>
            <button
            onClick={handleSignOut.bind(this)}
            >
                SignOut
            </button>
        </div>
    );
};

export default Home