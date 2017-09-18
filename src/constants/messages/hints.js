import done from "../../app/components/_icons/images/done.jpg"
import placeholder from "../../app/components/_icons/images/placeholder-profile.png"

export const MESSAGE_HINT_CHECK_EMAIL = email => {
  return {
    info: {
      title: "Email Sign In",
      text: `Please check your ${email} inbox and click the link we just sent you.`,
      image: "/images/banners/check-email.png"
    },
    id: "hints/check-email"
  }
}
export const MESSAGE_HINT_SUBMIT_CONSENT = {
  info: {
    image: "/images/banners/image-suggestions-action.jpg",
    title: "More Exposure?",
    text:
      "If you choose “Yes,” we may suggest other authors to feature your images (from this submission) within their articles. You will be credited every time.",
    buttons: [
      {
        to: "/submit/confirm-full-consent",
        text: "Yes",
        red: true
      },
      {
        to: "/submit/confirm-basic-consent",
        text: "No"
      }
    ]
  },
  id: "hints/submit-consent"
}
export const MESSAGE_HINT_IMAGE_SUGGESTIONS = {
  info: {
    image: "/images/banners/image-suggestions.jpg",
    title: "Image Suggestions",
    text:
      "You can freely use these hand-picked film photographs by the editor within your submission. A credit to the original photographer will be added automatically. Of course you can still upload your own images!"
  },
  id: "hints/image-suggestions"
}
export const MESSAGE_HINT_AUTO_SAVE = {
  info: {
    image: done,
    title: "Never Loose Your Work!",
    text:
      "Your draft is saved automatically every 3 seconds onto your device. Even when you aren’t connected to the internet."
  },
  id: "hints/auto-save"
}
export const MESSAGE_HINT_YOUR_PROFILE = {
  info: {
    image: placeholder,
    title: "Your Profile",
    text:
      "You can create, view or update your profile after you send your submission."
  },
  id: "hints/your-profile"
}
