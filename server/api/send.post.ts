/**
 * This file handles the sending of emails using Nodemailer.
 * It listens for POST requests to the `/api/send` endpoint, which our `<AppForm />`
 * component will call when the user submits the form. But before we get into the code,
 * let's import some necessary (and optional) modules and libraries.
 */

/* The first import is optional; it provides the IDE with type information */
import { defineEventHandler, readBody } from '#imports'

/* Even though Nuxt auto-imports a lot, on the server side, we still need to import things manually */
import { ref }                          from 'vue'

/* This is the main library we use to send emails */
import nodemailer                       from 'nodemailer'

/**
 * The main function that handles the POST request. The workflow is as follows:
 *
 * 1. Read the body of the request to get the user's email and message
 * 2. Create a Nodemailer transporter using Gmail's service
 * 3. Define the email options, including the sender, recipient, subject, and message
 * 4. Use the transporter to send the email
 * 5. Return the status of the email sending operation for the front-end to handle
 *
 * @returns {Promise<{ sent: boolean, status: number }>} An object containing the status of the email sending operation
 * @throws {Error} If there is an error while sending the email, it will be logged to the console
 */
export default defineEventHandler( async ( event ) => {
  /**
   * Alright, let's define some variables that we'll use later.
   */

  /* The `data` variable will hold the body of the request, which contains all form fields' values */
  const data = await readBody( event )

  /* The `fromEmail` variable will hold the user's email address */
  const fromEmail = data.user_email

  /*
   * The following three variables are environment variables that we set in our `.env` file.
   * Keep this file secret, as it contains sensitive information. Do not upload it to GitHub or any public repository.
   * To see the structure, you can copy the `.env.example` file and rename it to `.env`, and then fill in your own values.
   */
  const toEmail  = process.env.EMAIL_TOx!
  const username = process.env.EMAIL_USERNAME!
  const password = process.env.EMAIL_PASSWORD!

  /* The `sent` variable which we'll give to the front-end so it knows if all worked out or not */
  const sent = ref()

  const message = ref( '' )

  /* Now, let's create a Nodemailer transporter using Gmail's service */
  const transporter = nodemailer.createTransport( {
    // As said in the README.md, this example uses Google Mail
    service: 'gmail',

    // We need to provide the authentication details for the email account, obviously */
    auth: {
      // The username and password are taken from the environment variables
      user: username,

      // The app-specific password you should've created. If not, please read the README.md again
      pass: password // No, NOT your GMail password!
    }
  } )

  /* The transporter is set up, now we define what the email is actually about */
  const mailOptions = {
    // This field is pretty self-explanatory; it is the email address of the sender
    from: fromEmail,

    // Also self-explanatory; it is the email address of the recipient
    to: toEmail,

    // The subject of the email; it will be shown in the inbox
    subject: 'A new email has arrived',

    html: data.user_message,

    // Now, this is the beef of the email; it contains the actual message
    text: data.user_message

  }

  /* A'ight, let's give this thing a literal `try` */
  try {
    /* This is where we send the email using the transporter and the mail options we defined earlier */
    await transporter.sendMail( mailOptions )

    /* If it all went well, we set the `sent` variable to `true` to later tell the front-end about it */
    sent.value = true

    message.value = 'Thank you for your message.'

    /* Eh, a `catch` means something went wrong. We tell the front-end by setting `sent` to `false` */
  } catch ( e ) {
    /* If there is an error, we log it to the console for debugging purposes */
    console.log( e )

    message.value = 'An error has occurred while sending the email. Please try it again.'

    /* Set our variable to `false` */
    sent.value = false
  }

  /* The moment of truth! We return an object containing the `sent` status and the HTTP response status */
  return {
    sent: sent.value,

    message: message.value,

    // This one's giving us the HTTP status code whether the email was sent or not
    status: getResponseStatus( event )
  }
} )
