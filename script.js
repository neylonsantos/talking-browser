let btn = document.querySelector(".falar-btn")
let input = document.querySelector(".text-input")

btn.addEventListener("click", speakBrowser)

input.addEventListener("keypress", speakBrowserOnKeyPress)

function speakBrowserOnKeyPress(event) {
  if (event.key === "Enter") {
    speakBrowser()
  }
}

function speakBrowser() {
  let text = document.querySelector(".text-input").value
  let voice = new SpeechSynthesisUtterance(text)

  voice.lang = "pt-BR"
  voice.pitch = 1
  voice.volume = 1
  voice.rate = 1

  speechSynthesis.speak(voice)
}