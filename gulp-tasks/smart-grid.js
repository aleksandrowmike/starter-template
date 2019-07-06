"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "30px", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            maxWidth: "1280px",
            fields: "15px" // side fields - 15px
        },
        breakPoints: {
            xs: {
                width: "320px" // 320px
            },
            sm: {
                width: "576px" // 576px
            },
            md: {
                width: "768px" // 768px
            },
            lg: {
                width: "992px" // 992px
            },
            xl: {
                width: "1200px" // 1200px
            }
        }
    });
    cb();
});