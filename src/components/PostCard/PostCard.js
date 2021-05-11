import React from "react";

export default function PostCard() {
  return (
    <body className="antialiased bg-gray-200 font-sans">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md md:max-w-2xl px-2">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
            <div
              className="bg-cover bg-bottom h-56 md:h-auto md:w-56"
              style={{backgroundImage: `url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)`}}
            ></div>
            <div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-xl md:text-2xl">
                  Amsterdam Walking Tour
                </p>
                <p className="text-gray-700 md:text-lg">
                  Explore popular tourist destinations as well as hidden local
                  favourites.
                </p>
              </div>
              <div className="p-4 md:p-5 bg-gray-100">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">17</span> per
                      person*
                    </div>
                    <div className="flex items-center">
                      <div className="flex inline-flex -mx-px">
                        adasda
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        28 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Book now
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-base">
                  *Prices may vary depending on selected date.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
