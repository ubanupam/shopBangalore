import React from 'react'
import Section1 from './Section1'
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
const Sections = () => {
  return ([
            {
                id: "section-1",
                title: "Section 1",
                content: (
                    <div className="bg-white">
                        <Section1 />
                    </div>
                ),
            },
            {
                id: "section-2",
                title: "Section 2",
                content: (
                    <Section2 />
                ),
            },
            {
                id: "section-3",
                title: "Section 3",
                content: (
                    <Section3 />
                ),
            },
            {
                id: "section-4",
                title: "Section 4",
                content: (
                    <Section4 />
                ),
            },
            // Add more sections as needed
        ]
    
  )
}

export default Sections

