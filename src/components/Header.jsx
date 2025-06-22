import React, { useState, useEffect } from 'react';
import { ChevronDown, Bell } from 'lucide-react';
import { notifications } from '../data/notifications';

export function Header({ navigationItems }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const unreadCount = notifications.filter(n => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest('.notifications-container')) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'event': return '📅';
      case 'achievement': return '🏆';
      case 'reminder': return '⏰';
      case 'membership': return '👥';
      case 'newsletter': return '📰';
      default: return '📢';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Left: Logo & Title */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <img
              className="h-12 w-auto"
              src="https://res.cloudinary.com/doyh3fqr5/image/upload/c_crop,w_1000,h_780/v1750524389/IEEE_VCE_SB_-_TBG_j8tonl.png"
              alt="IEEE VCE SB Logo"
            />
            <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">IEEE Vardhaman</h1>
          </div>

          {/* Spacer to push navigation to the right */}
          <div className="flex-grow"></div>

          {/* Right: Nav + Notifications */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            {/* Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={item.action}
                    className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          onClick={dropdownItem.action}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* Notifications */}
            <div className="relative notifications-container">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
              {notificationsOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                      {unreadCount > 0 && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 transition-colors duration-200 ${
                          notification.unread 
                            ? 'border-l-blue-500 bg-blue-50' 
                            : 'border-l-transparent'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg flex-shrink-0 mt-0.5">
                            {getNotificationIcon(notification.type)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className={`text-sm font-medium ${
                                notification.unread ? 'text-gray-900' : 'text-gray-700'
                              }`}>
                                {notification.title}
                              </p>
                              {notification.unread && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <button 
                      className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                      onClick={() => {
                        setNotificationsOpen(false);
                        window.location.href = '/notifications';
                      }}
                    >
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}