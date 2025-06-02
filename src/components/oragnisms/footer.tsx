import { Heart, Shield, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Sabay Konfess</h3>
            </div>
            <p className="text-purple-200 mb-4 max-w-md">
              A safe, anonymous space for sharing your deepest thoughts and
              confessions. Your privacy is our priority. 🤫💜
            </p>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>Anonymous</span>
              </div>
              <span>•</span>
              <span>Judgment Free</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-200">Quick Links</h4>
            <ul className="space-y-2 text-purple-300">
              <li>
                <Link
                  href="/confess"
                  className="hover:text-white transition-colors"
                >
                  🎭 Confess
                </Link>
              </li>
              <li>
                <Link
                  href="/browse"
                  className="hover:text-white transition-colors"
                >
                  📖 Browse Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  ℹ️ About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  ❓ FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-200">Support</h4>
            <ul className="space-y-2 text-purple-300">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  🔒 Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  📋 Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  📧 Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  🆘 Get Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8 text-center">
          <p className="text-purple-300 mb-2">
            Made with 💜 for people who need a safe space to share
          </p>
          <p className="text-sm text-purple-400">
            © 2025 Sabay Konfess. All rights reserved. • Your anonymity is our
            promise.
          </p>
        </div>
      </div>
    </footer>
  );
}
