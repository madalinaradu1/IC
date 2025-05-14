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

document.addEventListener("DOMContentLoaded", () => {
  if (!window.Amplify) {
    console.error("❌ Amplify is not defined. Make sure aws-amplify.min.js is present.");
    return;
  }

  Amplify.configure(amplifyConfig);

  document.getElementById("loginButton").addEventListener("click", async () => {
    try {
      await Amplify.Auth.federatedSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  });

  document.getElementById("logoutButton").addEventListener("click", async () => {
    try {
      await Amplify.Auth.signOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  });
});
