import { Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-light transition-colors"
              aria-label="X（旧Twitter）"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/sapporo_takkyu_rensyukai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-light transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@user-qy1vh2ue8j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-light transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-200">© 2025 札幌卓球練習会. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
