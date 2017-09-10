// tools
import keycode from "keycode"

// return
export function ToggleFeature(options) {
  const { key } = options

  return {
    onKeyDown(event, data, state) {
      if (!event.metaKey || keycode(event.which) !== key) return
      if (state.focusBlock.type !== "image") return
      event.preventDefault()

      const previousDataImmutable = state.focusBlock.data
      const previousData = {
        feature: previousDataImmutable.get("feature"),
        file: previousDataImmutable.get("file"),
        src: previousDataImmutable.get("src"),
        key: previousDataImmutable.get("key")
      }
      let featureStatus = previousData.feature ? false : true
      return state
        .transform()
        .setBlock({
          type: "image",
          data: { ...previousData, feature: featureStatus }
        })
        .apply()
    }
  }
}
