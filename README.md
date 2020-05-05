## Amplify TOTP Sample

In the project directory, you can run:
### Installation
- Run `yarn` in order to install all needed npm packages.

### Running in Development Mode
- `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

<!-- Will remove when going to Public Repo -->
### Creating a User / Configuring the User:
The Sample application comes with a pre-configured AWS Resources along with a `aws-exports` file. 

1. Go ahead and create a user in order to test TOTP.
2. After the user is created, using the `aws-exports` file, locate the Cognito User Pool in order to turn on settings for said user.
3. Under the Cognito User Pool, verify that on the user MFA is enabled. Will see `Disable MFA` under the user when MFA is enabled.
4. If you are unable to set the user's MFA, double check under `MFA and verifications` that `enable Multi-Factor Authentication (MFA)`, is set to Optional.
5. Also verify that both `SMS text message` and `Time-based One-time password` are checked.

### Using TOTP
1. Once logged in, you should see a modal with three options (SMS, TOTP, No MFA). Select TOTP and click `verify`.
2. A new component will appear with a QR Code to scan. You can use `Google Authenticator`, link for [iOS](https://apps.apple.com/us/app/google-authenticator/id388497605) or [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US), scan the QR Code and follow the prompts on `Google Authenticator` to receive the number needed to finish the TOTP Authentication process. 
3. Once you have successfully configured TOTP, sign out of the application and re-sign in. After the initial log in, you will see a component with `Confirm TOTP code`. Using the `Google Authenticator` application, find the user and type in the code generated. 
