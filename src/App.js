import React, { useEffect, useState } from 'react';
import './App.css';

import { SelectMFAType, withAuthenticator } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

// There needs to be at least two active options available for `<SelectMFAType />`
const MFATypes = {
  SMS: true,
  TOTP: true,
  Optional: true,
};


function App() {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
        Auth.currentAuthenticatedUser().then((data) => {
          if (data !== null && data !== undefined) {
            setAuthData(data);
          }
          console.log('Auth Data is successfully set:', data);
        });
  }, []);

  return (
    <div className="App">
      <SelectMFAType authData={authData} MFATypes={MFATypes} />
    </div>
  );
}

export default withAuthenticator(App, true);
