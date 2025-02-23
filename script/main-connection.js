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
      for (let i = 0; i < 3; i++) {
        if (i == 2 || i == 5 || i == 8) {
          document.querySelector("#home-categories").innerHTML += `
          <div class="col-11 p-0 pe-2 overflow-hidden row justify-content-around align-items-center border border-red-200 rounded-5" cu-height="150px">
            <div class="col-7 h-100 p-0">
              <div class="w-min bg-red text-light rounded-end-pill h-100 d-flex justify-content-center align-items-start flex-column ps-1 pe-3">
                <h3 class="fs-4 fw-bolder">${data.db.product.categories[i].faName}</h3>
                <!-- <p class="fw-light">توضیحات دسته بندی</p> -->
              </div>
            </div>
            <div class="ratio-cu ratio ratio-1x1 col overflow-hidden rounded-5 d-flex justify-content-center align-items-center" cu-height="130px">
              <img src="${data.db.product.categories[i].thumbnail}" class="object-fit-cover rounded-2" alt="" />
            </div>
          </div>
        `;
        } else {
          document.querySelector("#home-categories").innerHTML += `
          <div class="col-11 col-md-5 p-0 pe-2 overflow-hidden row justify-content-around align-items-center border border-red-200 rounded-5" cu-height="150px">
            <div class="col-7 h-100 p-0">
              <div class="w-min bg-red text-light rounded-end-pill h-100 d-flex justify-content-center align-items-start flex-column ps-1 pe-3">
                <h3 class="fs-4 fw-bolder">${data.db.product.categories[i].faName}</h3>
                <!-- <p class="fw-light">توضیحات دسته بندی</p> -->
              </div>
            </div>
            <div class="ratio-cu ratio ratio-1x1 col overflow-hidden rounded-5 d-flex justify-content-center align-items-center" cu-height="130px">
              <img src="${data.db.product.categories[i].thumbnail}" class="object-fit-cover rounded-2" alt="" />
            </div>
          </div>
        `;
        }
      }

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

      data.db.product.brands.map((elem) => {
        document.querySelector("#home-slider-brands .swiper-wrapper").innerHTML += `
        <div class="swiper-slide ratio ratio-16x9">
          <img src="${elem.thumbnail}" class="w-100 object-fit-cover" alt="">
        </div>`;
      });
    } else {
      document.body.innerHTML = `<h1 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">${res.status}</h1>`;
      document.body.innerHTML += `<h2 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">${checkErr(Number(res.status))}</h2>`;
    }
  } catch (err) {
    document.body.innerHTML = `<h1 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">${res.status}</h1>`;
    document.body.innerHTML += `<h2 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">${checkErr(Number(res.status))}</h2>`;
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
function checkErr(err) {
  switch (err) {
    case 400:
      return "نا موفق در ارسال درخواست به سرور";
    case 403:
      return "دسترسی به این صفحه مسدود است";
    case 404:
      return "صفحه مورد نظر یافت نشد";
    case 408:
      return "طولانی بودن زمان درخواست";
    case 500:
      return "عدم اتصال به سرور";
    case 502:
      return "مشکلی در سرور به وجود امده است";
    case 503:
      return "در حال به روز رسانی وبسایت هستیم";
    case 504:
      return "مشکلی از سمت سرور پیش آمده است";
  }
}
