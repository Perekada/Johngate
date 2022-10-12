import React, {useState} from "react";
import im1 from '../Images/engineblock.jpg'
import im2 from '../Images/helmet.jpg'
import im3 from '../Images/Herculestrye.jpg';
import im4 from '../Images/johngatebattery.jpg'
import im5 from '../Images/johngatemotortube.jpg'
import im6 from '../Images/motortyre.jpg'
import im7 from '../Images/oiltreatment.jpg'
import im8 from '../Images/olympicbattery.jpg'
import im9 from '../Images/petrochemicals.jpg'
import im10 from '../Images/yangkegen big.jpg';
import im11 from '../Images/yangkegen small.jpg';
import im12 from '../Images/cycletyre.jpg';

export const data = [
    {
        id: 1,
        title: 'Engine Block',
        image: im1
    },
    {
        id: 2,
        title: 'Helmet',
        image: im2
    },
    {
        id: 3,
        title: 'Hercules Tyre',
        image: im3
    },
    {
        id: 4,
        title: 'JohnGate Battery',
        image: im4
    },
    {
        id: 5,
        title: 'JohnGate Motor Tube',
        image: im5
    },
    {
        id: 6,
        title: 'Motor Tyre',
        image: im6
    },
    {
        id: 7,
        title: 'Oil Treatments',
        image: im7
    },
    {
        id: 8,
        title: 'Olympic Battery',
        image: im8
    },
    {
        id: 9,
        title: 'Petrochemicals',
        image: im9
    },
    {
        id: 10,
        title: 'Yangke Generator L',
        image: im10
    },
    {
        id: 11,
        title: 'Yangke Generator S',
        image: im11
    },
    {
        id: 12,
        title: 'Motorcycle Tyre',
        image: im12
    }
]
const productType = () =>{

  return(<div>
    {data.map(({id,title}) =>{
        return <h5 key={id}>{title}</h5>
    })}

    </div>
       )
    }

export default productType
