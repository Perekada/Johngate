import React, { useEffect, useState } from "react";
import a1 from '../Images/banner.jpg';
import a2 from '../Images/banner5.jpg';
import a3 from '../Images/banner6.jpg';
import a4 from '../Images/banner7.jpg';
import a5 from '../Images/banner8.jpg';
import a6 from '../Images/banner9.jpg';
import a7 from '../Images/banner10.jpg';
import a8 from '../Images/banner11.jpg';
import a9 from '../Images/banner12.jpg';
import a10 from '../Images/banner13.jpg';

const images =[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]
const Swapper = () => {
    const [currentImage, setCurrentImage] = useState(null)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentImage(images[Math.floor(Math.random() * images.length)])
        },[3000])
        return () => clearInterval(intervalId)
    },[])
    return (
        <>
            <img src={currentImage} alt="" style={{height:'450px', width:'100%'}} />
        </>
    )
}

export default Swapper