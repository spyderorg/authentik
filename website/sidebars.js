module.exports = {
    docs: [
        {
            type: "doc",
            id: "index",
        },
        {
            type: "category",
            label: "Installation",
            items: [
                "installation/index",
                "installation/docker-compose",
                "installation/kubernetes",
                "installation/beta",
                "installation/configuration",
                "installation/reverse-proxy",
                "installation/automated-install",
                "installation/air-gapped",
            ],
        },
        {
            type: "category",
            label: "Core Concepts",
            collapsed: false,
            items: [
                "core/terminology",
                "core/applications",
                "core/tenants",
                "core/certificates",
            ],
        },
        {
            type: "category",
            label: "Providers",
            items: [
                "providers/oauth2",
                "providers/saml",
                {
                    type: "category",
                    label: "Proxy Provider",
                    items: [
                        "providers/proxy/proxy",
                        "providers/proxy/custom_headers",
                        "providers/proxy/forward_auth",
                    ],
                },
                "providers/ldap",
            ],
        },
        {
            type: "category",
            label: "Outposts",
            items: [
                "outposts/index",
                "outposts/embedded/embedded",
                {
                    type: "category",
                    label: "Integrations",
                    items: [
                        "outposts/integrations/docker",
                        "outposts/integrations/kubernetes",
                    ],
                },
                {
                    type: "category",
                    label: "Running and upgrading",
                    items: [
                        "outposts/manual-deploy-docker-compose",
                        "outposts/manual-deploy-kubernetes",
                        "outposts/upgrading",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Flows",
            items: ["flow/index", "flow/inspector", "flow/examples"],
        },
        {
            type: "category",
            label: "Stages",
            items: [
                "flow/stages/authenticator_duo/index",
                "flow/stages/authenticator_sms/index",
                "flow/stages/authenticator_static/index",
                "flow/stages/authenticator_totp/index",
                "flow/stages/authenticator_validate/index",
                "flow/stages/authenticator_webauthn/index",
                "flow/stages/captcha/index",
                "flow/stages/deny",
                "flow/stages/email/index",
                "flow/stages/identification/index",
                "flow/stages/invitation/index",
                "flow/stages/password/index",
                "flow/stages/prompt/index",
                "flow/stages/user_delete",
                "flow/stages/user_login",
                "flow/stages/user_logout",
                "flow/stages/user_write",
            ],
        },
        {
            type: "category",
            label: "Policies",
            items: ["policies/index", "policies/expression"],
        },
        {
            type: "category",
            label: "Property Mappings",
            items: ["property-mappings/index", "property-mappings/expression"],
        },
        {
            type: "category",
            label: "Events",
            items: [
                "events/index",
                "events/notifications",
                "events/transports",
            ],
        },
        {
            type: "category",
            label: "Users & Groups",
            items: ["user-group/user", "user-group/group"],
        },
        {
            type: "category",
            label: "Maintenance",
            items: ["maintenance/backups/index"],
        },
        {
            type: "category",
            label: "Release Notes",
            items: [
                "releases/v2022.1",
                "releases/v2021.12",
                "releases/v2021.10",
                "releases/v2021.9",
                {
                    type: "category",
                    label: "Previous versions",
                    items: [
                        "releases/v2021.8",
                        "releases/v2021.7",
                        "releases/v2021.6",
                        "releases/v2021.5",
                        "releases/v2021.4",
                        "releases/v2021.3",
                        "releases/v2021.2",
                        "releases/v2021.1",
                        "releases/v0.14",
                        "releases/v0.13",
                        "releases/v0.12",
                        "releases/v0.11",
                        "releases/v0.10",
                        "releases/v0.9",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Troubleshooting",
            items: [
                "troubleshooting/access",
                "troubleshooting/emails",
                "troubleshooting/login",
                "troubleshooting/image_upload_backup",
                "troubleshooting/missing_permission",
                "troubleshooting/missing_admin_group",
            ],
        },
    ],
};
