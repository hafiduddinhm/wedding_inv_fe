import React, { useState } from "react";
import Modal from "./Modal"
import Home from './Home'
import Pengantin from './Pengantin'
import BottomNavbar from "./BottomNavbar";

const IrfanYayuk = () => {
    const [showModal, setShowModal] = useState(true)
    
    const section1Ref = React.useRef(null);
    const section2Ref = React.useRef(null);

    return (
        <div>
            {/* <Modal show={showModal} onClose={() => setShowModal(false)}></Modal> */}
            
            <Home ref={section1Ref}/>
            <Pengantin ref={section2Ref}/>
            <BottomNavbar
                sectionRefs={[section1Ref, section2Ref]}
            />
        </div>
    );
};

export default IrfanYayuk;