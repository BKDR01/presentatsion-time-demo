import React from 'react';
import { useTranslation } from 'react-i18next';
import foto from './../ChatGPT Image 8 июн. 2025 г., 14_12_10.png';
const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('about.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={foto} className='rounded-[16px]' alt="" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.description2')}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.experience')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.projects')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;