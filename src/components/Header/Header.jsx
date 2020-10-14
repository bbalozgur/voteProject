import React from 'react';
import './Header.scss';

const Header = ({
  testId
}) => {
  return (
    <div className="header" data-testid={`header-${testId}`}>
      <strong>ecommerce <span>.com</span> </strong>
      <strong>Link <span>VOTE Project</span> </strong>
    </div>
  );
};

Header.defaultProps = {
  testId: 'test',
};

export default Header;