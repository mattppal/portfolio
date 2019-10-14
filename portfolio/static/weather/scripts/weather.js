const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
console.log(DJANGO_STATIC_URL);
console.log('test')
const updateUI = (data) => {

    // destructure properties
    const {cityDets, weather} = data;
    console.log(cityDets, weather)

    // update details template
    details.innerHTML = `
    <div class="text-muted text-uppercase text-center detail">
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
        </div>
    </div>
    `;

    // update nght/day & icon images
    const iconSrc = DJANGO_STATIC_URL + `weather/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // ternary operator
    let timeSrc = weather.IsDayTime ? DJANGO_STATIC_URL + 'weather/day.svg' : DJANGO_STATIC_URL + 'weather/night.svg';
    time.setAttribute('src', timeSrc);

    // remove d-none class if present

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    };

};

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets,
        weather
    };

};


cityForm.addEventListener('submit', e => {
    e.preventDefault();
    
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui w/ the new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
    
});

