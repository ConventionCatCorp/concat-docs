---
sidebar_position: 4
---

# Raffles

For events with limited space, raffles allow to have a lottery for your attendee registration. All registrations will be given a virtual raffle ticket, in which the event organizer can choose when to run the raffle at a later date.

Each ticket has 5 different states:
* waiting - The user is waiting for the raffle to run
* winner - The raffle has run, and the user is allowed to purchase a registration
* redeemed - The user has won, and used their ticket to purchase a registration
* rescinded - The user has lost, and no longer allowed to re-enter the raffle
* deleted - The user has lost, and is allowed to re-enter the raffle for the next round

# Creating a raffle

<ol className="numbered-list">
  <li>
    <span>
      Navigate to your event website, then click "<strong>Housekeeping</strong>" from the left-hand sidebar.
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Raffles</strong>" from the left-hand sidebar, under the "<strong>Product Management</strong>" section.
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Create New Raffle</strong>".
    </span>
  </li>
  <li>
    <span>
      Enter a name for the raffle. You can also allow staff and volunteers to bypass the raffle by relevant checkbox.
    </span>
  </li>
  <li>
    <div>
      <div>Use the wizard to configure the weight configuration.</div>
      <div>To operate a raffle with equal chances, select "<strong>Add Static Weight</strong>" and enter a value of "<strong>1</strong>".</div>
    </div>
  </li>
  <li>
    <span>
      Under "<strong>Associated Products</strong>", search for and select the products that will be included in the raffle.
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Create Raffle</strong>".
    </span>
  </li>
</ol>

# Running the raffle

<ol className="numbered-list">
  <li>
    <span>
      Navigate to the raffle you want to draw.
    </span>
  </li>
  <li>
    <span>
      Click the "<strong>Entrants</strong>" tab, then "<strong>Run Raffle</strong>".
    </span>
  </li>
  <li>
    <div>
      <div>
        Enter the number of winners to draw, what should happen to existing winners (if any), and what should happen to any entrants who do not win in this draw.
      </div>
      <Admonition type="tip">
        If you plan to run multiple draws, leave the "<strong>non-winners</strong>" option as "<strong>Do Nothing</strong>".
      </Admonition>
    </div>
  </li>
  <li>
    <span>
      <i>(Optional)</i> If you plan to run multiple draws and want to accept new entries in between draws, uncheck "<strong>Close the raffle to new entries</strong>".
    </span>
  </li>
  <li>
    <span>
      <i>(Optional)</i> You can perform a test run of the raffle to verify the raffle logic by checking "<strong>Perform a test run</strong>".
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Run Raffle Draw</strong>". This could take a few minutes depending how many entries there are.
    </span>
  </li>
</ol>

# Ticket points

Ticket points are a way to increase the odds for entrants who don't win a previous draw for the same raffle.

To run a raffle that supports ticket points, you will need to add a "**Ticket Points**" node to the weight configuration. When you perform a draw, check the "**Give non-winners a ticket point**" checkbox to give any entrants who do not win a ticket point.