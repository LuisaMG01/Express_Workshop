"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./src/config/config"));
config_1.default.listen(config_1.default.get("port"), () => {
    console.log(`Servidor escuchando en el puerto ${config_1.default.get("port")}`);
});
