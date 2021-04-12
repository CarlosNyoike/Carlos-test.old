//parent = justify.js

import React

function DIV6(){
  return(
    <div class="col-lg-6">
      <h3>Join Our Newsletter</h3>
      <p>Subscribe to our newsletter to receive emails about new template releases and updates</p>
      <form action="https://bootstrapmade.com/newsletter/subscribe/" method="POST" class="php-email-form" id="newsletter-form"> <input type="hidden" name="source" value="form"> <input type="hidden" name="name" value=""> <input type="email"
          class="mb-3" name="email" title="Enter your Email address" placeholder="Enter your Email address" required> <input type="submit" value="Subscribe" title="Subscribe">
        <div class="loading mt-3"></div>
        <div class="error-message"></div>
        <div class="sent-message">Your subscription request has been sent. Please click on the confirmation link that we sent to your Email.</div>
      </form>
    </div>

  )
}
export default DIV6
