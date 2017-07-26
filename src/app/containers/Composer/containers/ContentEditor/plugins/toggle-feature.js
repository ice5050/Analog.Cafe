// tools
import keycode from "keycode"
import { Data } from "slate"

// return
export function ToggleFeature(options) {
  const { node, key } = options

  return {
    onKeyDown(event, data, state) {
      if (!event.metaKey || keycode(event.which) !== key) return
      if (state.focusBlock.type !== "image") return
      event.preventDefault()

      const previousDataImmutable = state.focusBlock.data
      const previousData = {
        "feature": previousDataImmutable.get("feature"),
        "file": previousDataImmutable.get("file"),
        "src": previousDataImmutable.get("src"),
      }
      let featureStatus = previousData.feature ? false : true
      console.log(previousData)
      return state
        .transform()
        .setBlock({ type: "image", data: { ...previousData, feature: featureStatus } })
        .apply()
    }
  }
}
