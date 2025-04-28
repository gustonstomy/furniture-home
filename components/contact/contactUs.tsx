import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-16 px-4 md:px-16 bg-white xl:px-[16rem] 2xl:px-[30rem] mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12  xl:mb-24 xl:px-[6rem] 2xl:px-[9rem]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-500">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Left side - Contact Info */}
          <div className="flex flex-col gap-11">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-black mt-1" />
              <div>
                <h4 className="text-lg font-medium  lg:text-[24px] text-black mb-1">
                  Address
                </h4>
                <p className="text-black text-[16px] ">
                  236 5th SE Avenue, New York
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-black mt-1" />
              <div>
                <h4 className="font-medium  lg:text-[24px] text-black text-lg mb-1">
                  Phone
                </h4>
                <p className="text-black text-[16px] ">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-black text-[16px] ">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-black mt-1" />
              <div>
                <h4 className="font-medium  lg:text-[24px] text-black text-lg mb-1">
                  Working Time
                </h4>
                <p className="text-black text-[16px] ">
                  Monday–Friday: 9:00–22:00
                </p>
                <p className="text-black text-[16px] ">
                  Saturday–Sunday: 9:00–21:00
                </p>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-6 w-full ">
            <div className="flex flex-col gap-2">
              <h1 className="text-[16px] font-medium text-black"> Your name</h1>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[16px] font-medium text-black">
                {" "}
                Email address
              </h1>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[16px] font-medium text-black"> Subject</h1>
              <input
                type="text"
                placeholder="Subject (optional)"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[16px] font-medium text-black"> Message</h1>
              <textarea
                placeholder="Message"
                className="w-full border border-gray-300 p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div className="flex w-full ">
              <button
                type="submit"
                className="bg-[#B88E2F] hover:bg-[#B88E0F] text-white py-3 rounded-md font-semibold transition w-full md:w-[30%]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
