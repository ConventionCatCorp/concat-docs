---
sidebar_position: 1
hide_table_of_contents: true
---

# Email Template Overrides

ConCat sends attendees emails for various actions taken in the application, for example when they successfully pay for an order, or when they change their email address. These templates can be overriden for a better level of customization, and some can be disabled outright.

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
      <strong>Default</strong> - The email template is not being overridden, and is using the default ConCat provided template.
    </span>
  </li>
  <li>
    <span>
      <strong>Overridden</strong> - The email template is being overridden by a custom template.
    </span>
  </li>
  <li>
    <span>
      <strong>Disabled</strong> - The email template is disabled and will not be sent.
    </span>
  </li>
</ul>

#### Regarding `register`

You may notice that `register` (sent out to confirm someones email address when they first sign up for an account) is unable to be modified by default. We consider this template critical and do not allow it to be overridden without contacting support first. Reach out to support if you would like to modify this template.

### Configuring overrides

Upon selecting "Modify" on the template you wish to inspect, you can view a rendered example email of the template, alongside a "Current" badge next to whichever configuration is active.

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

Existing overrides have two buttons: Edit and Delete.

### Creating and modifying overrides

Writing template overrides is done in a templating language called [Handlebars](https://handlebarsjs.com/). If you're familiar with it, editting templates will be a cinch.

If not, in short, Handlebars combines HTML with a bracket notation used to access certain variables, ``{{likeThis}}``.

<splitColumn>
  <div>
    <p>Let's take a look at an example. At my convention, I want volunteers to join a Telegram group. I created a redirect on my marketing domain for `/volunteertg` to the group, and now I want to make sure that everyone that applied to volunteer gets the link.</p>
    <p>When I navigate to my list of templates, I find the one I want to modify. <code>volunteerConfirm</code> seems good to me.</p>
  </div>
  <img src="/img/tutorial/emailTemplates/volunteerConfirmListEntry.png" />
</splitColumn>

<splitColumn>
  Selecting modify, I'm presented with an overview of current overrides for the template.
  <img src="/img/tutorial/emailTemplates/volunteerConfirmOverview.png" />
</splitColumn>

<splitColumn>
  <div>
    In the overview you're able to view the default template and any overrides. The green "Active" tag will be shown next to whichever will be sent out to users. Right now, that's the default template. I only want this template to apply for this convention, so I'm going to select "Create Override" next to Convention Level Override.
    I start with the default template and can modify it as I please. A preview is automatically generated below, and the variables available for you to use are provided on the right.
  </div>
  <img src="/img/tutorial/emailTemplates/volunteerConfirmEditor.png" />
</splitColumn>

### Disabling Templates

<splitColumn>
Some templates will show an option to be disabled. This will prevent an email from being sent at all when this template would normally be triggered. Templates will have a red "Disable Template", shown on the right.
<img src="/img/tutorial/emailTemplates/disableExampleEditor.png" />
</splitColumn>
Once disabled, you'll see this message in place of the rendered example.
<br />
<img src="/img/tutorial/emailTemplates/disableExampleOverview.png" />

### Variables

<div style={{display: 'grid', gridGap: '1rem', gridTemplateColumns: 'auto auto'}}>
  <div>
    The power of Handlebars comes from the variables. We provide a list of the available variables for that particular template and their type.
    You access these via bracket statements, with dots to access inner variables. For example, to access the convention's long name from above, I would write <code>&#123;&#123;convention.name.long&#125;&#125;</code>. Convention and User information is available for all templates, and additional variables are available as necessary.
  </div>
  <div>
    <img src="/img/tutorial/emailTemplates/volunteerConfirmVariables.png" style={{height: '100%', maxHeight:'600px'}} />
  </div>
</div>

### Errors

While editing, you may see errors come up. These are to ensure you're not including variables that don't exist, and that your template isn't broken. You cannot submit templates that contain errors.

#### Missing Variables
<splitColumn>
  This means you used a variable that does not exist within the context of the template. Check your spelling or remove it.
  <img src="/img/tutorial/emailTemplates/variableMissingEditor.png" />
</splitColumn>

#### Parse Error
<splitColumn>
  <div>
    Something went wrong when the server tried to parse your template. Please read the error message and check the offending element. It's likely you left an open bracket (<code>&#123;&#123;</code>) or something of the sort.
  </div>
  <img src="/img/tutorial/emailTemplates/parseErrorPreview.png" />
</splitColumn>

### Priority Order

Template overrides are respected in the following order:

**Convention > Organization > Default**

<splitColumn>
  <div>
    <p>Convention overrides always take priority, then any set at the organization level, and finally if there are none present the default is chosen.</p>
    <p>For clarity, the active configuration is always highlighted as "Current" in the template's overview screen.</p>
  </div>
  <img src="/img/tutorial/emailTemplates/waterfallExample.png" />
</splitColumn>