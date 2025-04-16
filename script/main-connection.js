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
            <div class="swiper-slide product-modal-btn bg-body-tertiary border border-emerald-400 text-center height-250px p-1 d-flex flex-column align-items-center height-250px product-tab-sale">
              <div>
                <img src="${elem.img_url}" class="img-thumbnail border-emerald-100" alt="" />
              </div>
              <div class="w-100 h-100 d-flex justify-content-between flex-column gap-0">
                <p class="txt-5">${minNameSlider(elem.title)}</p>
                <p class="d-none">${elem.title}</p>
                <p class="d-none">${elem.desc}</p>
                <p class="d-none">${elem.cate}</p>
                <p class="d-none">${elem.brand}</p>
                ${priceOff(elem.sale, elem.price)}
              </div>
            </div>`;
      });
      for (let i = 0; i < data.db.product.categories.length; i++) {
        if ((i + 1) % 3 == 0) {
          document.querySelector("#home-categories").innerHTML += `
            <div class="col-10 p-0 pe-2 overflow-hidden row justify-content-around align-items-center border border-emerald-200 rounded-5 height-150px">
                <div class="col-7 h-100 p-0">
                    <div class="w-min bg-emerald text-light rounded-end-pill h-100 d-flex justify-content-center align-items-start flex-column ps-5 pe-3">
                        <h3 class="fs-4 fw-bolder">${data.db.product.categories[i].faName}</h3>
                    </div>
                </div>
                <div class="ratio-cu ratio ratio-1x1 col overflow-hidden rounded-5 d-flex justify-content-center align-items-center height-130px">
                    <img src="${data.db.product.categories[i].thumbnail}" class="object-fit-cover rounded-2" alt="" />
                </div>
            </div>
            `;
        } else {
          document.querySelector("#home-categories").innerHTML += `
            <div class="col-10 col-md-5 p-0 pe-2 overflow-hidden row justify-content-around align-items-center border border-emerald-200 rounded-5 height-150px">
                <div class="col-7 h-100 p-0">
                    <div class="w-min bg-emerald text-light rounded-end-pill h-100 d-flex justify-content-center align-items-start flex-column ps-5 pe-3">
                        <h3 class="fs-4 fw-bolder">${data.db.product.categories[i].faName}</h3>
                    </div>
                </div>
                <div class="ratio-cu ratio ratio-1x1 col overflow-hidden rounded-5 d-flex justify-content-center align-items-center height-130px">
                    <img src="${data.db.product.categories[i].thumbnail}" class="object-fit-cover rounded-2" alt="" />
                </div>
            </div>
            `;
        }
      }

      data.db.product.product.map((elem) => {
        document.querySelector("#home-product").innerHTML += `
            <div class="p-2 product-modal-btn hover-colcs shadow-hvr-box-gray col-5 col-lg-2 border border-emerald bg-gray-100 rounded-4">
              <div>
                <img src="${elem.img_url}" class="img-thumbnail border-0" alt="" />
              </div>
              <div class="w-100 d-flex justify-content-between flex-column gap-0">
                <p class="txt-5">${minName(elem.title)}</p>
                <p class="d-none">${elem.title}</p>
                <p class="d-none">${elem.desc}</p>
                <p class="d-none">${elem.cate}</p>
                <p class="d-none">${elem.brand}</p>
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
      productTab([...document.querySelectorAll(".product-modal-btn")]);
    } else {
      document.body.innerHTML += `
      <div class="toast align-items-center position-fixed top-0 mt-5 z-3 rounded-5 show" data-bs-theme="dark">
        <div class="toast-header rounded-top-5">
          <div class="p-3 rounded-circle bg-emerald me-1"></div>
          <strong>دیجی مارک</strong>
          <small class="text-body-secondary ms-auto">پیام خطا</small>
          <button class="btn-close me-2" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body text-light">${checkErr(res.status)}</div>
      </div>
      `;
    }
  } catch (err) {
    document.body.innerHTML += `
      <div class="toast align-items-center position-fixed top-0 mt-5 z-3 rounded-5 show" data-bs-theme="dark">
        <div class="toast-header rounded-top-5">
          <div class="p-3 rounded-circle bg-emerald me-1"></div>
          <strong>دیجی مارک</strong>
          <small class="text-body-secondary ms-auto">پیام خطا</small>
          <button class="btn-close me-2" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body text-light">${checkErr(err)}</div>
      </div>
      `;
    console.log(err);
  }
}
getData();

function productTab(target) {
  let PTab = document.createElement("div");
  PTab.classList = "product-modal position-fixed full-screen-fixed z-3";

  target.map((elem) => {
    elem.addEventListener("click", () => {
      PTab.innerHTML = `
      <div class="bg-glass w-100 h-100 rounded-3 z-2">
        <div class="p-2 p-md-3 col-10 col-md-9 h-100 overflow-auto center-fixed position-absolute rounded-5 bg-gray-50">
          <button class="btn-close- text-emerald bg-transparent fw-bold border-0">بستن</button>
          <div class="row gap-2 gap-lg-0 align-items-center flex-column flex-lg-row-reverse">
            <div class="col-lg-6 overflow-hidden rounded-5">
              <img src="${elem.children[0].children[0].src}" class="w-100 object-fit-cover rounded-5" alt=""/>
            </div>
            <div class="col-lg-6 pb-5">
              <p class="fw-bolder txt-4">${elem.children[1].children[1].innerText}</p>
              <p class="txt-4 text-gray-800 text-justify px-4">${elem.children[1].children[2].innerText}</p>
              <div class="bg-gray-200 rounded-5 position-sticky bottom-0 p-2 d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex justify-content-between align-items-center col-12">
                  <div class="fw-bold txt-6">
                    <p>دسته بندی: <small class="fw-light">${elem.children[1].children[3].innerText}</small></p>
                    <p>برند: <small class="fw-light">${elem.children[1].children[4].innerText}</small></p>
                  </div>
                  <div class="position-relative w-min">
                    ${elem.children[1].children[5].innerHTML}
                  </div>            
                </div>
                <button class="txt-5 col-10 rounded-pill bg-emerald bg-hvr-emerald-600 border-0">افزودن به سبد خرید <i class="fa-duotone fa-basket-shopping-plus"></i></button>
              </div>
            </div>
          </div>
        </div>  
      </div>`;
      document.body.appendChild(PTab);
      PTab.addEventListener("click", (even) => {
        if (even.target.classList[0] == "bg-glass") {
          PTab.remove();
        }
      });
      PTab.querySelector(".btn-close-").addEventListener("click", () => {
        PTab.remove();
      });
    });
  });
}

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
    return `<p class="txt-5 fw-lighter text-end">${minPrice(price)} <smal><img src="https://abbk2234.github.io/digimark/toman.svg.svg" class="toman-size"/></smal></p>`;
  } else {
    return `
    <div class="d-flex p-0 flex-column gap-0 align-items-end position-relative">
      <p class="txt-6 fw-light d-flex flex-row align-items-center text-end p-0 m-0 ms-5">${minPrice((price * sale) / 100)} <smal><img src="https://abbk2234.github.io/digimark/toman.svg.svg" class="toman-size"/></smal></p>
      <p class="fw-lighter text-end text-decoration-line-through text-gray p-0 m-0 font-10px">${minPrice(price)}</p>
      <span class="p-1 badge rounded-pill bg-emerald text-light fw-lighter position-absolute top-right-0">${sale}%</span>
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
    default:
      return "موقتا وب سایت از دسترس خارج شدا است، دوباره تلاش کنید";
  }
}
