/* hero */

const heroSwiper = new Swiper('.hero__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  scrollbar: {
    hide: true,
  }
});

/* sale */

const saleSlider = new Swiper('.sale__swiper', {
  slidesPerView: 4,
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".sale__next",
    prevEl: ".sale__prev",
    disabledClass: "sale__btn--disabled"
  },
  scrollbar: {
    hide: true
  }
});

/* product */

const productSlider = new Swiper('.product__swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".product__next",
    prevEl: ".product__prev",
    disabledClass: "product__btn--disabled"
  },
  scrollbar: {
    hide: true
  }
});

/* product__foto-swiper */

const productfotoSlider = new Swiper('.product__foto-swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".product__foto-next",
    prevEl: ".product__foto-prev",
    disabledClass: "product__foto-btn--disabled"
  },
  scrollbar: {
    hide: true
  }
});
