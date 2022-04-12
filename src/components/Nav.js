import React from 'react';

const Nav = () => {
  const handleLogout = (event) => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <div className='topnav'>
      <button
        className='logout'
        type='submit'
        onClick={handleLogout}
        style={{
          background: 'rgb(117, 84, 160)',
          color: 'white',
          padding: '8px',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '5px',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
