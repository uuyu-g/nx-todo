/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const main = $root.main = (() => {

    /**
     * Namespace main.
     * @exports main
     * @namespace
     */
    const main = {};

    main.Account = (function() {

        /**
         * Properties of an Account.
         * @memberof main
         * @interface IAccount
         * @property {string|null} [id] Account id
         * @property {Array.<string>|null} [userIds] Account userIds
         * @property {Array.<string>|null} [adminUserIds] Account adminUserIds
         * @property {string|null} [name] Account name
         * @property {string|null} [imageUrl] Account imageUrl
         * @property {google.protobuf.ITimestamp|null} [createdAt] Account createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Account updatedAt
         */

        /**
         * Constructs a new Account.
         * @memberof main
         * @classdesc Represents an Account.
         * @implements IAccount
         * @constructor
         * @param {main.IAccount=} [properties] Properties to set
         */
        function Account(properties) {
            this.userIds = [];
            this.adminUserIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Account id.
         * @member {string} id
         * @memberof main.Account
         * @instance
         */
        Account.prototype.id = "";

        /**
         * Account userIds.
         * @member {Array.<string>} userIds
         * @memberof main.Account
         * @instance
         */
        Account.prototype.userIds = $util.emptyArray;

        /**
         * Account adminUserIds.
         * @member {Array.<string>} adminUserIds
         * @memberof main.Account
         * @instance
         */
        Account.prototype.adminUserIds = $util.emptyArray;

        /**
         * Account name.
         * @member {string} name
         * @memberof main.Account
         * @instance
         */
        Account.prototype.name = "";

        /**
         * Account imageUrl.
         * @member {string} imageUrl
         * @memberof main.Account
         * @instance
         */
        Account.prototype.imageUrl = "";

        /**
         * Account createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof main.Account
         * @instance
         */
        Account.prototype.createdAt = null;

        /**
         * Account updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof main.Account
         * @instance
         */
        Account.prototype.updatedAt = null;

        /**
         * Encodes the specified Account message. Does not implicitly {@link main.Account.verify|verify} messages.
         * @function encode
         * @memberof main.Account
         * @static
         * @param {main.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.userIds != null && message.userIds.length)
                for (let i = 0; i < message.userIds.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userIds[i]);
            if (message.adminUserIds != null && message.adminUserIds.length)
                for (let i = 0; i < message.adminUserIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.adminUserIds[i]);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.imageUrl);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link main.Account.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.Account
         * @static
         * @param {main.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @function decode
         * @memberof main.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Account();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    if (!(message.userIds && message.userIds.length))
                        message.userIds = [];
                    message.userIds.push(reader.string());
                    break;
                case 3:
                    if (!(message.adminUserIds && message.adminUserIds.length))
                        message.adminUserIds = [];
                    message.adminUserIds.push(reader.string());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.imageUrl = reader.string();
                    break;
                case 6:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Account message.
         * @function verify
         * @memberof main.Account
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Account.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.userIds != null && message.hasOwnProperty("userIds")) {
                if (!Array.isArray(message.userIds))
                    return "userIds: array expected";
                for (let i = 0; i < message.userIds.length; ++i)
                    if (!$util.isString(message.userIds[i]))
                        return "userIds: string[] expected";
            }
            if (message.adminUserIds != null && message.hasOwnProperty("adminUserIds")) {
                if (!Array.isArray(message.adminUserIds))
                    return "adminUserIds: array expected";
                for (let i = 0; i < message.adminUserIds.length; ++i)
                    if (!$util.isString(message.adminUserIds[i]))
                        return "adminUserIds: string[] expected";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.Account
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.Account} Account
         */
        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.main.Account)
                return object;
            let message = new $root.main.Account();
            if (object.id != null)
                message.id = String(object.id);
            if (object.userIds) {
                if (!Array.isArray(object.userIds))
                    throw TypeError(".main.Account.userIds: array expected");
                message.userIds = [];
                for (let i = 0; i < object.userIds.length; ++i)
                    message.userIds[i] = String(object.userIds[i]);
            }
            if (object.adminUserIds) {
                if (!Array.isArray(object.adminUserIds))
                    throw TypeError(".main.Account.adminUserIds: array expected");
                message.adminUserIds = [];
                for (let i = 0; i < object.adminUserIds.length; ++i)
                    message.adminUserIds[i] = String(object.adminUserIds[i]);
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".main.Account.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".main.Account.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.Account
         * @static
         * @param {main.Account} message Account
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.userIds = [];
                object.adminUserIds = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.imageUrl = "";
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userIds && message.userIds.length) {
                object.userIds = [];
                for (let j = 0; j < message.userIds.length; ++j)
                    object.userIds[j] = message.userIds[j];
            }
            if (message.adminUserIds && message.adminUserIds.length) {
                object.adminUserIds = [];
                for (let j = 0; j < message.adminUserIds.length; ++j)
                    object.adminUserIds[j] = message.adminUserIds[j];
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this Account to JSON.
         * @function toJSON
         * @memberof main.Account
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    main.User = (function() {

        /**
         * Properties of a User.
         * @memberof main
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [currentAccountId] User currentAccountId
         * @property {Array.<string>|null} [accountIdsOrder] User accountIdsOrder
         * @property {google.protobuf.ITimestamp|null} [createdAt] User createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] User updatedAt
         * @property {boolean|null} [isAdmin] User isAdmin
         */

        /**
         * Constructs a new User.
         * @memberof main
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {main.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.accountIdsOrder = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof main.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User currentAccountId.
         * @member {string} currentAccountId
         * @memberof main.User
         * @instance
         */
        User.prototype.currentAccountId = "";

        /**
         * User accountIdsOrder.
         * @member {Array.<string>} accountIdsOrder
         * @memberof main.User
         * @instance
         */
        User.prototype.accountIdsOrder = $util.emptyArray;

        /**
         * User createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof main.User
         * @instance
         */
        User.prototype.createdAt = null;

        /**
         * User updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof main.User
         * @instance
         */
        User.prototype.updatedAt = null;

        /**
         * User isAdmin.
         * @member {boolean} isAdmin
         * @memberof main.User
         * @instance
         */
        User.prototype.isAdmin = false;

        /**
         * Encodes the specified User message. Does not implicitly {@link main.User.verify|verify} messages.
         * @function encode
         * @memberof main.User
         * @static
         * @param {main.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.currentAccountId != null && Object.hasOwnProperty.call(message, "currentAccountId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.currentAccountId);
            if (message.accountIdsOrder != null && message.accountIdsOrder.length)
                for (let i = 0; i < message.accountIdsOrder.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.accountIdsOrder[i]);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.isAdmin != null && Object.hasOwnProperty.call(message, "isAdmin"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isAdmin);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link main.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.User
         * @static
         * @param {main.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof main.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.currentAccountId = reader.string();
                    break;
                case 3:
                    if (!(message.accountIdsOrder && message.accountIdsOrder.length))
                        message.accountIdsOrder = [];
                    message.accountIdsOrder.push(reader.string());
                    break;
                case 4:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.isAdmin = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof main.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.currentAccountId != null && message.hasOwnProperty("currentAccountId"))
                if (!$util.isString(message.currentAccountId))
                    return "currentAccountId: string expected";
            if (message.accountIdsOrder != null && message.hasOwnProperty("accountIdsOrder")) {
                if (!Array.isArray(message.accountIdsOrder))
                    return "accountIdsOrder: array expected";
                for (let i = 0; i < message.accountIdsOrder.length; ++i)
                    if (!$util.isString(message.accountIdsOrder[i]))
                        return "accountIdsOrder: string[] expected";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                if (typeof message.isAdmin !== "boolean")
                    return "isAdmin: boolean expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.main.User)
                return object;
            let message = new $root.main.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.currentAccountId != null)
                message.currentAccountId = String(object.currentAccountId);
            if (object.accountIdsOrder) {
                if (!Array.isArray(object.accountIdsOrder))
                    throw TypeError(".main.User.accountIdsOrder: array expected");
                message.accountIdsOrder = [];
                for (let i = 0; i < object.accountIdsOrder.length; ++i)
                    message.accountIdsOrder[i] = String(object.accountIdsOrder[i]);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".main.User.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".main.User.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            if (object.isAdmin != null)
                message.isAdmin = Boolean(object.isAdmin);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.User
         * @static
         * @param {main.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accountIdsOrder = [];
            if (options.defaults) {
                object.id = "";
                object.currentAccountId = "";
                object.createdAt = null;
                object.updatedAt = null;
                object.isAdmin = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.currentAccountId != null && message.hasOwnProperty("currentAccountId"))
                object.currentAccountId = message.currentAccountId;
            if (message.accountIdsOrder && message.accountIdsOrder.length) {
                object.accountIdsOrder = [];
                for (let j = 0; j < message.accountIdsOrder.length; ++j)
                    object.accountIdsOrder[j] = message.accountIdsOrder[j];
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                object.isAdmin = message.isAdmin;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof main.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return main;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
