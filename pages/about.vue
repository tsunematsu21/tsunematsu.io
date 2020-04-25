<template>
  <div class="has-text-centered">
    <h1 class="title"><i class="fas fa-running" /> About Me</h1>
    <p class="subtitle">
      2B || !2B
    </p>
    <div id="avater" :style="`background-image: url(${avatar_url})`" />
    <div class="has-text-left">
      <div class="card has-background-main" style="padding-top: 96px;">
        <div class="card-content">
          <section class="content has-text-centered">
            <h2><i class="fas fa-at" />tsunematsu21</h2>
            <p>
              I'm Japanese coke drinking IT infrastructure engineer based in
              Tokyo, Japan.<br />
            </p>
            <small>Follow me!</small>
            <SocialButtons
              buttons-classes="justify-content-center"
              button-classes="is-black is-outlined is-small"
              is-icon-only="true"
            />
            <hr />
            <div class="columns">
              <div class="column is-flex">
                <section>
                  <h3><i class="fas fa-walking" /> Bio</h3>
                  <p class="has-text-left">
                    On January 1st, 1994, I was born in the jungle and raised by
                    a gorilla. One day, I acquired wisdom by eating the
                    legendary banana and decided become to awesome engineer that
                    useful for people.<br />
                    "<em>Power of the Gorilla!</em>" is my favorite phrase.
                  </p>
                </section>
              </div>
              <div class="column is-flex">
                <section>
                  <h3><i class="fas fa-lightbulb" /> Hobby</h3>
                  <p class="has-text-left">
                    My hobby is developing systems and software. On this site,
                    showcase my work made as a hobby, so I want you to see my
                    portfolio.
                  </p>
                </section>
                <router-link
                  to="portfolio"
                  class="button is-primary is-outlined"
                >
                  <span class="icon">
                    <i class="fas fa-running" />
                  </span>
                  <span>Show my Portfolio</span>
                </router-link>
              </div>
              <div class="column is-flex">
                <section>
                  <h3><i class="fas fa-envelope" /> Get in touch</h3>
                  <p class="has-text-left">
                    Want to get in touch? I'm not currently looking for a job,
                    but welcome feedback and chat.
                  </p>
                </section>
                <router-link to="contact" class="button is-primary is-outlined">
                  <span class="icon">
                    <i class="fas fa-envelope" />
                  </span>
                  <span>Say hello</span>
                </router-link>
              </div>
            </div>
            <hr />
            <h2>Details</h2>
            <div class="columns is-desktop">
              <div class="column">
                <section>
                  <h3 class="has-text-primary">
                    <i class="fas fa-briefcase" /> Work experience
                  </h3>
                  <ol class="has-text-left">
                    <li>Network programming with Python for SDN (OpenFlow)</li>
                    <li>
                      Database administration for Oracle, MySQL and PostgreSQL
                    </li>
                    <li>
                      Designing, constructing and maintaining the infrastructure
                      on AWS
                    </li>
                  </ol>
                </section>
              </div>
              <div class="column is-desktop">
                <section>
                  <h3 class="has-text-primary">
                    <i class="fas fa-user-secret" /> Special ability
                  </h3>
                  <p class="has-text-left">
                    I can transform into legendary warriors known as the Cure
                    Gorilla. With the assistance of creatures known as fairies,
                    use their physical powers and enhanced Banana to fight
                    against evil forces and organizations who create monsters to
                    bring misery to the Earth and further their plans.
                  </p>
                </section>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half is-desktop">
                <section>
                  <h4 class="has-text-primary">
                    <i class="fas fa-tools" /> Technical Skills
                  </h4>
                  <ul class="has-text-left">
                    <li>
                      <b>Programming:</b><br />
                      Ruby / Python / Node.js(TypeScript)
                    </li>
                    <li>
                      <b>Database:</b><br />
                      Oracle / MySQL / PostgreSQL / Amazon RDS / Amazon Aurora /
                      Amazon DynamoDB
                    </li>
                    <li>
                      <b>AWS:</b><br />
                      EC2 / RDS / S3 / ELB / CloudFront / Lambda / API Gateway /
                      Code Bros.
                    </li>
                    <li>
                      <b>IaC:</b><br />
                      Terraform / CloudFormation / Ansible / Serverspec / AWSpec
                    </li>
                    <li>
                      <b>Monitoring:</b><br />
                      Zabbix / Mackerel / CloudWatch
                    </li>
                    <li>
                      <b>Other:</b><br />
                      Git / Docker
                    </li>
                  </ul>
                </section>
              </div>
              <div class="column is-desktop">
                <section>
                  <h4 class="has-text-primary">
                    <i class="fas fa-brain" /> Currently learning
                  </h4>
                  <ul class="has-text-left">
                    <li>English</li>
                    <li>Micro Services</li>
                    <li>Golang</li>
                  </ul>
                </section>
                <br />
                <section>
                  <h4 class="has-text-primary">
                    <i class="fas fa-heart" />
                    Recommended PreCures
                  </h4>
                  <ul class="has-text-left">
                    <li>Cure Lemonade (Yes! PreCure 5)</li>
                    <li>Cure Sunny (Smile PreCure!)</li>
                    <li>Cure Diamond (DokiDoki! PreCure)</li>
                    <li>Cure Twinkle (Go! Princess PreCure)</li>
                    <li>Cure Macaron (Kirakira PreCure a la Mode)</li>
                  </ul>
                </section>
              </div>
              <div class="column is-desktop">
                <section>
                  <h4 class="has-text-primary">
                    <i class="fas fa-book-open" /> Scriptures
                  </h4>
                  <ul class="has-text-left">
                    <li>Baki the Grappler</li>
                    <li>Black Lagoon</li>
                    <li>Buso Renkin</li>
                    <li>The Drifting Classroom</li>
                    <li>Goodnight Punpun</li>
                    <li>The Ghost in the Shell</li>
                    <li>Hana No Zuborameshi</li>
                    <li>Hellsing</li>
                    <li>Oh My Goddess!</li>
                    <li>Otome no Teikoku</li>
                    <li>Shuden niwa Kaeshimasu</li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialButtons from '~/components/SocialButtons.vue'

export default Vue.extend({
  components: {
    SocialButtons
  },
  async asyncData({ $axios }) {
    const user = await $axios.$get('https://api.github.com/users/tsunematsu21')
    return {
      avatar_url: user.avatar_url
    }
  }
})
</script>

<style lang="scss" scoped>
#avater {
  position: relative;
  z-index: 2;
  width: 192px;
  height: 192px;
  background-size: cover;
  margin: 0px auto -96px;
  border-width: 8px;
  border-style: solid;
  border-color: white;
  border-image: initial;
  border-radius: 100%;
}

div.column.is-flex {
  flex-direction: column;
  > .button {
    margin-top: auto;
  }
}
</style>
