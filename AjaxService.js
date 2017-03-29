
// Ensure namespace exists
adr.services.addresses = adr.services.addresses || {};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



adr.services.addresses.getAddressBookByCompanyId = function (id, onSuccess, onError) {

    var url = "/api/address/addressbook/".concat(id);

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    };

    // call the ajax
    $.ajax(url, settings);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



adr.services.addresses.editById = function (id, payload, onSuccess, onError) {

    var url = "/api/address/".concat(id);

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: payload,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "PUT"
    };

    // call the ajax
    $.ajax(url, settings);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



adr.services.addresses.insert = function (payload, onSuccess, onError) {

    var url = "/api/address/";

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: payload,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "POST"
    };

    // call the ajax
    $.ajax(url, settings);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



adr.services.addresses.getByCompanyIdAndType = function (payload, onSuccess, onError) {

    var url = "/api/address/quoterequest";

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: payload,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    };

    // call the ajax
    $.ajax(url, settings);

}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



adr.services.addresses.getAddressListByCompanyId = function (id, onSuccess, onError)
{

    var url = "/api/address/companylist/" + id;

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    };

    // call the ajax
    $.ajax(url, settings);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



adr.services.addresses.delete = function (id, onSuccess, onError) {

    var url = "/api/address/".concat(id);

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "DELETE"
    };

    // call the ajax
    $.ajax(url, settings);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



adr.services.addresses.getAddressesInRadius = function (payload, onSuccess, onError) {
    var url = "/api/address/radius";

    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: payload,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "POST"
    };

    // call the ajax
    $.ajax(url, settings);
}