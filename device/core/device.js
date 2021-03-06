// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * The `azure-iot-device` module provides a means for devices to send events to and
 * receive messages from an Azure IoT Hub.  The client handles
 * communication with the IoT Hub through a transport supplied by the caller
 * (e.g., [Http]{@linkcode module:adapters/https.Http}).
 *
 * @example
 * var Device = require('azure-iot-device');
 * var Client = Device.Client;
 * var Message = Device.Message;
 * var Http = Device.Http;
 *
 * function print(err, res) {
 *   if (err) console.log(err.toString());
 *   if (res) console.log(res.statusCode + ' ' + res.statusMessage);
 * }
 *
 * var config = {
 *   host: 'hostname',
 *   keyName: 'deviceId',
 *   key: 'password'
 * };
 *
 * var client = new Client(new Http(config));
 *
 * client.sendEvent(new Message('hello world'), print);
 *
 * client.receive (function (err, res, msg) {
 *   print(err, res);
 *   if (msg) console.log('Message: ' + msg);
 *   if (!err && res.statusCode !== 204) {
 *     client.complete(msg, print);
 *   }
 * });
 *
 * @module azure-iot-device
 */

'use strict';

var common = require('azure-iot-common');

module.exports = {
  Client: require('./lib/device_client.js').Client,
  ModuleClient: require('./lib/module_client.js').ModuleClient,
  ConnectionString: require('./lib/connection_string.js'),
  Message: common.Message,
  SharedAccessSignature: require('./lib/shared_access_signature.js'),
  DeviceMethodRequest: require('./lib/device_method').DeviceMethodRequest,
  DeviceMethodResponse: require('./lib/device_method').DeviceMethodResponse,
  X509AuthenticationProvider: require('./lib/x509_authentication_provider').X509AuthenticationProvider,
  SharedAccessSignatureAuthenticationProvider: require('./lib/sas_authentication_provider').SharedAccessSignatureAuthenticationProvider,
  SharedAccessKeyAuthenticationProvider: require('./lib/sak_authentication_provider').SharedAccessKeyAuthenticationProvider,
  Twin: require('./lib/twin').Twin,
  TwinProperties: require('./lib/twin').TwinProperties,
  getUserAgentString: require('./lib/utils').getUserAgentString,
  EdgedAuthConfig: require('./lib/iotedge_authentication_provider').EdgedAuthConfig,
  IotEdgeAuthenticationProvider: require('./lib/iotedge_authentication_provider').IotEdgeAuthenticationProvider
};