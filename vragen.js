// Hier kun je zelf vragen toevoegen, aanpassen of verwijderen.
// Elke vraag staat tussen aanhalingstekens en wordt afgesloten met een komma.
//
// {speler} wordt automatisch vervangen door een willekeurige medespeler.
//
// Voor invulvragen met meerdere vakjes gebruik je dit formaat:
//   { tekst: "Zin met ___ en nog een ___", type: "invul" }
// Elk ___ wordt een apart invulvakje voor de speler.
//
// Minimaal evenveel vragen als het aantal rondes dat je instelt!

const QUESTIONS = [
  "Beschrijf de seksfilm waar {speler} de hoofdrol in speelt in één zin.",
  "{speler} stuurt een dronken voice memo naar zijn/haar ex om 3 uur 's nachts. Wat zegt hij/zij?",
  "Waarom wordt {speler} permanent verbannen uit een seksshop?",
  "{speler} valt in slaap tijdens seks. Wat is zijn/haar uitleg de volgende ochtend?",
  "Geef {speler} een bijnaam die hij/zij in bed zou verdienen.",
  "Hoe omschrijft {speler} zijn/haar 'bijzondere talenten' op een datingprofiel?",
  "Wat is de ergste smoes die {speler} verzint om toch maar niet mee naar huis te gaan?",
  "{speler} houdt een speech op een bruiloft maar is stomdronken. Wat is de meest beschamende zin?",
  "Wat fluistert {speler} iemand in het oor waarna die persoon direct vertrekt?",
  "Beschrijf hoe {speler} de dag begint na een compleet mislukte one night stand.",
  "Hoe probeert {speler} iemand te versieren? Schrijf zijn/haar openingszin.",
  "{speler} heeft een geheim dat hij/zij nooit zou vertellen — maar jij weet het. Wat is het?",
  "Wat zou de slechtste seksadvies zijn die {speler} ooit heeft gegeven?",
  "{speler} maakt een OnlyFans aan. Wat is de naam van het account en wat staat er in de bio?",
  "Hoe reageert {speler} als zijn/haar date zegt dat hij/zij een fetish heeft voor ___?",
  { tekst: "{speler} wordt betrapt op ___ door zijn/haar ___.", type: "invul" },
  { tekst: "{speler} verstuurt per ongeluk een pikante foto naar ___ in plaats van zijn/haar date.", type: "invul" },
  { tekst: "{speler} heeft stiekem seks gehad met ___ op ___.", type: "invul" },

  // === DATE ===
  "Beschrijf de meest ongemakkelijke stilte op een date van {speler} — en hoe hij/zij die probeert te vullen.",
  "{speler} gebruikt een openingszin op Tinder. Schrijf de slechtste die hij/zij ooit heeft gebruikt.",
  "Wat onthult {speler} op een eerste date waardoor de ander direct om de rekening vraagt?",
  "Hoe saboteert {speler} onbedoeld zijn/haar eigen date?",
  "{speler} wordt gedumpt na één date. Wat was de reden?",
  "Schrijf de Tinder-bio van {speler} die gegarandeerd geen matches oplevert.",
  "Wat doet {speler} op een date om indruk te maken dat volledig averechts werkt?",
  { tekst: "{speler} doet ___ op een eerste date om indruk te maken, maar het loopt mis wanneer ___.", type: "invul" },
  { tekst: "{speler} maakt een datingprofiel aan met als biografie: ___ en als hobby: ___.", type: "invul" },

  // === ALCOHOL ===
  "Wat doet {speler} altijd na zijn/haar vijfde drankje dat niemand wil zien?",
  "Beschrijf de slechtste drankbeslissing die {speler} ooit heeft genomen.",
  "Hoe weet je dat {speler} te veel op heeft zonder dat je hem/haar hoeft te vragen?",
  "{speler} wil stoer overkomen en bestelt een drankje. Wat gaat er mis?",
  "Wat zegt {speler} dronken op straat tegen een willekeurig vreemde?",
  { tekst: "{speler} belt zijn/haar ex op, beweert dat hij/zij ___ is en vraagt of hij/zij ___.", type: "invul" },

  // === SOCIAAL ONGEMAKKELIJK ===
  "Beschrijf de meest beschamende val van {speler} in een openbare ruimte.",
  "Wat zegt {speler} op precies het verkeerde moment in een doodstille ruimte?",
  "Hoe weet je dat {speler} het sociaal volledig heeft verpest op een feestje?",
  "{speler} probeert cool over te komen bij iemand die hij/zij leuk vindt. Wat gaat er mis?",
  "Beschrijf de meest awkward handdruk/begroeting die {speler} ooit heeft gegeven.",
  "Hoe redt {speler} zich als hij/zij iemand vergeet te herkennen die hij/zij al drie keer heeft ontmoet?",
  { tekst: "{speler} zegt per ongeluk ___ hardop in een ___ en iedereen hoort het.", type: "invul" },
  { tekst: "{speler} probeert elegant ___ te doen maar struikelt over ___ en belandt in ___.", type: "invul" },

  // === CRIMINALITEIT ===
  "Waarom staat {speler} op de Interpol-lijst?",
  "Beschrijf de mislukte overval van {speler} in één zin.",
  "Hoe wordt {speler} uiteindelijk toch gepakt door de politie?",
  "Wat is het eerste dat {speler} doet als hij/zij weet dat de politie eraan komt?",
  "Schrijf de openingszin van het politierapport over {speler}.",
  "{speler} probeert iets te smokkelen. Wat is het en waar verstopt hij/zij het?",
  "Welk misdrijf pleegt {speler} puur uit gemakzucht?",
  { tekst: "{speler} wordt aangehouden voor ___ op ___ en probeert zich eruit te praten met ___.", type: "invul" },
  { tekst: "{speler} wordt opgepakt voor het stelen van ___ uit ___ en zegt als excuus: ___.", type: "invul" },
];
