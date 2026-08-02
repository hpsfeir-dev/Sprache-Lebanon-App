/* Lautschrift für die Sprachausgabe.

   Alle arabischen TTS-Stimmen sind auf Hocharabisch trainiert: Sie lesen
   قهوة als „qahwa“, nie als „ʾahwe“. Wir können die Stimme aber austricksen,
   indem wir ihr den Text so vorlegen, wie er im Libanesischen KLINGT.

   Aus قهوة wird أهوة — und die Stimme sagt „ahwe“.

   Das ersetzt keine echte Aufnahme, bringt die Synthese aber spürbar näher an
   den Klang von Kesrouan. */
var Phonetics = (function () {

  /* Wörter, bei denen die Regelmechanik nicht reicht — hier steht die
     Lautschrift ausgeschrieben. Vor allem für die Imāla (ā → ē), die sich
     nicht zuverlässig automatisch ableiten lässt. */
  var overrides = {
    'لبنان':   'لبنين',      // Lubnēn
    'كان':     'كين',        // kēn
    'باب':     'بيب',        // bēb
    'كتاب':    'كتيب',       // ktēb
    'تفاح':    'تفيح',       // teffēḥ
    'دجاج':    'دجيج',       // djēj
    'مبارح':   'مبيرح',      // mbēreḥ
    'كمان':    'كمين',       // kamēn
    'خال':     'خيل',        // khēl
    'رجال':    'رجيل',       // rejjēl
    'شمال':    'شميل',       // shmēl
    'حساب':    'حسيب',       // ḥsēb
    'الحساب':  'الحسيب',
    'مع السلامة': 'مع السليمة',
    'ثلاثة':   'تليتة',      // tlēte
    'تلاتة':   'تليتة',
    'تمانية':  'تمينة',      // tmēne
    'واحد':    'ويحد',       // wēḥad
    'جوعان':   'جوعين',      // jū3ēn
    'عيلة':    'عيلة',
    'مدرسة':   'مدرسه',      // madrase — ة am Ende als -e
    'قهوة':    'أهوه',       // ʾahwe
    'صباح الخير': 'صباح الخير',
    'ساعة':    'سيعة'        // sē3a
  };

  /* Buchstabenregeln des Levantinischen. */
  function respell(text) {
    if (!text) return text;

    var direct = overrides[text.trim()];
    if (direct) return direct;

    var out = text;

    // ق → Knacklaut. Am Wortanfang als أ, sonst als ء.
    out = out.replace(/(^|\s|ال)ق/g, '$1أ');
    out = out.replace(/ق/g, 'ء');

    // ث → ت und ذ → د (im Libanesischen zusammengefallen)
    out = out.replace(/ث/g, 'ت');
    out = out.replace(/ذ/g, 'د');

    // ظ → ض
    out = out.replace(/ظ/g, 'ض');

    // ة am Wortende klingt -e; ه bringt die Stimme näher heran als ة
    out = out.replace(/ة(\s|$|[،.!؟])/g, 'ه$1');

    return out;
  }

  /* Für die Anzeige: Hat die Umschreibung überhaupt etwas geändert? */
  function changed(text) { return respell(text) !== text; }

  function addOverride(ar, spoken) { overrides[ar] = spoken; }

  return { respell: respell, changed: changed, addOverride: addOverride };
})();
