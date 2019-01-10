import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emailnotification',
  templateUrl: './emailnotification.component.html',
  styleUrls: ['./emailnotification.component.scss']
})
export class EmailnotificationComponent implements OnInit {
  formSchema: any = {
    "_id": "5c35cc07f356a430b9b45834",
    "type": "form",
    "tags": [
      "common"
    ],
    "owner": "5c35ca94f356a430b9b45832",
    "components": [
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "label": "Notification Type",
        "key": "notificationType",
        "placeholder": "",
        "data": {
          "values": [
            {
              "value": "email",
              "label": "Email"
            },
            {
              "value": "sms",
              "label": "SMS"
            },
            {
              "value": "webpush",
              "label": "Webpush"
            },
            {
              "value": "custom",
              "label": "Custom"
            }
          ],
          "json": "",
          "url": "",
          "resource": "",
          "custom": ""
        },
        "dataSrc": "values",
        "valueProperty": "",
        "defaultValue": "",
        "refreshOn": "",
        "filter": "",
        "authenticate": false,
        "template": "<span>{{ item.label }}<\/span>",
        "multiple": true,
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "validate": {
          "required": false
        },
        "type": "select",
        "labelPosition": "left-left",
        "tags": [
          
        ],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        },
        "labelWidth": 46,
        "labelMargin": 3
      },
      {
        "autofocus": false,
        "input": true,
        "tree": true,
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Email ID",
            "key": "emailId",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": true,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "properties": {
              
            },
            "labelWidth": 30,
            "labelMargin": 3,
            "lockKey": true,
            "dataGridLabel": false,
            "style": {
              "margin-top": "0",
              "margin-right": "0",
              "margin-bottom": "0",
              "margin-left": "0"
            }
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": "Emai body",
            "key": "emailBody",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "rows": 3,
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "persistent": true,
            "hidden": false,
            "wysiwyg": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": ""
            },
            "type": "textarea",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "lockKey": true
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Subject",
            "key": "subject",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "properties": {
              
            },
            "lockKey": true
          },
          {
            "input": true,
            "tree": true,
            "components": [
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Filename",
                "key": "filename",
                "placeholder": "filename",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": "",
                  "customPrivate": false
                },
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "type": "textfield",
                "labelPosition": "top",
                "tags": [
                  
                ],
                "properties": {
                  
                },
                "lockKey": true,
                "hideLabel": true
              },
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Path",
                "key": "path",
                "placeholder": "path",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": "",
                  "customPrivate": false
                },
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "type": "textfield",
                "labelPosition": "top",
                "tags": [
                  
                ],
                "properties": {
                  
                },
                "lockKey": true,
                "hideLabel": true
              },
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Type",
                "key": "type",
                "placeholder": "type",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": "",
                  "customPrivate": false
                },
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "type": "textfield",
                "labelPosition": "top",
                "tags": [
                  
                ],
                "properties": {
                  
                },
                "lockKey": true,
                "hideLabel": true
              }
            ],
            "tableView": true,
            "label": "Attachments",
            "key": "attachments",
            "protected": false,
            "persistent": true,
            "clearOnHide": true,
            "type": "container",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "lockKey": true,
            "hideLabel": true
          }
        ],
        "tableView": true,
        "label": "Email",
        "key": "email",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "type": "datagrid",
        "addAnotherPosition": "top",
        "tags": [
          
        ],
        "conditional": {
          "show": "true",
          "when": "notificationType",
          "eq": "email"
        },
        "properties": {
          
        },
        "lockKey": true
      },
      {
        "autofocus": false,
        "input": true,
        "tree": true,
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "API Url",
            "key": "api_url",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "properties": {
              
            },
            "labelWidth": 46,
            "labelMargin": 3,
            "lockKey": true
          },
          {
            "clearOnHide": false,
            "label": "Params",
            "input": false,
            "tableView": false,
            "key": "params",
            "columns": [
              {
                "components": [
                  {
                    "autofocus": false,
                    "input": true,
                    "tableView": true,
                    "inputType": "text",
                    "inputMask": "",
                    "label": "Key",
                    "key": "key",
                    "placeholder": "key",
                    "prefix": "",
                    "suffix": "",
                    "multiple": true,
                    "defaultValue": "",
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "spellcheck": true,
                    "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false
                    },
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    },
                    "type": "textfield",
                    "labelPosition": "top",
                    "tags": [
                      
                    ],
                    "properties": {
                      
                    },
                    "lockKey": true,
                    "labelWidth": 30,
                    "labelMargin": 3,
                    "hideLabel": true
                  }
                ],
                "width": 6,
                "offset": 0,
                "push": 0,
                "pull": 0
              },
              {
                "components": [
                  {
                    "autofocus": false,
                    "input": true,
                    "tableView": true,
                    "inputType": "text",
                    "inputMask": "",
                    "label": "Value",
                    "key": "value",
                    "placeholder": "value",
                    "prefix": "",
                    "suffix": "",
                    "multiple": true,
                    "defaultValue": "",
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "spellcheck": true,
                    "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false
                    },
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    },
                    "type": "textfield",
                    "labelPosition": "top",
                    "tags": [
                      
                    ],
                    "properties": {
                      
                    },
                    "lockKey": true,
                    "hideLabel": true
                  }
                ],
                "width": 6,
                "offset": 0,
                "push": 0,
                "pull": 0
              }
            ],
            "type": "columns",
            "inDataGrid": true,
            "hideLabel": false,
            "tags": [
              
            ],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "lockKey": true
          },
          {
            "input": true,
            "tree": true,
            "components": [
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Head1",
                "key": "head1",
                "placeholder": "head1",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": "",
                  "customPrivate": false
                },
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "type": "textfield",
                "labelPosition": "top",
                "tags": [
                  
                ],
                "properties": {
                  
                },
                "lockKey": true,
                "hideLabel": true
              }
            ],
            "tableView": true,
            "label": "Headers",
            "key": "headers",
            "protected": false,
            "persistent": true,
            "clearOnHide": true,
            "type": "container",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "lockKey": true,
            "hideLabel": true
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Method",
            "key": "method",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "properties": {
              
            },
            "lockKey": true
          }
        ],
        "tableView": true,
        "label": "Custom",
        "key": "custom",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "type": "datagrid",
        "addAnotherPosition": "top",
        "tags": [
          
        ],
        "conditional": {
          "show": "true",
          "when": "notificationType",
          "eq": "custom"
        },
        "properties": {
          
        }
      },
      {
        "autofocus": false,
        "input": true,
        "tree": true,
        "components": [
          {
            "input": true,
            "tree": true,
            "components": [
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Title",
                "key": "title",
                "placeholder": "",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": "",
                  "customPrivate": false
                },
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "type": "textfield",
                "labelPosition": "left-left",
                "tags": [
                  
                ],
                "properties": {
                  
                },
                "lockKey": true,
                "labelWidth": 30,
                "labelMargin": 3
              },
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "label": "Message",
                "key": "message",
                "placeholder": "",
                "prefix": "",
                "suffix": "",
                "rows": 3,
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "persistent": true,
                "hidden": false,
                "wysiwyg": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": ""
                },
                "type": "textarea",
                "labelPosition": "left-left",
                "tags": [
                  
                ],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {
                  
                },
                "lockKey": true,
                "labelWidth": 30,
                "labelMargin": 3
              }
            ],
            "tableView": true,
            "label": "Payload",
            "key": "payload",
            "protected": false,
            "persistent": true,
            "clearOnHide": true,
            "type": "container",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "lockKey": true,
            "hideLabel": true
          },
          {
            "input": true,
            "tree": true,
            "components": [
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Endpoint",
                "key": "endpoint",
                "placeholder": "",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": "",
                  "customPrivate": false
                },
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "type": "textfield",
                "labelPosition": "left-left",
                "tags": [
                  
                ],
                "properties": {
                  
                },
                "lockKey": true,
                "labelWidth": 30,
                "labelMargin": 3
              },
              {
                "autofocus": false,
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Expiration Time",
                "key": "expirationTime",
                "placeholder": "",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "spellcheck": true,
                "validate": {
                  "required": false,
                  "minLength": "",
                  "maxLength": "",
                  "pattern": "",
                  "custom": "",
                  "customPrivate": false
                },
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "type": "textfield",
                "labelPosition": "left-left",
                "tags": [
                  
                ],
                "properties": {
                  
                },
                "lockKey": true,
                "labelWidth": 30,
                "labelMargin": 3
              },
              {
                "input": true,
                "tree": true,
                "components": [
                  
                ],
                "tableView": true,
                "label": "Keys",
                "key": "keys",
                "protected": false,
                "persistent": true,
                "clearOnHide": true,
                "type": "container",
                "labelPosition": "left-left",
                "tags": [
                  
                ],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {
                  
                },
                "lockKey": true,
                "labelWidth": 30,
                "labelMargin": 3
              }
            ],
            "tableView": true,
            "label": "Subscription",
            "key": "subscription",
            "protected": false,
            "persistent": true,
            "clearOnHide": true,
            "type": "container",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "lockKey": true,
            "hideLabel": true
          }
        ],
        "tableView": true,
        "label": "Web push",
        "key": "webpush",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "type": "datagrid",
        "addAnotherPosition": "top",
        "tags": [
          
        ],
        "conditional": {
          "show": "true",
          "when": "notificationType",
          "eq": "webpush"
        },
        "properties": {
          
        },
        "lockKey": true
      },
      {
        "autofocus": false,
        "input": true,
        "tree": true,
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "To",
            "key": "to",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": true,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "properties": {
              
            },
            "lockKey": true,
            "labelWidth": 46,
            "labelMargin": 3
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": "Body",
            "key": "body",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "rows": 3,
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "persistent": true,
            "hidden": false,
            "wysiwyg": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": ""
            },
            "type": "textarea",
            "inDataGrid": true,
            "labelPosition": "top",
            "tags": [
              
            ],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "lockKey": true
          }
        ],
        "tableView": true,
        "label": "SMS",
        "key": "sms",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "type": "datagrid",
        "addAnotherPosition": "top",
        "tags": [
          
        ],
        "conditional": {
          "show": "true",
          "when": "notificationType",
          "eq": "sms"
        },
        "properties": {
          
        }
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Alert Type",
        "key": "alertType",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "type": "textfield",
        "labelPosition": "left-left",
        "tags": [
          
        ],
        "properties": {
          
        },
        "lockKey": true,
        "labelWidth": 46,
        "labelMargin": 3
      },
      {
        "input": true,
        "tree": true,
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Webhook Url",
            "key": "webhook_url",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "left-left",
            "tags": [
              
            ],
            "properties": {
              
            },
            "lockKey": true,
            "labelWidth": 46,
            "labelMargin": 3
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Method",
            "key": "method",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "left-left",
            "tags": [
              
            ],
            "properties": {
              
            },
            "lockKey": true,
            "labelWidth": 46,
            "labelMargin": 3
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Webhook Headers",
            "key": "webhook_headers",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "left-left",
            "tags": [
              
            ],
            "properties": {
              
            },
            "lockKey": true,
            "labelWidth": 46,
            "labelMargin": 3
          }
        ],
        "tableView": true,
        "label": "Status Update",
        "key": "statusUpdate",
        "protected": false,
        "persistent": true,
        "clearOnHide": true,
        "type": "container",
        "labelPosition": "top",
        "tags": [
          
        ],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        },
        "lockKey": true,
        "hideLabel": true
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Unique Key",
        "key": "unique_key",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "uniqueNumber",
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "type": "textfield",
        "labelPosition": "left-left",
        "tags": [
          
        ],
        "properties": {
          
        },
        "lockKey": true,
        "labelWidth": 46,
        "labelMargin": 3,
        "disabled": true
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Unique Number",
        "key": "uniqueNumber",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "type": "textfield",
        "labelPosition": "left-left",
        "tags": [
          
        ],
        "properties": {
          
        },
        "lockKey": true,
        "labelWidth": 46,
        "labelMargin": 3
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "label": "Alert DateTime",
        "key": "alertDateTime",
        "placeholder": "",
        "format": "yyyy-MM-dd hh:mm a",
        "enableDate": true,
        "enableTime": true,
        "defaultDate": "",
        "datepickerMode": "day",
        "datePicker": {
          "showWeeks": true,
          "startingDay": 0,
          "initDate": "",
          "minMode": "day",
          "maxMode": "year",
          "yearRows": 4,
          "yearColumns": 5,
          "minDate": null,
          "maxDate": null,
          "datepickerMode": "day"
        },
        "timePicker": {
          "hourStep": 1,
          "minuteStep": 1,
          "showMeridian": true,
          "readonlyInput": false,
          "mousewheel": true,
          "arrowkeys": true
        },
        "protected": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "validate": {
          "required": false,
          "custom": ""
        },
        "type": "datetime",
        "labelPosition": "left-left",
        "tags": [
          
        ],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        },
        "lockKey": true,
        "labelWidth": 46,
        "labelMargin": 3
      },
      {
        "autofocus": false,
        "input": true,
        "label": "Submit",
        "tableView": false,
        "key": "submit",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button"
      }
    ],
    "display": "form",
    "submissionAccess": [
      {
        "roles": [
          
        ],
        "type": "create_all"
      },
      {
        "roles": [
          
        ],
        "type": "read_all"
      },
      {
        "roles": [
          
        ],
        "type": "update_all"
      },
      {
        "roles": [
          
        ],
        "type": "delete_all"
      },
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "create_own"
      },
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "read_own"
      },
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "update_own"
      },
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "delete_own"
      }
    ],
    "title": "Test Email Service",
    "name": "testEmailService",
    "path": "emailservice",
    "access": [
      {
        "roles": [
          "5c35ca80f356a430b9b45824",
          "5c35ca80f356a430b9b45825",
          "5c35ca80f356a430b9b45826"
        ],
        "type": "read_all"
      }
    ],
    "created": "2019-01-09T10:25:11.242Z",
    "modified": "2019-01-10T07:26:08.252Z",
    "machineName": "testEmailService"
  };




  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }


  onSubmit(submission: any) {

    console.log('subsbsbsbsbsbs', submission.data);
    this.apiService.createEmailNotification(submission.data).subscribe((response) => {
      console.log(response);
    });
  }


}
