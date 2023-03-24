import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cardBox = document.createElement("div");
  cardBox.classList.add("card");

  const anabaslikBox = document.createElement("div");
  anabaslikBox.classList.add("headline");
  anabaslikBox.textContent = makale.anabaslik;
  cardBox.appendChild(anabaslikBox);

  const authorBox = document.createElement("div");
  authorBox.classList.add("author");
  cardBox.appendChild(authorBox);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  authorBox.appendChild(imgContainer);

  const yazarFotoImg = document.createElement("img");
  yazarFotoImg.src = makale.yazarFoto;
  imgContainer.appendChild(yazarFotoImg);

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi + " tarafından";
  authorBox.appendChild(yazarAdi);

  authorBox.appendChild(yazarAdi);
  cardBox.appendChild(authorBox);

  cardBox.addEventListener("click", (event) => {
    console.log(makale.anabaslik);
  });
  return cardBox;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const newSelector3 = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/makaleler")

    .then((response) => {
      console.log(response.data.makaleler);
      for (let key in response.data.makaleler) {
        for (let i = 0; i < response.data.makaleler[key].length; i++) {
          newSelector3.appendChild(Card(response.data.makaleler[key][i]));
        }
      }
    })
    .catch((error) => {
      console.log("Error: " + err);
    });
};

export { Card, cardEkleyici };
