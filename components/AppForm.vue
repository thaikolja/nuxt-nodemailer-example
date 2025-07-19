<script lang="ts" setup>
  const name    = ref( '' )
  const email   = ref( '' )
  const message = ref( '' )

  const isSubmitting  = ref( false )
  const wasSent       = ref( false )
  const serverMessage = ref( '' )

  const submitForm = async () => {
    if ( isSubmitting.value ) return

    isSubmitting.value = true

    serverMessage.value = ''

    try {
      const data = await $fetch( '/api/send', {
        method: 'POST',

        body: {
          name:    name.value,
          email:   email.value,
          message: message.value
        }
      } )

      if ( data.sent ) {
        wasSent.value = true
        serverMessage.value = data.message
      } else {
        serverMessage.value = data.message
      }

    } catch ( error: any ) {
      console.error( 'Error submitting form: ', error )

      serverMessage.value = error.message as string
    } finally {
      isSubmitting.value = false
    }
  }

  const resetForm = () => {
    name.value          = ''
    email.value         = ''
    message.value       = ''
    wasSent.value       = false
    serverMessage.value = ''
  }
</script>

<template>
  <div>
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

    <form v-else action="/" method="post" class="mb-6" @submit.prevent="submitForm">
      <div class="row">
        <label for="user-name">Name</label>
        <input id="user-name" v-model="name" name="name" type="text" placeholder="Enter your name..." required>
      </div>

      <div class="row">
        <label for="user-email">E-Mail Address</label>
        <input id="user-email" v-model="email" name="email" type="email" placeholder="Enter your email address..." required>
      </div>

      <div class="row">
        <label for="user-message">Message</label>
        <textarea id="user-message" v-model="message" name="message" class="min-h-32" placeholder="Enter your message..." required />
      </div>

      <div v-if="serverMessage && !wasSent" class="p-4 mb-8 text-center bg-red-900 text-red-300">
        {{ serverMessage }}
      </div>

      <div v-if="isSubmitting" class="text-center mb-10">
        <Icon name="svg-spinners:3-dots-scale" size="48" />
        <p>Sending Message...</p>
      </div>

      <div id="buttons" class="flex items-center justify-between">
        <button type="submit" class="bg-cyan-800 hover:bg-cyan-600 active:bg-cyan-800" :disabled="isSubmitting">
          Send Message
        </button>

        <button type="reset" class.bind="bg-neutral-600 hover:bg-neutral-500 active:bg-neutral-700">
          Reset Form
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="postcss" scoped>
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

  button:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
</style>