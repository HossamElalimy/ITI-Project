import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      null,
      React.createElement('div', { className: 'logo' }),
      React.createElement(
        'nav',
        null,
        React.createElement(Link, { to: '/' }, 'Home'),
        React.createElement(Link, { to: '/partners' }, 'Partners'),
        React.createElement(Link, { to: '/login' }, 'Login'),
        React.createElement(Link, { to: '/register' }, 'Register')
      ),
      React.createElement(
        'div',
        { className: 'auth-buttons' },
        React.createElement(Link, { className: 'btn-outline', to: '/login' }, 'Sign in'),
        React.createElement(Link, { className: 'btn-outline', to: '/register' }, 'Sign up')
      )
    ),
    React.createElement(Outlet),
    React.createElement(
      'footer',
      { className: 'main-footer' },
      React.createElement(
        'div',
        { className: 'footer-grid' },
        React.createElement('div', null, React.createElement('div', { className: 'footer-box' })),
        React.createElement(
          'div',
          null,
          React.createElement('h4', null, 'Company'),
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'About')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Careers')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Press'))
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement('h4', null, 'Resources'),
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Blog')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Help Center')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Contact'))
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement('h4', null, 'Legal'),
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Privacy')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Terms'))
          )
        )
      )
    )
  );
}
