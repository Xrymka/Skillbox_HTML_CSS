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
    iconImageHref: 'subtract.svg',
    iconImageSize: [28, 40]
  });
  myMap.geoObjects.add(myPlacemark);
}

/* Validation */
var selector = document.querySelector("input[type='tel");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.form__request', {
  rules: {
    email: {
      required: true,
      email: true
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
      maxLength: 20
    },
  },
});
