import dayjs from "dayjs";
import Pino, { pino, transport } from  "pino";
import PinoPretty from "pino-pretty";

const log = Pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true
        }
    },
    prettifier: PinoPretty,
    timestamp: () =>`"time" : "${dayjs().format()}"`
})

export {log}