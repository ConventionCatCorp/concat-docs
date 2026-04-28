// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import { Attribute, ParentAttribute } from '@site/src/components/Attribute';
import MaterialIcon from '@site/src/components/MaterialIcon';
import RESTElement from '@site/src/components/RESTElement';
import RESTList from '@site/src/components/RESTList';
import EndpointRequest from '@site/src/components/EndpointRequest';
import EndpointResponse from '@site/src/components/EndpointResponse';
import ExampleBox from '@site/src/components/ExampleBox';
import SplitColumn from '@site/src/components/SplitColumn';
import BigButton from '@site/src/components/BigButton';
import Card from '@site/src/components/Card';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Admonition: Admonition,
  Highlight: Highlight,
  Attribute: Attribute,
  ParentAttribute: ParentAttribute,
  MaterialIcon: MaterialIcon,
  Link: Link,
  RestElement: RESTElement,
  RestList: RESTList,
  EndpointRequest: EndpointRequest,
  EndpointResponse: EndpointResponse,
  ExampleBox: ExampleBox,
  SplitColumn: SplitColumn,
  Card: Card,
  BigButton: BigButton,
};
