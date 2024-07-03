import React from "react";

const MainBody = () => {
  return (
    <>
      <main className="bg-cyan-50 p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Featured Article
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum rutrum metus at enim congue, vel tincidunt lorem
                cursus. Sed sit amet justo id metus auctor faucibus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Categories
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="py-2  border-gray-300">History</li>
                <li className="py-2  border-gray-300">Science</li>
                <li className="py-2  border-gray-300">Technology</li>
                <li className="py-2  border-gray-300">Arts</li>
                <li className="py-2  border-gray-300">Culture</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 ">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Recent Articles
              </h2>
              <ul className="grid grid-cols-2 gap-4"></ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 ">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                
              </h2>
              <ul className="grid grid-cols-2 gap-4"></ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 ">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
               
              </h2>
              <ul className="grid grid-cols-2 gap-4"></ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 ">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
               
              </h2>
              <ul className="grid grid-cols-2 gap-4"></ul>
            </div>
          </section>

          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Popular Articles
              </h2>
              <ul>
                <li className="py-2 border-b border-gray-300">
                  <a href="#references" className="text-teal-600">
                    References & Citations
                  </a>
                </li>
                <li className="py-2 border-b border-gray-300">
                  <a href="#discussion" className="text-teal-600">
                    Discussion Pages
                  </a>
                </li>
                <li className="py-2 border-b border-gray-300">
                  <a href="#random" className="text-teal-600">
                    Random Article
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">Search</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum rutrum metus at enim congue, vel tincidunt lorem
                cursus. Sed sit amet justo id metus auctor faucibus.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default MainBody;
