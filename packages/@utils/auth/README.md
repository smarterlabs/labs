# @utils/auth

Useful helper scripts for Auth0

## Usage

This module is available only in this monorepo and not on an npm registry.

## Setting up Auth0

- Create a new application in the Auth0 dashboard
- Choose "Regular Web Application"
- Go into the settings of your new application
- Change "Token Endpoint Authentication Method" to "Post"
- Add the following values to "Allowed Callback URLs" after changing some of the host names to where your application is hosted
  ```
  https://localhost:8000/auth0-callback, http://localhost:8000/auth0-callback, http://localhost:8888/auth0-callback, https://labs-boilerplate.netlify.com/auth0-callback
  ```
- Add the following values to "Allowed Web Origins" after changing some of the host names to where your application is hosted
  ```
  https://localhost:8000, http://localhost:8000, http://localhost:8888, https://labs-boilerplate.netlify.com
  ```
- Add the following values to "Allowed Logout URLs" after changing some of the host names to where your application is hosted
  ```
  https://localhost:8000/auth0-logout, http://localhost:8000/auth0-logout, http://localhost:8888/auth0-logout, https://labs-boilerplate.netlify.com/auth0-logout
  ```
- Hit Save
- At the top of the page, you should see values for "Domain", "Client ID", and "Client Secret". Use these values to input out the environment variables `GATSBY_AUTH0_DOMAIN`, `GATSBY_AUTH0_CLIENTID`, and `AUTH0_CLIENTSECRET` into both your CI and your local `.env` file.
