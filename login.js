window.Amplify.configure({
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

function signIn() {
  Amplify.Auth.federatedSignIn();
}

function signOut() {
  Amplify.Auth.signOut({ global: true });
}
