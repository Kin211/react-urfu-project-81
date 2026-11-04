import {Tag} from './domain/index.js';

console.log(new Tag("br").toString());
// <br>

console.log(new Tag("img", { src: "path/to/image" }).toString());
// <img src="path/to/image">

console.log(new Tag("input", { type: "submit", value: "Save" }).toString());
// <input type="submit" value="Save">

console.log(new Tag("label", {}, "Email").toString());
// <label>Email</label>

console.log(new Tag("label", { for: "email" }, "Email").toString());
// <label for="email">Email</label>

console.log(new Tag("div").toString());
// <div></div>
