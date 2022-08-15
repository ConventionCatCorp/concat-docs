---
sidebar_position: 3
---

# Badge designer

<splitColumn>
  <div>
    <p>
      The badge designer allows you to customize the badge layout and styling, using a layer style positioning of elements, to enable compatibility with a wide array of printing hardware and design needs.
    </p>
    <p>
      You can select from a variety of user-generated content, such as real name, badge ID, badge name, and attendance tier.
    </p>
  </div>
  <div>
    <img className="bordered-img" src="/img/tutorial/badgeDesigner.png" />
  </div>
</splitColumn>

:::info
Using the badge designer currently requires the `system:settings:update` and `system:badgedesign:read` permission. Creating / updating badge designs additionally requires the `system:badgedesign:update` permission.
:::

### Creating a new design

To facilitate designing and testing new layouts, you can create an unlimited number of badge designs, using the following steps:

<ol className="numbered-list">
  <li>
    <span>
      Navigate to your event website, then click "<strong>Housekeeping</strong>" from the left-hand sidebar.
    </span>
  </li>
  <li>
    <span>
      Click "<strong>Settings</strong>" from the left-hand sidebar, then "<strong>Badge Designer</strong>" from the top menu.
    </span>
  </li>
  <li>
    <span>
      Click the green plus (<i className="material-symbols-outlined medium">add</i>) button.
    </span>
  </li>
  <li>
    <span>
      Enter a name for the design in the "<strong>Display Name</strong>" field.
    </span>
  </li>
  <li>
    <div>
      Under "<strong>Details</strong>" choose the artboard size for your design, in inches:
      <ul>
        <li>
          <strong>X</strong> and <strong>Y</strong>: The margin of the artboard from the left and top (respectively).
        </li>
        <li>
          <strong>Width</strong> and <strong>Height</strong>: The maximum width and height of the customizable artboard.
        </li>
      </ul>
    </div>
  </li>
  <li>
    <span>Customize the design by adding additional nodes (layer groups) and text.</span>
  </li>
  <li>
    <span>Once you've finished your design, click "<strong>Save</strong>".</span>
  </li>
</ol>

### Exporting / importing designs

You can easily export or import a design by opening an existing design or following the instructions above to create a new design, and selecting "**Export**" or "**Import**" from the top menu bar.

Badge design files are stored in JSON format and can be freely shared.

### Pre-printed canvas

<splitColumn>
  <div>
    <p>
      If you have your badges pre-printed with background art through a third-party service, you can enable this option add an additional artboard behind the design.
    </p>
    <p>
      This is useful for checking the positioning of your design elements to avoid overprinting, and quickly previewing the design across different background art.
    </p>
    <p>
      Use of this feature requires uploading at least one Badge Art image to the system.
    </p>
  </div>
  <div>
    <img className="bordered-img" src="/img/tutorial/badgeDesigner-prePrintedCanvas.png" />
  </div>
</splitColumn>

### Limitations

* Static content (such as fixed text and background images), rear-side / double-sided printing, and use of Product Options is not yet supported.
* Currently only printer hardware connected through the operating system print dialog is supported. Direct print support for Zebra printers will be supported in the future.
* Due to browser limitations, you may need to pre-configure the print dialog to use the correct Paper Size, Scaling, and to disable Headers and Footers.