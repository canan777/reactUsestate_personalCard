import "./Header.css";
import "../CustomButton/CustomButton";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import InfoBox from "./../InfoBox/InfoBox";
import Modal from "../Modal/Modal";

/** Component Oluşturma Kuralları
 * Her React Componenti JavaScript Fonksiyonudur
 * Adı Büyük Harfle Başlayan Bir JavaScript Fonksiyonu Oluştur
 * Fonksiyonun içerisinde ekranda olmaını istediğin bir jsx kodlarını return içerisinde yaz
 * son olarak oluşturudğun componenti export et
 */

const Header = ({ aktifKullaniciSayisi, setAktifKullanici }) => {
  console.log(aktifKullaniciSayisi);
  /**Componentlerin anlık durumlarını tutmak için
   * useState Hooksu kullanılır
   * usetState kullanırken
   * ilk tanımladığımız değer statenin yani durumun değeridi
   * ikinci tanımlaadığımız ve set ile başalayan değer ise durumun değer güncelleyecek metoddur
   */

  const [basilanButon, setBasilanButon] = useState(null);
  const [modalGoster, setModalGoster] = useState(false);
  console.log(basilanButon);

  const menuIsimleri = ["Ana Sayfa", "Hakkımızda", "Ürünlerimiz", "İletişim"];

  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="navbar">
        {/*menuIsımlari dizini dön ve her isim için ekrana bir a etiketi bas */}
        {menuIsimleri.map((menuIsmi) => (
          <a>{menuIsmi}</a>
        ))}
      </nav>

      <div className="header-right">
        {/*basilanButonun içeriği var ise çıkış yap butonunu render yoksa ise giriş yap butonlarını render et  */}
        {basilanButon ? (
          <CustomButton
            buttonTitle={`${basilanButon} olarak Çıkış Yap`}
            buttonColor={"red"}
            //basilanButon değerini tekrar null yap ki giriş butonları gözüksün
            onClick={() => {
              if (basilanButon === "Kullanıcı") {
                setAktifKullanici(aktifKullaniciSayisi - 1);
              }
              setBasilanButon(null);
            }}
          />
        ) : (
          <>
            <CustomButton
              onClick={() => {
                setAktifKullanici(aktifKullaniciSayisi + 1);
                //basilanButon içeriği Kullanıcı kelimesi ile değiştirliyor
                setBasilanButon("Kullanıcı");
              }}
              buttonTitle={"Kullanıcı Girişi"}
              buttonColor={"cadetblue"}
            />
            <CustomButton
              onClick={() => {
                //basilanButon içeriği Yönetici kelimesi ile setleniyor
                setBasilanButon("Yönetici");
              }}
              buttonTitle={"Yönetici Girişi"}
              buttonColor={"orange"}
            />
            <CustomButton
              onClick={() => setModalGoster(true)}
              buttonTitle={"Kayıt Ol"}
              buttonColor={"green"}
            />
          </>
        )}
        {/*&& işareti ile yapılan sorguda sadece varsa kontrol edilir aksi durumu sorgulanmaz */}
        {/*basilanButon içeriğinde Yönetici varsa  */}
        {basilanButon === "Yönetici" && (
          <InfoBox
            infoMetin={"Aktif Kullanıcı Sayısı"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}

        {basilanButon === "Kullanıcı" && (
          <InfoBox
            infoMetin={"Sizinle birlikte Kullanıcı Sayısı"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}
      </div>
      {modalGoster === true && <Modal setModalGoster={setModalGoster} />}
    </header>
  );
};

export { Header };