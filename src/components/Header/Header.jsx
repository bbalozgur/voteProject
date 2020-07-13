import React from 'react';
import './Header.scss';

const Header = ({
  testId
}) => {
  return (
    <div className="header" data-testid={`header-${testId}`}>
      <strong>hepsiburada <span>.com</span> </strong>
      <strong>Link <span>VOTE challenge</span> </strong>
    </div>
  );
};

Header.defaultProps = {
  testId: 'test',
};

export default Header;