import Keycloak from "keycloak-js";

const _kc = new Keycloak({
  url: "https://licensing.scubeenterprise.com/",
  realm: "schenectady",
  clientId: "clerkXpress-frontend-local",
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      onLoad: "check-sso",
      pkceMethod: "S256",
      redirectUri: "http://localhost:3000/",
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getTokenParsed = () => _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasAnyPermission = (roles) =>
  roles.some((role) => _kc.hasRealmRole(role));
const hasAllPermissions = (roles) =>
  roles.every((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getTokenParsed,
  updateToken,
  getUsername,
  hasAnyPermission,
  hasAllPermissions,
};

export default UserService;
