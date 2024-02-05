import * as nwd from "./nwd/index.js";
import * as basic from "./basic/index.js";
import * as streams from "./streams/index.js";
import * as osys from "./os/index.js";
import * as hashes from "./hashes/index.js";
import * as zip from "./br/index.js";

export const up = nwd.up;
export const cd = nwd.cd;
export const ls = nwd.ls;

export const add = basic.add;
export const rn = basic.rn;
export const rm = basic.rm;

export const cat = streams.cat;
export const cp = streams.cp;
export const mv = streams.mv;

export const os = osys.os;

export const hash = hashes.calcHash;

export const compress = zip.compress;
export const decompress = zip.decompress;
