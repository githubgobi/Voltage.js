/*jslint browser: true*/
var Voltage = (function () {
    'use strict';
    function getBatteryInfo(callback, info) {
        if (navigator.getBattery) {
            navigator.getBattery().then(
                function (battery) {
                    callback(battery[info]);
                }
            );
        } else if (navigator.battery) {
            callback(navigator.battery[info]);
        }
    }
    return {
        getLevel: function (callback) {
            getBatteryInfo(callback, 'level');
        },
        isCharging: function (callback) {
            getBatteryInfo(callback, 'charging');
        },
        getChargingTime: function (callback) {
            getBatteryInfo(callback, 'chargingTime');
        },
        getDischargingTime: function (callback) {
            getBatteryInfo(callback, 'dischargingTime');
        }
    };
}());