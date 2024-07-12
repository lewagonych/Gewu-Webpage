// app/javascript/controllers/animation_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.observeElements()
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = this.element.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
  }
}
