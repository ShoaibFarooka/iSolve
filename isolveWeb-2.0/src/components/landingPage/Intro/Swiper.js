import React, { useEffect, useState } from "react";
import "./swipercard.css";

const SwipeSlider = ({ rotate }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const swiperContainer = document.querySelector(".swiper-container");
    const swiperSlides = Array.from(
      swiperContainer.querySelectorAll(".swiper-slide")
    );
    let startX;
    let currentTranslate = 30;
    let counter = 0;
    let prevTranslate = 0;
    let isDragging = false;
    const slideWidth = swiperSlides[0].offsetWidth;
    const maxTranslate = slideWidth * 4 - window.innerWidth;
    const snapThreshold = slideWidth / 2;
    swiperContainer.addEventListener("mousedown", handleDragStart);
    swiperContainer.addEventListener("touchstart", handleDragStart);

    swiperContainer.addEventListener("mousemove", handleDragging);
    swiperContainer.addEventListener("touchmove", handleDragging);

    swiperContainer.addEventListener("mouseup", handleDragEnd);
    swiperContainer.addEventListener("touchend", handleDragEnd);

    swiperContainer.addEventListener("mouseleave", handleDragEnd);
    swiperContainer.addEventListener("touchcancel", handleDragEnd);

    function handleDragStart(event) {
      if (event.type === "touchstart") {
        startX = event.touches[0].clientX;
      } else {
        startX = event.clientX;
      }

      isDragging = true;
    }

    function handleDragging(event) {
      if (!isDragging) return;

      event.preventDefault();

      let x;
      if (event.type === "touchmove") {
        x = event.touches[0].clientX;
      } else {
        x = event.clientX;
      }

      const moveX = x - startX;
      currentTranslate = prevTranslate + moveX;

      swiperContainer.style.transform = `translate3d(${currentTranslate}px, 0px, 0px)`;
    }

    function handleDragEnd() {
      isDragging = false;

      const moveAmount = currentTranslate - prevTranslate;
      if (moveAmount > snapThreshold) {
        counter += Math.ceil(Math.abs(moveAmount) / slideWidth);
        currentTranslate = counter * slideWidth;
      } else if (moveAmount < -snapThreshold) {
        counter -= Math.ceil(Math.abs(moveAmount) / slideWidth);
        currentTranslate = counter * slideWidth;
      } else {
        currentTranslate = prevTranslate;
      }

      currentTranslate = Math.max(Math.min(currentTranslate, 0), -maxTranslate);

      prevTranslate = currentTranslate;
      console.log(currentTranslate);

      swiperContainer.style.transform = `translate3d(${currentTranslate}px, 0px, 0px)`;
    }

    return () => {
      swiperContainer.removeEventListener("mousedown", handleDragStart);
      swiperContainer.removeEventListener("touchstart", handleDragStart);

      swiperContainer.removeEventListener("mousemove", handleDragging);
      swiperContainer.removeEventListener("touchmove", handleDragging);

      swiperContainer.removeEventListener("mouseup", handleDragEnd);
      swiperContainer.removeEventListener("touchend", handleDragEnd);

      swiperContainer.removeEventListener("mouseleave", handleDragEnd);
      swiperContainer.removeEventListener("touchcancel", handleDragEnd);
    };
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="block lg:hidden relative z-4 py-20 overflow-hidden">
      <h2 className="text-3xl lg:text-5xl text-[white] font-sans text-center">
        How to order
      </h2>
      <div className="swiper-container flex flex-row">
        <div
          className="swiper-slide flex flex-col justify-center items-center gap-5 bg-slate-800 border border-[#15B1FE] p-5 md:p-10 rounded-[40px] my-10 md:my-0"
          style={{ transform: `rotate(${rotate - 8}deg)` }}
        >
          <div className="h-[30%] md:h-[50%]">
            <svg
              width="53"
              height="56"
              viewBox="0 0 53 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[100%]"
            >
              <path
                d="M5.57895 56C4.04474 56 2.7309 55.4512 1.63743 54.3536C0.543952 53.256 -0.00185491 51.9381 4.73595e-06 50.4V5.6C4.73595e-06 4.06 0.546741 2.7412 1.64021 1.6436C2.73369 0.546004 4.0466 -0.00186191 5.57895 4.75382e-06H27.8947L44.6316 16.8V25.48L22.3158 47.81V56H5.57895ZM27.8947 56V50.05L42.2605 35.56L48.2579 41.44L33.8224 56H27.8947ZM50.2803 39.48L44.3526 33.53L46.3053 31.57C46.8632 31.01 47.5373 30.73 48.3276 30.73C49.118 30.73 49.7689 31.01 50.2803 31.57L52.2329 33.6C52.7443 34.16 53 34.8255 53 35.5964C53 36.3673 52.7443 37.0085 52.2329 37.52L50.2803 39.48ZM25.1053 19.6H39.0526L25.1053 5.6V19.6Z"
                fill="#01A0C4"
              />
            </svg>
          </div>
          <h3 className="font-serif text-white text-xl lg:text-3xl text-center">
            Make A Ticket
          </h3>
          <p className="text-md lg:text-lg text-[#15B1FE]">
            Create a ticket by including your project information, budget, and a
            desired completion timeframe.
          </p>
        </div>

        <div
          className="swiper-slide flex flex-col justify-center items-center gap-5 bg-slate-800 border border-[#15B1FE] p-5 md:p-10 rounded-[40px] my-10 md:my-0"
          style={{ transform: `rotate(${rotate + 2}deg)` }}
        >
          <div className="h-[30%] md:h-[50%]">
            <svg
              width="66"
              height="55"
              viewBox="0 0 66 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[100%]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.4043 0C12.5555 0 13.6009 0.471039 14.355 1.23015C14.7069 1.5857 14.997 2.00224 15.2058 2.46549H22.0004C22.2093 2.00354 22.4993 1.5857 22.8499 1.23145C23.6053 0.472337 24.6495 0 25.8019 0C26.953 0 27.9984 0.472337 28.7525 1.23015C29.1045 1.5857 29.3945 2.00354 29.6033 2.46549H36.398C36.6068 2.00354 36.8968 1.5857 37.2487 1.23145C38.0041 0.472337 39.0483 0 40.1994 0C41.3518 0 42.396 0.472337 43.1501 1.23015C43.5033 1.5857 43.792 2.00354 44.0009 2.46549H50.7942C51.003 2.00354 51.2931 1.5857 51.6437 1.23145C52.3991 0.472337 53.4445 0 54.597 0C55.7481 0 56.7922 0.472337 57.5463 1.23015C57.8982 1.5857 58.1883 2.00354 58.3971 2.46549H64.2752C65.2279 2.46549 66 3.24277 66 4.20172V47.998C65.9961 48.6585 65.6184 49.2891 64.9829 49.5772C57.05 53.2028 45.0734 55 33.1225 55C21.1819 55 9.17684 53.2028 1.16789 49.6421C0.488555 49.4085 0 48.761 0 47.998V4.20172C0 3.24277 0.772148 2.46549 1.72348 2.46549H7.60289C7.81172 2.00354 8.10176 1.5857 8.45367 1.23145C9.20906 0.472337 10.2532 0 11.4043 0ZM27.903 35.982C28.9446 35.982 29.7889 36.8332 29.7889 37.8804C29.7889 38.9276 28.9446 39.7788 27.903 39.7788C26.8628 39.7788 26.0184 38.9276 26.0184 37.8804C26.0184 36.8332 26.8628 35.982 27.903 35.982ZM27.903 26.6922C28.9446 26.6922 29.7889 27.5409 29.7889 28.5894C29.7889 29.6378 28.9446 30.4878 27.903 30.4878C26.8628 30.4878 26.0184 29.6378 26.0184 28.5894C26.0184 27.5409 26.8628 26.6922 27.903 26.6922ZM27.903 17.4972C28.9446 17.4972 29.7889 18.3485 29.7889 19.3957C29.7889 20.4428 28.9446 21.2941 27.903 21.2941C26.8628 21.2941 26.0184 20.4428 26.0184 19.3957C26.0184 18.3485 26.8628 17.4972 27.903 17.4972ZM47.9879 36.1909C48.9148 36.1909 49.6663 36.9474 49.6663 37.8804C49.6663 38.8134 48.9148 39.5699 47.9879 39.5699H34.1215C33.1947 39.5699 32.4431 38.8134 32.4431 37.8804C32.4431 36.9474 33.1947 36.1909 34.1215 36.1909H47.9879ZM55.449 26.8985C56.3759 26.8985 57.1274 27.6564 57.1274 28.5894C57.1274 29.5224 56.3759 30.2789 55.449 30.2789H34.1215C33.1947 30.2789 32.4431 29.5224 32.4431 28.5894C32.4431 27.6564 33.1947 26.8985 34.1215 26.8985H55.449ZM56.0974 17.7061C57.0243 17.7061 57.7771 18.4627 57.7771 19.3957C57.7771 20.3287 57.0243 21.0852 56.0974 21.0852H34.1215C33.1947 21.0852 32.4431 20.3287 32.4431 19.3957C32.4431 18.4627 33.1947 17.7061 34.1215 17.7061H56.0974ZM13.8845 38.1464C12.7024 38.0621 11.1968 37.7701 10.0379 37.4561V33.2985L11.2058 33.3945C12.714 33.484 14.7611 33.6436 16.2409 33.51C16.5284 33.484 16.8635 33.4347 17.1252 33.3062C17.6228 33.0662 17.6163 31.3598 17.2876 31.1249C17.0981 30.99 16.8829 30.9381 16.6534 30.9381H15.4481C14.5393 30.9381 13.735 30.8356 13.0337 30.6305C12.3196 30.4216 11.7176 30.1076 11.2264 29.6885C10.725 29.2576 10.3499 28.688 10.1024 27.9782C9.86391 27.2878 9.74145 26.4664 9.74145 25.514V23.9296C9.74145 23.0472 9.87551 22.2712 10.1423 21.6016C10.5858 20.4922 11.5062 19.6033 12.5748 19.0985C12.9486 18.922 13.3676 18.7884 13.8845 18.7014V16.8575H17.6924V18.6288C18.3227 18.6781 18.8113 18.7663 19.4288 18.8792C20.1352 19.0025 20.8196 19.1426 21.517 19.3126V23.4767L21.1496 23.4443C19.5862 23.3078 18.0177 23.2394 16.4484 23.2392C15.9921 23.2392 15.122 23.2509 14.7778 23.5974C14.4955 23.8803 14.5368 25.5737 14.841 25.8241C15.0704 26.011 15.461 26.0434 15.742 26.0434H17.2438C18.2106 26.0434 19.2109 26.2095 20.0591 26.6961C20.8235 27.1334 21.3997 27.7303 21.7852 28.483C21.9746 28.8541 22.119 29.2524 22.2144 29.6781C22.4232 30.6059 22.3588 31.6427 22.3588 32.5951C22.3588 33.34 22.2918 34.0044 22.1616 34.5844C22.0275 35.1774 21.8225 35.6835 21.5505 36.1C20.6998 37.399 19.1735 37.9634 17.6924 38.1269V40.124H13.8845V38.1464ZM15.2058 5.93665C14.9978 6.39593 14.7097 6.8139 14.355 7.1707C13.5996 7.93111 12.5555 8.40344 11.4043 8.40344C10.2532 8.40344 9.20777 7.93111 8.45367 7.1707C8.09845 6.81438 7.81021 6.3963 7.60289 5.93665H3.44824V46.8587C10.9918 49.9639 22.0455 51.5288 33.1225 51.5288C44.1259 51.5288 55.0778 49.9821 62.5518 46.8626V5.93665H58.3971C58.1891 6.39593 57.901 6.8139 57.5463 7.1707C56.7909 7.93111 55.7455 8.40344 54.597 8.40344C53.4445 8.40344 52.4004 7.93111 51.6463 7.17199C51.2909 6.81502 51.0023 6.39657 50.7942 5.93665H44.0009C43.7937 6.39677 43.5055 6.81531 43.1501 7.17199C42.3947 7.93111 41.3505 8.40344 40.1994 8.40344C39.0483 8.40344 38.0029 7.93111 37.2487 7.1707C36.8935 6.81438 36.6053 6.3963 36.398 5.93665H29.6033C29.3957 6.39651 29.1075 6.81497 28.7525 7.17199C27.9971 7.93111 26.953 8.40344 25.8019 8.40344C24.6495 8.40344 23.6053 7.93111 22.8499 7.1707C22.4955 6.81398 22.2078 6.39597 22.0004 5.93665H15.2058Z"
                fill="#01A0C4"
              />
            </svg>
          </div>
          <h3 className="font-serif text-white text-xl lg:text-3xl text-center">
            Accept A Quote
          </h3>
          <p className="text-md lg:text-lg text-[#15B1FE]">
            Accept a quote from our team providing their estimated price for the
            project.
          </p>
        </div>

        <div
          className="swiper-slide flex flex-col justify-center items-center gap-5 bg-slate-800 border border-[#15B1FE] p-5 md:p-10 rounded-[40px] my-10 md:my-0"
          style={{ transform: `rotate(${rotate - 8}deg)` }}
        >
          <div className="h-[30%] md:h-[50%]">
            <svg
              width="76"
              height="74"
              viewBox="0 0 76 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[100%]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M53.9557 30.6819L65.2458 11.2528L45.2869 0L25.616 33.8513C27.0291 33.282 28.5179 32.9045 30.0379 32.7496L44.4453 7.95512C46.3097 9.00961 48.3848 8.43738 49.3096 6.82099L57.1664 11.328C56.2713 12.8928 56.8472 14.956 58.4682 15.8689L50.7969 29.07C51.8968 29.5109 52.9463 30.064 53.9557 30.6819ZM9.75692 56.1991C10.6639 56.1991 11.4001 56.9306 11.4001 57.8317C11.4001 58.7343 10.6639 59.4643 9.75692 59.4643C8.84996 59.4643 8.11371 58.7343 8.11371 57.8317C8.11371 56.9306 8.84996 56.1991 9.75692 56.1991ZM57.5835 41.9539C57.582 41.6442 57.6013 41.3507 57.6399 41.0734L54.4084 38.929C53.9438 38.6208 53.4347 38.2669 52.924 37.9114C51.0864 36.6328 49.1938 35.3158 47.1543 34.7834C46.0529 34.4958 44.7822 34.304 43.4804 34.279C42.3464 34.2583 41.1886 34.3645 40.1005 34.6433C39.4504 34.8114 38.8225 35.0429 38.2406 35.3482C37.7225 35.6196 37.2401 35.9529 36.8111 36.3511L34.641 38.9158C34.5757 39.0426 34.4821 39.1517 34.3693 39.2358L28.3858 46.3105C28.4749 46.7632 28.6545 47.1423 28.8994 47.4446C29.1844 47.7956 29.5644 48.0566 30.0023 48.2189C30.4654 48.3914 30.9998 48.4578 31.5654 48.4121C32.4679 48.3369 33.4297 47.9711 34.2981 47.2883L35.9606 45.9226C36.3807 45.5775 36.731 45.2604 37.0783 44.9433C37.8457 44.2472 38.6132 43.5511 39.4177 43.0747C41.2821 41.9686 43.1375 41.9332 44.9737 44.992L54.3817 61.852H57.5805L57.5835 41.9539ZM58.3405 39.255C58.486 39.0544 58.6522 38.8701 58.8393 38.7034C59.6601 37.9689 60.8357 37.6106 62.3439 37.6091V37.6047L70.5228 37.6076C72.2343 37.6002 73.6266 37.9114 74.59 38.6488C75.6632 39.4688 76.1664 40.7195 75.9511 42.5114L74.1432 61.0762C74.0111 62.7339 73.5702 64.0332 72.785 64.9314C71.9493 65.8856 70.7855 66.3561 69.2611 66.2926L61.906 66.2941C60.8758 66.3472 60.003 66.0699 59.2727 65.4889C58.7368 65.0656 58.2945 64.4845 57.9397 63.7604H55.3955C55.7384 64.7559 55.7206 65.6998 55.4475 66.5389C55.1654 67.4017 54.6177 68.1376 53.9186 68.6877C53.2343 69.2275 52.3986 69.5962 51.5257 69.7393C50.6722 69.8779 49.7801 69.8012 48.9504 69.4591C47.9855 70.4619 46.9687 71.0931 45.9089 71.3837C44.8446 71.6742 43.7669 71.6152 42.6759 71.2347C41.6413 72.3748 40.4968 73.09 39.2366 73.3614C37.9526 73.6372 36.587 73.4469 35.1412 72.77C34.69 73.1195 34.2179 73.3968 33.7266 73.5988C33.0275 73.8864 32.2942 74.0192 31.5297 73.997C29.6965 73.9425 28.4615 73.4042 27.4789 72.5311C26.5422 71.6993 25.9114 70.6301 25.2004 69.4001L21.1465 62.3741H18.0026C17.826 63.2545 17.5217 64.0023 17.0704 64.6025L17.0259 64.6645C16.2243 65.688 15.0472 66.2322 13.4204 66.1997L6.56106 66.2012C5.20137 66.4195 4.03613 66.0891 3.12473 65.0391C2.31723 64.1085 1.76504 62.6041 1.53051 60.389L1.52012 60.3079L0.102541 42.8624C-0.178006 40.979 0.132228 39.6473 0.893713 38.7373C1.66262 37.82 2.82043 37.4056 4.2484 37.3392L4.36715 37.3318H13.0507V37.3363C14.4238 37.32 15.6024 37.5457 16.493 38.1179V38.1209C17.2129 38.5839 17.7295 39.2358 17.9952 40.1222H23.9045C25.3889 39.1267 26.7797 38.345 28.3175 37.8687C29.8272 37.4011 31.4466 37.2374 33.3807 37.4675L35.4025 35.0768L35.4782 34.9972C36.0422 34.4648 36.6731 34.0268 37.3514 33.6714C38.0639 33.2982 38.8299 33.0151 39.6225 32.8115C40.8843 32.4871 42.2143 32.3632 43.5101 32.3868C44.9782 32.4133 46.4047 32.6287 47.6367 32.9502L47.6396 32.9516C49.9983 33.5652 52.0364 34.9839 54.015 36.3614C54.4871 36.6903 54.9576 37.0177 55.4682 37.3554L58.3405 39.255ZM16.2763 41.3404C16.2434 41.2289 16.2314 41.1125 16.2407 40.9967C16.1353 40.3832 15.8651 39.9688 15.4643 39.7107C14.9047 39.3553 14.075 39.2166 13.0611 39.2284H13.0507V39.2329L4.33004 39.2314C3.43199 39.2742 2.74324 39.488 2.35879 39.9481C1.94465 40.4407 1.79621 41.2917 1.99809 42.6102L2.00699 42.6972L3.42606 60.1899C3.61903 61.998 4.0109 63.1602 4.56606 63.8002C5.00543 64.3046 5.60512 64.4491 6.32504 64.3194C6.38293 64.309 6.44082 64.3031 6.49723 64.3031L13.3654 64.3002L13.4679 64.3061C14.4297 64.3223 15.0962 64.0362 15.5163 63.4994L15.5504 63.4581C16.015 62.8313 16.2436 61.8638 16.2793 60.625L16.2763 41.3404ZM18.1896 60.4745H21.6987C22.0698 60.4745 22.3919 60.6839 22.5507 60.9907L26.8599 68.4577C27.4907 69.5505 28.0474 70.4973 28.7495 71.1212C29.4056 71.7037 30.265 72.065 31.5832 72.1034C32.0775 72.1181 32.551 72.0326 33.0022 71.8483C33.2783 71.7347 33.55 71.5813 33.8157 71.3896L31.0087 66.1702C30.9497 66.0606 30.9131 65.9406 30.9009 65.8169C30.8887 65.6932 30.9011 65.5683 30.9375 65.4494C30.9739 65.3305 31.0335 65.2199 31.113 65.124C31.1925 65.028 31.2902 64.9485 31.4006 64.8901C31.8652 64.6438 32.4426 64.8178 32.689 65.2795L35.7409 70.953C36.8779 71.5267 37.9066 71.7052 38.8329 71.5061C39.6789 71.3232 40.4775 70.8188 41.2286 70.0033L36.8304 63.1454C36.695 62.9336 36.6497 62.6769 36.7045 62.4319C36.7593 62.1869 36.9098 61.9736 37.1229 61.8387C37.2283 61.7721 37.3459 61.7267 37.469 61.7052C37.5921 61.6837 37.7183 61.6866 37.8403 61.7136C37.9623 61.7405 38.0777 61.7911 38.18 61.8625C38.2823 61.9338 38.3695 62.0245 38.4365 62.1293L43.0722 69.3573C43.8842 69.6847 44.665 69.7599 45.4086 69.5579C46.1182 69.3632 46.8292 68.9104 47.5402 68.1804L43.3409 60.327C43.2218 60.1047 43.1965 59.8444 43.2706 59.6035C43.3446 59.3626 43.5119 59.1608 43.7357 59.0425C43.9598 58.9248 44.2217 58.9001 44.4641 58.9739C44.7064 59.0477 44.9094 59.214 45.0286 59.4363L49.3719 67.561C49.9375 67.8854 50.5906 67.971 51.22 67.8677C51.7692 67.7793 52.2976 67.5448 52.7311 67.2041C53.1482 66.8737 53.4732 66.4475 53.6321 65.9593C53.8057 65.424 53.7879 64.7942 53.4881 64.1099C53.4257 63.9683 53.4005 63.8179 53.4109 63.6719C53.2785 63.6151 53.1608 63.5292 53.0667 63.4206C52.9726 63.312 52.9045 63.1836 52.8676 63.0451L43.335 45.9595C42.2751 44.1985 41.3192 44.1528 40.3959 44.6985C39.7413 45.0864 39.0525 45.7132 38.3623 46.3385C37.9452 46.7175 37.5251 47.0995 37.1778 47.3841L35.4856 48.769C34.307 49.6996 32.98 50.1995 31.7212 50.3042C30.8855 50.3721 30.0691 50.2659 29.3373 49.9931C28.5803 49.7114 27.9168 49.2527 27.4136 48.6318C26.8703 47.9622 26.5155 47.1142 26.4309 46.1055C26.4072 45.8149 26.517 45.5465 26.7085 45.3548L31.8607 39.2638C30.7653 39.2491 29.796 39.398 28.8861 39.6797C27.4982 40.1074 26.2038 40.8581 24.7862 41.8182C24.6174 41.9501 24.4088 42.0218 24.1939 42.0217H18.1896V60.4745ZM65.9836 56.1991C66.8905 56.1991 67.6268 56.9306 67.6268 57.8317C67.6268 58.7343 66.8905 59.4643 65.9836 59.4643C65.0751 59.4643 64.3389 58.7343 64.3389 57.8317C64.3389 56.9306 65.0751 56.1991 65.9836 56.1991ZM44.334 19.4321C41.4468 19.32 39.0154 21.5529 38.9026 24.4214C38.8492 25.7516 39.3049 26.9831 40.0946 27.9329C42.6329 27.5288 45.4146 27.6615 47.9232 28.2028C48.7993 27.2893 49.3093 26.0893 49.3571 24.8284C49.4699 21.9599 47.2211 19.5442 44.334 19.4321ZM21.6631 35.422L39.005 5.5792L36.1832 3.98936L18.7493 33.9914C19.4039 34.3748 20.0496 34.8836 20.5706 35.422H21.6631Z"
                fill="#01A0C4"
              />
            </svg>
          </div>
          <h3 className="font-serif text-white text-xl lg:text-3xl text-center">
            Pay The Commission
          </h3>
          <p className="text-md lg:text-lg text-[#15B1FE]">
            Pay full or half upfront the Pay full or half upfront the secure
            payment system.
          </p>
        </div>

        <div
          className="swiper-slide flex flex-col justify-center items-center gap-5 bg-slate-800 border border-[#15B1FE] p-5 md:p-10 rounded-[40px] my-10 md:my-0"
          style={{ transform: `rotate(${rotate + 2}deg)` }}
        >
          <div className="h-[30%] md:h-[50%]">
            <svg
              width="56"
              height="57"
              viewBox="0 0 56 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[100%]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.2716 4.43842L24.477 12.1191L39.4894 14.169L51.8338 6.43267L37.2716 4.43842ZM40.2346 27.2297C48.4173 27.2297 55.0497 33.8943 55.0497 42.1153C55.0497 50.3352 48.4173 56.9998 40.2346 56.9998C32.052 56.9998 25.4196 50.3352 25.4196 42.1153C25.4196 33.8943 32.052 27.2297 40.2346 27.2297ZM36.42 40.0152L38.6278 42.0942L43.6989 36.918C44.1934 36.4133 44.5061 36.0067 45.1171 36.6384L47.0999 38.6805C47.7519 39.3278 47.7187 39.7077 47.1043 40.3094L39.76 47.5522C38.467 48.8289 38.691 48.9058 37.3781 47.5979L33.081 43.3063C32.8071 43.0077 32.8382 42.708 33.1376 42.4083L35.4386 40.0108C35.7879 39.6431 36.064 39.6743 36.42 40.0152ZM22.7138 14.0521L22.7038 29.8401L16.9985 25.9363L11.292 29.175L11.9685 12.5848L2.15018 11.2445V46.1139L21.9941 48.6919C22.2736 49.4818 22.6007 50.2494 22.9755 50.9892L1.03129 48.1382C0.45798 48.1148 0 47.6391 0 47.0586V10.0112C0.0299406 9.55998 0.209584 9.24357 0.634297 9.02966L20.2354 0.0945127C20.4106 0.0142969 20.6257 -0.0180122 20.8176 0.00872639L54.992 4.69244C55.5564 4.75817 55.9434 5.22387 55.9434 5.80543V5.80766L56 31.2951C55.3657 30.3526 54.2734 29.0346 53.7899 28.2012V7.74955L40.9476 16.0976V22.761C40.2307 22.7344 39.5129 22.7478 38.7975 22.8012V16.248L22.7138 14.0521ZM13.674 10.6451L26.1126 2.90875L20.8364 2.18569L4.90582 9.44745L13.674 10.6451Z"
                fill="#01A0C4"
              />
            </svg>
          </div>
          <h3 className="font-serif text-white text-xl lg:text-3xl text-center">
            Receive The Product
          </h3>
          <p className="text-md lg:text-lg text-[#15B1FE]">
            Receive your product file(s) and all the necessary information
            included.
          </p>
          <button className="text-sm md:text-lg text-white border border-[#15B1FE] hover:bg-slate-950 py-3 px-5 rounded-full max-w-[150px] text-center">
            create ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeSlider;
