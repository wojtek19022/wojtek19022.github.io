const langs = {
    data: [
        {
            id:"English",
            name:"us"
        },
        {
            id:"Français",
            name:"fr"
        },
        {
            id:"Español",
            name:"es"
        },
        {
            id:"Polski",
            name:"pl"
        },
        {
            id: "Deutsch",
            name:"de"
        }
    ]
}

$(document).ready(function() {
    const langBttns = document.getElementsByClassName("dropdown-item")
    const langCmbbx = document.getElementById("dropdownMenuButton1");
    const flagSpan = document.querySelector('#dropdownMenuButton1 .flag-icon');
    const langSpan = document.querySelector('#dropdownMenuButton1 .langName');
    // Check localStorage for saved preference
    const savedlang = localStorage.getItem('language');
    for (let innerNum = 0; innerNum < langBttns.length; innerNum++) { // Changed variable name
        if (ReturnNameForSelectedLang(langBttns[innerNum].innerText.trim(), langs) === localStorage.getItem('language')) {
            langSpan.textContent = `${langBttns[innerNum].innerText.trim()}`;
            flagSpan.className = `flag-icon flag-icon-${ReturnNameForSelectedLang(langBttns[innerNum].innerText.trim(), langs)} me-1`;
        }
    }
    const body = document.body;

    for (let num = 0; num < langBttns.length; num++) {
        langBttns[num].addEventListener('click', () => {
            localStorage.setItem('language', ReturnNameForSelectedLang(langBttns[num].innerText.trim(), langs));
            console.log("COMP", savedlang, langCmbbx.innerText.trim());
            if (localStorage.getItem('language') === "") {
                var defaultLang = "English";
                localStorage.setItem('language', ReturnNameForSelectedLang(defaultLang, langs));
            } else if (localStorage.getItem('language') !== langCmbbx.innerText.trim()) {
                for (let innerNum = 0; innerNum < langBttns.length; innerNum++) { // Changed variable name
                    if (ReturnNameForSelectedLang(langBttns[innerNum].innerText.trim(), langs) === localStorage.getItem('language')) {
                        langSpan.textContent = `${langBttns[innerNum].innerText.trim()}`;
                        flagSpan.className = `flag-icon flag-icon-${ReturnNameForSelectedLang(langBttns[innerNum].innerText.trim(), langs)} me-1`;
                    }
                }
            }
        });
    }
});

function ReturnNameForSelectedLang (lang_name, lang_arr) {
    for (var i = 0, l = lang_arr.data.length; i < l; i++){
        if (lang_name.localeCompare(lang_arr.data[i].id) === 0) {
            return lang_arr.data[i].name
        }
    }
}

// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Function to fetch language data
function fetchLanguageData(lang) {
    return fetch(document.location.origin + `/components/translations/${lang}.json`)
        .then((response) => { 
            return response.json().then((data) => {
                return data;
            }).catch((err) => {
                console.log(err);
            }) 
        });
}

function setUpTranslations () {
    $(".dropdown-menu .dropdown-item").removeClass("active");
    $(this).addClass("active");
    let lang_txt = localStorage.getItem('language')
    $(this)
        .parents(".dropdown-langs")
        .find(".btn")
        .html(`<span class='flag-icon flag-icon-${lang_txt} me-1></span>`);
    // const userPreferredLanguage = localStorage.getItem('language') || 'en';
    fetchLanguageData(lang_txt).then(langData => updateContent(langData));
}

if ($(".dropdown-langs").length) {
    if (!$(this).hasClass("active")) {
        if (!$(this).hasClass("active")) {
            setUpTranslations()
        }
    }
    $(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            if (!$(this).hasClass("active")) {
                setUpTranslations()
            }
        }
    });
}