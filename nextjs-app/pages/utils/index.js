const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) {
  try {
    // Initialize the app with a service account, granting admin privileges
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
module.exports = admin.firestore();