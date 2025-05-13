function waitForAmplify(callback) {
  if (typeof Amplify !== "undefined") {
    callback();
  } else {
    setTimeout(() => waitForAmplify(callback), 50);
  }
}

waitForAmplify(() => {
  const amplifyConfig = {
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_QT6fHJwCz',
      userPoolWebClientId: '41nddihtdj1phntvrat1hrklj1',
      oauth: {
        domain: 'us-east-1qt6fhjwcz.auth.us-east-1.amazoncognito.com',
        scope: ['openid', 'email', 'profile'],
        redirectSignIn: 'https://main.drcex0cp0mm74.amplifyapp.com/',
        redirectSignOut: 'https://main.drcex0cp0mm74.amplifyapp.com/',
        responseType: 'code',
      },
    },
  };

  Amplify.configure(amplifyConfig);

  const signIn = async () => {
    console.log("Login button clicked"); // Confirm button is wired
    try {
      await Amplify.Auth.federatedSignIn();
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  const signOut = async () => {
    try {
      await Amplify.Auth.signOut();
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  // ✅ Wait for DOM to be fully loaded before binding buttons
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginButton').addEventListener('click', signIn);
    document.getElementById('logoutButton').addEventListener('click', signOut);
  });
});
