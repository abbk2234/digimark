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
      data.db.slider_home_banner.map((elem) => {
        document.querySelector("#home-slider-banner .swiper-wrapper").innerHTML += `
        <div class="swiper-slide height-300 bg-img" style="background-image: url(${elem.img_url});">
        <div class="text-center text-light w-50 d-flex align-items-start justify-content-center h-100 flex-column ps-5 text-start">
          <p class="fs-3">${elem.name}</p>
          <p class="fs-5">${elem.description}</p>
          <a href="#" class="btn btn-outline-light border-blue-200 align-self-end ${elem.cta_mode}">${elem.cta_btn}</a>
        </div>
      </div>
        `;
      });
      data.db.slider_big_sale.map((elem) => {
        document.querySelector("#home-slider-sale .swiper-wrapper").innerHTML += `
        <div class="swiper-slide bg-body-tertiary rounded border border-red-400 p-1 d-flex flex-column align-items-center">
          <div>
            <img src="${elem.img_url}" class="img-thumbnail border-red-100" alt="" />
          </div>
          <div>
            <p class="fw-lighter">${elem.name}</p>
            <p><small>${elem.price}</small>تومان</p>
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
