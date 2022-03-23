import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["email"]

  submit(e) {
    e.preventDefault()

    fetch("http://localhost:3001/users", {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: {
          email: this.emailTarget.value
        }
      })
    }).then(response => {
      console.log(response)
    })
  }
}
