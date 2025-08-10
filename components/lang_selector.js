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

function ReturnNameForSelectedLang (lang_name, lang_arr) {
    for (var i = 0, l = lang_arr.data.length; i < l; i++){
        if (lang_name.localeCompare(lang_arr.data[i].id) === 0) {
            return lang_arr.data[i].name
        }
    }
}

if ($(".dropdown-langs").length) {
    $(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            if (!$(this).hasClass("active")) {
                $(".dropdown-menu .dropdown-item").removeClass("active");
                $(this).addClass("active");
                let lang_txt = $(this).text().trim();
                $(this)
                    .parents(".dropdown-langs")
                    .find(".btn")
                    .html("<span class='flag-icon flag-icon-" + ReturnNameForSelectedLang (lang_txt, langs) + " me-1'></span>" + lang_txt);
            }
        }
    });
}