import React from 'react';
import {motion} from "framer-motion"

const Test = () => {
    return (
        <div className='couser'>
            <motion.div className="box" animate={{ opacity:0 }} transition={{duration:2,delay:2  }}></motion.div>

            
        </div>
    );
};

export default Test;