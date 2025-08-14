import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      titleKey: 'portfolio.projects.ecommerce.title',
      descriptionKey: 'portfolio.projects.ecommerce.description',
      technologies: ['React', 'tailwind'],
      image: 'https://media.istockphoto.com/id/1467812717/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BE%D1%80-%D1%81-%D0%BF%D1%80%D0%B8%D1%86%D0%B5%D0%BF%D0%BE%D0%BC-%D0%BD%D0%B0-%D1%81%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D0%B2%D0%BE%D0%BC-%D0%BF%D0%BE%D0%BB%D0%B5-%D0%B2-%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%B7%D0%B5%D1%80%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=7sAISNFRIJVua_JyCg6IdYZIiC_KjpdhWubl6aEQAGY=',
      href: 'https://bkdr01.github.io/Track/'
    },
    {
      id: 2,
      titleKey: 'portfolio.projects.todoApp.title',
      descriptionKey: 'portfolio.projects.todoApp.description',
      technologies: ['React', 'SCSS'],
      image: 'https://twam.ru/wp-content/uploads/2024/02/sait-stomatologii-1.webp',
      href: 'https://media-card-project-1.vercel.app/'
    },
    {
      id: 3,
      titleKey: 'portfolio.projects.landing.title',
      descriptionKey: 'portfolio.projects.landing.description',
      technologies: ['React', 'Tailwind'],
      image: 'https://img.championat.com/s/732x488/news/big/k/v/igra-hamster-kombat_17187229981396335904.jpg',
      href: 'https://h-amster-combat-game-lesson-3-4.vercel.app/'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('portfolio.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t(project.titleKey)}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t(project.descriptionKey)}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.href}
                      className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('portfolio.demo')}</span>
                    </a>
                    <a 
                      href="#"
                      className="inline-flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t('portfolio.code')}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;