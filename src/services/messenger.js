import swal from 'sweetalert';

const warning = (msg) => {
    swal({
        text: msg,
        icon: "warning"
    });
}

const success = (msg) => {
    swal(msg, "success");
}

const error = (msg) => {
    swal(msg, "error");
}

const info = (msg) => {
    swal(msg, "info");
}

const messenger = {
    warning,
    success,
    error,
    info,

}
export default messenger;