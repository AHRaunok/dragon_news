import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const rightsidebar = () => {
    return (
        <div>
            <h1>Log in with</h1>
            <div className="mt-4 flex flex-col gap-2">
                <button className="btn primary "><FaGoogle /> Log in with Google</button>
                <button className="btn primary "><FaGithub /> Log in with Github</button>

            </div>
        </div>
    );
};

export default rightsidebar;