const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerBox = document.createElement("div");
  headerBox.classList.add("header");

  const tarihBox = document.createElement("span");
  tarihBox.classList.add("date");
  tarihBox.textContent = tarih;
  headerBox.appendChild(tarihBox);

  const baslikBox = document.createElement("h1");
  baslikBox.textContent = baslik;
  headerBox.appendChild(baslikBox);

  const yaziBox = document.createElement("span");
  yaziBox.classList.add("temp");
  yaziBox.textContent = yazi;
  headerBox.appendChild(yaziBox);

  return headerBox;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const newSelector = document.querySelector(secici);
  newSelector.appendChild(
    Header("Hayalperest Basın", "24 Mart 2023", "Hayalperestlerin Gazetesi")
  );
};

export { Header, headerEkleyici };
