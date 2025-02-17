async function getData() {
  try {
    let res = await fetch("https://67964d45bedc5d43a6c4db00.mockapi.io/api/db1/data/1");
    if (res.status == 200) {
      let data = await res.json();
      data.db.slider.slider_banner.map((elem) => {
        document.querySelector("#home-slider-banner .swiper-wrapper").innerHTML += `
        <div class="swiper-slide bg-img height-300 position-relative" style="background-image: url(${elem.url_img})">
          <div class="text-center position-absolute bottom-0 w-100 bg-body-secondary bg-opacity-50 pb-3">
            <p class="fw-bold txt-5">${elem.title}</p>
            <a href="#" class="btn btn-outline-light">بیشتر</a>
          </div>
        </div>
        `;
      });
      data.db.slider.slider_banner_brands.map((elem) => {
        document.querySelector("#home-slider-banner-brands .swiper-wrapper").innerHTML += `
        <div class="swiper-slide rounded-3 overflow-hidden height-300 text-center">
          <img src="${elem.img_url}" class="object-fit-cover rounded-3">
        </div>
        `;
      });
      data.db.product.big_sale.map((elem) => {
        document.querySelector("#home-slider-sale .swiper-wrapper").innerHTML += `
        <div class="swiper-slide bg-body-tertiary rounded border border-red-400 text-center p-1 d-flex flex-column align-items-center" style="height: 300px;">
          <div>
            <img src="${elem.img_url}" class="img-thumbnail border-red-100" alt="" />
          </div>
          <div class="w-100 h-100 d-flex justify-content-between flex-column gap-0">
            <p class="txt-5">${minNameSlider(elem.title)}</p>
            ${priceOff(elem.sale, elem.price)}
          </div>
        </div>`;
      });
      data.db.product.product.map((elem) => {
        document.querySelector("#home-product").innerHTML += `
        <div class="p-2 col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
          <div>
            <img src="${elem.img_url}" class="img-thumbnail border-0" alt="" />
          </div>
          <div class="w-100 d-flex justify-content-between flex-column gap-0">
            <p class="txt-5">${minName(elem.title)}</p>
            ${priceOff(elem.sale, elem.price)}
          </div>
        </div>
        `;
      });
    } else {
      throw new Error(`error: ${res.status}`);
    }
  } catch (err) {
    console.log(err);
  }
}
getData();
function minNameSlider(name) {
  return name.slice(0, 25) + "...";
}
function minName(name) {
  return name.slice(0, 45) + "...";
}
function minPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function priceOff(sale, price) {
  if (sale == "" || sale == 0) {
    return `<p class="txt-5 text-end">${minPrice(price)} <smal>T</smal></p>`;
  } else {
    return `
    <div class="d-flex p-0 flex-column gap-0 align-items-end position-relative">
      <p class="txt-5 text-end p-0 m-0">${minPrice((price * sale) / 100)} <smal>T</smal></p>
      <p class="fw-lighter text-end text-decoration-line-through text-gray p-0 m-0" style="font-size: 10px;">${minPrice(price)}</p>
      <span class="p-1 badge rounded-pill bg-red text-light fw-lighter position-absolute top-right-0">${sale}%</span>
    </div>
    `;
  }
}
