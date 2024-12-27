import { Profile } from "./About";
import React from "react";
const ProfilePage = () => {
    const sectionRef = React.useRef(null);

    return (
        <div>
            <Profile id="profile" visible={true} sectionRef={sectionRef} />
        </div>
    );
};

export default ProfilePage;