// // https://67964d45bedc5d43a6c4db00.mockapi.io/api/db1/slider_content
// async function getData(getElem) {
//   try {
//     let res = await fetch("https://67964d45bedc5d43a6c4db00.mockapi.io/api/db1/slider_content");
//     if (res.status == 200) {
//       let data = await res.json();
//       //   todo : getting data doesn't work
//       console.log(data);
//       data[0].slider.map((elem) => {
//         document.querySelector("#exam-swiper-one .swiper_wrapper").innerHTML += `
//         <div class="swiper-slide rounded-5 bg-body-tertiary p-2">
//               <div class="row justify-content-center flex-column">
//                 <div class="row justify-content-center align-items-start flex-row flex-nowrap">
//                   <img src="digimark.png" class="w-25 col-3" alt="logo" />
//                   <img src="${elem.image_url}" class="w-75 col-9" alt="pic" />
//                 </div>
//                 <div class="row flex-column align-items-center">
//                   <p class="h3">${elem.s_title}</p>
//                   <p>${elem.image_url}</p>
//                 </div>
//               </div>
//             </div>
//         `;
//       });
//     } else {
//       throw new Error(`Response status: ${res.status}`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// getData();
async function getData() {
  try {
    let res = await fetch("https://67964d45bedc5d43a6c4db00.mockapi.io/api/db1/data/1");
    if (res.status == 200) {
      let data = await res.json();
      data.db.slider_big_sale.map((elem) => {
        document.querySelector("#home-slider-sale .swiper-wrapper").innerHTML += `
      <div class="swiper-slide d-flex flex-column p-1 rounded-3 bg-body-tertiary">
            <div><img src="${elem.img_url}" class="object-fit-cover rounded-3 w-100 border-0" alt="" /></div>
            <div>
              <p class="fw-lighter">${elem.name}</p>
              <p class="fw-bolder text-end">${elem.price} <span class="fs-6 fw-lighter">تومان</span></p>
            </div>
          </div>`;
      });
      data.db.slider_home_banner.map((elem) => {
        document.querySelector("#home-slider-banner .swiper-wrapper").innerHTML += `
        <div style="background-image:linear-gradient(var(--bs-bg-over)),url(${elem.img_url});" class="swiper-slide bg-body-tertiary rounded-4 p-3 bg-img">
        <div class="row flex-column-reverse flex-md-row">
          <div class="col-md-7">
            <p class="fs-4">${elem.name}</p>
            <p>${elem.description}</p>
            <a href="#" class="btn btn-warning ${elem.cta_mode}">${elem.cta_btn}</a>
          </div>
          <div class="col-md-5">
            <img src="${elem.img_url}" class="rounded img-fluid" alt="" />
          </div>
        </div>
      </div>`;
      });
    } else {
      throw new Error(`error: ${res.status}`);
    }
  } catch (err) {
    console.log(err);
  }
}
getData();
