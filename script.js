
const utilities = {
    "p-1": { "padding": "4px" },
    "p-2": { "padding": "8px" },
    "p-3": { "padding": "12px" },
    "p-4": { "padding": "16px" },
    "p-5": { "padding": "20px" },

    "m-1": { "margin": "4px" },
    "m-2": { "margin": "8px" },
    "m-3": { "margin": "12px" },
    "m-4": { "margin": "16px" },
    "m-5": { "margin": "20px" },

    "text-xs": { "font-size": "12px" },
    "text-sm": { "font-size": "14px" },
    "text-md": { "font-size": "16px" },
    "text-lg": { "font-size": "20px" },
    "text-xl": { "font-size": "24px" },

    "font-light": { "font-weight": "300" },
    "font-normal": { "font-weight": "400" },
    "font-medium": { "font-weight": "500" },
    "font-bold": { "font-weight": "700" },
    "font-black": { "font-weight": "900" },

    "flex": { "display": "flex" },
    "flex-row": { "flex-direction": "row" },
    "flex-col": { "flex-direction": "column" },
    "items-center": { "align-items": "center" },
    "justify-center": { "justify-content": "center" },

    "grid": { "display": "grid" },
    "grid-cols-1": { "grid-template-columns": "repeat(1, 1fr)" },
    "grid-cols-2": { "grid-template-columns": "repeat(2, 1fr)" },
    "grid-cols-3": { "grid-template-columns": "repeat(3, 1fr)" },
    "gap-2": { "gap": "8px" },

    "w-1/2": { "width": "50%" },
    "w-full": { "width": "100%" },
    "w-screen": { "width": "100vw" },
    "w-64": { "width": "256px" },
    "w-auto": { "width": "auto" },

    "h-1/2": { "height": "50%" },
    "h-full": { "height": "100%" },
    "h-screen": { "height": "100vh" },
    "h-64": { "height": "256px" },
    "h-auto": { "height": "auto" },

    "bg-red": { "background-color": "red" },
    "bg-blue": { "background-color": "blue" },
    "bg-green": { "background-color": "green" },
    "text-white": { "color": "#ffffff" },
    "text-black": { "color": "#000000" },

    "border": { "border": "1px solid #ccc" },
    "border-0": { "border": "none" },
    "rounded-sm": { "border-radius": "4px" },
    "rounded-md": { "border-radius": "8px" },
    "rounded-lg": { "border-radius": "12px" },

    "relative": { "position": "relative" },
    "absolute": { "position": "absolute" },
    "fixed": { "position": "fixed" },
    "top-0": { "top": "0" },
    "left-0": { "left": "0" },

    "block": { "display": "block" },
    "inline-block": { "display": "inline-block" },
    "inline": { "display": "inline" },
    "hidden": { "display": "none" },
    "inline-flex": { "display": "inline-flex" }
};


// waiting for page load
document.addEventListener("DOMContentLoaded", function () {

    // get all elements using usiversol selector
    const elements = document.querySelectorAll("*");

    // looping through each element
    elements.forEach(function (el) {

        // get classes from elements
        const classes = el.classList;

        // looping through each class
        classes.forEach(function (cls) {

            // check chai-
            if (cls.startsWith("chai-")) {

                // remove chai-
                const name = cls.replace("chai-", "");

                // check in utilities
                const styles = utilities[name];

                if (styles) {

                    // apply each css property
                    for (let key in styles) {
                        el.style[key] = styles[key];
                    }

                }

            }

        });

    });

});