"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { BeatLoader } from 'react-spinners'
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from '@/redux/slices/adminSlice';
import ENV from './Env';

function AdminLogin() {

  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const dispatch = useDispatch();
  const { isAdminAuthenticated, adminDetails, adminToken } = useSelector((state) => state.admin);
  useEffect(() => {
    if (isAdminAuthenticated) {
      router.replace('/admin/dashboard');
    } else {
      router.replace("/admin-login/login");
    }
  }, [])
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && password != "") {
      setErrorEmail("");
      setErrorPassword("");
      try {
        setLoader(true);
        setError("");
        const response = await fetch(`${ENV.API_URL}/admin-login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "email": email,
            "password": password
          }),
        });

        const result = await response.json();

        if (response.ok) {
          dispatch(loginAdmin({ admin: result?.admin, token: result?.token }));
          localStorage.setItem("myastro-token", result?.token)
          setLoader(false);
          router.push('/admin/dashboard');

        } else {
          setError(result.error || "Something went wrong.");
          setLoader(false);
        }
      } catch (error) {
        setError("Error submitting data." + error.message);
        setLoader(false);
      }

    } else {
      if (email === "") {
        setErrorEmail("Email is required");
      }
     if (password === "") {
        setErrorPassword("Password is required");
      }
      setLoader(false);

    }
  }
  return (
    <div className="min-h-screen px-[10px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md px-6 border  border-3 border-[#A855F7] py-8 bg-gray-900 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-500 mb-2">Myastro</h1>
          <p className="text-gray-400 text-sm">
            Enter your email and password to login
          </p>
          {error && <span className='text-red-600 font-semibold mt-2'>{error}</span>}
        </div>

        {/* Login Form */}

        <form className="space-y-6" onSubmit={(e) => { handelSubmit(e) }}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              name='email'
              type="email"
              onChange={(e) => { setEmail(e.target.value) }}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            {errorEmail && <span className='text-red-600 font-normal mt-1'>{errorEmail}</span>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            {errorPassword && <span className='text-red-600 font-normal mt-1'>{errorPassword}</span>}
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              disabled={loader}
              className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md focus:outline-none  "
            >
              {loader ? (<BeatLoader color="#fff" />) : ("Login")}

            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
