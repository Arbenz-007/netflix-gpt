import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6 mb-6">
          <a href="#" aria-label="Facebook">
            <LuFacebook className="h-6 w-6 hover:text-white" />
          </a>
          <a href="#" aria-label="Instagram">
            <LuInstagram className="h-6 w-6 hover:text-white" />
          </a>
          <a href="#" aria-label="Twitter">
            <LuTwitter className="h-6 w-6 hover:text-white" />
          </a>
          <a href="#" aria-label="Youtube">
            <LuYoutube className="h-6 w-6 hover:text-white" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Audio Description</a>
            <a href="#" className="block hover:underline">Investor Relations</a>
            <a href="#" className="block hover:underline">Legal Notices</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Jobs</a>
            <a href="#" className="block hover:underline">Cookie Preferences</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Gift Cards</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
            <a href="#" className="block hover:underline">Corporate Information</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Media Center</a>
            <a href="#" className="block hover:underline">Privacy</a>
            <a href="#" className="block hover:underline">Contact Us</a>
          </div>
        </div>
        
        <button className="border border-netflix-gray px-3 py-1 text-sm mb-6 hover:text-white">
          Service Code
        </button>
        
        <p className="text-xs">© 1997-{new Date().getFullYear()} Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;