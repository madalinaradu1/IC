const amplifyConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_QT6fHJwCz',
    userPoolWebClientId: '41nddihtdj1phntvrat1hrklj1',
    oauth: {
      domain: 'us-east-1qt6fhjwcz.auth.us-east-1.amazoncognito.com',
      scope: ['openid', 'email', 'profile'],
      redirectSignIn: 'https://d19bbklwg9pa0q.cloudfront.net/',
      redirectSignOut: 'https://d19bbklwg9pa0q.cloudfront.net/',
      responseType: 'code',
    },
  },
};

Amplify.default.configure(amplifyConfig);

async function signIn() {
  try {
    await Amplify.default.Auth.federatedSignIn();
  } catch (error) {
    console.error('Sign-in error:', error);
  }
}

async function signOut() {
  try {
    await Amplify.default.Auth.signOut();
  } catch (error) {
    console.error('Sign-out error:', error);
  }
}
