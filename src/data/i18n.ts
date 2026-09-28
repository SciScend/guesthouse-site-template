// All interface text, per language. Property facts (rooms, prices, contacts)
// live in property.json; this file holds only wording.
// Greek and Romanian must be checked by a native speaker before a real launch.

export const LANGS = ['bg', 'en', 'el', 'ro'] as const;
export type Lang = (typeof LANGS)[number];

/** Label on the language switcher. Greek shows GR, the code guests expect. */
export const LANG_LABEL: Record<Lang, string> = { bg: 'BG', en: 'EN', el: 'GR', ro: 'RO' };
export const LANG_NAME: Record<Lang, string> = { bg: 'Български', en: 'English', el: 'Ελληνικά', ro: 'Română' };
export const LOCALE: Record<Lang, string> = { bg: 'bg_BG', en: 'en_GB', el: 'el_GR', ro: 'ro_RO' };

type Dict = {
  demo: string;
  nav: { rooms: string; around: string; faq: string; contact: string };
  heroIn: string;
  lead: string;
  cta: string;
  directTitle: string;
  direct: [string, string][];
  roomsTitle: string;
  from: string;
  night: string;
  guests: string;
  sqm: string;
  features: Record<string, string>;
  amenitiesTitle: string;
  amenities: Record<string, string>;
  aroundTitle: string;
  km: string;
  faqTitle: string;
  faq: [string, string][];
  inquiryTitle: string;
  inquiryLead: string;
  arrival: string;
  departure: string;
  guestsField: string;
  room: string;
  anyRoom: string;
  yourName: string;
  message: string;
  sendWhatsApp: string;
  sendViber: string;
  sendEmail: string;
  call: string;
  viberHint: string;
  msgIntro: string;
  checkin: string;
  checkout: string;
  map: string;
  booking: string;
  madeBy: string;
  title: string;
  description: string;
};

