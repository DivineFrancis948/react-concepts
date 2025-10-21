import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './home';


function Nav() {

    /*
        For navigation, we are using react-router-dom package.

        1. BrowserRouter: It is a router component that uses the HTML5 history API to keep your UI in sync with the URL.
        2. Routes: It is a container for a list of Route components.
        3. Route: It is used to define a mapping between a URL path and a component.
        4. Link: It is used to create links to different routes defined in the application.
    */
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex gap-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/con" >con</Link>
        </div>
      </nav>

      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/con' element={<h1>hello con</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Nav;
