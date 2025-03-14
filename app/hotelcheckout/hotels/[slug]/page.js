
import React from 'react';


import Comp from './Comp';


export default async function Page({ params: { slug } }) {
  

    return (
        <div>
            <Comp slug={slug}  />
        </div>
    );
}
