// tools
import React from "react"
import errorMessage from "../../../constants/error-messages"

import { ROUTE_AUTHOR_API } from "../../../constants/author"

// components
import { ModalDispatch } from "../../containers/Modal"

// styles
import { Image, Figure, Caption } from "./styles"
import placeholder from "../_icons/images/placeholder-profile.png"

// return
export default props => {
  return (
    <Figure {...props}>
      <Image
        {...props}
        protected={
          props.readOnly !== false && process.env.NODE_ENV === "production"
        }
      />
      <figcaption
        style={
          props.nocaption && {
            borderBottom: "8px solid #2c2c2c",
            height: 0,
            overflow: "hidden"
          }
        }
      >
        {props.author
          ? <Caption {...props}>
              {props.children}
              {props.readOnly
                ? <span style={{ color: "#2c2c2c" }}>
                    {" "}Image by{" "}
                    <span
                      style={
                        props.author.name === "" ? { display: "none" } : null
                      }
                    >
                      <ModalDispatch
                        with={
                          props.author.id !== "unknown"
                            ? {
                                request: {
                                  url: ROUTE_AUTHOR_API + "/" + props.author.id
                                }
                              }
                            : {
                                info: {
                                  image: placeholder,
                                  title: "Error: " + props.author.errorCode,
                                  text: errorMessage.NO_AUTHOR
                                },
                                id: "errors/author"
                              }
                        }
                      >
                        {props.author.name}
                      </ModalDispatch>.
                    </span>
                  </span>
                : null}
            </Caption>
          : <Caption {...props}>
              {props.children}
              {!props.noAuthor &&
                <span style={{ color: "#2c2c2c" }}>
                  {" "}Finding image author…
                </span>}
            </Caption>}
      </figcaption>
    </Figure>
  )
}
