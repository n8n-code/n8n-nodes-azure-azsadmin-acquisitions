import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminAcquisitions implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Acquisitions',
                name: 'N8nDevAzureAzsadminAcquisitions',
                icon: { light: 'file:./azure-azsadmin-acquisitions.png', dark: 'file:./azure-azsadmin-acquisitions.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Admin Storage Management Client.',
                defaults: { name: 'Azure Azsadmin Acquisitions' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminAcquisitionsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
