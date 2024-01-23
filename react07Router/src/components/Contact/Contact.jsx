import React from 'react'

function Contact() {
    return (
        <div>

            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q="
                                alt="image"
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Contact
                            </h2>
                            <p className="mt-6 text-gray-600">
                                <b>Phone:</b>9876543210<br />
                                <b>Email:</b>selvasundar@gmail.com<br/>
                                <b>Website:</b>www.MockReactApp.com
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
