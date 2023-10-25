import React, { useState, useEffect } from 'react';
import { BsFillBarChartLineFill } from 'react-icons/bs';
import {
  FaTh,
  FaGlobe,
  FaEdit,
  FaBell,
  FaBuilding,
  FaCommentDots,
  FaUserFriends,
  FaHeadphonesAlt,
  FaCaretDown,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [showIconsOnly, setShowIconsOnly] = useState(false);
  const [userManagementDropdown, setUserManagementDropdown] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowIconsOnly(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleUserManagementDropdown = () => {
    setUserManagementDropdown(!userManagementDropdown);
  };

  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/UserManagement',
      name: 'User Management',
      icon: <FaUserFriends />,
      submenu: [
        {
          path: './UserManagement/InstructorManagement',
          name: 'Instructor Management',
        },
        {
          path: './UserManagement/CountryAdmin',
          name: 'Country Admin',
        },
      ],
    },
    {
      path: '/CenterManagement',
      name: 'Center Management',
      icon: <FaBuilding />,
    },
    {
      path: '/Countries',
      name: 'Countries',
      icon: <FaGlobe />,
    },
    {
      path: '/AudioFileManagement',
      name: 'Audio File Management',
      icon: <FaHeadphonesAlt />,
    },
    {
      path: '/CustomNotification',
      name: 'Custom Notification',
      icon: <FaBell />,
    },
    {
      path: '/Report',
      name: 'Report',
      icon: <BsFillBarChartLineFill />,
    },
    {
      path: '/FeedbackReceived',
      name: 'Feedback Received',
      icon: <FaCommentDots />,
    },
    {
      path: '/ContentManagement',
      name: 'Content Management',
      icon: <FaEdit />,
    },
  ];

  return (
    <div className="container">
      <div
        className="sidebar"
        style={{
          width: showIconsOnly ? '50px' : '200px',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <div className="top_section">
          <div className="user-profile">
            <div className="user-details">
              <div className="user-image">
                <img src="user-image.jpg" alt="" />
              </div>
              <div className="user-name">
                Paolo Barbosa
              </div>
              <div className="user-position" style={{ color: '#808080', }}>
                 Admin
            </div>
            </div>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            {item.path === '/UserManagement' ? (
              <div>
                <div className="link" onClick={toggleUserManagementDropdown}>
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: showIconsOnly ? 'none' : 'block' }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                  <div className="icon dropdown-icon" style={{ transform: userManagementDropdown ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <FaCaretDown />
                  </div>
                </div>
                {userManagementDropdown && (
                  <div className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="link"
                        activeClassName="active"
                      >
                        <div className="icon" style={{ marginLeft: '20px' }}>
                          {/* You can add an icon here */}
                        </div>
                        <div
                          style={{ display: showIconsOnly ? 'none' : 'block' }}
                          className="link_text"
                        >
                          {subItem.name}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink to={item.path} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: showIconsOnly ? 'none' : 'block' }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </div>
      <main style={{ marginLeft: showIconsOnly ? '50px' : '200px' }}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
