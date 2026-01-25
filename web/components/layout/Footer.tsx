import Link from 'next/link';
import { SITE_CONFIG, PROJECTS } from '@/lib/constants';
import { Icons } from '@/components/ui/Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-white font-heading">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {SITE_CONFIG.tagline}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                powered by AreteVision
              </p>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                프로젝트
              </h3>
              <ul className="mt-4 space-y-3">
                {PROJECTS.slice(0, 5).map((project) => (
                  <li key={project.id}>
                    <Link
                      href={project.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                자료
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/resources" className="text-sm text-gray-400 hover:text-white transition-colors">
                    자료실
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                    소개
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                연락처
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-sm text-gray-400">
                  <Icons.mail className="mr-2 h-4 w-4" />
                  contact@havrutaproject.org
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
