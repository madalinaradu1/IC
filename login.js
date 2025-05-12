// Ensure Amplify is defined before calling configure
if (typeof Amplify !== "undefined") {
  Amplify.configure({
    Auth: {
      region: 'us-east-2',
      userPoolId: 'us-east-2_sXPoDwy6L',
      userPoolWebClientId: '65ef51ln7c4bj8ngm4s83oaqro',
      oauth: {
        domain: 'us-east-2sxpodwy6l.auth.us-east-2.amazoncognito.com',
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: 'https://main.d1wiq1447tfwgs.amplifyapp.com/',
        redirectSignOut: 'https://main.d1wiq1447tfwgs.amplifyapp.com/',
        responseType: 'code'
      }
    }
  });
} else {
  console.error("Amplify library failed to load.");
}

function signIn() {
  if (typeof Amplify !== "undefined") {
    Amplify.Auth.federatedSignIn();
  } else {
    console.error("Amplify is not available yet.");
  }
}

function signOut() {
  if (typeof Amplify !== "undefined") {
    Amplify.Auth.signOut({ global: true });
  }
}
