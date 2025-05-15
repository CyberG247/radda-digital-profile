
import { Link } from "react-router-dom";
import { Mail, Phone, Pin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gubernatorial-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Office of the Governor</h3>
            <p className="mb-4">His Excellency, Umaru Dikko Radda, Ph.D</p>
            <p className="mb-4">Executive Governor of Katsina State, Nigeria</p>
            <div className="flex items-center gap-2 mb-2">
              <Pin size={18} />
              <p>Government House, Katsina, Nigeria</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={18} />
              <p>+234 000 0000 000</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <p>info@umarudikkoradda.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-nigeria-green transition-colors">
                  About the Governor
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-nigeria-green transition-colors">
                  Projects & Achievements
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-nigeria-green transition-colors">
                  Newsroom & Media
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-nigeria-green transition-colors">
                  Vision & Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-nigeria-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow the Governor</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-nigeria-green transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-nigeria-green transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-nigeria-green transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-nigeria-green transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {currentYear} Office of the Executive Governor of Katsina State. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
