import Slider from "react-slick";
import Layout from "./components/Layout";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { BiLogoFacebookCircle } from "react-icons/bi";

const settings = {
  autoPlay: true,
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "linear",
};

const phones = {
  US: "+1",
  DE: "+50",
  TR: "+90",
  IT: "+7",
  IN: "+15",
};

function App() {
  const [selected, setSelected] = useState("TR");
  return (
    <div>
      <Layout>
        <main className="min-h-[calc(100vh_-_68px)]">
          <div className="relative overflow-hidden  h-[500px] ">
            {/* <div className="bg-hero-bg absolute top-0 w-full h-full opacity-100 z-40"></div> */}
            <div className="before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:z-full before:w-full before:z-40 before:opacity-100"></div>

            <Slider {...settings}>
              <div>
                <img
                  alt="source-1"
                  src="/images/getir-mainpage-1.jpg"
                  className="object-cover w-full h-[500px]"
                />
              </div>
              <div>
                <img
                  alt="source-1"
                  src="/images/getir-mainpage-2.jpg"
                  className="object-cover w-full h-[500px]"
                />
              </div>
              <div>
                <img
                  alt="source-1"
                  src="/images/getir-mainpage-3.jpg"
                  className="object-cover w-full h-[500px]"
                />
              </div>
              <div>
                <img
                  alt="source-1"
                  src="/images/getir-mainpage-4.jpg"
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </Slider>
            <div className="container flex column justify-around items-center  absolute top-0 left-1/2 -translate-x-1/2 h-full z-50">
              <div>
                <img
                  className="w-[180px] "
                  alt=""
                  src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                ></img>
                <h3 className="mt-6 text-4xl font-semibold text-white">
                  Dakikalar içinde <br />
                  kapınızda
                  <br />
                </h3>
              </div>
              <div className="w-[400px] rounded-lg bg-gray-50 p-6 ">
                <div className="text-center font-semibold text-primary-brand-color">
                  Giriş yap veya kayıt ol
                </div>
                <div className="grid gap-y-3">
                  <div className="flex mt-4">
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      countries={Object.keys(phones)}
                      customLabels={phones}
                      className="flag-select mr-4 !py-0"
                    />
                    <label className="flex-1 relative block">
                      <input
                        required
                        className="phone w-full peer text-sm pt-2"
                      />
                      <span className="absolute top-0 left-0 h-full px-3 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                        Telefon Numarası
                      </span>
                    </label>
                  </div>
                  <button className="bg-brand-yellow h-12 flex items-center justify-center p-3 w-full  rounded-md text-primary-brand-color font-semibold text-sm transition-colors hover:text-brand-yellow hover:bg-primary-brand-color ">
                    Telefon numarası ile devam et
                  </button>
                  <hr className="h-[1px] bg-gray-300"></hr>
                  <button className="bg-blue-900 bg-opacity-10 px-8 h-12 text-primary-brand-color flex items-center  p-3 w-full  rounded-md  font-semibold text-sm transition-colors hover:bg-primary-brand-color hover:text-blue-100 ">
                    <BiLogoFacebookCircle size={24} />
                    <span className="mx-auto">Facebook ile devam et</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default App;
