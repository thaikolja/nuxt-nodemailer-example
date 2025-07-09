//noinspection JSUnusedGlobalSymbols

/**
 * This file belongs to the Nuxt 3 Nodemailer Example.
 * It is meant to show how to send server-side emails
 * via SMTP using the Nodemailer module and Nuxt 3.
 * Comments allow to follow every step of the development;
 * for a version without comments, check out the "uncommented"
 * branch of the repository listed below.
 *
 * @author     Kolja Nolte <https://www.kolja-nolte.com>
 * @license    MIT
 * @copyright  2025 by Kolja Nolte
 * @see        {@link https://github.com/thaikolja/nuxt-3-nodemailer-example}
 */

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
 * @returns {Promise<{ sent: boolean, message: string, status: number }>} An object containing the status of the email sending operation
 * @throws {Error} If there is an error while sending the email, it will be logged to the console
 */
export default defineEventHandler( async ( event ) => {
  /*
   * Alright, let's define some variables. Most of them are reactive (`ref()`), which gives us the
   * possibility to change their value later on (in JS, `const` can't be overwritten, actually).
   * We start with the body—the data that was sent through the form—and also retrieve our email
   * username and password from our `.env` file, so make sure this is set up.
   */

  // The `data` variable will hold the body of the request, which contains all form fields' values
  const data = await readBody( event )

  // The `fromEmail` variable will hold the user's email address
  const fromEmail = data.user_email

  /*
   * The following three variables are environment variables that we set in our `.env` file.
   * Keep this file secret, as it contains sensitive information. Do not upload it to GitHub or any public repository.
   * To see the structure, you can copy the `.env.example` file and rename it to `.env`, and then fill in your own values.
   */
  const toEmail: string  = process.env.EMAIL_TO!
  const username: string = process.env.EMAIL_USERNAME!
  const password: string = process.env.EMAIL_PASSWORD!

  // The `sent` variable which we'll give to the front-end so it knows if all worked out or not
  const sent = ref( false )

  // We want to inform the user whether the email was sent or not with a message
  const message = ref( '' )

  /* Now, let's create a Nodemailer transporter using Gmail's service */
  const transporter = nodemailer.createTransport( {
    // As said in the `README.md`, this example uses Google Mail
    service: 'gmail',

    // We need to provide the authentication details for the email account, obviously */
    auth: {
      // The username and password are taken from the environment variables
      user: username, // Can be with `@gmail.com` or without—Google doesn't care

      // The app-specific password you should've created. If not, you'll find the link in the `README.md`
      pass: password // No, NOT your Gmail password!
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

    // The message as HTML
    html: `<p>${data.message}</p>`,

    // If HTML is not supported, the message will be sent as plain text
    text: data.message
  }

  // A'ight, let's give this thing a literal `try`
  try {
    // This is where we send the email using the transporter and the mail options we defined earlier
    await transporter.sendMail( mailOptions )

    // If it all went well, we set the `sent` variable to `true` to later tell the front-end about it
    sent.value = true

    // Because we're nice, we thank the user for sending us a message :)
    message.value = `Thank you for your message, ${data?.user_name}!`

    // Eh, a `catch` means something went wrong. We tell the front-end by setting `sent` to `false`
  } catch ( e ) {
    // If there is an error, we log it to the console for debugging purposes
    console.log( e )

    // Set the message to be an error message
    message.value = 'An error has occurred while sending the email. Please try it again.'

    // Set our variable to `false`
    sent.value = false
  }

  // The moment of truth! We return an object containing the `sent` status and the HTTP response status
  return {
    // (bool): Whether the email was sent or not
    sent: sent.value,

    // (string): Either a success or error message to display
    message: message.value,

    // (number): HTTP code of the response **of this API endpoint**, not the Gmail server
    status: getResponseStatus( event )
  }
} )
