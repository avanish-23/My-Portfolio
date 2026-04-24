import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03111c]/80 px-4 py-10 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <div>
          <p className="text-slate-200">© 2026 {profile.name}. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, Framer Motion, and an underwater visual system.</p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
