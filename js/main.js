var phrases = {
    starters: [
        {
            spn: "Donde",
            eng: "Where",
            next: "locations"
        },
        {
            spn: "De donde",
            eng: "From where",
            next: "locations"
        },
        {
            spn: "Adonde",
            eng: "To where",
            next: "locations"
        }
    ],
    locations: [
        {
            eng: "do you",
            spn: "tu",
            next: "blah"
        },
        {
            eng: "are you",
            spn: "tu",
            output: true
        }
    ]
}
var vocab = [
    {
        english: "Breakfast",
        spanish: "Desayuno",
        pronounce: "Deh-say-uh-no",
        description: "A meal eaten in the morning.",
        images: [
        ],
        tags: [
            "food",
            "meal",
            "meals",
            "eat"
        ]
    },
    {
        english: "Lunch",
        spanish: "Comida",
        pronounce: "Cohm-ee-dah",
        description: "A meal eaten in the afternoon, generally between breakfast and dinner.",
        images: [
        ],
        tags: [
            "food",
            "meal",
            "meals",
            "eat"
        ]
    },
    {
        english: "Dinner",
        spanish: "Cena",
        pronounce: "Seh-na",
        description: "A meal eaten in the evening, usually the last meal of the day.",
        images: [
        ],
        tags: [
            "food",
            "meal",
            "meals",
            "eat"
        ]
    },
    {
        english: "Snack",
        spanish: "Tentempié",
        pronounce: "Ten-temp-ee-eh",
        description: "Food consumded outside of a regular meal regime",
        images: [
        ],
        tags: [
            "food",
            "meal",
            "meals",
            "eat"
        ]
    },
    {
        english: "Breakfast",
        spanish: "Desayuno",
        pronounce: "Deh-say-uh-no",
        description: "A meal eaten in the morning",
        images: [
        ],
        tags: [
            "food",
            "meal",
            "meals",
            "lunch"
        ]
    },
    {
        english: "Exuse me",
        spanish: "Perdón",
        pronounce: "pehr-dohn",
        description: "",
        images: [
        ],
        tags: [
            "conversation"
        ]
    },
    {
        english: "Address",
        spanish: "Dirección",
        pronounce: "dee-reh-see-ohn",
        description: "",
        images: [
        ],
        tags: [
            "directions",
            "transport",
            "accomodation"
        ]
    },
    {
        english: "Left",
        spanish: "Izquierda",
        pronounce: "ees-key-ehr-dah",
        description: "",
        images: [
        ],
        tags: [
            "directions"
        ]
    },
    {
        english: "Right",
        spanish: "Derecha",
        pronounce: "deh-reh-cha",
        description: "",
        images: [
        ],
        tags: [
            "directions"
        ]
    },
    {
        english: "Map",
        spanish: "Mapa",
        pronounce: "mah-pah",
        description: "",
        images: [
        ],
        tags: [
            "directions",
            "sight seeing",
            "transport",
            "accomodation"
        ]
    },
    {
        english: "Fast",
        spanish: "Rápido",
        pronounce: "rah-pee-doh",
        description: "",
        images: [
        ],
        tags: [
            "transport",
            "dining"
        ]
    },
    {
        english: "Time",
        spanish: "Tiempo",
        pronounce: "tee-ehm-poh",
        description: "",
        images: [
        ],
        tags: [
            "conversation",
            "accomodation",
            "activities",
            "sight seeing",
            "cooking",
            "time"
        ]
    },
    {
        english: "Afternoon",
        spanish: "Tarde",
        pronounce: "tahr-deh",
        description: "",
        images: [
        ],
        tags: [
            "time",
            "conversation",
            "accomodation",
            "activities",
            "sight seeing"
        ]
    },
    {
        english: "Bus",
        spanish: "Autobús",
        pronounce: "aoh-toh-boohs",
        description: "",
        images: [
        ],
        tags: [
            "transport"
        ]
    },
    {
        english: "Taxi",
        spanish: "Taxi",
        pronounce: "tah-cksee",
        description: "",
        images: [
        ],
        tags: [
            "transport"
        ]
    },
    {
        english: "Train",
        spanish: "tren",
        pronounce: "trehn",
        description: "",
        images: [
        ],
        tags: [
            "transport"
        ]
    }
];
var phrase;

function phraseBuilder(on, add, reset) {
    if (reset) phrase = "";
    phrase += add;
    $("#screen-builder .inner").html("");
    for (var i in phrases[on]) {
        var p = phrases[on][i];
        var elem = $('<div class="button" onclick="phraseBuilder(\'' + p.next + '\',\'' + p.spn + '\');">' + p.eng + '</div>');
        $("#screen-builder .inner").append(elem);
    }
}

function generateVocabList(tag) {
    if (typeof tag == "undefined") {
        tag = "";
    }
    
    $("#screen-vocab .inner").html("");
    var word;
    
    for (var i in vocab) {
        var elem = $("<div></div>");
        word = vocab[i];
        if (tag != "") {
            var match = false;
            
            for (var n in word.tags) {
                if (word.tags[n].toUpperCase() == tag.toUpperCase()) {
                    match = true;
                }
            }
            if (!match) continue;
            
        }
        
        elem.append(word.english + ":" + word.spanish);
            
        $("#screen-vocab .inner").append(elem);
        
    }
    loadScreen("vocab")
}

function loadScreen(pa) {
    $(".screen.on").css("z-index", 0);
    $(".screen.on").addClass("old");
    $("#screen-" + pa).addClass("on").css("z-index", 1).css("left", "100%");
    setTimeout(function() {$("#screen-" + pa).addClass("on").css("left", "0%"); }, 1);
    setTimeout(function() {$(".screen.on.old").removeClass("on").removeClass("old").css({left: "", "z-index": ""}); $(".screen.on").css({left: ""}); }, 400);
    //phrases.starters[0].spn;
}
