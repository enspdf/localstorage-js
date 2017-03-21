$(function () {
    let App = {
        init: () => {
            App.cacheElements();
            App.bindEvents();
        },
        cacheElements: () => {
            this.$name = $("#name");
            this.$lastName = $("#lastName");
            this.$btnSave = $("#btnSave");
            this.$btnClear = $("#btnClear");
            this.$btnShow = $("#btnShow");
            this.$popup = $("#popup-container");
        },
        bindEvents: () => {
            this.$btnSave.off("click").on("click", functions.saveData);
            this.$btnClear.off("click").on("click", functions.clearData);
            this.$btnShow.off("click").on("click", functions.showData);
        }
    };

    let functions = {
        saveData: () => {
            if (localStorage) {
                let data = {
                    name: this.$name.val(),
                    lastName: this.$lastName.val()
                };

                localStorage.setItem(localStorage.length + 1, JSON.stringify(data));
                this.$name.val("");
                this.$lastName.val("");
                this.$name.focus();
            }
        },
        clearData: () => {
            localStorage.clear();
        },
        showData: () => {
            let i = 0,
             result = {},
             key;

             for (; key = window.localStorage.key(i); i++) {
                 result[key] = window.localStorage.getItem(key);
                 console.log(key + " " + result[key]);
             }
            this.$popup.show();
             this.$popup.on("shown.bs.modal", () => { console.log("Modal"); });
        }
    };

    App.init();
});