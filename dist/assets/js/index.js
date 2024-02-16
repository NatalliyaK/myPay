
document.addEventListener("DOMContentLoaded", function (event) {
  const contentList = document.querySelector('.content__icon-list');
  const contentTabs = document.querySelector('.content__tabs');
  const element2 = document.querySelector('.js-choice2');
  let input = document.querySelectorAll('input');
  let tds = document.querySelectorAll('.valueInput');
  const valueInputCrMob = document.querySelector('.valueInputCr__mob');
  let tdValue = document.querySelector('.valueInputCr');

  if(contentList && contentTabs) {
    const contentItem = contentList.querySelectorAll('.content__item');
    const contentTabsItem = contentTabs.querySelectorAll('.content__tabs-item');

      contentItem.forEach((i, index) => {
          i.addEventListener('click', () => {
              if(i.classList.contains('active')) {
                  return
              }

              contentItem.forEach(i => {
                  i.classList.remove('active');
              })
              i.classList.add('active')

              contentTabsItem.forEach(i => {
                  i.style.display = 'none';
              })

              contentTabsItem[index].style.display = 'block'
          })
      } )

  }

  if(element2) {
    const choices = new Choices(element2, {
      searchEnabled: false,
      itemSelectText: "",
      shouldSort: false
    });
  }

  //открытие po-pop, блок скрола и прыжка контента

    const btn = document.querySelectorAll('.btn');
    const popupWrapper = document.querySelector('.po-pop__wrapper');
    const popupModal = document.querySelector('.po-pop__modal');
    const closeModal = document.querySelector('.po-pop__modal-close');

// Функция для закрытия модального окна
    function closePopup() {
        if(popupWrapper && popupModal) {
            popupWrapper.style.display = 'none';
            popupModal.style.transform = 'scale(0)';
            input.forEach(el => {
              el.value = '';
            })

          tds.forEach(function(td) {
            td.textContent = ' RUB';
          });

          valueInputCrMob.textContent = ' RUB';

          tdValue.textContent = ' RUB';

            enableScroll();
        }
    }

    function disableScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        document.documentElement.style.setProperty('scroll-behavior', 'hidden');
        document.documentElement.classList.add('overflow')
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    function enableScroll() {
        document.documentElement.style.setProperty('scroll-behavior', null);
        document.documentElement.classList.remove('overflow');
        window.onscroll = function () { };
    }

    if (btn) {
        btn.forEach(el => {
            el.addEventListener('click', ()=> {
                if(popupWrapper && popupModal) {
                    popupWrapper.style.display = 'flex';
                    popupModal.style.transform = 'scale(1)';
                    disableScroll();
                }
            })
        })
    }

    if(closeModal) {
        closeModal.addEventListener('click', closePopup);
    }

    if(popupWrapper) {
        popupWrapper.addEventListener('click', (event) => {
            if(event.target === popupWrapper) {
                closePopup();
            }
        })
    }

    // динамическая кнопка

  let inputPay = document.querySelector('.input-pay');
  let inputPayCr = document.querySelector('.input-payCr');


  inputPay.addEventListener('input', function() {
    // Обновление значения в каждой ячейке таблицы
    tds.forEach(function(td) {
      td.textContent = inputPay.value + ' RUB';
    });
  });

  // оплата крипты (сумма)

  inputPayCr.addEventListener('input', function() {
    // Обновление значения в таблице
    tdValue.textContent = inputPayCr.value + ' RUB';
  });

  // оплата крипты (выбор)

  let select = document.querySelector('.js-choice2');
  let nameCr = document.querySelector('.nameCr');

  select.addEventListener('change', function() {
    // Обновление значения в таблице
    nameCr.textContent = select.value;
  });

  // оплата крипты моб (сумма)

    inputPayCr.addEventListener('input', function() {
    // Обновление значения в таблице
      valueInputCrMob.textContent = inputPayCr.value + ' RUB';
  });

  // оплата крипты моб (выбор)
  const nameCrMob = document.querySelector('.nameCr__mob');
  select.addEventListener('change', function() {
    // Обновление значения в таблице
    nameCrMob.textContent = select.value;
  });

});