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
  display: ${props =>
    !props.preserve && (froth(props.frothId).ratio ? "block" : "none")};

  & > :first-child {
    width: 100%;
    height: ${props => (froth(props.frothId).ratio ? "100%" : "initial")};
    display: block;
    position: ${props => (froth(props.frothId).ratio ? "absolute" : "static")};
  }
`
