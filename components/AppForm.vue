<!--
  - This file belongs to the Nuxt 3 Nodemailer Example.
  - It is meant to show how to send server-side emails
  - via SMTP using the Nodemailer module and Nuxt 3.
  - Comments allow to follow every step of the development;
  - for a version without comments, check out the "uncommented"
  - branch of the repository listed below.
  -
  - @author     Kolja Nolte <https://www.kolja-nolte.com>
  - @license    MIT
  - @copyright  2025 by Kolja Nolte
  - @see        {@link https://github.com/thaikolja/nuxt-3-nodemailer-example}
-->

<script lang="ts" setup>
  /**
   * @file /components/AppForm.vue
   * @description This component is the heart of our application's user interface.
   * It provides a form for users to enter their name, email, and a message.
   * When submitted, it sends this data to our server-side API endpoint.
   */

  /*
  * We need a few "reactive" variables to hold the state of our form.
  * `ref` creates a variable that Vue can watch for changes. When the variable
  * changes, Vue will automatically update the parts of our webpage that use it.
  */

  // 1. Form fields: We create a variable for each input to store the user's text.
  const name    = ref( '' )
  const email   = ref( '' )
  const message = ref( '' )

  // 2. Form state: These booleans will help us show the right messages to the user.
  const isSubmitting  = ref( false ) // Is the form currently being sent?
  const wasSent       = ref( false ) // Was the form successfully sent?
  const serverMessage = ref( '' ) // A message from the server (e.g., an error).

  /**
   * @function submitForm
   * @async
   * @description This function is called when the user clicks the "Send Message" button.
   * It's an "async" function, which means it can perform tasks (like network requests)
   * in the background that usually take some time to complete without freezing the browser.
   */
  const submitForm = async () => {
    // Don't allow the user to submit the form again while it's already sending.
    if ( isSubmitting.value ) return

    // Set our state to "submitting" to provide visual feedback (e.g., disable the button).
    isSubmitting.value = true

    // Clear any previous server messages.
    serverMessage.value = ''

    // To handle errors properly, we use a `try/catch` block
    try {
      // `$fetch` is a powerful Nuxt helper for making network requests.
      // We send the form data to our API endpoint located at `/server/api/send.post.ts`.
      // Note that the file contains `.post`, which means it only accepts POST requests.
      const data = await $fetch( '/api/send', {
        // We use the POST method to send data.
        method: 'POST',

        // The `body` contains the data we want to send. We create an object
        // with the values from our form fields.
        body: {
          name:    name.value, // The entered name (field 1)
          email:   email.value, // The entered email (field 2)
          message: message.value // The entered message (field 3)
        }
      } )

      // The back-end lets us know whether the email was sent as `true` or `false`
      wasSent.value = data.sent as boolean

      // The back-end that tell a human-readable message whether the email was sent or not
      serverMessage.value = data.message as string

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch ( error: any ) {
      // If something goes wrong (e.g., network error or server error),
      // we'll catch the error here and adjust the output message, which is
      // provided by Nodemailer itself in the `error` object.
      console.error( 'Error submitting form: ', error )

      serverMessage.value = error.message as string
    } finally {
      // This `finally` block runs whether the submission succeeded or failed.
      // We're done submitting, so we set this back to false.
      isSubmitting.value = false
    }
  }

  /**
   * @function resetForm
   * @description Resets all form fields and state variables to their initial values
   * (both in the HTML form an internally for the reactive variables).
   */
  const resetForm = () => {
    name.value          = ''
    email.value         = ''
    message.value       = ''
    wasSent.value       = false
    serverMessage.value = ''
  }
</script>

<template>
  <!-- This `div` will contain either the form or the success message. -->
  <div>
    <!--
      The Success Message (`v-if="wasSent"`)
      This block is only shown if our `wasSent` variable is true.
    -->
    <div v-if="wasSent" class="text-center p-8 bg-neutral-700">
      <h3 class="text-2xl font-bold mb-4">
        Message Sent!
      </h3>
      <p class="mb-6">
        {{ serverMessage }}
      </p>
      <button type="button" class="bg-cyan-500" @click="resetForm">
        Send Another Message
      </button>
    </div>

    <!-- If the form has not been sent or if the sending went wrong, we show the form nonetheless -->
    <form v-else action="/" method="post" class="mb-6" @submit.prevent="submitForm">
      <!-- Name Field -->
      <div class="row">
        <label for="user-name">Name</label>
        <!--
          `v-model="name"` is Vue's magic for two-way data binding.
          It links this input field directly to our `name` variable in the script.
          When the user types, `name` is updated. If we change `name` in our code,
          the input field will update automatically.
        -->
        <input id="user-name" v-model="name" name="name" type="text" placeholder="Enter your name..." required>
      </div>

      <!-- Email Field -->
      <div class="row">
        <label for="user-email">E-Mail Address</label>
        <input id="user-email" v-model="email" name="email" type="email" placeholder="Enter your email address..." required>
      </div>

      <!-- Message Field -->
      <div class="row">
        <label for="user-message">Message</label>
        <textarea id="user-message" v-model="message" name="message" class="min-h-32" placeholder="Enter your message..." required />
      </div>

      <!-- This is the place where we'll display an error message if the form was not sent successfully -->
      <div v-if="serverMessage" class="p-4 mb-8 text-center bg-red-900 text-red-300">
        {{ serverMessage }}
      </div>

      <!-- Display a spinner and a message attempting to send the email -->
      <div v-if="isSubmitting" class="text-center mb-10">
        <Icon name="svg-spinners:3-dots-scale" size="48" />
        <p>Sending Message...</p>
      </div>

      <!-- Form Buttons -->
      <div id="buttons" class="flex items-center justify-between">
        <button type="submit" class="bg-cyan-800 hover:bg-cyan-600 active:bg-cyan-800" :disabled="isSubmitting">
          Send Message
        </button>

        <button type="reset" class="bg-neutral-600 hover:bg-neutral-500 active:bg-neutral-700">
          Reset Form
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="postcss" scoped>
  /*
   * This styles each "row" of the form (the label and the input).
   * `@apply` is a PostCSS feature that lets us use multiple Tailwind utility
   * classes without cluttering the HTML.
   */
  .row {
    @apply mb-10;

    label {
      @apply block mb-2 font-bold;
    }

    textarea,
    input {
      @apply text-neutral-900 text-base px-2 py-1 w-full bg-neutral-300 rounded-sm;
    }
  }

  button {
    @apply px-4 py-1 font-semibold transition-all;
  }

  /* This style is applied to a button when it is disabled */
  button:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
</style>
