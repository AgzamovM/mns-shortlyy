const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');

const elUrlShortenerResults = document.querySelector('.url-shortener__results');

if(elUrlShortenerForm){
elUrlShortenerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elUrlShortenerResults.classList.add('url-shortener__results--open');
});
}

if(elUrlShortener){
 elUrlShortener.addEventListener('click', function (evt){
  if (evt.target.matches('.copy-button')){
    evt.target.textContent = 'Copied!';
    evt.target.classList.add('copy-button--copied');

    navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);
     
    setTimeout(function (){
      evt.target.textContent = 'Copy';
      evt.target.classList.remove('copy-button--copied');
    }, 1000);
  }
 });


}