import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * AdminLayout - A consistent layout component for all admin pages
 * 
 * Provides navigation, header, and consistent styling for the admin section
 */
const AdminLayout = ({ children }) => {
  const location = useLocation();
  
  // Navigation items for the admin section
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/admin/add-skill', label: 'Add Skill', icon: '➕' },
    { path: '/admin/scenarios', label: 'Scenarios', icon: '📝' },
  ];
  
  // Styles
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '20px 0',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      padding: '0 20px 20px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      marginBottom: '20px',
    },
    content: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#f3f4f6',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      textDecoration: 'none',
      color: 'rgba(255,255,255,0.7)',
      transition: 'all 0.2s',
    },
    activeNavItem: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      color: 'white',
      borderLeft: '4px solid #60a5fa',
    },
    navIcon: {
      marginRight: '10px',
      fontSize: '18px',
    },
    header: {
      backgroundColor: 'white',
      padding: '15px 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginBottom: '20px',
      borderRadius: '8px',
    },
    headerTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: 0,
    }
  };

  // Get the current page title based on the active route
  const getPageTitle = () => {
    const activeItem = navItems.find(item => item.path === location.pathname);
    return activeItem ? activeItem.label : 'Admin';
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Navigation */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>Famrise Admin</div>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.navItem,
                ...(location.pathname === item.path ? styles.activeNavItem : {})
              }}
            >
              <span style={styles.navIcon}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Main Content Area */}
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>{getPageTitle()}</h1>
        </header>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
