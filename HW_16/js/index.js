/* Select */
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
});

/* Map */
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
      center: [48.8722, 2.3542],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
      zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([48.8722, 2.3542], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/subtract.svg',
    iconImageSize: [28, 40]
  });
  myMap.geoObjects.add(myPlacemark);
}

/* Validation */
var selector = document.querySelector("input[type='tel");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.js-form', {
  rules: {
    email: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
  },
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
    },
  },

  messages: {
    name: {
      maxLength: 'Как Вас зовут? Максимум :value букв',
      minLength: 'Как Вас зовут? Минимум :value буквы',
      required: 'Как Вас зовут?'
    },
    email: {
      required:'Укажите Ваш e-mail',
      email: 'Укажите Ваш e-mail'
    },
    tel: {
      required:'Укажите Ваш телефон',
      tel: 'Укажите Ваш телефон',
      error: 'Укажите Ваш телефон'
    },
  },

  colorWrong: "#FF5C00"
});
