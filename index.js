"use strict";
let app = new Vue({
    el: "#app",
    data() {
        return {
            from: 0,
            to: 2022,
            leapYearList: [],
        };
    },
    methods: {
        searchLeapYear() {
            this.validate();
            if (this.leapYearList.length > 0)
                this.leapYearList = [];
            for (let i = this.to; i >= this.from; i--) {
                if (this.isLeapYear(i))
                    this.leapYearList.push(i);
            }
            if (this.leapYearList.length > 0) {
                const resultList = document.querySelector(".result-list");
                resultList.classList.remove("align-center");
            }
        },
        validate() {
            this.to = Number(this.to);
            this.from = Number(this.from);
            if (this.to < this.from) {
                alert("入力を確認してください");
                return;
            }
        },
        isLeapYear(n) {
            if (n % 400 === 0)
                return true;
            if (n % 100 === 0)
                return false;
            if (n % 4 === 0)
                return true;
            return false;
        },
    },
    computed: {},
});
