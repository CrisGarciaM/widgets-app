// import React from 'react';

// const Link = (props) => {
//   const { className, href, children } = props;

//   const onClick = (e) => {
//     if (e.metaKey || e.ctrlKey) {
//       return;
//     }

//     e.preventDefault();
//     window.history.pushState({}, '', href);

//     const navEvent = new PopStateEvent('popstate');
//     window.dispatchEvent(navEvent);
//   };

//   return (
//     <a onClick={onClick} className={className} href={href}>
//       {children}
//     </a>
//   );
// };

// export default Link;
