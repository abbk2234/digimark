// import documentDayMode from "./modules/Change_theme.js";
// documentDayMode()

let boxes = [
  `<h2 class="txt-1 fw-bolder">ثبت نام</h2>
    <p>اگر با تازگی وارد سایت شده اید ، ثبت نام کنید.</p>
    <button class="btn btn-lg bg-light" id="sign-btn" width="250px">ثبت نام</button>`,
  `
  <button id="back-log" class="btn btn-sm bg-hvr-red text-hvr-light text-red d-flex align-items-center justify-content-center gap-1 position-absolute top-0 right-0">بازگشت<i class="fa fa-angle-left"></i></button>
  <form class="d-flex flex-column gap-2 justify-content-center align-items-center">
    <div>
      <label for="s-name" class="form-label m-0 ms-1 bg-red text-white rounded-top-pill px-3">نام</label>
      <input type="text" id="s-name" class="rounded-1 border border-red d-block p-2 focus-colcs focus-outline-red" placeholder="مانند امیر محمد" />
    </div>
    <div>
      <label for="s-lname" class="form-label m-0 ms-1 bg-red text-white rounded-top-pill px-3">نام خانوادگی</label>
      <input type="text" id="s-lname" class="rounded-1 border border-red d-block p-2 focus-colcs focus-outline-red" placeholder="مانند حسینی" />
    </div>
    <div>
      <label for="s-username" class="form-label m-0 ms-1 bg-red text-white rounded-top-pill px-3">نام کاربری</label>
      <div class="input-group">
        <input type="text" id="s-username" class="rounded-1 rounded-end-0 border border-red d-block p-2 focus-colcs focus-outline-red" placeholder="به انگلیسی : examplei" />
        <button class="btn disabled bg-red text-white border-red">@</button>
      </div>
    </div>
    <div>
      <label for="s-pass" class="form-label m-0 ms-1 bg-red text-white rounded-top-pill px-3">رمز عبور</label>
      <div class="input-group">
        <input type="text" id="s-pass" class="rounded-1 rounded-end-0 border border-red d-block p-2 focus-colcs focus-outline-red" placeholder="Abc123" />
        <button class="btn disabled bg-blue text-white border-blue"><i class="fa-duotone text-blue-100 fa-circle-check"></i></button>
      </div>
    </div>
    <button type="submit" class="mt-2 btn border-red text-red bg-hvr-red text-hvr-light">ثبت نام</button>
  </form>
    `,
  `
    <h2 class="txt-1 fw-bolder">ورود</h2>
    <p>اگر قبلا در سایت ثبت نام کرده اید ، ورود کنید.</p>
    <button class="btn btn-lg bg-red" id="log-btn" width="250px">ورود</button>
    `,
  `
    <button id="back-sign" class="btn btn-sm bg-hvr-light text-hvr-red text-white d-flex align-items-center justify-content-center gap-1 position-absolute top-0 left-0"><i class="fa fa-angle-right"></i>بازگشت</button>
          <form class="d-flex flex-column gap-2 justify-content-center align-items-center">
            <div>
              <label for="s-username" class="form-label m-0 ms-1 bg-light text-red rounded-top-pill px-3">نام کاربری</label>
              <div class="input-group">
                <input type="text" id="s-username" class="rounded-1 rounded-end-0 border border-light d-block p-2 focus-colcs focus-outline-white" placeholder="به انگلیسی : examplei" />
                <button class="btn disabled bg-light text-red border-light">@</button>
              </div>
            </div>
            <div>
              <label for="s-pass" class="form-label m-0 ms-1 bg-light text-red rounded-top-pill px-3">رمز عبور</label>
              <div class="input-group">
                <input type="text" id="s-pass" class="rounded-1 rounded-end-0 border border-white d-block p-2 focus-colcs focus-outline-white" placeholder="Abc123" />
                <button class="btn disabled bg-blue text-white border-blue"><i class="fa-duotone text-blue-100 fa-circle-check"></i></button>
              </div>
            </div>
            <button type="submit" class="mt-2 btn border-light text-light bg-hvr-light text-hvr-red">ورود</button>
          </form>
    `,
];
let flag_log = true;
let flag_sign = true;
document.getElementById("log-btn").addEventListener("click", (event) => {
  if (flag_log) {
    event.target.innerHTML = "بازگشت";
    document.querySelector("#sign-bar div.w-100:first-of-type").classList.add("d-none");
    document.querySelector("#sign-bar div.w-100:last-of-type").classList.remove("d-none");
    flag_log = false;
  } else {
    event.target.innerHTML = "ورود";
    document.querySelector("#sign-bar div.w-100:first-of-type").classList.remove("d-none");
    document.querySelector("#sign-bar div.w-100:last-of-type").classList.add("d-none");
    flag_log = true;
  }
});
document.getElementById("sign-btn").addEventListener("click", (event) => {
  if (flag_sign) {
    event.target.innerHTML = "بازگشت";
    document.querySelector("#log-bar div.w-100:first-of-type").classList.add("d-none");
    document.querySelector("#log-bar div.w-100:last-of-type").classList.remove("d-none");
    flag_sign = false;
  } else {
    
    event.target.innerHTML = "ثبت نام";
    document.querySelector("#log-bar div.w-100:first-of-type").classList.remove("d-none");
    document.querySelector("#log-bar div.w-100:last-of-type").classList.add("d-none");
    flag_sign = true;
  }
});
