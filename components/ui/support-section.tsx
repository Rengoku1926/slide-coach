import React from 'react';
import { MessageCircle, Slack, Twitter, BookOpen, HelpCircle, Settings } from 'lucide-react';

const SupportComponent = () => {
  const supportItems = [
    {
      icon: MessageCircle,
      title: "Chat with us",
      description: "We're happy to help — Chat with us live!",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Slack,
      title: "Slack",
      description: "Join the Polypane community on Slack.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Twitter,
      title: "Bluesky",
      description: "We frequently share updates on Bluesky.",
      color: "bg-sky-100",
      iconColor: "text-sky-600"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Learn how to use Polypane to its fullest.",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Your questions answered.",
      color: "bg-violet-100",
      iconColor: "text-violet-600"
    },
    {
      icon: Settings,
      title: "Manage account",
      description: "Manage subscription, invite team members.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 flex items-center justify-center p-4 pt-30 md:pt-18">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div 
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-4">Support</h1>
          <p className="text-xl text-white/80">Let us know how we can help</p>
        </div>

        {/* Support Cards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          
        >
          {supportItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                
              >
                <div
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 h-full flex flex-col items-center text-center"
                  
                >
                  <div
                    className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6`}
                    
                  >
                    <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  
                  <h3 
                    className="text-xl font-semibold text-gray-900 mb-3"
                    
                  >
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Elements for Extra Visual Interest */}
        <div
          className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"
          
        />
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full"
          
        />
        <div
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/15 rounded-full"
          
        />
      </div>
    </div>
  );
};

export default SupportComponent;