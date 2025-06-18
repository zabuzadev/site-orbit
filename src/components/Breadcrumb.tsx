import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-slate-400 hover:text-slate-200 transition-colors">
            Início
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="h-4 w-4 text-slate-600" />
            <li>
              {item.href ? (
                <Link to={item.href} className="text-slate-400 hover:text-slate-200 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-200">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 