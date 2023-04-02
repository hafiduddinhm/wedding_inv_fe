import React, { useState } from "react";
import Modal from "./Modal"
import Home from './Home'
import BottomNavbar from "./BottomNavbar";

const IrfanYayuk = () => {
    const [showModal, setShowModal] = useState(true)

    return (
        <div>
            {/* <Modal show={showModal} onClose={() => setShowModal(false)}></Modal> */}
            <BottomNavbar/>
            <Home/>
        </div>
    );
};

export default IrfanYayuk;