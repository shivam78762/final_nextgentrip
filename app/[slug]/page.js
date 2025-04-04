
import React from 'react';

import Comp from './comp'
import axios from 'axios';
import { apilink } from '../Component/common';


export default async function Page({ params: { slug } }) {
    let data = [];
    
    try {
        const response = await axios.get(`${apilink}/airports`, {
            headers: {
                'Content-Type': 'application/json',
            },


        });

        data = response.data;

        
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return (
        <div>
            <Comp slug={slug} data={data} />
        </div>
    );
}
