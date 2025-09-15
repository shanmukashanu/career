import { Briefcase, Zap, Users, BarChart, GraduationCap, LifeBuoy } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
    title: 'Courses on Emerging Technologies',
    description: 'Stay ahead of the curve with our expert-led courses on AI, Data Science, Web3, and more. Practical, hands-on learning to make you industry-ready.',
    image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: 'Strategic Job Search & Profile Optimization',
    description: 'Navigate the job market with a winning strategy. We help you optimize your resume, LinkedIn, and GitHub to attract top recruiters.',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <LifeBuoy className="w-10 h-10 text-blue-600" />,
    title: 'Continuous Support',
    description: 'Your career journey doesn’t end with a job. We provide continuous support for your professional growth and career transitions.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    title: 'Leadership Development',
    description: 'Cultivate the leader within you. Our programs focus on communication, decision-making, and team management skills for future leaders.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'College Workshops',
    description: 'We partner with colleges to deliver impactful workshops on career readiness, technical skills, and industry insights for students.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: 'Mock Interviews & Hackathons',
    description: 'Gain confidence and real-world experience with our mock interview sessions and competitive hackathons, designed to sharpen your skills.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const ServicesSection = () => {
  return (
    <section className="mt-10 pt-10 pb-10 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3 mb-6 animate-fade-in-down">
 
  Our Comprehensive Services
</h2>

<p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up">
  We provide a <span className="text-blue-600 font-semibold">wide range</span> of services 
  to support your <span className="text-purple-600 font-semibold">career growth</span> 
  and <span className="text-pink-600 font-semibold">success 🚀</span> at every step.
</p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon at the very top, centered */}
              <div className="pt-6 pb-4 flex justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  {service.icon}
                </div>
              </div>
              {/* Image below icon */}
              <div className="px-6 pb-4 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              {/* Content area below image (centered) */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                  {service.title}
                </h3>
                {(() => {
                  const bullets = service.description
                    .split('.')
                    .map((s) => s.trim())
                    .filter(Boolean);
                  const slug = service.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                  return (
                    <>
                      <ul className="text-gray-600 text-sm list-disc list-inside text-center space-y-1">
                        {bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                      {/* Button pinned to the bottom for consistent alignment */}
                      <div className="mt-auto pt-4 flex justify-center">
                        <a
                          href={`/services/${slug}.html`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow hover:shadow-md"
                        >
                          View More
                        </a>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
