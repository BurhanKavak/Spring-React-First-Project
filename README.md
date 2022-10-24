# Spring and React project
Employee List 
### Employee listesi ana sayfamın ilk kısmı home adında tutuyorum.
**Neler barındırıyor?**
* Navbarın en solunda sayfanın sol üst taraftaki kırmızı simgeye basıldığında home(anasayfa) kısmına yönlendiriyor.
* Navbarın devamında sosyal medya hesaplarının tutulduğu bölüm ve çalışanların kullandığı dillerin neler olduğunu barındıran **_Languages_** kısmı bulunmaktadır.


![Social Media](https://user-images.githubusercontent.com/79043326/197553465-3325b703-5270-4d89-a80f-c661fd50b993.png)
* Bir tablomuz bulunmakta burada çalışanlarımızın bilgilerini,hangi şirkette çalıştığı ve kullandığı dili tutuyoruz
* Tablomuzda ayriyeten delete ve update olmak üzere 2 adet butonumuz bulunmaktadır.Çöp kutusuna bastığımızda çalışanı veritabanından silmektedir.
![EmpLists](https://user-images.githubusercontent.com/79043326/197548754-703f6fe6-72ef-4ea9-80c0-0eff64402642.png)
* Update butonuna tıkladığımız zaman hangi kullanıcının update tuşuna bastıysak onun ID değerini alarak o kullanıcının güncellenmesi için bilgilerini isteyeceği yeni bir sayfaya yönelir.
* Güncelleyeceğimiz kullanıcının yeni bilgilerini girdikten sonra UPDATE EMPLOYEE Butonuna basmamız çalışanımızı hem burada hem de veritabanında güncellemek için yeterli olacaktır.
* Güncelleme işlemini bitirdiğimiz zaman anasayfaya yani Employee Listemize otomatik döneriz ve listemizi tekrar kontrol edebiliriz.
* Update butonuna bastıktan sonra güncellemekten vazgeçmek istersek sağ aşağıda _Back to list_ butonuna basmamız bizi anasayfaya tekrar dönmemizi sağlayacaktır.

![EmpUpdate](https://user-images.githubusercontent.com/79043326/197553959-4246dfc5-41f2-4b75-9625-76f696590628.png)


#### Anasayfamızda listenin altında bulunan _ADD_ Butonuna basacak olursak da yeni bir kullanıcı eklememiz için yeni bir sayfaya yönlendiriliriz.
* Update kısmına oldukça benzeyen yeni kullanıcı ekleme sayfasının tek farkı dediğimiz gibi bir ID alarak güncellemek değil yeni bir çalışan eklemek için kullandığımız sayfa.
* Bu kısımda da yeni çalışan bilgilerini girdiğimizde ADD EMPLOYEE butonuna basmamız yeni kullanıcıyı hem burada hem de veritabanına eklemiş olacaktır.
* Yeni çalışan eklendiği takdirde bizi anasayfaya yönlendirecektir.Eğer ki vazgeçersek anasayfaya dönmemiz için _Back to list_ butonuna basmamız dönmemiz için yeterli olacaktır.
![EmpAdd](https://user-images.githubusercontent.com/79043326/197556767-dbb8bdc2-68f5-4767-8744-f83e018d4852.png)


#### Navbarda Languages kısmına tıkladığımızda bizi veritabanında kayıtlı olan programlama dillerinin listesi karşılayacaktır.
* Bu listede programlama dillerinin avatarını ID değerini ve açıklamasını tutuyoruz açıklama kısmını random girdiğim için alakasız gözükecektir.
* Bu kısımdan dönmek istediğimizde _Back to list_ butonuna basmamız veya sayfanın sol üstündeki, navbarın solundaki kırmızı simgeye basmamız yeterli olacaktır.

![EmpLanguages](https://user-images.githubusercontent.com/79043326/197560851-c631dd18-db4c-4f17-8360-599e2f5dbe35.png)







