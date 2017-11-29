/**
 * Global variables
 */
var globalVariales = {
    defaultContainer: "#toasterContainer"
};

/**
 * Toaster class
 * @param {*} data
 */
function Toaster(data) {
    this.data = data,
        this.color = "#FFF",
        this.background = "#333",
        this.verticalPosition = "bottom",
        this.horizontalPosition = "right",
        this.container = globalVariales.defaultContainer,
        this.width = "290px",
        this.height = "40px",
        this.padding = "5px",
        this.corderRadius = "5px",
        this.text = "",
        this.publish = publish
}

// Instantiating Toaster class
var toasterInstance = new Toaster();

/**
 * Publishing the toaster
 */
function publish() {
    // Setting toaster properties
    setData(this);

    // Appending default container if not specified
    if (toasterInstance.container == globalVariales.defaultContainer) {
        $("body").append('<div id="toasterContainer"></div>');
    }
    $(toasterInstance.container).show();
    $(toasterInstance.container).css("margin-bottom", "0px");
    $(toasterInstance.container).text(toasterInstance.text).animate({ 'marginBottom': '50px' }, 800).fadeOut(5000).css({
        'position': 'absolute',
        'bottom': '30px',
        'right': '30px',
        'width': toasterInstance.width,
        'height': toasterInstance.height,
        'background': toasterInstance.background,
        'color': toasterInstance.color,
        'padding': toasterInstance.padding,
        'border-radius': toasterInstance.corderRadius
    });
}

/**
 * Setting Toaster class properties
 * @param {*} toaster
 */
function setData(toaster) {
    // Checking if toaster exists
    if (nullValidator(toaster)) {
        // Checking if data in toaster exists
        if (nullValidator(toaster.data)) {
            toasterInstance.color = nullValidator(toaster.data.color) ? toaster.data.color : toaster.color;
            toasterInstance.background = nullValidator(toaster.data.background) ? toaster.data.background : toaster.background;
            toasterInstance.verticalPosition = nullValidator(toaster.data.verticalPosition) ? toaster.data.verticalPosition : toaster.verticalPosition;
            toasterInstance.horizontalPosition = nullValidator(toaster.data.horizontalPosition) ? toaster.data.horizontalPosition : toaster.horizontalPosition;
            toasterInstance.container = nullValidator(toaster.data.container) ? toaster.data.container : toaster.container;
            toasterInstance.text = nullValidator(toaster.data.text) ? toaster.data.text : toaster.text;
        }
    }
}

/**
 * Validating null and undefined entries
 * @param {*} entity
 */
function nullValidator(entity) {
    return (entity != null || entity != undefined) && entity != "" ? true : false;
}