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
import Figure from '@site/src/components/Figure';
import TableFigure from '@site/src/components/TableFigure';
import Sidenote from '@site/src/components/Sidenote';
import Result from '@site/src/components/Result';
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
  // Textbook elements (see docs-style/TEXTBOOK-STYLE.md)
  Figure: Figure,
  TableFigure: TableFigure,
  Sidenote: Sidenote,
  Result: Result,
};
