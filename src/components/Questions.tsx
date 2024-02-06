import React, { useEffect, useState } from "react";
// import Faq from "react-faq-component";

// const data = {
//     rows: [
//         {
//             title: 'sdfsdfjhk',
//             content: 'sdsadsd'
//         },
//         {
//             title: 'sdfsdfjhk',
//             content: 'sdsadsd'
//         },
//         {
//             title: 'sdfsdfjhk',
//             content: 'sdsadsd'
//         },
//         {
//             title: 'sdfsdfjhk',
//             content: 'sdsadsd'
//         },
//         {
//             title: 'sdfsdfjhk',
//             content: 'sdsadsd'
//         },
//     ]
// }

// const styles = {
//     titleTextColor: 'black',
//     rowTitleColor: "black",
// }

// const config = {
//     animate: true,
//     arrowIcon: "V",
//     openOnload: 0,
//     expandIcon: "+",
//     collapseIcon: "-",
// };

export default function Questions() {
  return (
    <div className="mb-[60px]">
        <div className="flex justify-center">
            <span className=''>Ответы на часто задаваемые вопросы</span>
        </div>
        <div className="">
            {/* <Faq
                data={data}
                styles={styles}
                config={config}
            /> */}
        </div>
    </div>
  )
}
