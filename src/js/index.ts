new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        greeting: "",
        operator: ""
    },
    methods: {
        convert() {
            if (this.operator == "toLowerCase"){
                //toLower();
                this.greeting = this.name.toLowerCase();
            } else if (this.operator == "toUpperCase"){
                this.greeting = this.name.toUpperCase();
            } else {
                this.greeting = this.name;
            }
        }
    }
})