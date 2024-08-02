import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <div className="w-full py-10 lg:py-20 bg-[#141618] flex flex-col gap-7 lg:gap-10 overflow-hidden">
        <div className="w-full px-7 sml:px-9  md:px-12 lg:px-20 overflow-hidden flex flex-col gap-7 lg:gap-10">
          <div className="">
            <p className="uppercase font-titleFont text-xs md:text-base text-end text-white">
              Contact
            </p>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-7 lg:gap-10 items-center">
            <div className="w-full xl:w-[60%] flex flex-col gap-7">
              <div className="w-full text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-gray-200">
                Let&apos;s have a{" "}
                <span className="font-handFont ps-2 normal-case text-5xl sml:text-7xl md:text-8xl font-normal text-[#dae85e]">
                  Conversation
                </span>
              </div>
              <div className="w-full flex flex-col-reverse md:flex-row gap-7">
                <div className="w-full h-[240px] md:h-auto md:w-[50%] bg-blue-400"></div>
                <div className="w-full md:w-[50%] flex flex-col gap-5">
                  <div className="text-sm md:text-base text-white text-end">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor veniam quos quae nemo adipisci officiis. Minima quod
                    voluptatum dolore quibusdam laudantium facere excepturi
                    laboriosam, nobis nulla rerum adipisci qui eum harum unde,
                    odio tenetur aperiam ipsam pariatur officiis illo! Eos?
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="uppercase text-lg text-gray-300">
                      Find Me in
                    </div>
                    <div className="flex flex-row gap-3">
                      <div className="p-2 rounded bg-gray-200">
                        <FaFacebookF />
                      </div>
                      <div className="p-2 rounded bg-gray-200">
                        <FaGithub />
                      </div>
                      <div className="p-2 rounded bg-gray-200">
                        <FaInstagramSquare />
                      </div>
                      <div className="p-2 rounded bg-gray-200">
                        <FaLinkedin />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-full md:w-[80%] mdl:w-[70%] xl:w-[40%] bg-white rounded p-5 flex flex-col gap-10">
              <div className="text-xl uppercase text-center">
                Send me a message
              </div>
              <div>
                <form className="flex flex-col gap-5 px-4 mdl:px-7">
                  <div className="w-full flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-[50%]">
                      <input
                        className="w-full h-8 outline-none border-b-[1px] border-darkBG text-sm md:text-base"
                        placeholder="First name"
                      />
                    </div>
                    <div className="w-full md:w-[50%]">
                      <input
                        className="w-full h-8 outline-none border-b-[1px] border-darkBG text-sm md:text-base"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      className="w-full h-8 outline-none border-b-[1px] border-darkBG text-sm md:text-base"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      className="w-full h-8 outline-none border-b-[1px] border-darkBG text-sm md:text-base"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      className="w-full h-8 outline-none border-b-[1px] border-darkBG text-sm md:text-base"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      // onChange={(e) => setMessage(e.target.value)}
                      // value={message}
                      name="message"
                      className="w-full outline-none border-b-[1px] border-darkBG text-sm md:text-base"
                      placeholder="Your message"
                      type="text"
                      cols="lg:30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="w-full bg-red-400 rounded py-2 md:py-3 px-3 flex justify-center items-center text-white">
                    <button className="flex justify-center items-center text-sm md:text-base">
                      <span className="text-xl pe-2">
                        <IoIosSend />
                      </span>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="full flex justify-center items-center px-2 sml:px-5 md:px-7 lg:px-0 pt-7 lg:pt-10">
          <div className="w-full lg:w-[90%] bg-red-500 text-white rounded-xl px-0 mdl:px-5 lg:px-10">
            <div className="grid grid-cols-3">
              <div className="p-2 md:p-4 flex flex-col gap-1 items-center">
                <div className="flex p-2 md:p-3 rounded-[50%] mt-[-37px] md:mt-[-56px] bg-[#141618] relative">
                  <div className="p-2 md:p-4 text-xl md:text-3xl rounded-[50%]  bg-red-500 text-white">
                    <IoLocationSharp />
                  </div>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -left-[10px] md:-left-[24.5px] z-[100] rounded-tr-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -right-[10px] md:-right-[24.5px] z-[100] rounded-tl-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                </div>
                <div className="uppercase font-titleFont font-bold text-xs md:text-sm lg:text-base leading-none md:pt-3">
                  Address
                </div>
                <div className="text-[8px] md:text-xs text-center">
                  Khulna Sadar, Khulna-9100, Bangladesh
                </div>
              </div>
              <div className="p-2 md:p-4 flex flex-col gap-1 items-center">
                <div className="flex p-2 md:p-3 rounded-[50%] mt-[-37px] md:mt-[-56px] bg-[#141618] relative">
                  <div className="p-2 md:p-4 text-xl md:text-3xl rounded-[50%]  bg-red-500 text-white">
                    <MdCall />
                  </div>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -left-[10px] md:-left-[24.5px] z-[100] rounded-tr-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -right-[10px] md:-right-[24.5px] z-[100] rounded-tl-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                </div>
                <div className="uppercase font-titleFont font-bold text-xs md:text-sm lg:text-base leading-none md:pt-3">
                  Phone
                </div>
                <div className="text-[8px] md:text-xs text-center">
                  <div className="flex flex-col gap-1 leading-none">
                    <div>+8801782734573</div>
                    <div>+8801893204778</div>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-4 flex flex-col gap-1 items-center">
                <div className="flex p-2 md:p-3 rounded-[50%] mt-[-37px] md:mt-[-56px] bg-[#141618] relative">
                  <div className="p-2 md:p-4 text-xl md:text-3xl rounded-[50%]  bg-red-500 text-white">
                    <IoMdMail />
                  </div>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -left-[10px] md:-left-[24.5px] z-[100] rounded-tr-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -right-[10px] md:-right-[24.5px] z-[100] rounded-tl-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                </div>
                <div className="uppercase font-titleFont font-bold text-xs md:text-sm lg:text-base leading-none md:pt-3">
                  Email
                </div>
                <div className="text-[8px] md:text-xs text-center text-wrap">
                  syednoor058@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
