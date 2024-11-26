"use client"
import { useEffect, useState } from 'react';
import { getUserProfile } from '@/lib/api';
import UpdateProfile from '@/components/ProfileComponents/UpdateProfile';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editProfile, setEditProfile] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserProfile(token).then(({ data }) => {
        console.log(data, "que tiene data"),
        setUser(data)});
    }
  }, []);


  if (!user) return <p>Cargando perfil...</p>;

  return (
    <section className='bg-backgroudFarm bg-opacity-10 max-h-screen  flex items-center justify-center p-4  mt-0 relative'>
      <div className="font-std mb-10 w-3/4 h-full rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl">
        <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <img src="https://i.pravatar.cc/300" alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 transition-transform duration-300 hover:scale-105 ring ring-gray-300"/>
                <button 
                onClick={()=>{setEditProfile(true)}}
                className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300">Edit Profile</button>
            </div>
            <div className="md:w-2/3 md:pl-8">
                <h1 className="text-2xl font-bold text-indigo-800 mb-2">John Doe</h1>
                <p className="text-gray-600 mb-6">Software Developer</p>

                <h2 className="text-xl font-semibold text-indigo-800 mb-4">Organization Information</h2>
                <p className="text-gray-700 mb-6">
                    Estep Bilişim / Software Developer
                </p>
              
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">Contact Information</h2>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 " viewBox="0 0 20 20" >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        john.doe@example.com
                    </li>
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800" viewBox="0 0 20 20" >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +1 (555) 123-4567
                    </li>
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 0" viewBox="0 0 20 20" >
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        San Francisco, CAa
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <UpdateProfile props={{setEditProfile, editProfile}}/>
    </section>
  );
}
