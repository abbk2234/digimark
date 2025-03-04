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
          <div class="col-12 post col-md-10 col-lg-8 row rounded-4 border p-2">
            <div class="col-5 col-md-3 overflow-hidden rounded-3">
              <img src="${elem.thumbnail}" class="w-100 rounded-3" alt="" />
            </div>
            <div class="col">
              <p class="txt-5 fw-bold">
                ${elem.title}
              </p>
              <p class="txt-6 d-none d-sm-block mt-2">${elem.sh_desc}</p>
              <p class="d-none">${elem.desc}</p>
              <p class="d-none">${elem.writer}</p>
              <p class="text-end">${elem.like} <i class="fa fa-thumbs-up"></i> | ${elem.dislike} <i class="fa fa-thumbs-down"></i></p>
            </div>
          </div>`;
      });
      genPost(".post");
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
function genPost(target) {
  [...document.querySelectorAll(target)].map((elem) => {
    elem.addEventListener("click", () => {
      let Post = document.createElement("div");
      Post.classList = "bg-glass position-fixed full-screen-fixed rounded-5 h-100 w-100 overflow-auto z-3";
      Post.innerHTML = `
       <div class="center-fixed h-100 position-absolute bg-gray-50 row justify-content-center rounded-5 gap-3 overflow-auto">
       <button class="bg-transparent d-inline-block btn-close- border-0 text-red fw-bold">بستن</button>
      <div class="overflow-hidden rounded-5">
        <img src="${elem.children[0].children[0].src}" class="w-100 object-fit-cover rounded-5"/>
      </div>
      <div>
        <p class="txt-4 fw-bolder">${elem.children[1].children[0].innerText}</p>
        <p class="txt-5">${elem.children[1].children[1].innerText}</p>
        <p class="txt-5">${elem.children[1].children[2].innerText}</p>
        <p class="txt-6">${elem.children[1].children[3].innerText}</p>
        <p class="txt-6">${elem.children[1].children[4].innerHTML}</p>
      </div>
    </div>
       `;
      document.body.appendChild(Post);
      Post.querySelector(".btn-close-").addEventListener("click", () => {
        Post.remove();
      });
    });
  });
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
