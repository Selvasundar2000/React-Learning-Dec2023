import { React, useState, UseEffect } from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
// import images from '../images'
import Roles from './JobRole';


function Card() {

    const content = "This is my react projects”"

    return (
        <div>
            {Roles.map((item, index) => {
                return <figure className="md:flex bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img1}
                        alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “Hey I'm {item.name}. {content}
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {item.name}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {item.description}
                            </div>
                        </figcaption>                        
                    </div>                    
                </figure>
                
            })}
        </div>
    )
}

export default Card
