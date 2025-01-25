"use server"

const PrivacyPolicy = () => {
  return (
    <div className="border border-gray-200 rounded-3xl p-8 flex flex-col gap-y-6">
      <p className="text-gray-500 text-16px500">
        Hazırkı məxfilik siyasəti Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi
        yanında Elektron Təhlükəsizlik Xidmətinin (bundan sonra – Elektron
        Təhlükəsizlik Xidməti) rəsmi internet informasiya ehtiyatı
        “www.cert.az” (bundan sonra – veb-sayt) vasitəsilə toplanılan fərdi
        məlumatların necə işlənildiyinə dair fərdi məlumat subyektlərini
        məlumatlandırma məqsədini daşıyır.
      </p>
      <p className="text-gray-500 text-16px500">
        Hazırkı bəyannamədə istifadə edilən anlayışlar Azərbaycan
        Respublikasının “Fərdi məlumatlar haqqında” Qanunda və digər
        normativ-hüquqi aktlarda nəzərdə tutulan mənaları daşıyır.
      </p>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-gray-900 text-18px700">
          Fərdi məlumatların işlənilməsinin hüquqi əsası
        </h2>
        <p className="text-gray-500 text-16px500">
          Elektron Təhlükəsizlik Xidməti tərəfindən fərdi məlumatlar
          Azərbaycan Respublikası Prezidentinin 2013-cü il 5 mart tarixli
          833 nömrəli Fərmanı ilə təsdiq edilmiş “Azərbaycan Respublikasının
          Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi yanında Elektron
          Təhlükəsizlik Xidməti haqqında Əsasnamə”(bundan sonra – Əsasnamə)
          və digər qanunvericilik aktları ilə müəyyən edilən səlahiyyət və
          vəzifələrinin icra olunması üçün işlənilir və toplanılır.
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-gray-900 text-18px700">
          Hansı fərdi məlumatları toplayırıq və nə məqsədlə işləyirik?
        </h2>
        <p className="text-gray-500 text-16px500">
          Veb-sayt vasitəsilə aşağıdakı məlumatlar toplanılır:Şikayət, ərizə
          və təkliflərin qəbulu prosesində: müraciət edən şəxsin adı,
          soyadı, ata adı, telefon nömrəsi, e-poçt ünvanı və müraciətə əlavə
          edilən hər hansı sənəddə göstərilən fərdi məlumatlar (əgər,
          mövcuddursa).Bu məlumatlar Əsasnamənin 3.1.20-10 və 3.1.21-ci
          bəndlərinə uyğun olaraq, Xidmətin fəaliyyəti ilə bağlı daxil olan
          ərizə və şikayətlərə baxmaq və qanunla müəyyən edilmiş qaydada
          tədbirlər həyata keçirmək məqsədilə toplanılır və işlənir.Ərizə və
          şikayətdə göstərilən halların araşdırılması məqsədilə zəruri
          olduğu və qanunvericilikdə tələb olunduğu hallardan başqa, fərdi
          məlumatlar üçüncü şəxslərlə paylaşılmır və onların məxfiliyi
          qorunur.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
