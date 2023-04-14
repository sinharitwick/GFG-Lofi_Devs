import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#c5d79f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/225ffde8-777b-456c-afc5-56e323ec0b65" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#155705]'>Contact</p>
                <p className='py-4'>// Submit the form below or send us an email at <span className='font-bold'>lofidevs@gmail.com</span></p>
            </div>
            <input className='p-2' type="text" placeholder='Enter your name' name="name" />
            <input className='my-4 p-2' type="email" placeholder='Enter your email' name="email" />
            <textarea className='p-2' name="message" rows="10" placeholder='Write your message'></textarea>
            <button className="border-2 flex px-4 py-3 my-4 mx-auto items-center hover:border-[#155705] duration-300">Submit</button>
        </form>
    </div>
  )
}

export default Contact