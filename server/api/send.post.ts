import { defineEventHandler, readBody } from '#imports'
import nodemailer                       from 'nodemailer'

export default defineEventHandler( async ( event ) => {
  const data = await readBody( event )

  const toEmail: string  = process.env.EMAIL_TO!
  const username: string = process.env.EMAIL_USERNAME!
  const password: string = process.env.EMAIL_PASSWORD!

  let sent    = false
  let message = ''

  const transporter = nodemailer.createTransport( {
    service: 'gmail',
    auth:    {
      user: username,
      pass: password
    }
  } )

  const mailOptions = {
    from:    username,
    replyTo: data.email,
    to:      toEmail,
    subject: 'A new email has arrived',
    html:    `<p>${data.message}</p>`,
    text:    data.message
  }

  try {
    await transporter.sendMail( mailOptions )
    sent    = true
    message = `Thank you for your message, ${data?.name}!`
  } catch ( e ) {
    console.log( e )
    message = 'An error has occurred while sending the email. Please try it again.'
    sent    = false
  }

  return {
    sent,
    message
  }
} )
