import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="relative w-full">
        <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
            {/* Column 1: Branding and Newsletter */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <img
                  className="h-12 w-auto"
                  src="https://res.cloudinary.com/doyh3fqr5/image/upload/c_crop,w_1000,h_780/v1750524389/IEEE_VCE_SB_-_TBG_j8tonl.png"
                  alt="IEEE VCE SB Logo"
                />
                <h3 className="text-xl font-bold text-gray-900">IEEE Vardhaman</h3>
              </div>
              
              <p className="text-base font-semibold leading-7 text-gray-900">Subscribe to our newsletter</p>
              <form className="mt-2 flex max-w-md gap-x-4 rounded-full border border-gray-300 p-1.5 pl-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto appearance-none border-0 bg-transparent p-0 text-base leading-7 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                />
                <button
                  type="submit"
                  className="flex-none rounded-full bg-green-500 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                >
                  Sign up
                </button>
              </form>
            </div>

            {/* Column 2: Company */}
            <div className="mt-2">
              <h4 className="font-semibold text-gray-900">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Membership</a></li>
                <li><a href="#" className="hover:text-gray-900">Events</a></li>
                <li><a href="#" className="hover:text-gray-900">Publications</a></li>
                <li><a href="#" className="hover:text-gray-900">Legal & Privacy</a></li>
              </ul>
            </div>

            {/* Column 3: Individuals */}
            <div className="mt-2">
              <h4 className="font-semibold text-gray-900">Individuals</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Societies</a></li>
                <li><a href="#" className="hover:text-gray-900">Councils</a></li>
                <li><a href="#" className="hover:text-gray-900">Create Account</a></li>
                <li><a href="#" className="hover:text-gray-900">Get Involved</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 4: Support & Social */}
            <div className="mt-2">
              <h4 className="font-semibold text-gray-900">Follow us at</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100"><Twitter className="h-4 w-4 text-gray-600" /></div>
                  <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100"><Instagram className="h-4 w-4 text-gray-600" /></div>
                  <a href="#" className="text-gray-500 hover:text-gray-900">Instagram</a>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100"><Linkedin className="h-4 w-4 text-gray-600" /></div>
                  <a href="#" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>

          
        </div>

        {/* "Let's Talk" Marquee */}
        <div className="relative mt-4 h-20 w-full overflow-hidden mb-8">
          <div className="absolute left-0 flex animate-marquee-infinite">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-shrink-0 items-center justify-around">
                <p className="px-8 text-7xl font-semibold text-gray-300">IEEE VMEG</p>
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-500">
                  <ArrowUpRight className="h-7 w-7 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};