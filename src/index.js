document.addEventListener('DOMContentLoaded', () => {

  EventHelpers.showLoginPage()

  // Using data-value attribute to make selecting elements uniform
  MAINDIV.addEventListener('click', e => {
    e.preventDefault()
    // console.log(e.target)
    const clicked = e.target.dataset.value
    if (clicked === "sign-in") {
      const emailInput = document.querySelector("input[data-value='email-input']").value
      EventHelpers.findProfile(emailInput)
    }else if (clicked === "create-user") {
      const firstName = document.querySelector("input[data-value='first-name']").value
      const lastName = document.querySelector("input[data-value='last-name']").value
      const email = document.querySelector("input[data-value='email']").value
      EventHelpers.createProfile({firstName: firstName, lastName: lastName, email: email})
    }else if (clicked === "back-to-sign-in") {
      EventHelpers.showLoginPage()
    }else if (clicked === "home") {
      EventHelpers.findProfile(User.all[0].email)
    }else if (clicked === "create-event") {
      const eventInput = document.querySelector("input[data-value='create-event-input']").value
      const userId = parseInt(e.target.dataset.userid)
      EventHelpers.createEvent(eventInput, userId)
    }else if (clicked === "delete-user-event") {
      const eventId = parseInt(e.target.dataset.eventid)
      EventHelpers.deleteEvent(eventId)
    }else if (clicked === "show-user-event") {
      const eventId = parseInt(e.target.dataset.eventid)
      EventHelpers.showEventMedia(eventId)
    }else if (clicked === "slide-show") {
      const eventId = parseInt(e.target.dataset.eventid)
      EventHelpers.showSlideShow(eventId)
    }
  })

})
