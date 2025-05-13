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
    console.log("✅ Login button clicked");
    try {
      await Amplify.Auth.federatedSignIn();
    } catch (error) {
      console.error('❌ Sign-in error:', error);
    }
  };

  const signOut = async () => {
    console.log("✅ Logout button clicked");
    try {
      await Amplify.Auth.signOut();
    } catch (error) {
      console.error('❌ Sign-out error:', error);
    }
  };

  // ✅ DIRECTLY bind click listeners now (no DOMContentLoaded delay)
  const loginBtn = document.getElementById('loginButton');
  const logoutBtn = document.getElementById('logoutButton');

  if (loginBtn && logoutBtn) {
    loginBtn.addEventListener('click', signIn);
    logoutBtn.addEventListener('click', signOut);
  } else {
    console.error("❌ Buttons not found in DOM. Check IDs.");
  }
});
