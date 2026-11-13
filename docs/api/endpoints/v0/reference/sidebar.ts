import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/endpoints/v0/reference/concat-api-documentation",
    },
    {
      type: "category",
      label: "users",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/get-user",
          label: "Get a user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/create-user",
          label: "Create a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/search-users",
          label: "Search users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/list-role-users",
          label: "List users with a role",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "roles",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/list-roles",
          label: "List roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/list-user-roles",
          label: "List a user's roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/grant-user-role",
          label: "Grant a role to a user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/remove-user-role",
          label: "Remove a role from a user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/list-role-users",
          label: "List users with a role",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "registration",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/get-user-registration",
          label: "Get a user's registration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/search-registrations",
          label: "Search registrations",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "volunteers",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/list-volunteer-departments",
          label: "List volunteer departments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/get-user-volunteer",
          label: "Get a user's volunteer application",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/search-volunteers",
          label: "Search volunteers",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "dealers",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/search-dealers",
          label: "Search dealers",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "orders",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/search-orders",
          label: "Search orders",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/revoke-order-item",
          label: "Revoke an order item",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/v0/reference/remove-order-item",
          label: "Remove an order item",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "vouchers",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/search-vouchers",
          label: "Search vouchers",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "userNotes",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/search-user-notes",
          label: "Search user notes",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "signing",
      items: [
        {
          type: "doc",
          id: "api/endpoints/v0/reference/get-signing-keys",
          label: "Get signing keys",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
