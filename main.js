// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modelError = document.querySelector('#modal')
const likeHearts = document.querySelectorAll('.like-glyph')
const buttonsLike = document.querySelectorAll('li.like');
for (const buttonLike of buttonsLike){
buttonLike.addEventListener('click', ()=>{
  mimicServerCall().then(() => {
    const likeHearts = buttonLike.querySelector('.like-glyph')
    likeHearts.textContent = FULL_HEART
    likeHearts.classList.add('activated-heart')
  }).catch((error) => {
      modelError.classList.remove('hidden')
      modelError.querySelector('p#modal-message').textContent = error
      console.log(error)
      setTimeout(() => {
      modelError.classList.add('hidden')
      }, 3000)
       })
    })
  }

  for (const likeHeart of likeHearts) {
    likeHeart.addEventListener('click', () => {
      if (likeHeart.textContent === FULL_HEART) {
        likeHeart.textContent = EMPTY_HEART
        likeHeart.classList.remove('activated-heart')
      }
    })
  }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}