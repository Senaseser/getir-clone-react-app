import React from "react";
import Menu from "../ui/Menu";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

const menus = [
  {
    title: "Getir'i keşfedin",
    items: [
      { title: "Hakkımızda" },
      { title: "Kariyer" },
      { title: "İletişim" },
      { title: "Teknoloji Kariyerleri" },
      { title: "Sosyal Sorumluluk Projeleri" },
    ],
  },
  {
    title: "Yardıma mı ihtiyacınız var?",
    items: [
      { title: "Sıkça Sorulan Sorulara" },
      { title: "Kişisel Verilerin Korunması" },
      { title: "Gizlilik Politikası" },
      { title: "Kullanım Koşulları" },
      { title: "Çerez Politikası" },
      { title: "İşlem Rehberi" },
    ],
  },
  {
    title: "İş Ortağımız Olun",
    items: [
      { title: "Bayimiz Olun" },
      { title: "Deponuzu Kiralayın" },
      { title: "GetirYemek Restoranı Olun" },
      { title: "GetirÇarşı İşletmesi Olun" },
      { title: "Zincir Restoranlar" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-y-8 gap-y-8 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin!
              </h6>
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
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} title={menu.title} items={menu.items} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-4 py-4">
          <div className="text-sm text-gray-700 flex gap-x-8">
            &copy; 2023 Getir
            <a
              href="^#"
              className="text-primary-brand-color font-semibold opacity-70 hover:underline relative before:w-1 before:h-1 before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-4">
            <a
              href="#"
              className="w-8 h-8 text-gray-700  hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10  flex items-center justify-center rounded-md"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 text-gray-700 transition-colors  hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center  rounded-md"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 text-gray-700 transition-colors  hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center  rounded-md"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="h-8 flex items-center transition-colors  text-sm gap-x-2 rounded text-gray-500 border-gray-100 hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10  rounded-md"
            >
              <BiGlobe size={20} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
