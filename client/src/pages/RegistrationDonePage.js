import React from 'react';
import TopBar from '../components/TopBar';
import RegistrationDone from '../components/RegistrationDone';

const RegistrationDonePage = () => {
  return (
    <div>
        <TopBar showButtons={false}/>
      <RegistrationDone />
    </div>
  );
};

export default RegistrationDonePage;