import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React App - created by selva sundar
                        </h2>
                        <p className="mt-6 text-gray-600">
                        A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also
                         called automobiles or motor vehicles.
                          Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Individuals or families use cars to travel for happy occasions, business purposes, and emergencies. 
                        Cars can be of varied sizes, shapes, and colours. A small car can accommodate up to five people.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
