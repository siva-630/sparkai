"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = build;
const groupFiles = (groups, directory, files) => {
    groups.push({ directory, files, dir: directory });
};
const empty = () => { };
function build(options) {
    return options.group ? groupFiles : empty;
}
