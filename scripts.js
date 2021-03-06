const largeSliderImage = document.querySelector('#large-slider-img');
const mediumImage = document.querySelector('.md-img-1');
const mediumImage2 = document.querySelector('.md-img-2');

fetch(
  'https://api.unsplash.com/search/photos?query=furniture&orientation=landscape&per_page=5&client_id=I1WqnrUWcNPrZ4WQaT1o4SheKtS8he1wUd-xAo0HdSg'
)
  .then((response) => {
    if (response.status !== 200) {
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      );
      return;
    }
    response.json().then((data) => {
      largeSliderImage.style.backgroundImage = `url(${data.results[0].urls.regular})`;
      mediumImage.style.backgroundImage = `url(${data.results[3].urls.regular})`;
      mediumImage2.style.backgroundImage = `url(${data.results[4].urls.regular})`;
    });
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
