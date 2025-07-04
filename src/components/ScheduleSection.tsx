import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Edit, Save, X } from 'lucide-react';

const ScheduleSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    startDate: '2024-02-15',
    endDate: '2024-02-17',
    time: '7:00 PM - 9:00 PM IST',
    timezone: 'Indian Standard Time',
    location: 'Online via Zoom'
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you'd save to a database here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-cream via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="moon-phases" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="100" r="20" fill="currentColor"/>
              <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M130,100 A20,20 0 0,1 170,100 A20,20 0 0,0 130,100" fill="currentColor"/>
              <circle cx="200" cy="100" r="20" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#moon-phases)" className="text-copper"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-8 h-8 text-orange-900" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-orange-900 mb-8">
              Sacred Workshop Schedule
            </h2>
            <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
              Join us for an intensive 3-day mystical journey into the ancient world of Vedic astrology and cosmic wisdom
            </p>
          </div>

          <div className="bg-gradient-to-br from-cream to-orange-50 rounded-3xl shadow-2xl p-8 md:p-16 relative border border-gold/20">
            {/* Edit button for admins */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-8 right-8 bg-gradient-to-r from-gold to-copper text-orange-900 p-3 rounded-full hover:shadow-lg transition-all shadow-md"
            >
              {isEditing ? <X className="w-6 h-6" /> : <Edit className="w-6 h-6" />}
            </button>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-gold to-copper p-3 rounded-full mr-6 shadow-lg">
                    <Calendar className="w-8 h-8 text-orange-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-orange-900 mb-3">Sacred Dates</h3>
                    {isEditing ? (
                      <div className="space-y-3">
                        <input
                          type="date"
                          value={scheduleData.startDate}
                          onChange={(e) => setScheduleData({...scheduleData, startDate: e.target.value})}
                          className="block w-full border-2 border-gold/30 rounded-xl px-4 py-3 bg-cream focus:border-gold focus:outline-none"
                        />
                        <input
                          type="date"
                          value={scheduleData.endDate}
                          onChange={(e) => setScheduleData({...scheduleData, endDate: e.target.value})}
                          className="block w-full border-2 border-gold/30 rounded-xl px-4 py-3 bg-cream focus:border-gold focus:outline-none"
                        />
                      </div>
                    ) : (
                      <p className="text-copper text-lg leading-relaxed">
                        {new Date(scheduleData.startDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })} - {new Date(scheduleData.endDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-gold to-copper p-3 rounded-full mr-6 shadow-lg">
                    <Clock className="w-8 h-8 text-orange-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-orange-900 mb-3">Mystical Hours</h3>
                    {isEditing ? (
                      <input
                        type="text"
                        value={scheduleData.time}
                        onChange={(e) => setScheduleData({...scheduleData, time: e.target.value})}
                        className="block w-full border-2 border-gold/30 rounded-xl px-4 py-3 bg-cream focus:border-gold focus:outline-none"
                      />
                    ) : (
                      <p className="text-copper text-lg">{scheduleData.time}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-gold to-copper p-3 rounded-full mr-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-orange-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-orange-900 mb-3">Sacred Space</h3>
                    {isEditing ? (
                      <input
                        type="text"
                        value={scheduleData.location}
                        onChange={(e) => setScheduleData({...scheduleData, location: e.target.value})}
                        className="block w-full border-2 border-gold/30 rounded-xl px-4 py-3 bg-cream focus:border-gold focus:outline-none"
                      />
                    ) : (
                      <p className="text-copper text-lg">{scheduleData.location}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-copper/10 rounded-2xl p-8 border border-gold/20">
                <h3 className="text-2xl font-serif font-bold text-orange-900 mb-6">Sacred Gifts You'll Receive</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold to-copper rounded-full mt-2 mr-4"></div>
                    <span className="text-copper font-medium">Comprehensive mystical workshop materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold to-copper rounded-full mt-2 mr-4"></div>
                    <span className="text-copper font-medium">Personalized sacred birth chart analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold to-copper rounded-full mt-2 mr-4"></div>
                    <span className="text-copper font-medium">Certificate of mystical completion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold to-copper rounded-full mt-2 mr-4"></div>
                    <span className="text-copper font-medium">Lifetime access to sacred resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold to-copper rounded-full mt-2 mr-4"></div>
                    <span className="text-copper font-medium">Exclusive spiritual community support</span>
                  </li>
                </ul>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-center space-x-6 mb-12">
                <button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all flex items-center font-medium"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all flex items-center font-medium"
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancel
                </button>
              </div>
            )}

            <div className="bg-gradient-to-r from-orange-900 to-amber-900 rounded-2xl p-10 text-cream text-center shadow-xl">
              <h3 className="text-3xl font-serif font-bold mb-6">Limited Sacred Offering</h3>
              <p className="text-xl mb-8 leading-relaxed">
                Early mystic pricing available until {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-gold to-copper text-orange-900 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50">
                  Secure Your Sacred Spot - ₹2,999
                </button>
                <button className="border-2 border-gold text-gold px-10 py-5 rounded-full text-xl font-bold hover:bg-gold hover:text-orange-900 transition-all duration-300 backdrop-blur-sm">
                  Sacred Payment Plans Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;