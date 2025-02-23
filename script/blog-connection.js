async function getData() {
  try {
    let res = await fetch("https://67964d45bedc5d43a6c4db00.mockapi.io/api/db1/data/2");
    if (res.status == 200) {
      let data = await res.json();
      data.db.blog.map((elem, index) => {
        if (index <= 2) {
          document.querySelector("#banner").innerHTML += `
        <div class="carousel-item" style="height: 350px;">
          <img src="${elem.thumbnail}" class="d-block w-100 object-fit-cover ratio ratio-16x9" alt=""/>
          <div class="carousel-caption bg-dark bg-opacity-75 rounded-pill">
              <a href="#" class="text-decoration-none text-light">${elem.title}</a>
              <a href="#" class="txt-6 d-none d-md-block text-decoration-none text-dark"></a>
          </div>
        </div>
        `;
        }
      });
      data.db.blog.map((elem) => {
        document.querySelector("#posts").innerHTML += `
          <div class="col-12 col-md-10 col-lg-8 row rounded-4 border p-2">
            <div class="col-5 col-md-3 overflow-hidden rounded-3">
              <img src="${elem.thumbnail}" class="w-100 rounded-3" alt="" />
            </div>
            <div class="col">
              <a href="#" class="txt-5 fw-bold text-decoration-none text-gray-900">
                ${elem.title}
              </a>
              <p class="txt-6 d-none d-sm-block mt-2">${elem.sh_desc}</p>
            </div>
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
