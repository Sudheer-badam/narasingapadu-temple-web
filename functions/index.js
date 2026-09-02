const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { RecaptchaEnterpriseServiceClient } = require("@google-cloud/recaptcha-enterprise");
const admin = require("firebase-admin");

admin.initializeApp();

// Create the reCAPTCHA client
const client = new RecaptchaEnterpriseServiceClient();

exports.verifyRecaptcha = onCall(async (request) => {
  const token = request.data.token;
  const action = request.data.action;

  if (!token) {
    throw new HttpsError('invalid-argument', 'The function must be called with one argument "token" containing the reCAPTCHA token.');
  }

  const projectID = "narasingapadu-temple"; // The Firebase / Google Cloud project ID
  const recaptchaKey = "6LeFcqUtAAAAAPdOJlPObUyZAcq3LPEZpc0L960L"; // The reCAPTCHA Enterprise Site Key

  const projectPath = client.projectPath(projectID);
  
  const requestBody = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };

  try {
    const [response] = await client.createAssessment(requestBody);

    if (!response.tokenProperties.valid) {
      console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`);
      throw new HttpsError('permission-denied', `reCAPTCHA token is invalid: ${response.tokenProperties.invalidReason}`);
    }

    if (response.tokenProperties.action === action) {
      const score = response.riskAnalysis.score;
      console.log(`The reCAPTCHA score is: ${score}`);
      // Reject if the score indicates a bot (adjust threshold as needed, e.g., < 0.5)
      if (score < 0.5) {
          throw new HttpsError('permission-denied', 'reCAPTCHA score too low. Bot detected.');
      }
      return { success: true, score: score };
    } else {
      console.log(`The action attribute in your reCAPTCHA tag does not match the action you are expecting to score`);
      throw new HttpsError('invalid-argument', 'Action mismatch.');
    }
  } catch (e) {
    console.error("Error creating assessment", e);
    throw new HttpsError('internal', 'An error occurred while verifying the reCAPTCHA token.');
  }
});
