import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminAcquisitionsApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminAcquisitionsApi';

        displayName = 'Azure Azsadmin Acquisitions API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminAcquisitions/azure-azsadmin-acquisitions.png', dark: 'file:../nodes/AzureAzsadminAcquisitions/azure-azsadmin-acquisitions.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Acquisitions API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
