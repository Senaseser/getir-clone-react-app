import React from "react";

function MobileApp() {
  return (
    <div className=" container mx-auto px-4 bg-primary-brand-color bg-mobile-app  mt-8 rounded-3xl  flex justify-between items-center overflow-hidden h-82">
      <div className="ml-12">
        <h1 className="text-white font-bold text-[30px] mt-10">
          Getir'i indirin!
        </h1>
        <h5 className="text-white font-semibold tracking-tight mt-3">
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </h5>
        <nav className="flex gap-3 mt-4">
          <a href="#" className="transition-all hover:scale-105">
            <img
              src="	https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              className="h-11"
            ></img>
          </a>
          <a href="#" className="transition-all hover:scale-105">
            <img
              src="	https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              className="h-11"
            ></img>
          </a>
          <a href="#" className="transition-all hover:scale-105">
            <img
              src="	https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              className="h-11"
            ></img>
          </a>
        </nav>
      </div>
      <div className="md:flex hidden">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default MobileApp;
