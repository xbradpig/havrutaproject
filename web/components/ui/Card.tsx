import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-md',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

interface ProjectCardProps {
  name: string;
  tagline: string;
  description: string;
  color: string;
  href: string;
  icon: React.ReactNode;
}

export function ProjectCard({ name, tagline, description, color, href, icon }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className={cn('h-3 w-full bg-gradient-to-r', color)} />
        <div className="p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-colors group-hover:bg-primary-50 group-hover:text-primary-600">
            {icon}
          </div>
          <h3 className="mb-1 text-xl font-bold text-gray-900">{name}</h3>
          <p className="mb-3 text-sm font-medium text-primary-600">{tagline}</p>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
            자세히 보기
            <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
