'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:ml-[-2rem] text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-normal italic mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#ff6b00] block mb-2 font-mono text-4xl sm:text-5xl md:text-6xl"
              >
                <span className="text-[#ff6b00]">&gt;</span>
                <span className="ml-2">Hello,</span>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[#ff6b00] block mb-4 text-4xl sm:text-5xl md:text-6xl"
              >
                I'm Amlan Nanda
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-[#ffffff] block text-xl sm:text-2xl md:text-3xl"
              >
                <TypeAnimation
                  sequence={[
                    'AI/ML Developer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'Data Analyst Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.span>
            </h1>
            <p className="text-[#a3a3a3] text-base sm:text-lg mb-8">
              Building smart solutions that can think, learn and evolve.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="#contact"
                className="btn-primary bg-[#ff6b00]/20 hover:bg-[#ff6b00]/30 text-[#ff6b00] border border-[#ff6b00]/30 relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:scale-105 px-6 py-3 rounded-md"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-[#ff6b00]/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-[#ff6b00]/20 hover:bg-[#ff6b00]/30 text-[#ff6b00] border border-[#ff6b00]/30 relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:scale-105 px-6 py-3 rounded-md"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-[#ff6b00]/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] rounded-full blur-xl opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] rounded-full blur-md opacity-10 animate-pulse" />
              
              {/* Profile image with enhanced border */}
              <div className="relative w-full h-full rounded-full p-3 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] group">
                <div className="w-full h-full rounded-full overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/profile.jpg"
                    alt="Amlan Nanda"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 384px"
                    className="rounded-full transition-all duration-500 ease-in-out group-hover:grayscale"
                    priority
                    onError={(e) => {
                      console.error('Error loading image:', e);
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          <SocialLink href="https://github.com/rijuni" icon="github" />
          <SocialLink href="https://www.linkedin.com/in/amlan-nanda-a7a618255/" icon="linkedin" />
          <SocialLink href="https://x.com/2710amlan" icon="twitter" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#a3a3a3] hover:text-[#ff6b00] transition-colors"
    >
      <span className="sr-only">{icon}</span>
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {icon === 'github' && (
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        )}
        {icon === 'linkedin' && (
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        )}
        {icon === 'twitter' && (
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        )}
      </svg>
    </a>
  );
} 