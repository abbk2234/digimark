async function getData() {
  try {
    let res = await fetch("https://67964d45bedc5d43a6c4db00.mockapi.io/api/db1/data/1");
    if (res.status >= 200 && res.status < 300) {
      let data = await res.json();
      data.db.product.categories.map((elem) => {
        document.querySelector("#categories").innerHTML += `
            <a href="#${elem.strId}" class="nav-item col-2 p-2 text-black text-decoration-none d-flex gap-1 align-items-center justify-content-center flex-column" data-bs-toggle="tab">
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
        } else if (elem.cate == "mobile" || elem.cate == "موبایل") {
          document.querySelector("#mobile-cate div").innerHTML += `
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
        } else if (elem.cate == "headphone" || elem.cate == "هدفون") {
          document.querySelector("#headphone-cate div").innerHTML += `
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
        }
      });
      data.db.product.brands.map((elem) => {
        document.querySelector("#brands").innerHTML += `
            <a href="#${elem.strId}" class="nav-item col-2 p-2 text-black text-decoration-none d-flex gap-1 align-items-center justify-content-center flex-column" data-bs-toggle="tab">
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
        } else if (elem.brand == "سامسونگ" || elem.brand == "samsung") {
          document.querySelector("#samsung-brand div").innerHTML += `
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
        } else if (elem.brand == "شیائومی" || elem.brand == "xiaomi") {
          document.querySelector("#xiaomi-brand div").innerHTML += `
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
        } else if (elem.brand == "ایسوس" || elem.brand == "asus") {
          document.querySelector("#asus-brand div").innerHTML += `
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
        }
      });
      document.querySelector(`#${data.db.product.brands[0].strId}`).classList.add("show", "active");
      document.querySelector(`a[href="#${data.db.product.brands[0].strId}"]`).classList.add("active");
    } else {
      document.body.innerHTML = `<h1 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">${res.status}</h1>`;
      document.body.innerHTML += `<h2 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">${checkErr(Number(res.status))}</h2>`;
    }
  } catch (err) {
    document.body.innerHTML = `<h1 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">Error</h1>`;
    document.body.innerHTML += `<h2 style="margin: 30px 10px;text-align:center;border-bottom:2px gray solid;">${err.message}</h2>`;
    console.log(err);
  }
}
getData();
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
  }
}
