import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Alex Chen
            </span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Alex Chen</span>
            <span className="text-gray-600">•</span>
            <span>&copy; {currentYear}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Crafted with React, TypeScript, and Tailwind CSS. Open to new opportunities and collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;