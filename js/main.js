$(document).ready(function(){
    // Выплывание бургер меню
    $('.header-burger__menu').on('click', () => {
        $('.header-burger__menu_active').toggleClass('active_burger');
        $('.header-burger__menu').toggleClass('active_menu');
    })
    // Слайдер преимуществ
    let featureIndexActive = 1 // Номер активного элемента
    let animationSpeed = 200;  // Ожидаемая продолжительность анимации в ms
    let disabledClick  = false;
    $('#features__left-arrow').on('click oanimationend', function(event) {
        $('#features__item-'+featureIndexActive).fadeOut(animationSpeed)
        event.stopPropagation();
        // Если нажатие заблокировано
        if (disabledClick  === true) {
          return false;
        }
        // Блокируем нажание
        disabledClick = true;
        // Разблокируем нажатие когда анимация (предположительно) должна (предположительно) завершится
        setTimeout(function () {
            disabledClick = false;
        }, animationSpeed);
        // Проверка на первый элемент 
        if(featureIndexActive == 1) {
            featureIndexActive = 4 
        }
        else {
            featureIndexActive -= 1
        }
        $('#features__item-'+featureIndexActive).delay(animationSpeed).fadeIn(animationSpeed)
    })
    $('#features__right-arrow').click(function(event) {
        $('#features__item-'+featureIndexActive).fadeOut(animationSpeed)
        event.stopPropagation();
        // Если нажатие заблокировано
        if (disabledClick  === true) {
          return false;
        }
        // Блокируем нажание
        disabledClick = true;
        // Разблокируем нажатие когда анимация (предположительно) должна (предположительно) завершится
        setTimeout(function () {
            disabledClick = false;
        }, animationSpeed);
        // Проверка на последний элемент 
        if(featureIndexActive == 4) {
            featureIndexActive = 1 
        }
        else {
            featureIndexActive += 1
        }
        $('#features__item-'+featureIndexActive).delay(animationSpeed).fadeIn(animationSpeed)
    })
    // Появление Popap'a
    $('.popup').hide();
    $(".catalog__button").click(function (e) {
        // Присваивание значений карточки
        var title = $(this).parent('.catalog__price').parent('.catalog__item').find('.catalog__item-title').text()
        var description = $(this).parent('.catalog__price').parent('.catalog__item').find('.catalog__item-description').text()
        var img = $(this).parent('.catalog__price').parent('.catalog__item').find('.catalog__item-img').attr('src')
        // Присваивание значений Popapу из карточки
        $('.popup__item-img').attr('src', img)
        $('.popup__item-title').html(title)
        $('.popup__item-description').html(description)
        $('.popup').show();

    });
    // Скрывание Popap'a
    $(".popup_close").click(function () {
        $('.popup').hide();
    });
    // Появление Info features
    $('.features__info').hover(function(e) {
        $(this).siblings('.features__info-description').fadeToggle(300)
    })
    // Присваивание Id каталогу
    var catalog = $('.catalog__item')
    catalog.each(function(i, elem) {
        $(this).attr('id', 'catalog__item-'+i);
        $(this).hide()
    })
        if ($(window).width() > '768') {numbOfElem = 7;}
        else if (($(window).width() > '480')) {numbOfElem = 3;}
        else {numbOfElem = 0;}
    showCatalogItem (numbOfElem)
    $('.catalog__more').click(function(event) {
        event.preventDefault()
        if ($(window).width() > '768') {numbOfElem += 8}
        else if (($(window).width() <= '768')||($(window).width() > '480')) {numbOfElem += 4}
        showCatalogItem (numbOfElem)
        console.log('Функция кнопки еще')
    })
    // Отображение элeменетов каталога 
    function showCatalogItem (numbOfElem) {
        for (var i = 0; i <= numbOfElem; i++) {
            $('#catalog__item-'+i).show()
        }
        console.log('Функция показа элнинтов')
    }
    // Отслеживание изменения размера
    $(window).on('widthChanged', showCatalogItem())
    // Слайдер каталога
    var catalogIndexActive = 0; // Номер активного элемента
    var catalogAnimationSpeed = 100;  // Ожидаемая продолжительность анимации в ms
    var disabledCatalogClick  = false;
    $('#catalog__left-arrow').on('click oanimationend', function(e) {
        $('#catalog__item-'+catalogIndexActive).fadeOut(catalogAnimationSpeed)
        e.stopPropagation();
        // Если нажатие заблокировано
        if (disabledCatalogClick  === true) {
          return false;
        }
        // Блокируем нажание
        disabledCatalogClick = true;
        // Разблокируем нажатие когда анимация (предположительно) должна (предположительно) завершится
        setTimeout(function () {
            disabledCatalogClick = false;
        }, catalogAnimationSpeed);
        // Проверка на первый элемент 
        if (catalogIndexActive == 0) {
            catalogIndexActive = 15 
        }
        else {
            catalogIndexActive -= 1
        }
        $('#catalog__item-'+catalogIndexActive).delay(catalogAnimationSpeed).fadeIn(catalogAnimationSpeed)
    })
    $('#catalog__right-arrow').click(function(e) {
        $('#catalog__item-'+catalogIndexActive).fadeOut(catalogAnimationSpeed)
        e.stopPropagation();
        // Если нажатие заблокировано
        if (disabledCatalogClick  === true) {
          return false;
        }
        // Блокируем нажание
        disabledCatalogClick = true;
        // Разблокируем нажатие когда анимация (предположительно) должна (предположительно) завершится
        setTimeout(function () {
            disabledCatalogClick = false;
        }, catalogAnimationSpeed);
        // Проверка на последний элемент 
        if (catalogIndexActive == 15) {
            catalogIndexActive = 0 
        }
        else {
            catalogIndexActive += 1
        }
        $('#catalog__item-'+catalogIndexActive).delay(catalogAnimationSpeed).fadeIn(catalogAnimationSpeed)
    })
})
