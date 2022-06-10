const warning = (msg) => {
    console.warn(msg);
}

const success = (msg) => {
    console.log(msg);
}

const error = (msg) => {
    console.error(msg);
}

const messenger = {
    warning,
    success,
    error,
}
export default messenger;