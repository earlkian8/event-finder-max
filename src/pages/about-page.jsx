import React from 'react';
import { Sparkles, Users, Target, Heart, Award, Calendar, MapPin, Shield, Rocket, Eye, Flag, TrendingUp, Zap, CheckCircle, Globe, Clock, Star, MessageCircle } from 'lucide-react';

const AboutPage = () => {

  const teamMembers = [
    {
      name: 'Earl Kian Bancayrin',
      role: 'Lead Software Developer',
      image: '/src/assets/member1.jpg',
      color: 'bg-blue-500'
    },
    {
      name: 'Cydrick Amparan',
      role: 'UI/UX Designer & Business Analyst',
      image: '/src/assets/member2.jpg',
      color: 'bg-purple-500'
    },
    {
      name: 'Jenson Canones',
      role: 'Software Developer',
      image: '/src/assets/member3.jpg',
      color: 'bg-indigo-500'
    }
  ];

  const timeline = [
    { phase: 'Vision', desc: 'World\'s most trusted event & venue platform', icon: Eye, color: 'bg-blue-500' },
    { phase: 'Mission', desc: 'Seamlessly connect people with unforgettable experiences', icon: Target, color: 'bg-purple-500' },
    { phase: 'Goals', desc: 'Innovation, growth, and exceptional user satisfaction', icon: Flag, color: 'bg-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-lg border border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-indigo-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>About SpotMax</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Gateway to<br />
              Amazing Experiences
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Discover, book, and experience the world's best events and venues—all in one powerful platform
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          {/* What is SpotMax */}
          <div className="md:col-span-3 bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-indigo-900">What is SpotMax?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong className="text-gray-900">SpotMax</strong> is the ultimate event discovery and venue booking platform that transforms how people find and book amazing experiences. From sold-out concerts to exclusive workshops, from corporate conferences to intimate gatherings—we bring them all together.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Built on cutting-edge technology with a user-first philosophy, SpotMax combines powerful search, real-time availability, secure payments, and verified listings. We're not just a booking platform—we're your trusted companion for creating unforgettable memories.
            </p>
          </div>

          {/* Vision-Mission-Goals Timeline */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-black text-indigo-900 mb-6">Our DNA</h2>
            <div className="space-y-4">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold mb-1">{item.phase}</div>
                      <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-indigo-900 mb-2">The Team Behind SpotMax</h2>
            <p className="text-gray-700">Meet the innovators building the future of event discovery</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all group">
                <div className={`relative h-96 ${member.color} overflow-hidden`}>
                  {member.image && (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {!member.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-20 h-20 text-white/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;