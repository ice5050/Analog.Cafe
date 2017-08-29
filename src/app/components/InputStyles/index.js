// styles
import React from "react"
import styled from "styled-components"
import { title, subtitle, reset } from "./styles"

// tools
import Textarea from "react-textarea-autosize"

// return
// remove `warning` props from style HOCs
export const PlainTextarea = styled(({ warning, ...props }) =>
  <Textarea {...props} />
)`${reset}`
export const TitleTextarea = styled(({ warning, ...props }) =>
  <Textarea {...props} />
)`${title}`
export const SubtitleTextarea = styled(({ warning, ...props }) =>
  <Textarea {...props} />
)`${subtitle}`
export const TitleInput = styled(({ warning, ...props }) =>
  <input {...props} />
)`${title}`
export const SubtitleInput = styled(({ warning, ...props }) =>
  <input {...props} />
)`${subtitle}`
