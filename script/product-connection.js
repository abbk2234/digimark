async function getData() {
  try {
    let res = await fetch("https://67964d45bedc5d43a6c4db00.mockapi.io/api/db1/data/1");
    if (res.status >= 200 && res.status < 300) {
      let data = await res.json();
      data.db.product.categories.map((elem) => {
        document.querySelector("#categories").innerHTML += `
            <a href="#${elem.strId}" class="nav-item col-4 col-md-2 p-2 text-black text-decoration-none d-flex gap-1 align-items-center justify-content-center flex-column" data-bs-toggle="tab">
              <div class="overflow-hidden ratio ratio-1x1 rounded-circle">
                <img src="${elem.thumbnail}" class="w-100 object-fit-cover" alt="" />
              </div>
              <p class="px-2 py-1 bg-gray-200 rounded-pill">${elem.faName}</p>
            </a>
          `;

        document.querySelector("#tab-categories").innerHTML += `
            <div class="tab-pane fade" id="${elem.strId}">
              <h3 class="ps-2 border-start border-3 border-red">${elem.faName}</h3>
              <div class="row gap-3 justify-content-evenly align-align-items-stretch"></div>
            </div>
          `;
      });
      document.querySelector(`#${data.db.product.categories[0].strId}`).classList.add("show", "active");
      document.querySelector(`a[href="#${data.db.product.categories[0].strId}"]`).classList.add("active");
      data.db.product.product.map((elem) => {
        if (elem.cate == "laptop" || elem.cate == "لپتاپ") {
          document.querySelector("#laptop-cate div").innerHTML += `
          <div class="p-2 product-modal-btn col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
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
        } else if (elem.cate == "mobile" || elem.cate == "موبایل") {
          document.querySelector("#mobile-cate div").innerHTML += `
          <div class="p-2 product-modal-btn col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
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
        } else if (elem.cate == "headphone" || elem.cate == "هدفون") {
          document.querySelector("#headphone-cate div").innerHTML += `
          <div class="p-2 product-modal-btn col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
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
        }
      });
      data.db.product.brands.map((elem) => {
        document.querySelector("#brands").innerHTML += `
            <a href="#${elem.strId}" class="nav-item col-5 col-md-2 p-2 text-black text-decoration-none d-flex gap-1 align-items-center justify-content-center flex-column" data-bs-toggle="tab">
              <div class="overflow-hidden ratio ratio-1x1 rounded-circle">
                <img src="${elem.thumbnail}" class="w-100 object-fit-cover" alt="" />
              </div>
              <p class="px-2 py-1 bg-gray-200 rounded-pill">${elem.faName}</p>
            </a>
          `;

        document.querySelector("#tab-brands").innerHTML += `
            <div class="tab-pane fade" id="${elem.strId}">
              <h3 class="ps-2 border-start border-3 border-red">${elem.faName}</h3>
              <div class="row gap-3 justify-content-evenly align-align-items-stretch"></div>
            </div>
          `;
      });
      data.db.product.product.map((elem) => {
        if (elem.brand == "اپل" || elem.brand == "apple") {
          document.querySelector("#apple-brand div").innerHTML += `
          <div class="p-2 product-modal-btn col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
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
        } else if (elem.brand == "سامسونگ" || elem.brand == "samsung") {
          document.querySelector("#samsung-brand div").innerHTML += `
          <div class="p-2 product-modal-btn col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
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
        } else if (elem.brand == "شیائومی" || elem.brand == "xiaomi") {
          document.querySelector("#xiaomi-brand div").innerHTML += `
          <div class="p-2 product-modal-btn col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
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
        } else if (elem.brand == "ایسوس" || elem.brand == "asus") {
          document.querySelector("#asus-brand div").innerHTML += `
          <div class="p-2 product-modal-btn col-5 col-lg-2 border border-red bg-gray-100 rounded-4">
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
        }
      });
      productTap([...document.querySelectorAll(".product-modal-btn")]);
      document.querySelector(`#${data.db.product.brands[0].strId}`).classList.add("show", "active");
      document.querySelector(`a[href="#${data.db.product.brands[0].strId}"]`).classList.add("active");
    } else {
      document.body.innerHTML += `
      <div class="toast align-items-center position-fixed top-0 mt-5 z-3 rounded-5 show" data-bs-theme="dark">
        <div class="toast-header rounded-top-5">
          <div class="p-3 rounded-circle bg-red me-1"></div>
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
          <div class="p-3 rounded-circle bg-red me-1"></div>
          <strong>دیجی مارک</strong>
          <small class="text-body-secondary ms-auto">پیام خطا</small>
          <button class="btn-close me-2" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body text-light">${checkErr(err)}</div>
      </div>
      `;
    console.log(err);
    console.log(err);
  }
}
getData();
function productTap(target) {
  let PTap = document.createElement("div");
  PTap.classList = "product-modal position-fixed full-screen-fixed z-3";

  target.map((elem) => {
    elem.addEventListener("click", () => {
      PTap.innerHTML = `
      <div class="bg-glass w-100 h-100 rounded-3 z-2">
        <div class="p-2 p-md-3 col-9 h-100 overflow-auto center-fixed position-absolute rounded-5 bg-gray-50">
          <button class="btn-close- text-red bg-transparent fw-bold border-0">بستن</button>
          <div class="row gap-2 gap-lg-0 align-items-center flex-column flex-lg-row-reverse">
            <div class="col-lg-6 overflow-hidden rounded-5">
              <img src="${elem.children[0].children[0].src}" class="w-100 object-fit-cover rounded-5" alt=""/>
            </div>
            <div class="col-lg-6 pb-5">
              <p class="fw-bolder txt-4">${elem.children[1].children[1].innerText}</p>
              <p class="txt-5 text-gray-800">${elem.children[1].children[2].innerText}</p>
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
                <button class="txt-5 col-10 rounded-pill bg-red bg-hvr-red-600 border-0">افزودن به سبد خرید <i class="fa-duotone fa-basket-shopping-plus"></i></button>
              </div>
            </div>
          </div>
        </div>  
      </div>`;
      document.body.appendChild(PTap);

      PTap.querySelector(".btn-close-").addEventListener("click", () => {
        PTap.remove();
      });
    });
  });
}
function minName(name) {
  return name.slice(0, 45) + "...";
}
function minPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function priceOff(sale, price) {
  if (sale == "" || sale == 0) {
    return `<p class="txt-5 fw-lighter text-end">${minPrice(price)} <smal>T</smal></p>`;
  } else {
    return `
      <div class="d-flex p-0 flex-column gap-0 align-items-end position-relative">
        <p class="txt-5 fw-lighter text-end p-0 m-0">${minPrice((price * sale) / 100)} <smal>T</smal></p>
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
    default:
      return "موقتا وب سایت از دسترس خارج شدا است، دوباره تلاش کنید";
  }
}
