# User Notes

User Notes allows you to add additional informaton to user profiles in order to assist operations.

User notes are organized by categories, which can be created by you as you see fit. We start you out with 8 default categories: **Commendation**, **Reprimand**, **Request**, **Restriction**, **Ban**, **Cashier**, **Feedback**, and **Misc**.

The **Cashier**, **Ban**, and **Restriction** categories are special and cannot be deleted.

## Cashier

Cashier notes are notes that will specifically be shown when an attendee is checking in at registration. This is most useful for any special handling that may be required for specific attendees.

## Bans

Bans prevent users from performing specific actions, and will display a generic error message.

Bans can be issued with or without an account. With an account, the associated account receives the ban and will be restricted from the respective actions. Without an account, a full legal name (first and last) must be provided.

If a user banned from registration attempts to register, a review will be requested. These reviews will appear in the dashboard to be approved or denied.
:::info Note
A user triggers a review when the first letter of their first name and last name match.
:::

## Restriction

Restriction notes will show a notice that the user has a restriction on their account on internal lists like the user search and volunteer list. These are effectively "shadow bans" as the user is never aware of or shown any information about it.

## Other Categories and Custom Categories

These notes hold no special properties and simply show up when viewing a user's notes tab. Utilize the defaults we provide, or create your own categories as you see fit.

Categories can be marked restricted or not: this determines which permission is required to view them. Restricted notes may contain PII or otherwise be considered sensitive, and therefore are restricted to the `user:note:read:hr` permission.
Non-restricted notes merely require the `user:note:read` permission.

Creating, editing, and deleting categories require the `user:note:categories:manage` permission.
