// tools
import React from "react"
import localForage from "localforage"
import uuidv1 from "uuid/v1"
import { froth } from "../../../utils/image-froth"

// components
import PictureDocket from "../../components/PictureDocket"
import { CardHeader } from "../../components/Card/styles"
import {
  GridContainer,
  GridRow,
  GridButton,
  GridCaption,
  AspectRatio
} from "../../components/GridStyles"
import { ModalDispatch } from "../Modal"

// styles
import { dot } from "../../components/_icons/components/BlankDot"

import { MESSAGE_HINT_IMAGE_SUGGESTIONS } from "../../../constants/messages/hints"

// return
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.uploadRequest = this.uploadRequest.bind(this)
    this.initFileUpload = this.initFileUpload.bind(this)
  }

  handleClose = event => {
    const { node, editor } = this.props
    let resolvedState
    if (event) {
      event.preventDefault()
      event.stopPropagation()
      resolvedState = editor
        .getState()
        .transform()
        .insertBlock({ type: "paragraph" })
        .removeNodeByKey(node.key)
        .apply()
    } else {
      // handleClose without event means auto close on image insert:
      resolvedState = editor
        .getState()
        .transform()
        .removeNodeByKey(node.key)
        .apply()
    }
    editor.onChange(resolvedState)
  }

  // image upload handlers
  initFileUpload = event => {
    this.fileInput.click()
  }
  handleFileUpload = event => {
    const file = event.target.files[0]
    this.uploadRequest(file)
  } // ⤵
  uploadRequest = file => {
    const key = uuidv1()
    localForage.setItem(key, file)
    const { editor } = this.props
    const resolvedState = editor
      .getState()
      .transform()
      .insertBlock({
        type: "image",
        isVoid: true,
        data: { file, key: key, src: dot }
      })
      .apply()
    editor.onChange(resolvedState)
    setTimeout(() => {
      this.handleClose()
    }, 10)
  }

  render = () => {
    return (
      <PictureDocket>
        <CardHeader>
          <h3 style={{ paddingTop: ".25em" }}>Add an image:</h3>
          <a href="#close" onClick={this.handleClose.bind(this)}>
            ✕
          </a>
        </CardHeader>
        <GridContainer>
          <GridRow>
            <GridButton>
              <AspectRatio>
                <img
                  src={
                    froth({
                      src:
                        "image-froth_615281_5882b729360a465491c07860f6ec32e5",
                      size: "t",
                      crop: "square"
                    }).src
                  }
                  alt=""
                />
              </AspectRatio>
            </GridButton>
            <GridButton>
              <img src="/images/thumbnails/square.jpg" alt="" />
            </GridButton>
            <GridButton onClick={this.initFileUpload} red>
              <div style={{ margin: "0 auto" }}>
                ＋
                <br />
                Upload<span> New</span>
              </div>
            </GridButton>
          </GridRow>
          <GridRow>
            <GridButton>
              <AspectRatio>
                <img src="/images/thumbnails/square.jpg" alt="" />
              </AspectRatio>
            </GridButton>
            <GridButton>
              <img src="/images/thumbnails/square.jpg" alt="" />
            </GridButton>
            <GridButton>
              <img src="/images/thumbnails/square.jpg" alt="" />
            </GridButton>
          </GridRow>
          <GridRow>
            <GridButton>
              <AspectRatio>
                <img src="/images/thumbnails/square.jpg" alt="" />
              </AspectRatio>
            </GridButton>
            <GridButton>
              <img src="/images/thumbnails/square.jpg" alt="" />
            </GridButton>
            <GridButton>
              <img src="/images/thumbnails/square.jpg" alt="" />
            </GridButton>
          </GridRow>
        </GridContainer>
        <GridCaption>
          <ModalDispatch with={MESSAGE_HINT_IMAGE_SUGGESTIONS}>
            Image suggestions
          </ModalDispatch>{" "}
          curated by Analog.Cafe editors.
        </GridCaption>
        <input
          type="file"
          accept="image/x-png,image/jpeg"
          style={{ display: "none" }}
          ref={input => {
            this.fileInput = input
          }}
          onChange={this.handleFileUpload}
        />
      </PictureDocket>
    )
  }
}