export const T: Record<Lang, Dict> = {
  bg: {
    demo: 'Демо: измислен обект. Така може да изглежда сайтът на вашата къща за гости.',
    nav: { rooms: 'Стаи', around: 'Наоколо', faq: 'Въпроси', contact: 'Запитване' },
    heroIn: 'в',
    lead: 'Тиха къща за гости на пет минути пеша от парка и минералните басейни. Резервирайте директно при нас: без посредник и без комисиона.',
    cta: 'Попитайте за свободни дати',
    directTitle: 'Защо да резервирате директно',
    direct: [
      ['По-добра цена', 'Същата стая, без комисионата на платформите.'],
      ['Говорите с домакина', 'Ранно настаняване, късно напускане, трансфер: питате и се разбираме.'],
      ['На вашия език', 'Отговаряме на български, английски, гръцки и румънски.'],
    ],
    roomsTitle: 'Стаи',
    from: 'от',
    night: 'на нощ',
    guests: 'гости',
    sqm: 'кв. м',
    features: { balcony: 'балкон', ac: 'климатик', wifi: 'Wi-Fi', tv: 'телевизор', kitchenette: 'кухненски бокс', view: 'изглед към планината' },
    amenitiesTitle: 'За всички гости',
    amenities: { parking: 'безплатен паркинг', wifi: 'безплатен Wi-Fi', breakfast: 'домашна закуска', garden: 'градина', bbq: 'барбекю', ac: 'климатик във всяка стая' },
    aroundTitle: 'Наоколо',
    km: 'км',
    faqTitle: 'Често задавани въпроси',
    faq: [
      ['Кога е настаняването?', 'От 14:00. Напускането е до 11:00. Ако пристигате по-рано, пишете ни и ще се опитаме.'],
      ['Има ли паркинг?', 'Да, безплатен, в двора.'],
      ['Как се плаща?', 'В брой или по банков път. При потвърждение молим за капаро от 30%.'],
      ['Можете ли да уредите СПА процедури?', 'Да. Уговаряме процедури в балнео центровете наблизо, според препоръката на лекаря.'],
      ['Приемате ли домашни любимци?', 'Малки кучета, по предварителна уговорка.'],
    ],
    inquiryTitle: 'Запитване за свободни дати',
    inquiryLead: 'Попълнете и изпратете по удобния за вас начин. Отговаряме до 2 часа, от 8 до 22 ч.',
    arrival: 'Пристигане',
    departure: 'Заминаване',
    guestsField: 'Гости',
    room: 'Стая',
    anyRoom: 'Която и да е',
    yourName: 'Име',
    message: 'Съобщение (по желание)',
    sendWhatsApp: 'Изпрати по WhatsApp',
    sendViber: 'Изпрати по Viber',
    sendEmail: 'Изпрати по имейл',
    call: 'Обади се',
    viberHint: 'Текстът е копиран. Поставете го в чата във Viber.',
    msgIntro: 'Здравейте! Запитване за',
    checkin: 'Настаняване',
    checkout: 'Напускане',
    map: 'Виж на картата',
    booking: 'Вижте ни и в Booking.com',
    madeBy: 'Сайт от',
    title: 'Къща за гости в Сандански, до парка и минералните басейни',
    description: 'Къща за гости в Сандански на пет минути от парка и минералните басейни. Стаи за 2 до 4 гости, паркинг, закуска. Директна резервация без комисиона.',
  },
  en: {
    demo: 'Demo: an invented property. This is how your guest house site could look.',
    nav: { rooms: 'Rooms', around: 'Nearby', faq: 'FAQ', contact: 'Inquiry' },
    heroIn: 'in',
    lead: 'A quiet guest house, a five-minute walk from the park and the mineral pools. Book directly with us: no middleman, no commission.',
    cta: 'Ask about free dates',
    directTitle: 'Why book directly',
    direct: [
      ['A better price', 'The same room, without the platforms\' commission.'],
      ['Talk to your host', 'Early check-in, late check-out, a transfer: just ask.'],
      ['In your language', 'We answer in Bulgarian, English, Greek and Romanian.'],
    ],
    roomsTitle: 'Rooms',
    from: 'from',
    night: 'per night',
    guests: 'guests',
    sqm: 'sq m',
    features: { balcony: 'balcony', ac: 'air conditioning', wifi: 'Wi-Fi', tv: 'TV', kitchenette: 'kitchenette', view: 'mountain view' },
    amenitiesTitle: 'For all guests',
    amenities: { parking: 'free parking', wifi: 'free Wi-Fi', breakfast: 'home-made breakfast', garden: 'garden', bbq: 'barbecue', ac: 'air conditioning in every room' },
    aroundTitle: 'Nearby',
    km: 'km',
    faqTitle: 'Frequently asked questions',
    faq: [
      ['When is check-in?', 'From 14:00. Check-out is by 11:00. If you arrive earlier, message us and we will try.'],
      ['Is there parking?', 'Yes, free, in the yard.'],
      ['How do I pay?', 'In cash or by bank transfer. We ask for a 30% deposit to confirm.'],
      ['Can you arrange spa treatments?', 'Yes. We book treatments at the balneo centres nearby, as the doctor recommends.'],
      ['Are pets welcome?', 'Small dogs, by prior arrangement.'],
    ],
    inquiryTitle: 'Ask about free dates',
    inquiryLead: 'Fill in and send it the way you prefer. We reply within 2 hours, 8:00 to 22:00.',
    arrival: 'Arrival',
    departure: 'Departure',
    guestsField: 'Guests',
    room: 'Room',
    anyRoom: 'Any',
    yourName: 'Name',
    message: 'Message (optional)',
    sendWhatsApp: 'Send via WhatsApp',
    sendViber: 'Send via Viber',
    sendEmail: 'Send by e-mail',
    call: 'Call',
    viberHint: 'The text is copied. Paste it into the Viber chat.',
    msgIntro: 'Hello! An inquiry for',
    checkin: 'Check-in',
    checkout: 'Check-out',
    map: 'See on the map',
    booking: 'Find us on Booking.com too',
    madeBy: 'Site by',
    title: 'Guest house in Sandanski, next to the park and the mineral pools',
    description: 'A guest house in Sandanski, five minutes from the park and the mineral pools. Rooms for 2 to 4 guests, parking, breakfast. Book directly, no commission.',
  },
  el: {
    demo: 'Επίδειξη: φανταστικός ξενώνας. Έτσι θα μπορούσε να είναι η ιστοσελίδα σας.',
    nav: { rooms: 'Δωμάτια', around: 'Κοντά', faq: 'Ερωτήσεις', contact: 'Ερώτηση' },
    heroIn: 'στο',
    lead: 'Ήσυχος ξενώνας, πέντε λεπτά με τα πόδια από το πάρκο και τις ιαματικές πισίνες. Κάντε κράτηση απευθείας σε εμάς: χωρίς μεσάζοντα, χωρίς προμήθεια.',
    cta: 'Ρωτήστε για διαθεσιμότητα',
    directTitle: 'Γιατί απευθείας κράτηση',
    direct: [
      ['Καλύτερη τιμή', 'Το ίδιο δωμάτιο, χωρίς την προμήθεια των πλατφορμών.'],
      ['Μιλάτε με τον οικοδεσπότη', 'Νωρίτερη άφιξη, αργότερη αναχώρηση, μεταφορά: απλώς ρωτήστε.'],
      ['Στη γλώσσα σας', 'Απαντάμε στα ελληνικά, αγγλικά, βουλγαρικά και ρουμανικά.'],
    ],
    roomsTitle: 'Δωμάτια',
    from: 'από',
    night: 'τη βραδιά',
    guests: 'άτομα',
    sqm: 'τ.μ.',
    features: { balcony: 'μπαλκόνι', ac: 'κλιματισμός', wifi: 'Wi-Fi', tv: 'τηλεόραση', kitchenette: 'κουζινούλα', view: 'θέα στο βουνό' },
    amenitiesTitle: 'Για όλους τους επισκέπτες',
    amenities: { parking: 'δωρεάν πάρκινγκ', wifi: 'δωρεάν Wi-Fi', breakfast: 'σπιτικό πρωινό', garden: 'κήπος', bbq: 'ψησταριά', ac: 'κλιματισμός σε κάθε δωμάτιο' },
    aroundTitle: 'Κοντά',
    km: 'χλμ.',
    faqTitle: 'Συχνές ερωτήσεις',
    faq: [
      ['Τι ώρα είναι η άφιξη;', 'Από τις 14:00. Η αναχώρηση είναι έως τις 11:00. Αν φτάσετε νωρίτερα, γράψτε μας και θα προσπαθήσουμε.'],
      ['Υπάρχει πάρκινγκ;', 'Ναι, δωρεάν, στην αυλή.'],
      ['Πώς πληρώνω;', 'Με μετρητά ή με τραπεζική μεταφορά. Για την επιβεβαίωση ζητάμε προκαταβολή 30%.'],
      ['Μπορείτε να κλείσετε θεραπείες σπα;', 'Ναι. Κλείνουμε θεραπείες στα κοντινά ιαματικά κέντρα, σύμφωνα με τη σύσταση του γιατρού.'],
      ['Δέχεστε κατοικίδια;', 'Μικρά σκυλιά, με προηγούμενη συνεννόηση.'],
    ],
    inquiryTitle: 'Ερώτηση για διαθεσιμότητα',
    inquiryLead: 'Συμπληρώστε και στείλτε με όποιον τρόπο σας βολεύει. Απαντάμε μέσα σε 2 ώρες, 8:00 έως 22:00.',
    arrival: 'Άφιξη',
    departure: 'Αναχώρηση',
    guestsField: 'Άτομα',
    room: 'Δωμάτιο',
    anyRoom: 'Οποιοδήποτε',
    yourName: 'Όνομα',
    message: 'Μήνυμα (προαιρετικά)',
    sendWhatsApp: 'Αποστολή μέσω WhatsApp',
    sendViber: 'Αποστολή μέσω Viber',
    sendEmail: 'Αποστολή με e-mail',
    call: 'Τηλεφωνήστε',
    viberHint: 'Το κείμενο αντιγράφηκε. Επικολλήστε το στη συνομιλία του Viber.',
    msgIntro: 'Γεια σας! Ερώτηση για',
    checkin: 'Άφιξη',
    checkout: 'Αναχώρηση',
    map: 'Δείτε στον χάρτη',
    booking: 'Θα μας βρείτε και στο Booking.com',
    madeBy: 'Ιστοσελίδα από',
    title: 'Ξενώνας στο Σαντάνσκι, δίπλα στο πάρκο και τις ιαματικές πισίνες',
    description: 'Ξενώνας στο Σαντάνσκι, πέντε λεπτά από το πάρκο και τις ιαματικές πισίνες. Δωμάτια για 2 έως 4 άτομα, πάρκινγκ, πρωινό. Απευθείας κράτηση χωρίς προμήθεια.',
  },
  ro: {
    demo: 'Demo: o pensiune inventată. Așa ar putea arăta site-ul pensiunii dumneavoastră.',
    nav: { rooms: 'Camere', around: 'În apropiere', faq: 'Întrebări', contact: 'Cerere' },
    heroIn: 'din',
    lead: 'O pensiune liniștită, la cinci minute de mers pe jos de parc și de piscinele cu apă minerală. Rezervați direct la noi: fără intermediari, fără comision.',
    cta: 'Întrebați de locuri libere',
    directTitle: 'De ce să rezervați direct',
    direct: [
      ['Un preț mai bun', 'Aceeași cameră, fără comisionul platformelor.'],
      ['Vorbiți cu gazda', 'Cazare mai devreme, plecare mai târziu, transfer: întrebați-ne.'],
      ['În limba dumneavoastră', 'Răspundem în română, engleză, greacă și bulgară.'],
    ],
    roomsTitle: 'Camere',
    from: 'de la',
    night: 'pe noapte',
    guests: 'persoane',
    sqm: 'mp',
    features: { balcony: 'balcon', ac: 'aer condiționat', wifi: 'Wi-Fi', tv: 'televizor', kitchenette: 'chicinetă', view: 'vedere spre munte' },
    amenitiesTitle: 'Pentru toți oaspeții',
    amenities: { parking: 'parcare gratuită', wifi: 'Wi-Fi gratuit', breakfast: 'mic dejun de casă', garden: 'grădină', bbq: 'grătar', ac: 'aer condiționat în fiecare cameră' },
    aroundTitle: 'În apropiere',
    km: 'km',
    faqTitle: 'Întrebări frecvente',
    faq: [
      ['De la ce oră este cazarea?', 'De la 14:00. Plecarea este până la 11:00. Dacă ajungeți mai devreme, scrieți-ne și vom încerca.'],
      ['Există parcare?', 'Da, gratuită, în curte.'],
      ['Cum se plătește?', 'Numerar sau prin transfer bancar. Pentru confirmare cerem un avans de 30%.'],
      ['Puteți programa proceduri spa?', 'Da. Programăm proceduri la centrele balneare din apropiere, după recomandarea medicului.'],
      ['Acceptați animale de companie?', 'Câini mici, cu înțelegere prealabilă.'],
    ],
    inquiryTitle: 'Cerere pentru locuri libere',
    inquiryLead: 'Completați și trimiteți cum vă este comod. Răspundem în 2 ore, între 8:00 și 22:00.',
    arrival: 'Sosire',
    departure: 'Plecare',
    guestsField: 'Persoane',
    room: 'Camera',
    anyRoom: 'Oricare',
    yourName: 'Nume',
    message: 'Mesaj (opțional)',
    sendWhatsApp: 'Trimite pe WhatsApp',
    sendViber: 'Trimite pe Viber',
    sendEmail: 'Trimite pe e-mail',
    call: 'Sunați',
    viberHint: 'Textul a fost copiat. Lipiți-l în conversația de pe Viber.',
    msgIntro: 'Bună ziua! O cerere pentru',
    checkin: 'Cazare',
    checkout: 'Plecare',
    map: 'Vedeți pe hartă',
    booking: 'Ne găsiți și pe Booking.com',
    madeBy: 'Site realizat de',
    title: 'Pensiune în Sandanski, lângă parc și piscinele cu apă minerală',
    description: 'Pensiune în Sandanski, la cinci minute de parc și de piscinele cu apă minerală. Camere pentru 2-4 persoane, parcare, mic dejun. Rezervare directă, fără comision.',
  },
};
