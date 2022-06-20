// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Attribute from '@site/src/components/Attribute';
import MaterialIcon from '@site/src/components/MaterialIcon';
import RESTElement from '@site/src/components/RESTElement';
import RESTList from '@site/src/components/RESTList';
import EndpointRequest from '@site/src/components/EndpointRequest';
import Link from '@docusaurus/Link';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  highlight: Highlight,
  attribute: Attribute,
  materialIcon: MaterialIcon,
  link: Link,
  restElement: RESTElement,
  restList: RESTList,
  endpointRequest: EndpointRequest,
};
