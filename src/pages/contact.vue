<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <div class="box">
          <section class="content">
            <template v-if="hasError">
              <h3><i class="fas fa-skull-crossbones" /> Failed...</h3>
              <p>Error occurred...</p>
            </template>
            <template v-else>
              <h3><i class="fas fa-thumbs-up" /> Success</h3>
              <p>Thanks for your message!</p>
            </template>
          </section>
          <button class="button" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
    <app-section>
      <h1 class="title"><i class="fas fa-envelope" /> Get in touch</h1>
      <p>
        Want to get in touch? I'm not currently looking for a job, but welcome
        feedback and chat.<br />
        Fill out the form below and I will try my best to reply to you.
      </p>
    </app-section>
    <app-section class="is-small">
      <form @submit.prevent="submit">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">From</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  v-model="name"
                  class="input"
                  type="text"
                  placeholder="Name"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  v-model="email"
                  class="input"
                  type="email"
                  placeholder="Email"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Subject</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model="subject" class="input" type="text" required />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Message</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  v-model="message"
                  class="textarea"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary">
                  <span class="icon">
                    <i class="fas fa-paper-plane" />
                  </span>
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </app-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import AppSection from '~/components/AppSection.vue'

export default Vue.extend({
  components: {
    AppSection
  },
  data() {
    return {
      isActive: false,
      hasError: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      messageClass: ''
    }
  },
  methods: {
    async submit() {
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      const GOOGLE_FORM_ACTION =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeoSwm1nyLq9twZApkFpyI8pHcRM1eZsCO7VBadRk8SD8JL9A/formResponse'
      const params = new FormData()

      try {
        // Post to google form
        params.append('entry.1656591080', this.name)
        params.append('entry.2052484463', this.email)
        params.append('entry.1555034560', this.subject)
        params.append('entry.576767999', this.message)
        await axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, params)

        // Clear form
        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''

        this.hasError = false
      } catch (error) {
        this.hasError = true
      } finally {
        // Open modal window
        this.isActive = true
      }
    },
    closeModal() {
      this.isActive = false
    }
  }
})
</script>
