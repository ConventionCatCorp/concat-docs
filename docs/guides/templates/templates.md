---
sidebar_position: 1
hide_table_of_contents: true
---

# Email Template Overrides

ConCat sends attendees emails for various actions taken in the application, for example when they successfully pay for an order, or when they change their email address. These templates can be overriden for a better level of customization, if you wish.

### List templates

These templates can be overridden at the organization or convention level, depending on how you want to customize these messages. First, view the templates you can modify:

<ol className="numbered-list">
  <li>
    <span>
      Navigate to your event website, then click "<strong>Housekeeping</strong>" from the left-hand sidebar.
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Settings</strong>" from the left-hand sidebar, then click the "<strong>Email Templates</strong>" tab.
    </span>
  </li>
</ol>

You can now view all available templates, a brief description of what they are used for, and some information about their states as badges:

<ul>
  <li>
    <span>
      <strong>Default</strong> - The template is not being overridden, and is using the default ConCat provided template.
    </span>
  </li>
    <li>
    <span>
      <strong>Has Override</strong> - The template contains an override.
    </span>
  </li>
    <li>
    <span>
      <strong>Active Override</strong> - The template actively being overriden.
    </span>
  </li>
</ul>

### Configuring overrides

Upon selecting "Modify" on the template you wish to inspect, you can view a rendered example email of the template, alongside an "Active" badge next to whichever template would be sent.

Templates can only have two potential overrides, this being an organization level or a convention level override. The default template cannot be deleted.

<ul>
  <li>
    <span>
      <strong>Convention</strong> overrides are applied solely to this current convention. This will not persist to the next year or any other conventions within your organization.
    </span>
  </li>
  <li>
    <span>
      <strong>Organization</strong> overrides are applied to the entire organization, and will persist throughout all conventions.
    </span>
  </li>
</ul>

Existing overrides have three buttons: Activate/Deactivate, Edit, and Delete respectively.

### Creating and modifying overrides

Writing template overrides is done in a templating language called [Handlebars](https://handlebarsjs.com/). If you're familiar with it, editting templates will be a cinch.

If not, in short, Handlebars combines HTML with a bracket notation used to access certain variables, ``{{likeThis}}``.

Let's take a look at an example. At my convention, I want volunteers to join a Telegram group. I created a redirect on my marketing domain for `/volunteertg` to the group, and now I want to make sure that everyone that applied to volunteer gets the link.

When I navigate to my list of templates, I find the one I want to modify. ``volunteerConfirm`` seems good to me.

<img className="bordered-img" src="/img/tutorial/emailTemplates/volunteerConfirmListEntry.png" />

Selecting modify, I'm presented with an overview of current overrides for the template.

<img className="bordered-img" src="/img/tutorial/emailTemplates/volunteerConfirmOverview.png" />

In the overview you're able to view the default template and any overrides. The green "Active" tag will be shown next to whichever will be sent out to users. Right now, that's the default template. I only want this template to apply for this convention, so I'm going to select "Create Override" next to Convention Level Override.

<img className="bordered-img" src="/img/tutorial/emailTemplates/volunteerConfirmCreateOverride.png" />

I start with the default template and can modify it as I please. A preview is automatically generated below, and the variables available for you to use are provided on the right.

### Variables

The power of Handlebars comes from the variables. We provide a list of the available variables for that particular template and their type.

<img className="bordered-img" src="/img/tutorial/emailTemplates/volunteerConfirmVariables.png" />

You access these via bracket statements, with dots to access inner variables. For example, to access the convention's long name from above, I would write `{{convention.name.long}}`. Convention and User information is available for all templates, and additional variables are available as necessary.

### Errors

While editing, you may see errors come up. These are to ensure you're not including variables that don't exist, and that your template isn't broken. You cannot submit templates that contain errors.

#### Missing Variables

This means you used a variable that does not exist within the context of the template. Check your spelling or remove it.
<img className="bordered-img" src="/img/tutorial/emailTemplates/variablesMissing.png" />

#### Parse Error
Something went wrong when the server tried to parse your template. Please read the error message and check the offending element. It's likely you left an open bracket (`{{`) or something of the sort.
<img className="bordered-img" src="/img/tutorial/emailTemplates/parseError.png" />