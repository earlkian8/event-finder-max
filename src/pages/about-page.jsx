import React from 'react';
import { Sparkles, Users, Target, Heart, Award, Calendar, MapPin, Shield, Rocket, Eye, Flag, Github, Linkedin, Mail } from 'lucide-react';

const AboutPage = () => {
  const visionMissionGoals = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To create accessible, ethical, and practical technology that keeps people in sync, fosters unity, and transforms everyday challenges into opportunities.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'UniSync Labs designs seamless, intuitive software by blending creativity with technical excellence, empowering businesses and individuals through innovation, collaboration, and ethical technology',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Flag,
      title: 'Our Goals',
      description: 'UniSync Labs strives to create reliable, user-friendly, and high-quality software that meets client needs and exceeds expectations. The company values continuous improvement, teamwork, and responsible technology that benefits both people and the environment.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Earl Kian Bancayrin',
      role: 'Lead Software Developer',
      image: '/src/assets/member1.jpg', 
      bio: 'Passionate about creating seamless user experiences and scalable solutions.',
    },
    {
      name: 'Cydrick Amparan',
      role: 'UI/UX Designer & Business Analyst',
      image: '/src/assets/member2.jpg', 
      bio: 'Combines design thinking with technical expertise to craft beautiful interfaces.',
    },
    {
      name: 'Jenson Canones',
      role: 'Software Developer',
      image: '/src/assets/member3.jpg', 
      bio: 'Specializes in creating responsive user interfaces and enhancing the overall user experience.',
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>About SpotMax</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your Gateway to Amazing Experiences
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SpotMax is your trusted companion for discovering and booking incredible events 
            and venues worldwide. We believe every moment deserves to be extraordinary.
          </p>
        </div>

        {/* UniSync Description Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              What is UniSync?
            </h2>
            <p className="text-lg text-gray-600 text-center leading-relaxed mb-6">
              UniSync Labs is a software development company dedicated to creating innovative and
              user-friendly solutions. We bring together a team of skilled individuals with diverse backgrounds,
              working collaboratively to design and deliver software that is both reliable and seamless. At UniSync
              Labs, every project is an opportunity to grow, improve, and make a meaningful impact on the users we
              serve.
            </p>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              UniSync Labs stands for teamwork, coordination, and innovation. The company values collaboration and 
              continuous learning to ensure smooth workflows and high-quality results. Its focus on experimentation 
              and improvement helps drive creativity and technical growth. UniSync Labs develops user-friendly and 
              efficient software tailored to specific needs. The company's mission is to deliver excellent 
              solutions while helping its team and products grow together.
            </p>
          </div>
        </div>

        {/* Vision, Mission & Goals Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Purpose & Direction
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {visionMissionGoals.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Meet Our Development Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The brilliant minds behind UniSync, dedicated to creating the best quality management experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-500 overflow-hidden">
                  {/* Fallback icon (shown when no image) */}
                  {!member.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-20 h-20 text-white/50" />
                    </div>
                  )}
                  
                  {/* Actual Image */}
                  {member.image && (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto">
            Join thousands of users who trust SpotMax to discover their next unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/events"
              className="px-8 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Discover Events
            </a>
            <a 
              href="/venues"
              className="px-8 py-3 bg-indigo-800 text-white rounded-lg font-medium hover:bg-indigo-900 hover:shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-white"
            >
              Book Venues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;