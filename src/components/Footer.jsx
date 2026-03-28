const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 Adrian Hojdin. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;