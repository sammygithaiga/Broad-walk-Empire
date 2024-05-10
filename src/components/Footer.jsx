
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-300">© 2024 My Website. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.93c-3.95-.49-5.99-2.2-6-5.09C5 11.47 6.12 9 12 9v3l5-4-5-4v3c-4.28 0-6.5 2.55-6.5 6.08 0 2.12 1.36 3.45 3.5 3.92V13h-2v2.92c-2.14-.47-3.5-1.8-3.5-3.92C5 10.55 7.22 8 11 8v-1l5 4-5 4v-1z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.79 17.5h-3.58c-.66 0-1.21-.55-1.21-1.21V11h-2.5v-3h2.5V7.76C8.5 6.69 9.19 6 10.06 6h3.88v3h-2.59c-.09.34-.34.75-.67 1.21-.59.67-1.12 1.14-1.14 1.16-.19.16-.44.35-.44.88v1.5h3l-.17 3.5z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12c0-1.05-.15-2.07-.41-3H12v6.23h4.28c-.18.95-.73 1.78-1.51 2.35.88.23 1.78.37 2.73.37 4.33 0 7.85-3.51 7.85-7.85zm-9-6.23V5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1zM4 20h4c.55 0 1-.45 1-1v-7.23H4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm7-1h6c.55 0 1-.45 1-1v-5.23h-8V19c0 .55.45 1 1 1zm9-3.23V14c0-.55-.45-1-1-1h-1v-2c0-1.66-1.34-3-3-3h-3c-1.66 0-3 1.34-3 3v2H5c-.55 0-1 .45-1 1v2.77h4.41c-.25.6-.41 1.24-.41 1.93 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.69-.16-1.33-.41-1.93H20V16.77c0-.55-.45-1-1-1zM8 5h3c.55 0 1 .45 1 1v2H7V6c0-.55.45-1 1-1zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
