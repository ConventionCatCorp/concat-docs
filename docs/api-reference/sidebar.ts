import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-reference/concat-api-documentation",
    },
    {
      type: "category",
      label: "roles",
      items: [
        {
          type: "doc",
          id: "api-reference/get-api-v-0-roles",
          label: "getApiV0Roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-api-v-0-users-userid-roles",
          label: "getApiV0UsersUseridRoles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/put-api-v-0-users-userid-roles-roleid",
          label: "putApiV0UsersUseridRolesRoleid",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-api-v-0-users-userid-roles-roleid",
          label: "deleteApiV0UsersUseridRolesRoleid",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/post-api-v-0-roles-roleid-users",
          label: "postApiV0RolesRoleidUsers",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "users",
      items: [
        {
          type: "doc",
          id: "api-reference/get-api-v-0-users-id",
          label: "getApiV0UsersId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/post-api-v-0-users",
          label: "postApiV0Users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/post-api-v-0-users-search",
          label: "postApiV0UsersSearch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/post-api-v-0-roles-roleid-users",
          label: "postApiV0RolesRoleidUsers",
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
          id: "api-reference/get-api-v-0-volunteers-departments",
          label: "getApiV0VolunteersDepartments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-api-v-0-users-id-volunteer",
          label: "getApiV0UsersIdVolunteer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/post-api-v-0-volunteers-search",
          label: "postApiV0VolunteersSearch",
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
          id: "api-reference/get-api-v-0-users-id-registration",
          label: "getApiV0UsersIdRegistration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/post-api-v-0-registration-search",
          label: "postApiV0RegistrationSearch",
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
          id: "api-reference/post-api-v-0-dealers-search",
          label: "postApiV0DealersSearch",
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
          id: "api-reference/post-api-v-0-orders-search",
          label: "postApiV0OrdersSearch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/post-api-v-0-orders-items-orderitemid-revoke",
          label: "postApiV0OrdersItemsOrderitemidRevoke",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/delete-api-v-0-orders-items-orderitemid",
          label: "deleteApiV0OrdersItemsOrderitemid",
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
          id: "api-reference/post-api-v-0-vouchers-search",
          label: "postApiV0VouchersSearch",
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
          id: "api-reference/post-api-v-0-users-notes-search",
          label: "postApiV0UsersNotesSearch",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api-reference/get-wellknown-jwksjson",
          label: "Get public keys for JWT verification in JWK set format",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
