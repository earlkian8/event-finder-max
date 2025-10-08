import React from 'react';
import { Sparkles, Users, Target, Heart, Award, Calendar, MapPin, Shield } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Discover Events',
      description: 'Browse thousands of events from concerts to conferences, sports to cultural celebrations.'
    },
    {
      icon: MapPin,
      title: 'Find Venues',
      description: 'Explore amazing venues across the globe, from intimate theaters to grand stadiums.'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Safe and reliable platform ensuring your tickets and information are protected.'
    },
    {
      icon: Award,
      title: 'Best Experiences',
      description: 'Curated selection of top-rated events to make every moment unforgettable.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about connecting people with experiences that matter to them.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a vibrant community of event enthusiasts and experience seekers.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering exceptional service and unforgettable moments.'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Events Listed' },
    { value: '500+', label: 'Venues' },
    { value: '50K+', label: 'Happy Users' },
    { value: '100+', label: 'Cities' }
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

        {/* Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 text-center leading-relaxed mb-6">
              At SpotMax, we're on a mission to transform how people discover and experience live events. 
              We believe that life's most memorable moments happen when we come together to celebrate, 
              learn, and be inspired.
            </p>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Whether you're seeking the thrill of a concert, the excitement of a sports event, 
              the knowledge from a conference, or the beauty of cultural performances, SpotMax 
              is here to connect you with experiences that enrich your life.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-indigo-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
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
              Browse Events
            </a>
            <a 
              href="/venues"
              className="px-8 py-3 bg-indigo-800 text-white rounded-lg font-medium hover:bg-indigo-900 hover:shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-white"
            >
              Explore Venues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;