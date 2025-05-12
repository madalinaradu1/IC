function signIn() {
  Amplify.Auth.federatedSignIn();
}

function signOut() {
  Amplify.Auth.signOut({ global: true });
}
