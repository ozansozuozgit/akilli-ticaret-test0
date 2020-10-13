const largeSliderImage = document.querySelector('#large-slider-img');
const mediumSliderImage = document.querySelector('#medium-slider-img-1');
const mediumSliderImage2 = document.querySelector('#medium-slider-img-2');

fetch(
  'https://api.unsplash.com/search/photos?query=furniture&orientation=landscape&per_page=3&client_id=I1WqnrUWcNPrZ4WQaT1o4SheKtS8he1wUd-xAo0HdSg'
)
  .then((response) => {
    if (response.status !== 200) {
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      );
      return;
    }
    response.json().then((data) => {
      //   images.push(data);
      largeSliderImage.src = data.results[0].urls.regular;
      mediumSliderImage.src = data.results[1].urls.regular;
      mediumSliderImage2.src = data.results[2].urls.regular;

      console.log(data.results[2].urls.regular);
    });
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
