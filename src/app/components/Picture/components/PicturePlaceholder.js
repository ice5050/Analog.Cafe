// tools
import styled from "styled-components"
import { froth } from "../../../../utils/image-froth"

export const PicturePlaceholder = styled.div`
  padding-bottom: ${props =>
    froth(props.frothId).ratio
      ? Math.round(100 / froth(props.frothId).ratio, 3)
      : 0}%;
  background: #eee;
  height: ${props => (froth(props.frothId).ratio ? "0 !important" : "initial")};
  position: relative !important;
  ${props =>
    !props.preserve &&
    `display: ${props =>
      !froth(props.frothId).ratio ? "none" : "block"};`} & > :first-child {
    width: 100%;
    height: ${props => (froth(props.frothId).ratio ? "100%" : "initial")};
    display: block;
    position: ${props => (froth(props.frothId).ratio ? "absolute" : "static")};
  }
`
