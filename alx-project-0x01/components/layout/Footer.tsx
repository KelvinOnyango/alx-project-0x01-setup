// components/layout/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Daily Contents</h3>
            <p className="text-gray-400 mt-1">© 2023 All Rights Reserved</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
