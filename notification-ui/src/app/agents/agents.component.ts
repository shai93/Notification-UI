import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  formSchema: any = {
    "_id": "5c3c767cd619823088e2ae22",
    "type": "form",
    "tags": [
      "common"
    ],
    "owner": "5c35ca94f356a430b9b45832",
    "components": [
      {
        "clearOnHide": false,
        "key": "panel",
        "input": false,
        "title": "Create Agents",
        "theme": "primary",
        "tableView": false,
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Name of Alert",
            "key": "alertName",
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
            "label": "Template Name",
            "key": "templateName",
            "placeholder": "",
            "data": {
              "values": [
                {
                  "value": "",
                  "label": ""
                }
              ],
              "json": "",
              "url": "http:\/\/breeze.accion.rocks\/template-engine-api\/api\/v1",
              "resource": "",
              "custom": "",
              "headers": [
                {
                  "value": "",
                  "key": ""
                }
              ]
            },
            "dataSrc": "url",
            "valueProperty": "name",
            "defaultValue": "",
            "refreshOn": "",
            "filter": "",
            "authenticate": false,
            "template": "<span>{{ item.name }}<\/span>",
            "multiple": false,
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
            "selectValues": "templates",
            "labelWidth": 46,
            "labelMargin": 3,
            "lockKey": true
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": "Template Params",
            "key": "templateParams",
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
            "labelWidth": 46,
            "labelMargin": 3,
            "calculateValue": ""
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": "Email Config",
            "key": "emailConfigType",
            "placeholder": "",
            "data": {
              "values": [
                {
                  "value": "",
                  "label": ""
                }
              ],
              "json": "",
              "url": "http:\/\/breeze.accion.rocks\/notification-admin\/admin\/api\/getConfig",
              "resource": "",
              "custom": "",
              "headers": [
                {
                  "value": "",
                  "key": ""
                }
              ]
            },
            "dataSrc": "url",
            "valueProperty": "confString",
            "defaultValue": "",
            "refreshOn": "",
            "filter": "",
            "authenticate": false,
            "template": "<span>{{ item.name }}<\/span>",
            "multiple": false,
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
            "labelMargin": 3,
            "selectValues": "email_gateway_configuration",
            "lockKey": true
          },
          {
            "input": true,
            "tableView": true,
            "key": "emailConfig",
            "label": "EmailConfig",
            "protected": false,
            "unique": false,
            "persistent": true,
            "type": "hidden",
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
            "calculateValue": "value=data['emailConfigType'];"
          }
        ],
        "type": "panel",
        "breadcrumb": "default",
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
        "label": "panel",
        "customClass": "newpanel"
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
        "type": "button",
        "tags": [
          
        ],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        },
        "headers": [
          
        ],
        "url": "http:\/\/breeze.accion.rocks\/notification-admin\/admin\/api\/saveAgent"
      }
    ],
    "display": "form",
    "submissionAccess": [
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
    "title": "Agents Select",
    "name": "agentsSelect",
    "path": "agent",
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
    "created": "2019-01-14T11:46:04.621Z",
    "modified": "2019-01-15T10:44:29.425Z",
    "machineName": "test"
  };

  lists: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(submission: any) {
    console.log("form data", submission);
    this.apiService.createAgent(submission).subscribe((response) => {
      console.log(response);
    });
  }

}
