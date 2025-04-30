import React from "react";

export default function GridImages() {
  return (
    <section className="relative  py-4 2xl:py-16 px-40 2xl:px-34 bg-white text-center lg:h-[40rem] 2xl:h-[60rem] overflow-hidden ">
      <h2 className="flex flex-col text-[20px] md:text-[20px] font-semibold text-[#616161] mb-6">
        Share your setup with
        <span className="text-[#3A3A3A]  text-[40px] font-bold">
          #FuniroFurniture
        </span>
      </h2>

      {/* <div className="h-[calc(100%-5rem)] border-2 border-red-500  "> */}
      <div className="relative  h-[30rem] 2xl:h-[48rem]  mb-[5rem]">
        <div className="absolute  top-0 left-0">
          <img
            src="/images/img2.svg"
            className=" w-full h-[16rem] 2xl:h-[25rem] "
            alt="Image 2"
          />
        </div>
        <div className="absolute top-8  left-18 2xl:top-20  2xl:left-26">
          <img
            src="/images/img1.svg"
            className=" w-full h-[14rem] 2xl:h-[20rem] "
            alt="Image 1"
          />
        </div>
        <div className="absolute bottom-0 2xl:bottom-0 2xl:left-0">
          <img
            src="/images/img3.svg"
            className=" w-full h-[12.4rem] 2xl:h-[21.5rem] "
            alt="Image 3"
          />
        </div>
        <div className="absolute left-105 top-25 2xl:top-48 2xl:left-147">
          <img
            src="/images/img5.svg"
            className=" w-full h-[18rem] 2xl:h-[26rem] "
            alt="Image 5"
          />
        </div>
        <div className="absolute bottom-3 left-34 2xl:top-105 2xl:left-54">
          <img
            src="/images/img4.svg"
            className=" w-full h-[11.5rem] 2xl:h-[15.4rem] "
            alt="Image 4"
          />
        </div>
        <div className="absolute left-165 top-10 2xl:top-30 2xl:left-232">
          <img
            src="/images/img6.svg"
            className=" w-full h-[18rem] 2xl:h-[25rem] "
            alt="Image 6"
          />
        </div>
        <div className="absolute top-0 left-231 2xl:top-0 2xl:left-323">
          <img
            src="/images/img7.svg"
            className=" w-full h-[20.5rem] 2xl:h-[32.5rem] "
            alt="Image 7"
          />
        </div>
        <div className="absolute left-165 bottom-0 2xl:bottom-0 2xl:left-232">
          <img
            src="/images/img8.svg"
            className=" w-full h-[8rem] 2xl:h-[14rem] "
            alt="Image 8"
          />
        </div>
        <div className="absolute left-195 bottom-0 2xl:bottom-4 2xl:left-280">
          <img
            src="/images/img9.svg"
            className=" w-full h-[8rem] 2xl:h-[13rem] "
            alt="Image 9"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
