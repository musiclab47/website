import Link from "next/link";
import { Instagram, Music2, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="relative">
  <div className="absolute -top-[20vw]   left-0 right-0 w-full h-[50vw] z-0 overflow-hidden">
        <Image
          src="/images/footer-bg.png"
          alt="Concert crowd"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute -top-[15vw] left-0 right-0 flex items-end justify-center overflow-visible pointer-events-none z-10">
        <h2 className="font-bold text-center text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] leading-[0.85] tracking-tighter text-white whitespace-nowrap">
          Music Lab
        </h2>
      </div>
      
      <footer
        id="contact"
        className="relative z-20 border-t border-border py-50 px-6 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Music2 className="w-5 h-5 text-foreground" strokeWidth={2} />
                <span className="text-base font-medium text-foreground">
                  Music Lab
                </span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6">
                Where sound becomes legacy.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wider">Contact</h4>
              <div className="space-y-4">
                <a
                  href="tel:+919877228026"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 98772 28026
                </a>
                <a
                  href="mailto:musiclab047@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  musiclab047@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wider">Follow Us</h4>
              <Link
                href="https://www.instagram.com/music.lab47?igsh=MWpidm13NjFiM2ZsdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Music Lab. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Music Lab - A Music Production Label
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
